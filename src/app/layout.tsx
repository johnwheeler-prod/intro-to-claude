import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intro to Claude Code",
  description:
    "A hands-on learning guide for getting started with Claude Code — complete progressive challenges to level up your AI-assisted development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f1117] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
