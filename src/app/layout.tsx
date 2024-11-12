import type { Metadata } from "next";
import localFont from "next/font/local";
import "@revivesoft/inputron/css";
import "@revivesoft/video-cards/css";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Link from "next/link";
import { Github } from "lucide-react";
import { LogoPink } from "@/app/components/logo";

// import dotenv from "dotenv";
// dotenv.config();

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inputron Examples",
  description: "Examples of how to elevate form user experience using Inputron elements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="flex items-center justify-between px-4 py-3 bg-yellow-500 ">
            <div className="flex items-center space-x-2">
              <LogoPink />
            </div>
            <Link
              href="https://github.com/ReviveSoft/InputronExamples"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white hover:text-gray-900 hover:bg-teal-500"
            >
              <Github className="w-8 h-8  font-bold  bg-pink-500 p-1 rounded-sm" />
              {/* <span className="hidden sm:inline">GitHub</span> */}
            </Link>
          </header>

          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
