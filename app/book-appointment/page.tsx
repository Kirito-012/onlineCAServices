"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, User, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getWhatsAppLink } from "../utils/whatsapp";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Appointment request submitted successfully!");
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-6">
            📞 Book On-Call Appointment with a CA
          </h1>
          <p className="text-gray-700 text-center mb-10 leading-relaxed">
            💼 Connect instantly with a verified Online CA for Income Tax, GST,
            Accounting & Business Compliance. Book a one-on-one voice call or
            Zoom/Google Meet session directly with a trusted Chartered
            Accountant.
          </p>

          {/* Booking Form */}
          <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center">
                Appointment Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={18}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={18}
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Describe your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3.5 rounded-lg text-base font-semibold hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Submit Appointment Request
                </motion.button>
              </form>

              {/* WhatsApp Quick Connect */}
              <div className="text-center mt-6">
                <Link
                  href={getWhatsAppLink()}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-teal-700 font-medium hover:text-teal-800 transition-all"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </section>

          {/* Info Sections */}
          <div className="mt-12 space-y-10 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">
                💰 Consultation Details
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Duration: 30 minutes</li>
                <li>Consultation Fee: ₹499 only</li>
                <li>
                  Services Covered: Expert advice for ITR, GST, business
                  registration & compliance.
                </li>
                <li>Availability: Monday to Sunday, 9:00 AM – 9:00 PM</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">
                ⚙️ How It Works
              </h3>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Fill out the booking form and select your service.</li>
                <li>
                  Make a secure online payment to confirm your consultation.
                </li>
                <li>
                  Connect directly with your CA through WhatsApp or email.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">
                💬 Why Choose Online CA Services
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Connect directly with verified Chartered Accountants</li>
                <li>
                  Expert consultation for Income Tax, GST & Business
                  Registration
                </li>
                <li>Instant booking confirmation & professional follow-up</li>
                <li>Secure, confidential, and efficient service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">
                ⚠️ Disclaimer
              </h3>
              <p className="leading-relaxed">
                Online CA Services is an independent platform connecting clients
                with verified professionals. It is not a CA firm and is not
                affiliated with ICAI or any government body.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <Link
              href="https://payments.cashfree.com/forms/Book-ca-call"
              target="_blank"
              className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              📞 Book My CA Consultation Now ➡️
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
