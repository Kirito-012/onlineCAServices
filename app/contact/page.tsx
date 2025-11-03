"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className=" bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 h-[75vh] flex items-center justify-center text-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/hero2.jpeg"
              alt="Background"
              className="w-full h-full object-cover"
            />
           
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Contact Us
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Get in touch with our experts to discuss your tax, GST, or
              business needs. We’re here to simplify compliance and support your
              growth with expert guidance.
            </p>
          </div>
        </section>

        {/* CONTACT INFO + FORM */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 bg-gray-50">
          {/* LEFT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-50 rounded-2xl shadow-sm p-8 max-w-xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
                Our Information
              </p>
              <h2 className="text-3xl font-semibold mb-6 border-b-4 border-teal-700 inline-block pb-1inline-block pb-1">
                Get In Touch
              </h2>
            </div>

            <div className="space-y-6">
              {/* Office */}
              <div className="flex items-start gap-4 border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <MapPin className="text-gray-700" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Our Office
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Delhi, India — Serving clients across India online.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <Mail className="text-gray-700" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Email Us
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    myonlinecaservices@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <Phone className="text-gray-700" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Call Us
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    +91 89300 00984
                  </p>
                </div>
              </div>
            </div>

            {/* Optional: Follow Us */}
            <div className=" text-center">
              <h3 className="font-medium text-lg pt-10 mb-3">Follow Us</h3>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://www.instagram.com/anshul_architects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-100 bg-gray-200 hover:bg-primary-200 p-4 rounded-full transition-colors"
                >
                  <Instagram className="w-6 h-6  text-primary-800" />
                </a>
                <a
                  href="https://www.facebook.com/sharma.anshul.upadhyay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-100 bg-gray-200 hover:bg-primary-200 p-4 rounded-full transition-colors"
                >
                  <Facebook className="w-6 h-6 text-primary-800" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-[#0B3D91] inline-block pb-1">
              Send Us a Message
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name *"
                className="p-3 border rounded-md focus:ring-2 focus:ring-[#008080]"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="p-3 border rounded-md focus:ring-2 focus:ring-[#008080]"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="tel"
                placeholder="Mobile Number (WhatsApp)"
                className="p-3 w-full border rounded-md focus:ring-2 focus:ring-[#008080]"
              />
            </div>
            <div className="mt-5">
              <select className="p-3 w-full border rounded-md focus:ring-2 focus:ring-[#008080]">
                <option>Select Service Type</option>
                <option>Income Tax</option>
                <option>GST</option>
                <option>Accounting</option>
                <option>Business Registration</option>
                <option>Compliance & Advisory</option>
                <option>Others</option>
              </select>
            </div>
            <div className="mt-5">
              <textarea
                rows={4}
                placeholder="Message / Query (Optional)"
                className="p-3 w-full border rounded-md focus:ring-2 focus:ring-[#008080]"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#0B3D91] transition-all duration-300"
            >
              Connect Instantly
            </button>
          </motion.form>
        </section>
        {/* Map Section */}
        <section className="py-20 bg-gray-50 text-center">
          <h3 className="text-gray-600 uppercase tracking-wider">Find Us</h3>
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-teal-600 inline-block mb-10">
            Visit Our Office
          </h2>
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5907226877124!2d80.9405802754179!3d26.84968747668485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c7e3b734b5%3A0x3a56ec4bb22674f9!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1691088993857!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 text-center bg-gray-50">
          <h3 className="text-gray-600 uppercase tracking-wider">
            When to Visit
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-teal-600 inline-block mb-10">
            Office Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-200 p-8 rounded-xl">
              <h4 className="font-semibold text-lg">Weekdays</h4>
              <p className="text-gray-600 mt-2">
                Monday – Friday: 9:00 AM – 9:00 PM
              </p>
            </div>
            <div className="bg-gray-200 p-8 rounded-xl">
              <h4 className="font-semibold text-lg">Weekends</h4>
              <p className="text-gray-600 mt-2">Saturday: 10:00 AM – 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
          {/* <p className="text-gray-500 mt-6">
          We recommend scheduling an appointment before visiting to ensure our
          team can give you their full attention.
        </p> */}
        </section>

        {/* Why Choose Section */}
        <section className="bg-linear-to-br from-teal-200 via-white to-blue-200 text-gray-700 py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Online CA Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                viewport={{ once: true }}
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
