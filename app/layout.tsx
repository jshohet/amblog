import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./providers/authProvider";
import PostProvider from "./providers/postProvider";
import SelectedPostProvider from "./providers/selectedPostProvider";
import Header from "./components/header/Header";
import EditorStateProvider from "./providers/editorStateProvider";

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
  return (
    <html lang="en" className="bg-one">
      <body className={libreBaskerville.className}>
        <AuthProvider>
          <PostProvider>
            <EditorStateProvider>
              <SelectedPostProvider>
                <Header />
                {children}
              </SelectedPostProvider>
            </EditorStateProvider>
          </PostProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
