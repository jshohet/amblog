import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "../components/footer/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "Information about cookies and similar technologies used by Amblog.",
};

export default function CookieNoticePage() {
  return (
    <LegalPageLayout
      currentHref="/cookie-notice"
      title="Cookie Notice"
      intro="Amblog uses cookies and similar storage technologies that are needed for sign-in, session management, security, and basic site operation.">
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
          The application may also use browser storage or equivalent mechanisms
          to remember temporary interface or editor state where necessary to
          improve usability.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">Managing cookies</h2>
        <p>
          Most browsers allow you to review, block, or delete cookies.
          Restricting cookies may affect sign-in and other core features of the
          site.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">Questions or requests</h2>
        <p>
          If you have questions about authentication cookies or want to make a
          privacy-related request, use the{" "}
          <Link
            href="/contact-data-requests"
            className="underline decoration-three/40 underline-offset-4">
            Contact and Data Requests
          </Link>
          page or email
          <a
            href="mailto:parykeeth90@gmail.com"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            parykeeth90@gmail.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">Related notices</h2>
        <p>
          See the
          <Link
            href="/privacy-notice"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            Privacy Notice
          </Link>
          for broader personal-data handling and the
          <Link
            href="/terms-of-use"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            Terms of Use
          </Link>
          for the main site rules.
        </p>
      </div>
    </LegalPageLayout>
  );
}
