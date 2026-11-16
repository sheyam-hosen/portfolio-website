import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060609",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "MOHAMMAD SHEYAM HOSEN | Full Stack Developer",
  description:
    "MOHAMMAD SHEYAM HOSEN is a passionate Full Stack Developer specializing in React.js, Next.js, and TypeScript. Explore modern web applications, GitHub projects, verified skills, and resume.",
  keywords: [
    "MOHAMMAD SHEYAM HOSEN",
    "Sheyam Hosen",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "MOHAMMAD SHEYAM HOSEN", url: "https://github.com/sheyam-hosen" }],
  creator: "MOHAMMAD SHEYAM HOSEN",
  metadataBase: new URL("https://sheyam-hosen.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sheyam-hosen.netlify.app",
    title: "MOHAMMAD SHEYAM HOSEN | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React.js, Next.js & TypeScript. Building high-performance, user-friendly digital experiences.",
    siteName: "MOHAMMAD SHEYAM HOSEN Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1254,
        height: 1254,
        alt: "MOHAMMAD SHEYAM HOSEN - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOHAMMAD SHEYAM HOSEN | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React.js, Next.js & TypeScript.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MOHAMMAD SHEYAM HOSEN",
    jobTitle: "Full Stack Developer",
    url: "https://sheyam-hosen.netlify.app",
    sameAs: [
      "https://github.com/sheyam-hosen",
      "https://www.linkedin.com/in/sheyam-hosen/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#060609] text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200"
      >
        {children}
      </body>
    </html>
  );
}
