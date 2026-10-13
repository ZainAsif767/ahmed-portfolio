import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { principles, services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="03"
          eyebrow="how i help"
          title={
            <>
              Three ways to <span className="accent-serif">put me to work</span>.
            </>
          }
          lead="Whether you need a new product built or an existing one made faster and more reliable — I cover the full lifecycle."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="h-full">
              <div className="group h-full bg-surface p-8 transition-colors duration-200 hover:bg-surface-2">
                <div className="font-mono text-xs text-accent">0{i + 1}</div>
                <h3 className="font-display mt-5 text-xl font-semibold transition-colors group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs text-muted-2">
            <span className="text-accent">+</span>
            <span className="uppercase tracking-[0.18em]">how i work</span>
            <span className="h-px flex-1 bg-line" aria-hidden />
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title}>
                <h4 className="font-display text-[16px] font-semibold">{p.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
