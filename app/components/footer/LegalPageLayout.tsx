import type { ReactNode } from "react";
import Link from "next/link";
import { legalLinks } from "./legalLinks";

type LegalPageLayoutProps = {
  currentHref: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  currentHref,
  title,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 text-five lg:flex-row lg:items-start">
      <div className="flex-1 space-y-6 lg:max-w-3xl">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-four">Legal</p>
          <h1 className="text-4xl font-bold text-three">{title}</h1>
          <p className="text-base leading-7 text-four">{intro}</p>
        </header>

        <div className="space-y-6 leading-7">{children}</div>
      </div>

      <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:max-w-sm">
        <div className="space-y-5 rounded-3xl border border-three/15 bg-white/70 p-6 shadow-sm backdrop-blur">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-three">Legal pages</h2>
            <p className="text-sm leading-6 text-four">
              Each footer link now leads into a connected legal section instead
              of a dead-end page.
            </p>
          </div>

          <nav aria-label="Legal section navigation">
            <ul className="space-y-3">
              {legalLinks.map((link) => {
                const isCurrent = link.href === currentHref;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`block rounded-2xl border px-4 py-3 transition ${
                        isCurrent
                          ? "border-three/25 bg-one text-three"
                          : "border-three/10 bg-white text-four hover:border-three/20 hover:text-three"
                      }`}>
                      <span className="block font-semibold">{link.label}</span>
                      <span className="mt-1 block text-sm leading-6">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="rounded-2xl bg-four px-4 py-4 text-sm leading-6 text-white/85">
            <p className="font-semibold text-white">
              Need a direct contact path?
            </p>
            <p className="mt-2">
              Email
              <a
                href="mailto:parykeeth90@gmail.com"
                className="ml-1 underline decoration-white/40 underline-offset-4 hover:decoration-white">
                parykeeth90@gmail.com
              </a>
              or return to the
              <Link
                href="/"
                className="ml-1 underline decoration-white/40 underline-offset-4 hover:decoration-white">
                home page
              </Link>
              .
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
