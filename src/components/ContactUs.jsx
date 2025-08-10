import React from 'react'


import { FaPaperPlane } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-200 py-10 px-6  max-w-8xl mx-auto shadow-lg text-center">
      <p className="text-lg font-medium text-gray-800 mb-4">
        Subscribe to stay tuned for new web designs and the latest updates.
      </p>

<div className="flex items-center gap-4 w-full max-w-2xl mx-auto">
  {/* Left Text */}
  <span className="text-white font-semibold text-lg whitespace-nowrap">
    Let’s do it!
  </span>

{/* Input + Button */}
<div className="relative w-full max-w-md mx-auto">
  <input
    type="email"
    placeholder="Enter your email"
    className="rounded-full bg-white pl-4 pr-24 sm:pl-5 sm:pr-36 py-2 sm:py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
  />
  <button
    className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white rounded-full py-1.5 sm:py-2 px-3 sm:px-5 flex items-center gap-1 sm:gap-2 hover:bg-gray-900 transition text-xs sm:text-sm"
  >
    <span className="">Subscribe</span>
    <FaPaperPlane className="text-sm" />
  </button>
</div>


</div>


    </div>
  );
}

