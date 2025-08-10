import React from "react";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
<div className="flex justify-center">
  <div className="bg-white inline-block px-6 py-2 rounded-lg shadow-sm text-center mb-4">
    <h2 className="font-semibold text-4xl text-black">
      <span className="text-purple-500">TuT</span>Star
    </h2>
  </div>
</div>


        

        {/* Links Section */}
        <div className="
          grid grid-cols-2 gap-8 text-center
          md:grid-cols-4 md:text-left
        ">
          <div>
            <h5 className="text-white font-semibold mb-3">Product</h5>
            <ul className="space-y-1">
              <li>Landing Page</li>
              <li>Popup Builder</li>
              <li>Web-design</li>
              <li>Content</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Use Cases</h5>
            <ul className="space-y-1">
              <li>Web-designers</li>
              <li>Marketers</li>
              <li>Small Business</li>
              <li>Website Builder</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Resources</h5>
            <ul className="space-y-1">
              <li>Academy</li>
              <li>Blog</li>
              <li>Themes</li>
              <li>Hosting</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="mt-10 text-center md:text-left">
          <h5 className="text-white font-semibold mb-3">Contact Us</h5>
          <p className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <FaMapMarkerAlt /> Wisconsin Ave, Suite 700<br />
            Chevy Chase, Maryland 20815
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 mt-2 text-sm">
            <FaEnvelope /> support@figma.com
          </p>

          <h5 className="text-white font-semibold mt-5 mb-3">Follow Us</h5>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
