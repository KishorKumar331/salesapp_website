"use client";

import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import WhatWeDoSection from "./components/WhatWeDoSection";
import HowToUseSection from "./components/HowToUseSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img
              src="/logo.png"
              alt="Infinite Packages"
              className="h-20 w-auto"
            />
            <nav className="hidden gap-8 md:flex">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      {/* test  */}
      {/* test case3 */}

      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img1.wsimg.com/isteam/getty/2167583877/:/rs=w:3070,m)",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white mb-8 drop-shadow-lg">
              {/* Build your travel business without quitting your job — all from
              your phone. */}
              Grow Your Travel Business Without Quitting Your Job
            </h1>
          </div>
        </div>
      </section>

      <WhatWeDoSection />
      <HowToUseSection />
      <PricingSection />

      {/* Contact Section */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-12"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Have questions? We'd love to hear from you. Get in touch with our
            team today.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Send us a Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Infinite Packages
              </h3>
              <p className="text-sm text-gray-400">
                Build your travel business without quitting your job.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-orange-600 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-orange-600 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-orange-600 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-orange-600 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terms"
                    className="text-sm text-gray-400 hover:text-orange-600 transition"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-sm text-gray-400 hover:text-orange-600 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              Copyright © 2025 Infinite Packages - All Rights Reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Powered by{" "}
              <span className="font-semibold">Infinite Packages</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
