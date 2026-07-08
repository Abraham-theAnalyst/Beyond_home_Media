"use client";

import { useState } from "react";
import { services } from "@/lib/services";

type QuoteFormProps = {
  /** Slug of the service to pre-select (e.g. the current service page) */
  defaultService?: string;
  /** Show the budget range dropdown (used on the contact page) */
  showBudget?: boolean;
};

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  /** Honeypot: humans never see or fill this */
  website: string;
};

export const budgetRanges = [
  "Under ₦500,000",
  "₦500,000 to ₦2 million",
  "₦2 million to ₦10 million",
  "Above ₦10 million",
  "Not sure yet",
];

const initialFields = (defaultService: string): Fields => ({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: defaultService,
  budget: "",
  message: "",
  website: "",
});

const inputCls =
  "w-full border-2 border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

const labelCls = "block text-xs font-bold uppercase tracking-wide text-ink/70";

export default function QuoteForm({
  defaultService = "",
  showBudget = false,
}: QuoteFormProps) {
  const [fields, setFields] = useState<Fields>(initialFields(defaultService));
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle"
  );

  const set = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(fields.email.trim()))
      next.email = "That email address does not look right.";
    if (fields.phone.trim().replace(/[^\d+]/g, "").length < 7)
      next.phone = "Please enter a phone number we can reach you on.";
    if (!fields.service) next.service = "Please pick a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          // Lets the team see which page the lead came from
          page: window.location.pathname,
        }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-l-4 border-gold bg-white p-8">
        <h3 className="display-heading text-2xl text-ink">
          Thanks, {fields.name.split(" ")[0] || "we have it"}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          Your request is in. We will call or write back on the next business
          day. If it is urgent, WhatsApp us on 0806 010 7065.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="quote-name" className={labelCls}>
          Name
        </label>
        <input
          id="quote-name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          className={`mt-1.5 ${inputCls}`}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="quote-company" className={labelCls}>
          Company <span className="font-normal normal-case">(optional)</span>
        </label>
        <input
          id="quote-company"
          type="text"
          autoComplete="organization"
          value={fields.company}
          onChange={(e) => set("company", e.target.value)}
          className={`mt-1.5 ${inputCls}`}
        />
      </div>
      <div>
        <label htmlFor="quote-email" className={labelCls}>
          Email
        </label>
        <input
          id="quote-email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          className={`mt-1.5 ${inputCls}`}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="quote-phone" className={labelCls}>
          Phone
        </label>
        <input
          id="quote-phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={`mt-1.5 ${inputCls}`}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="quote-service" className={labelCls}>
          Service
        </label>
        <select
          id="quote-service"
          value={fields.service}
          onChange={(e) => set("service", e.target.value)}
          className={`mt-1.5 ${inputCls}`}
          aria-invalid={!!errors.service}
        >
          <option value="">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-600">{errors.service}</p>
        )}
      </div>
      {showBudget && (
        <div className="sm:col-span-2">
          <label htmlFor="quote-budget" className={labelCls}>
            Budget range{" "}
            <span className="font-normal normal-case">(optional)</span>
          </label>
          <select
            id="quote-budget"
            value={fields.budget}
            onChange={(e) => set("budget", e.target.value)}
            className={`mt-1.5 ${inputCls}`}
          >
            <option value="">Choose a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="sm:col-span-2">
        <label htmlFor="quote-message" className={labelCls}>
          Message <span className="font-normal normal-case">(optional)</span>
        </label>
        <textarea
          id="quote-message"
          rows={4}
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="What do you want made, and where will it go?"
          className={`mt-1.5 ${inputCls}`}
        />
      </div>

      {/* Honeypot: hidden from people, bots fill it and get silently dropped */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="quote-website">Website</label>
        <input
          id="quote-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Request a quote"}
        </button>
        {status === "failed" && (
          <p className="mt-3 text-sm text-red-600">
            We could not send your request just now. Please reach us on
            WhatsApp at 0806 010 7065 instead, and we will pick it up from
            there.
          </p>
        )}
      </div>
    </form>
  );
}
