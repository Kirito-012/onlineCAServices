"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-800 overflow-hidden">
        {/* ✅ Hero Section */}
        <section className="relative py-20 md:py-28 h-[60vh] flex items-center justify-center text-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/hero2.jpeg"
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Get in touch with our experts for tax, GST, or business queries.
              We’re here to make compliance simple and seamless for you.
            </motion.p>
          </div>
        </section>

        {/* ✅ Contact Info + Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-br from-blue-100 via-white to-teal-100 rounded-2xl shadow-md p-6 sm:p-8"
          >
            <div className="text-center mb-8">
              <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
                Our Information
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold border-b-4 border-teal-700 inline-block pb-1">
                Get In Touch
              </h2>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: <MapPin className="text-gray-700" size={22} />,
                  title: "Our Office",
                  text: "Delhi, India — Serving clients across India online.",
                },
                {
                  icon: <Mail className="text-gray-700" size={22} />,
                  title: "Email Us",
                  text: "myonlinecaservices@gmail.com",
                },
                {
                  icon: <Phone className="text-gray-700" size={22} />,
                  title: "Call Us",
                  text: "+91 85952 36343",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border border-gray-300 rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
                >
                  <div className="bg-gray-100 p-3 rounded-xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="text-center pt-10">
              <h3 className="font-medium text-lg mb-3">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/onlinecaservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-50 hover:bg-gray-300 p-4 rounded-full transition"
                >
                  <Instagram className="w-6 h-6 text-[#d3499e]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-teal-100 via-white to-blue-100 rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b-4 border-[#0B3D91] inline-block pb-1">
              Send Us a Message
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name *"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-[#008080] outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-[#008080] outline-none"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="tel"
                placeholder="Mobile Number (WhatsApp)"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>
            <div className="mt-5">
              <select
                className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg text-gray-600 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service Interested In
                </option>
                <option value="income-tax">Income Tax</option>
                <option value="gst">GST</option>
                <option value="accounting">Accounting</option>
                <option value="business-registration">
                  Business Registration
                </option>
                <option value="compliances">Compliances</option>
                <option value="finance">Finance</option>
                <option value="other-products">Other Products</option>
              </select>
            </div>
            <div className="mt-5">
              <textarea
                rows={4}
                placeholder="Message / Query (Optional)"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#0B3D91] transition duration-300"
            >
              Connect Instantly
            </button>
          </motion.form>
        </section>

        {/* ✅ Map Section */}
        {/* <section className="py-20 bg-gray-50 text-center px-4">
          <h3 className="text-gray-600 uppercase tracking-wider">Find Us</h3>
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-teal-600 inline-block mb-10">
            Visit Our Office
          </h2>
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5907226877124!2d80.9405802754179!3d26.84968747668485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c7e3b734b5%3A0x3a56ec4bb22674f9!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1691088993857!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section> */}

        {/* ✅ Office Hours */}
        <section className="py-16 text-center bg-gray-50 px-4">
          {/* <h3 className="text-gray-600 uppercase tracking-wider">When to Visit</h3> */}
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-teal-600 inline-block mb-10">
            Office Hours
          </h2>
          <div className=" max-w-2xl mx-auto">
            <div className="bg-gray-200 p-8 rounded-xl">
              <h4 className="font-semibold text-lg">Work Timing</h4>
              <p className="text-gray-600 mt-2">
                Monday – Sunday: 9:00 AM – 9:00 PM
              </p>
            </div>
            {/* <div className="bg-gray-200 p-8 rounded-xl">
              <h4 className="font-semibold text-lg">Weekends</h4>
              <p className="text-gray-600 mt-2">Saturday: 10:00 AM – 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div> */}
          </div>
        </section>
        {/* Website Management Section */}
        <section className="bg-gray-50 py-10 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm md:text-base text-gray-700 font-medium">
              Website Managed by{" "}
              <span className="font-semibold text-[#0B3D91]">
                Manish Bhatnagar
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              410, Near Yadav Chopal, Kapashera, New Delhi - 110037
            </p>
          </div>
        </section>

        {/* ✅ Why Choose Section */}
        <section className="bg-linear-to-br from-teal-200 via-white to-blue-200 text-gray-700 py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Online CA Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Connect with professionals instantly — no waiting",
              "100% online, hassle-free, and paperless process",
              "Secure document handling with full encryption",
              "Personalized support for ITR, GST, Accounting & Registration",
              "Transparent pricing and quick communication",
              "Total confidentiality & verified experts",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white text-gray-800 rounded-xl shadow-md p-6 text-sm font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
