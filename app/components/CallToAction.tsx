"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100 py-24 px-4">
      {/* Decorative Blurs */}
      <div className="absolute inset-0  overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -left-20 w-72  h-72 bg-blue-300/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 -right-20 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl"
        />
      </div>

      {/* Main Card */}
      <div className="relative bg-linear-to-br from-teal-600 via-white to-blue-500 z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 md:p-14 border border-gray-200"
        >
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center"
          >
            📞 Need Help?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-center mb-10"
          >
            Get connected with a qualified professional for your{" "}
            <span className="font-semibold text-gray-800">
              Income Tax, GST, or Business Compliance
            </span>{" "}
            requirements. Our experts are ready to assist you with quick,
            accurate, and reliable solutions.
          </motion.p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col items-center justify-center"
            >
              <PhoneCall className="text-blue-600 w-8 h-8 mb-3" />
              <p className="font-medium text-gray-800">Call Us</p>
              <span className="text-sm text-gray-600">+91-XXXXXXXXXX</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col items-center justify-center"
            >
              <Mail className="text-red-500 w-8 h-8 mb-3" />
              <p className="font-medium text-gray-800">Email Us</p>
              <span className="text-sm text-gray-600">
                myonlinecaservices@gmail.com
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col items-center justify-center"
            >
              <MessageCircle className="text-green-500 w-8 h-8 mb-3" />
              <p className="font-medium text-gray-800">WhatsApp</p>
              <Link
                href="https://wa.me/919999999999"
                target="_blank"
                className="text-sm text-green-700 hover:underline"
              >
                Chat with Us
              </Link>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Link
  href="/contact"
  className="relative inline-flex items-center gap-2 px-8 py-3 font-semibold text-gray-800 rounded-full border border-transparent bg-white shadow-md transition-all duration-300 hover:scale-105 group"
>
  {/* Gradient Border Effect */}
  <span className="absolute inset-0 rounded-full p-0.5 bg-linear-to-br from-violet-600 to-fuchsia-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
    <span className="absolute inset-0.5 rounded-full bg-white"></span>
  </span>

  {/* Button Text (keep above gradients) */}
  <span className="relative z-10 flex items-center">
    Submit Your Request <span className="ml-2 inline-block transform transition-all duration-300 ease-out group-hover:translate-x-1 ">
      →
    </span>
  </span>
</Link>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
