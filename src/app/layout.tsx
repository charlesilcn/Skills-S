import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_SC } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Skills Shop",
  description: "Discover and purchase AI skills to boost your productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For now, we'll render without ClerkProvider since we don't have actual API keys
  // We'll add ClerkProvider back when we have real API keys
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} bg-slate-950 text-white antialiased`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
