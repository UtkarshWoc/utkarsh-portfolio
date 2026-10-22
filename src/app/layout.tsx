import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh — Full Stack Developer & Competitive Programmer",
  description:
    "Portfolio of Utkarsh — a full-stack developer, competitive programmer & freelance engineer specializing in immersive web experiences, systems programming, and scalable applications.",
  keywords: ["full stack developer", "competitive programmer", "portfolio", "web developer", "freelance developer", "Next.js", "React"],
  authors: [{ name: "Utkarsh" }],
  openGraph: {
    title: "Utkarsh — Full Stack Developer & Competitive Programmer",
    description: "Immersive portfolio showcasing full-stack projects, competitive programming achievements, and freelance work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
