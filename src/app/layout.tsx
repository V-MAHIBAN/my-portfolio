import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahiban - Software Engineering Portfolio",
  description: "Portfolio of Mahiban, final-year undergraduate software engineering student specializing in modern web technologies like React, Next.js, and TypeScript.",
  keywords: ["software engineer", "portfolio", "React", "Next.js", "TypeScript", "web development"],
  authors: [{ name: "Mahiban" }],
  openGraph: {
    title: "Mahiban - Software Engineering Portfolio",
    description: "Portfolio of Mahiban, final-year undergraduate software engineering student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
