import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/* Adapted from the company workflow in the profile document. */
const steps = [
  {
    title: "Examine",
    body: "We look at the space your brand occupies now: the market, the audience and who else is talking to them.",
  },
  {
    title: "Analyse",
    body: "We set objectives with you and agree what success will look like before any money is spent.",
  },
  {
    title: "Create & execute",
    body: "We design, produce and install the work, and keep you informed at each stage.",
  },
  {
    title: "Evaluate & iterate",
    body: "We measure results against the objectives and refine whatever runs next.",
  },
];

export default function ProcessSteps() {
  return (
    <>
      <Reveal>
        <SectionHeading dark="How we" gold="work" />
      </Reveal>
      {/* li must be the direct child of ol for valid list semantics;
          the Reveal wrapper animates inside it */}
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="h-full">
            <Reveal delay={i * 0.07} className="h-full">
              <div className="h-full bg-white p-7">
                <span className="display-heading text-4xl text-gold-heading">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-heading mt-4 text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </>
  );
}
