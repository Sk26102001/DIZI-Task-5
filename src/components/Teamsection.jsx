import React from "react";
import { CiLinkedin } from "react-icons/ci";
export default function TeamSection() {
  const team = [
    { name: "Priya Ray", role: "Founder, CEO", img: "./ifounder-removebg-preview.png" },
    { name: "Priya Ray", role: "Founder, CEO", img: "./ifounder-removebg-preview.png" },
  ];

  return (
    <section className="px-6 md:px-12 max-w-4xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-2 gap-14 text-center">
      {team.map((member, index) => (
     <div key={index} className="text-center">
  <img
    src={member.img}
    alt={member.name}
    className="w-40 h-40 object-cover mx-auto drop-shadow-[30px_0_20px_rgba(168,85,247,0.8)]"
  />
  <h4 className="mt-3 font-bold">{member.name}</h4>
  <p className="text-gray-500 text-sm">{member.role}</p>
  <a
    href={member.linkedin} // LinkedIn profile link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-blue-600 hover:text-blue-800"
  >
    <CiLinkedin className="text-2xl mx-auto" />
  </a>
</div>

      ))}
    </section>
  );
}
