import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6">
        <a href="#home" className="flex items-center gap-2.5 font-mono text-[13px]">
          <span
            className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]"
            aria-hidden
          />
          ahmed.ismail
        </a>
        <p className="font-mono text-xs text-muted-2">
          © {new Date().getFullYear()} {site.name} · supervised since 2020 ·{" "}
          <span className="text-accent">0 downtime</span>
        </p>
      </div>
    </footer>
  );
}
