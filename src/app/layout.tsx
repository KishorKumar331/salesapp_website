import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Best Travel Agent CRM Software | Fast Quotes & Lead Management",
  description: "The modern sales CRM designed for travel agents, tour operators, and agencies. Manage leads, track group travel, and send beautiful itineraries in minutes.",
  keywords: [
    "travel agent crm software",
    "travel agent crm system",
    "travel agent crms",
    "travel agent crm",
    "best travel agency crm software",
    "best crm software for travel agents",
    "crm travel agent",
    "crm travel system",
    "crm software for travel agents",
    "crm travel agents",
    "online travel agent software",
    "free travel agent crm software",
    "travel agent crm free",
    "travel agency crm software free",
    "free travel agent crm",
    "free travel agent software",
    "what software do travel agents use",
    "software travel agents use",
    "10 best crm software",
    "famous crm software",
    "crm traveljoy",
    "qtravel software",
    "what is crm software and how does it work",
    "crm software for transportation companies",
    "crm travel agent login",
    "CRM for Travel Agency",
    "Travel Sales CRM",
    "Travel CRM Systems",
    "B2B Sales Travel",
    "B2C Travel Sales",
    "Group Travel CRM",
    "Is Travefy a CRM",
    "Vacation CRM vs TravelJoy",
    "Salesforce CRM for Travel Agency",
    "Travel Agent CRM Reviews",
    "Best CRM Travel Industry",
    "QuickQuote"
  ],
  openGraph: {
    title: "Best Travel Agent CRM Software | Fast Quotes & Lead Management",
    description: "The modern sales CRM designed for travel agents, tour operators, and agencies. Manage leads, track group travel, and send beautiful itineraries in minutes.",
    url: "https://infinitepackages.com",
    siteName: "QuickQuote by Infinite Packages",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Agent CRM Software | Fast Quotes & Lead Management",
    description: "The modern sales CRM designed for travel agents, tour operators, and agencies. Manage leads, track group travel, and send beautiful itineraries in minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f4f4f4] text-gray-900 min-h-screen flex flex-col`}>
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
