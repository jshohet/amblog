import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "Information about cookies and similar technologies used by Amblog.",
};

export default function CookieNoticePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12 text-five">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-four">Legal</p>
        <h1 className="text-4xl font-bold text-three">Cookie Notice</h1>
        <p className="text-base leading-7 text-four">
          Amblog uses cookies and similar storage technologies that are needed
          for sign-in, session management, security, and basic site operation.
        </p>
      </header>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-xl font-bold text-three">Essential cookies</h2>
          <p>
            Essential cookies support authentication, account sessions, and
            security protections. Without them, the sign-in flow and protected
            parts of the application may not function correctly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Operational storage</h2>
          <p>
            The application may also use browser storage or equivalent
            mechanisms to remember temporary interface or editor state where
            necessary to improve usability.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Managing cookies</h2>
          <p>
            Most browsers allow you to review, block, or delete cookies.
            Restricting cookies may affect sign-in and other core features of
            the site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">
            Questions or requests
          </h2>
          <p>
            If you have questions about authentication cookies or want to make a
            privacy-related request, use the
            <Link
              href="/contact-data-requests"
              className="underline decoration-three/40 underline-offset-4">
              Contact and Data Requests
            </Link>{" "}
            page or email parykeeth90@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}
