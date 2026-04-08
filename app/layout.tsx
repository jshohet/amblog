import type { Metadata } from "next";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./providers/authProvider";
import PostProvider from "./providers/postProvider";
import SelectedPostProvider from "./providers/selectedPostProvider";
import Header from "./components/header/Header";
import EditorStateProvider from "./providers/editorStateProvider";
import { legalLinks } from "./components/footer/legalLinks";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXTAUTH_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Amblog",
    template: "%s | Amblog",
  },
  description:
    "Amblog is a personal blogging app with Google sign-in, rich text editing, image uploads, moods, and tags.",
  applicationName: "Amblog",
  authors: [{ name: "Amblog" }],
  keywords: [
    "Amblog",
    "blog",
    "Next.js",
    "Prisma",
    "PostgreSQL",
    "NextAuth",
    "TipTap",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/amblog.png",
    shortcut: "/amblog.png",
    apple: "/amblog.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Amblog",
    description:
      "A personal blogging app with Google sign-in, rich text editing, image uploads, moods, and tags.",
    siteName: "Amblog",
    images: [
      {
        url: "/amblog.png",
        alt: "Amblog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amblog",
    description:
      "A personal blogging app with Google sign-in, rich text editing, image uploads, moods, and tags.",
    images: ["/amblog.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className="bg-one">
      <body
        className={`${libreBaskerville.className} min-h-screen flex flex-col`}>
        <AuthProvider>
          <PostProvider>
            <EditorStateProvider>
              <SelectedPostProvider>
                <Header />
                <main className="flex-1">{children}</main>
                <footer className="border-t border-three/20 bg-four px-4 py-6 text-sm text-white/80">
                  <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
                    <p>Copyright {currentYear} Josef Shohet</p>
                    <nav aria-label="Legal links">
                      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        {legalLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="underline decoration-white/40 underline-offset-4 transition hover:text-white hover:decoration-white">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </footer>
              </SelectedPostProvider>
            </EditorStateProvider>
          </PostProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
