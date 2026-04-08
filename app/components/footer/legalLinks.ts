export type LegalLink = {
  href: string;
  label: string;
  description: string;
};

export const legalLinks: LegalLink[] = [
  {
    href: "/privacy-notice",
    label: "Privacy Notice",
    description: "How Amblog collects, uses, and stores personal information.",
  },
  {
    href: "/terms-of-use",
    label: "Terms of Use",
    description: "The baseline rules for accessing and using Amblog.",
  },
  {
    href: "/cookie-notice",
    label: "Cookie Notice",
    description: "What cookies and browser storage are used for on the site.",
  },
  {
    href: "/contact-data-requests",
    label: "Contact & Data Requests",
    description: "How to request access, correction, or deletion of data.",
  },
];
