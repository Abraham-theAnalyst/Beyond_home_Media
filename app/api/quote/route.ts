import { NextResponse } from "next/server";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/seo";

const validServices = new Set([...services.map((s) => s.slug), "other"]);

const serviceName = (slug: string) =>
  slug === "other"
    ? "Something else"
    : services.find((s) => s.slug === slug)?.name ?? slug;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const field = (key: string) =>
    typeof data[key] === "string" ? (data[key] as string).trim() : "";

  // Honeypot filled means a bot. Pretend it worked and drop it.
  if (field("website")) {
    return NextResponse.json({ ok: true });
  }

  const name = field("name");
  const email = field("email");
  const phone = field("phone");
  const service = field("service");

  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Name and a valid email are required." },
      { status: 400 }
    );
  }
  if (phone.replace(/[^\d+]/g, "").length < 7) {
    return NextResponse.json(
      { ok: false, error: "A reachable phone number is required." },
      { status: 400 }
    );
  }
  if (!validServices.has(service)) {
    return NextResponse.json(
      { ok: false, error: "Unknown service." },
      { status: 400 }
    );
  }

  /* Forward the lead to FormSubmit server-side, so the destination address
     never appears in client code and validation + honeypot run first.
     FORMSUBMIT_TARGET is either the raw inbox address or (better, after
     activation) the random alias FormSubmit assigns — see .env.example. */
  const submission = {
    Name: name,
    Company: field("company") || "(not given)",
    Email: email,
    Phone: phone,
    Service: serviceName(service),
    ...(field("budget") ? { Budget: field("budget") } : {}),
    Message: field("message") || "(no message)",
    "Submitted from": field("page") || "(unknown page)",
  };

  const target = process.env.FORMSUBMIT_TARGET;
  if (!target) {
    // Never lose a lead: log it where the host's log drain can see it.
    console.error(
      "[quote] FORMSUBMIT_TARGET is not set. Undelivered lead:",
      JSON.stringify(submission)
    );
    return NextResponse.json(
      { ok: false, error: "delivery_unavailable" },
      { status: 502 }
    );
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(target)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          /* FormSubmit rejects requests without a web origin; identify
             ourselves as the production site */
          Origin: SITE_URL,
          Referer: `${SITE_URL}/contact`,
        },
        body: JSON.stringify({
          ...submission,
          _subject: `New Quote Request — ${serviceName(service)} — ${name}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
        signal: controller.signal,
      }
    );
    clearTimeout(timer);

    const body = await res.json().catch(() => ({}));
    const delivered =
      res.ok && String(body.success ?? "").toLowerCase() === "true";

    if (!delivered) {
      console.error(
        "[quote] FormSubmit did not accept the lead:",
        res.status,
        JSON.stringify(body),
        "Undelivered lead:",
        JSON.stringify(submission)
      );
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(
      "[quote] FormSubmit request failed:",
      err,
      "Undelivered lead:",
      JSON.stringify(submission)
    );
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 }
    );
  }
}
