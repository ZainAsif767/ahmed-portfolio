"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-2xl border border-line bg-bg-2/75 py-3 pl-5 pr-3.5 backdrop-blur-xl transition-shadow duration-300 ${
            scrolled
              ? "shadow-[0_10px_36px_rgba(0,0,0,0.5)]"
              : "shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 font-mono text-sm font-medium">
            <span
              className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]"
              aria-hidden
            />
            ahmed.ismail
          </a>
          <div className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 font-mono text-[13px] lowercase text-muted transition-colors duration-200 hover:bg-fg/5 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2 font-mono text-[13px] font-semibold text-accent-ink transition-all duration-200 hover:shadow-[0_8px_24px_rgba(74,222,128,0.35)] md:inline-flex"
            >
              get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex cursor-pointer p-2 text-fg md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-2 bg-bg/95 backdrop-blur-md md:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-7 top-7 cursor-pointer p-2 text-fg"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
          <span className="mb-4 font-mono text-xs text-muted-2">
            {site.name} · {site.tagline}
          </span>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 p-2.5 font-display text-2xl font-medium text-fg transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs text-muted-2">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
