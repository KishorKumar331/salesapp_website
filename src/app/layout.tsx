import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./qq.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const TITLE = "Quick Quotes by IP: travel quotes in a minute";
const DESCRIPTION =
  "Make day-wise travel quotes, branded PDFs and invoices from your phone in about a minute. Built for independent travel sellers in India. Free to start.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "travel quotation software",
    "travel itinerary maker",
    "travel agent CRM India",
    "quotation app for travel agents",
    "Quick Quotes",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://infinitepackages.com",
    siteName: "Quick Quotes by IP",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased bg-[#f4f4f4] text-gray-900 min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
