import React from "react";
// import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-6 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8146/8146125.png"
                alt="rocket"
                className="w-5 h-5"
              />
            </div>
            <h2 className="text-lg font-semibold">
              <span className="text-blue-600">LaunchPad</span> Labs
            </h2>
          </div>
          <p className="text-sm text-gray-500 mt-4 max-w-xs">
            We build high-quality MVPs to transform your ideas into reality.
          </p>
          {/* <div className="flex space-x-3 mt-5">
            <a
              href="#"
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaXTwitter className="text-gray-600" />
            </a>
            <a
              href="#"
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaLinkedinIn className="text-gray-600" />
            </a>
          </div> */}
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>MVP Development</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Our Process</li>
            <li>How We Work</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Portfolio</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Case Studies</li>
            <li>Success Stories</li>
            <li>MVP Showcase</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Large Background Text */}
      <h1 className="absolute text-8xl md:text-[10rem] font-bold text-blue-300 bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        LaunchPad Labs
      </h1>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto text-center mt-16 text-sm text-gray-400">
        © 2025 LinkVerse. All rights reserved.
      </div>
    </footer>
  );
}
