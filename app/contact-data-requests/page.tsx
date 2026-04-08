import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "../components/footer/LegalPageLayout";

export const metadata: Metadata = {
  title: "Contact and Data Requests",
  description:
    "How to send contact, privacy, access, correction, and deletion requests for Amblog.",
};

export default function ContactDataRequestsPage() {
  return (
    <LegalPageLayout
      currentHref="/contact-data-requests"
      title="Contact and Data Requests"
      intro="This page explains how users can request access to their data, corrections, or deletion of account-related information from Amblog.">
      <div>
        <h2 className="text-xl font-bold text-three">Site operator</h2>
        <p>Amblog is operated by Josef Shohet.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">How to make a request</h2>
        <p>
          Send legal, privacy, access, correction, or deletion requests to
          <a
            href="mailto:parykeeth90@gmail.com"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            parykeeth90@gmail.com
          </a>
          . Include enough detail to identify the relevant account or content
          and describe the action you want taken.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">Contact email</h2>
        <p>
          <a
            href="mailto:parykeeth90@gmail.com"
            className="underline decoration-three/40 underline-offset-4">
            parykeeth90@gmail.com
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">What users can request</h2>
        <p>
          Users may request confirmation of whether account data is held, access
          to that data, correction of inaccurate information, or deletion of
          account-related data and content where applicable.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">Verification</h2>
        <p>
          Requests should include enough information to verify the identity of
          the requester and identify the relevant account or content before any
          action is taken.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-three">Related notices</h2>
        <p>
          Before sending a request, you may want to review the
          <Link
            href="/privacy-notice"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            Privacy Notice
          </Link>
          ,
          <Link
            href="/cookie-notice"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            Cookie Notice
          </Link>
          , and
          <Link
            href="/terms-of-use"
            className="ml-1 underline decoration-three/40 underline-offset-4">
            Terms of Use
          </Link>
          for context about how the service operates.
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
          laws of the Commonwealth of Massachusetts, except where mandatory law
          requires a different standard to apply.
        </p>
      </div>
    </LegalPageLayout>
  );
}
