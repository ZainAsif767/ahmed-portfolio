import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs text-muted-2">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line-2" aria-hidden />
        <span className="uppercase tracking-[0.18em]">{eyebrow}</span>
      </div>
      <h2 className="font-display max-w-2xl text-3xl font-semibold leading-[1.12] sm:text-[2.6rem]">
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-xl text-[17px] text-muted">{lead}</p>}
    </Reveal>
  );
}
