"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D91] text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            Pro<span className="text-teal-400">Register</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Simplifying your tax, accounting, and registration needs with
            expert Chartered Accountants — trusted by thousands of businesses
            across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-teal-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/about" className="hover:text-teal-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-teal-300 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-teal-300 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-300 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy" className="hover:text-teal-300 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-teal-400">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>✅ Company Registration</li>
            <li>✅ GST Filing</li>
            <li>✅ Accounting & Taxation</li>
            <li>✅ Trademark Registration</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-teal-400">
            Contact Info
          </h3>
          <p className="text-gray-300 text-sm">
            📍 Mumbai, Maharashtra, India
          </p>
          <p className="text-gray-300 text-sm mt-2">
            📞 +91 98765 43210
          </p>
          <p className="text-gray-300 text-sm mt-2">
            ✉️ support@onlinecaservices.in
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition-all duration-200"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition-all duration-200"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition-all duration-200"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition-all duration-200"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20 mt-8 pt-5 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} OnlineCA Services. All rights reserved. | Designed with ❤️ in India.
      </div>
    </footer>
  );
}
