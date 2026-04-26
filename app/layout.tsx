import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// This is where you change the page title and description
export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Learning",
  description: "Cultivate high-performance teams through expert learning and tailored enterprise solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}