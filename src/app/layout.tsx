import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/provider/ThemeProvider";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { InstallButton } from "@/components/pwa/InstallButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast Track - Soluciones de gestion",
  description: "Soluciones de Gestion - SAS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#6366f1" />
          <link rel="apple-touch-icon" href="/icons/icon-192.png" />
          <script src="/pwa.js" defer></script>
          
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <header className="flex justify-end w-full sticky top-0 z-10">
              <Navbar />
            </header>
            <main className="flex flex-col w-full">{children}</main>
            <Footer />
            <InstallButton />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
