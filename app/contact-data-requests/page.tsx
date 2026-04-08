import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact and Data Requests",
  description:
    "How to send contact, privacy, access, correction, and deletion requests for Amblog.",
};

export default function ContactDataRequestsPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12 text-five">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-four">Legal</p>
        <h1 className="text-4xl font-bold text-three">
          Contact and Data Requests
        </h1>
        <p className="text-base leading-7 text-four">
          This page explains how users can request access to their data,
          corrections, or deletion of account-related information from Amblog.
        </p>
      </header>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-xl font-bold text-three">Site operator</h2>
          <p>Amblog is operated by JOsef Shoher.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">
            How to make a request
          </h2>
          <p>
            Send legal, privacy, access, correction, or deletion requests to
            parykeeth90@gmail.com. Include enough detail to identify the
            relevant account or content and describe the action you want taken.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Contact email</h2>
          <p>parykeeth90@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">
            What users can request
          </h2>
          <p>
            Users may request confirmation of whether account data is held,
            access to that data, correction of inaccurate information, or
            deletion of account-related data and content where applicable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Verification</h2>
          <p>
            Requests should include enough information to verify the identity of
            the requester and identify the relevant account or content before
            any action is taken.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Deletion handling</h2>
          <p>
            Valid deletion requests are reviewed manually. Some data may be
            retained where necessary for security, fraud prevention, record-
            keeping, or compliance with applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-three">Jurisdiction status</h2>
          <p>
            Requests and related site policies are handled with reference to the
            laws of the Commonwealth of Massachusetts, except where mandatory
            law requires a different standard to apply.
          </p>
        </div>
      </div>
    </section>
  );
}
