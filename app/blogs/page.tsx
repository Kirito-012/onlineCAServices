"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Brain, Scale } from "lucide-react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-800 overflow-hidden">
        {/* ✅ Hero Section */}
        <section className="relative py-20 md:py-28 h-[60vh] flex items-center justify-center text-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/b2.jpeg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl pt-12 sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Our Blogs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Stay informed with expert insights on legal, tax, and business
              topics. Explore our latest articles, guides, and updates crafted
              to help you make smarter decisions and stay ahead in compliance
              and business growth.
            </motion.p>
          </div>
        </section>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            {/* Card Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-blue-100 via-white to-teal-100 shadow-lg rounded-2xl p-8 md:p-10 max-w-5xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                That’s why we’ve launched our dedicated blog portal{" "}
                <span className="text-teal-600 font-extrabold">Tax Club</span> —
                your go-to source for:
              </h2>

              <ul className="text-left space-y-10 mt-8">
                <li className="flex items-start gap-3">
                  <BookOpen className="text-teal-600 w-5 h-5 mt-1" />
                  <span className="text-gray-700">
                    <strong>Latest updates</strong> on Income Tax, GST, and
                    Accounting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="text-teal-600 w-5 h-5 mt-1" />
                  <span className="text-gray-700">
                    <strong>Practical guides</strong> for ITR filing, GST
                    registration, company incorporation, and business compliance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="text-teal-600 w-5 h-5 mt-1" />
                  <span className="text-gray-700">
                    <strong>Expert insights</strong> from Chartered Accountants,
                    CS, and finance professionals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="text-teal-600 w-5 h-5 mt-1" />
                  <span className="text-gray-700">
                    <strong>Tax-saving strategies</strong> and investment
                    planning tips for individuals and businesses
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mt-10">
                <Link
                  href="https://taxclub.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-teal-700 transition-all duration-200"
                >
                  💡 Visit Now: taxclub.in
                </Link>
              </div>

              <p className="mt-8 text-gray-600 font-medium">
                Stay informed. Stay compliant. Stay ahead with trusted CA
                insights.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
