"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, User, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";



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
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent mb-6">
          Book On-Call Appointment with a CA
        </h1>
        <p className="text-gray-700 text-center mb-10 leading-relaxed">
          Connect instantly with a verified Online CA for Income Tax, GST,
          Accounting & Business Compliance. Book a one-on-one voice call or
          Zoom/Google Meet session directly with a trusted Chartered Accountant.
        </p>

        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* left - Info Section */}
            <div className="text-gray-700  space-y-8">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent text-center mb-6">
                Service Information
              </h2>
              {/* Consultation Details */}
              <div className="border-t-2 border-gray-200 shadow-md p-2.5 ">
                <h3 className="text-lg font-semibold text-teal-700  mb-2">
                  💰 Consultation Details
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                  <li>Duration: 30 minutes</li>
                  <li>Consultation Fee: ₹499 only</li>
                  <li>
                    Services Covered: ITR, GST, business registration &
                    compliance.
                  </li>
                  <li>Availability: Monday to Sunday, 9:00 AM – 9:00 PM</li>
                </ul>
              </div>

              {/* How It Works */}
              <div className="border-t-2 border-gray-200 shadow-md p-2.5 ">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  ⚙️ How It Works
                </h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm sm:text-base">
                  <li>Fill out the booking form and select your service.</li>
                  <li>
                    Make a secure online payment to confirm your consultation.
                  </li>
                  <li>
                    Connect directly with your CA through WhatsApp or email.
                  </li>
                </ol>
              </div>

              {/* Why Choose */}
              <div className="border-t-2 border-gray-200 shadow-md p-2.5 ">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  💬 Why Choose Online CA Services
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                  <li>Verified Chartered Accountants</li>
                  <li>Expert for Income Tax, GST & Business Registration</li>
                  <li>Instant booking confirmation & follow-up</li>
                  <li>Secure and confidential service</li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="border-t-2 border-gray-200 shadow-md p-2.5 ">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  ⚠️ Disclaimer
                </h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Online CA Services is an independent platform connecting
                  clients with verified professionals. It is not a CA firm and
                  not affiliated with ICAI or any government body.
                </p>
              </div>

              {/* Final CTA */}
              <div className="text-center mt-8">
                <Link
                  href=""
                  target="_blank"
                  className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg text-base hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  📞 Book My CA Consultation Now ➡️
                </Link>
              </div>
            </div>
            {/* right - Booking Form */}
            <section className="bg-gray-50 rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent mb-6 text-center">
                Appointment Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all"
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
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg text-base font-semibold hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Pay & Book my Call
                </motion.button>
              </form>

             
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
