import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Basic terms governing access to and use of Amblog.",
};

export default function TermsOfUsePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12 text-five">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-four">Legal</p>
        <h1 className="text-4xl font-bold text-three">Terms of Use</h1>
        <p className="text-base leading-7 text-four">
          By accessing or using Amblog, you agree to use the site lawfully and
          in a way that does not interfere with other users or the operation of
          the service.
        </p>
      </header>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-xl font-bold text-three">Operator</h2>
          <p>
            These terms apply to the use of Amblog, operated by JOsef Shoher.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Acceptable use</h2>
          <p>
            You agree not to upload unlawful, harmful, infringing, or abusive
            material, and not to attempt unauthorized access, scraping,
            disruption, or misuse of the site or its infrastructure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Your content</h2>
          <p>
            You remain responsible for the accuracy, legality, and ownership of
            any content you publish. By posting content, you grant Amblog the
            rights needed to host, display, and manage that content within the
            service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Availability</h2>
          <p>
            The service may change, be suspended, or be removed at any time.
            Access is provided on an as-available basis without guarantees of
            uninterrupted service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Liability</h2>
          <p>
            To the maximum extent permitted by law, Amblog is not liable for
            indirect, incidental, or consequential loss arising from use of the
            site, user content, or temporary unavailability.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">
            Privacy and deletion requests
          </h2>
          <p>
            Requests relating to personal data, account access, or deletion
            should be submitted through the
            <Link
              href="/contact-data-requests"
              className="underline decoration-three/40 underline-offset-4">
              Contact and Data Requests
            </Link>{" "}
            page or by email to parykeeth90@gmail.com so they can be reviewed
            directly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Governing law</h2>
          <p>
            These terms are governed by the laws of the Commonwealth of
            Massachusetts, without regard to conflict-of-law principles, except
            where mandatory law requires otherwise.
          </p>
        </div>
      </div>
    </section>
  );
}
