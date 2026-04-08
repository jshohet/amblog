import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Amblog collects, uses, and stores personal information.",
};

export default function PrivacyNoticePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12 text-five">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-four">Legal</p>
        <h1 className="text-4xl font-bold text-three">Privacy Notice</h1>
        <p className="text-base leading-7 text-four">
          Amblog uses Google sign-in and stores only the information needed to
          provide the blog, manage sessions, and support writing features.
        </p>
      </header>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-xl font-bold text-three">Operator</h2>
          <p>Amblog is operated by JOsef Shoher.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">
            Information collected
          </h2>
          <p>
            When you sign in, Amblog may store your name, email address, profile
            image, account identifier, posts you create, uploaded images, and
            technical data required for authentication and site security.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">
            How information is used
          </h2>
          <p>
            Data is used to authenticate your account, display your profile,
            save and publish blog content, process uploaded media, and keep the
            service functioning reliably.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Sharing</h2>
          <p>
            Amblog does not sell personal information. Data may be processed by
            infrastructure providers involved in hosting, authentication,
            storage, analytics, and security where necessary to operate the
            service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Retention</h2>
          <p>
            Account and content data is retained for as long as needed to
            operate the blog and maintain records, unless deletion is requested
            or legally required.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Data requests</h2>
          <p>
            If you need access, correction, or deletion of your account or
            content data, use the
            <Link
              href="/contact-data-requests"
              className="underline decoration-three/40 underline-offset-4">
              Contact and Data Requests
            </Link>{" "}
            page or email parykeeth90@gmail.com. Requests are reviewed manually
            before action is taken.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Jurisdiction</h2>
          <p>
            This notice is intended to be read consistently with the laws of the
            Commonwealth of Massachusetts, subject to any mandatory privacy or
            consumer-protection law that applies to a particular user.
          </p>
        </div>
      </div>
    </section>
  );
}
