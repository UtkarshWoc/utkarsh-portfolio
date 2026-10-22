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
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
