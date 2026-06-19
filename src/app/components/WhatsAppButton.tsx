'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '918882414703';
  const message = "Hi Infinite Packages, I'd like to learn more about your travel agent platform.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-[0_10px_35px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.45)] transition-all duration-300 group hover:-translate-y-1 border border-white/20"
      aria-label="Chat with Sales on WhatsApp"
    >
      {/* Official FontAwesome WhatsApp Logo */}
      <svg 
        className="w-6 h-6 fill-current transform group-hover:scale-110 transition-transform duration-300" 
        viewBox="0 0 448 512"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l145.4-38.1c32.7 18 69.4 27.5 106.9 27.5 122.4 0 222-99.6 222-222 0-59.3-23-115.1-64.9-157.1zM223.9 470.9c-33.2 0-65.7-8.9-94-25.7l-6.7-4-86.2 22.6 23-84-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.4 0 101.7-82.8 184.5-184.6 184.5zm100.5-137.5c-5.5-2.7-32.6-16.1-37.7-18-5.1-1.9-8.8-2.7-12.5 2.7-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.7-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7 1-7.1-.5-9.8-1.4-2.7-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.5-19.4 19-19.4 46.3 0 27.3 19.8 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.6 9.1 31.6 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.6-13.3 37.2-26.2 4.6-12.9 4.6-24 3.2-26.2-1.3-2.2-5-3.5-10.5-6.2z"/>
      </svg>
      
      {/* Tooltip sliding text */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-black tracking-wide group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Chat with Sales
      </span>
    </a>
  );
}
