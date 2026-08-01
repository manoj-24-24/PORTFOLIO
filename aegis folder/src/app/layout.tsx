import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.title}`,
  description: portfolio.about,
  keywords: [
    portfolio.name,
    "cybersecurity portfolio",
    "web developer",
    "Bangalore University",
    "BCA student",
    "ethical hacking"
  ],
  openGraph: {
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.about,
    images: [portfolio.profileImage],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
