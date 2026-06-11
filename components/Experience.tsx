import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="02"
          eyebrow="experience"
          title={
            <>
              Five years <span className="accent-serif">in production</span>.
            </>
          }
          lead="From associate to senior — leading architecture, mentoring engineers and keeping mission-critical systems alive."
        />
        <div>
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`}>
              <article className="group grid gap-3 border-t border-line py-9 transition-colors last:border-b sm:grid-cols-[200px_1fr] sm:gap-8">
                <div>
                  <div className="font-mono text-[13px] text-accent">{job.period}</div>
                  <div className="mt-1.5 font-mono text-[11.5px] text-muted-2">
                    {job.type}
                  </div>
                  {i === 0 && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10.5px] text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
                      running
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent">
                    {job.role}
                    <span className="text-muted"> — {job.company}</span>
                  </h3>
                  <ul className="mt-3.5 space-y-2 text-[15px] leading-relaxed text-muted">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[11px] h-px w-3.5 flex-shrink-0 bg-line-2" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 font-mono text-xs text-muted-2">
                    {job.stack.join(" · ")}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
