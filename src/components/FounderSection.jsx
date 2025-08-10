import React from "react";
import { CiLinkedin } from "react-icons/ci";

export default function FounderSection() {
  return (
    <section className="px-6 md:px-12 max-w-4xl mx-auto py-12 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Founder thought</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        For too long, students were treated as testers for expensive... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro autem magni sint quaerat ex magnam praesentium debitis, molestiae sequi aliquam quae quibusdam corrupti ratione officiis fugiat fuga dignissimos dolorum architecto culpa tenetur cupiditate velit minus? Velit deserunt ratione voluptatibus ducimus optio culpa asperiores aperiam molestiae qui labore, vero ad.
      </p>
<img
  src="/ifounder-removebg-preview.png"
  alt="Founder"
  className=" w-50 h-40 object-cover mx-auto drop-shadow-[30px_0_20px_rgba(168,85,247,0.8)]"
/>
      <h4 className="mt-4 font-bold">Priya Ray</h4>
      <p className="text-gray-500 text-sm">Founder, CEO</p>
      <div className="text-center">
 
  <a
    href="https://www.linkedin.com/in/priyaray" // Replace with actual profile link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-blue-600 hover:text-blue-800"
  >
    <CiLinkedin className="text-2xl mx-auto" />
  </a>
</div>


    </section>
  );
}
