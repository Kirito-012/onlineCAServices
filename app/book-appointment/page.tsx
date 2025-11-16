"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BookAppointment() {
  return (
    <>
      <Header />

      <main className=" bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent mb-6">
          Book On-Call Appointment with a CA
        </h1>

        <p className="text-gray-700 text-center mb-10 leading-relaxed max-w-2xl mx-auto">
          Connect instantly with a verified Online CA for Income Tax, GST,
          Accounting & Business Compliance. Book a one-on-one voice call or
          Zoom/Google Meet session directly with a trusted Chartered Accountant.
        </p>

        <div className="w-full flex justify-center mt-6">
          <Link href="https://rzp.io/rzp/book-ca-call">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="bg-teal-600 text-white py-3 px-6 rounded-lg text-base font-semibold 
      hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg 
      w-60 text-center"
            >
              Pay & Book my Call
            </motion.button>
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-2xl pt-10 sm:text-3xl font-bold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent text-center mb-6">
          Service Information
        </h2>
        <div className="max-w-7xl mx-auto border-2 border-gray-50 shadow-lg rounded-2xl p-6 sm:p-10">
          {/* INFORMATION CARDS */}
          <div className="text-gray-700">
            {/* GRID FOR CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Consultation Details Card */}
              <div className="border-t-2 border-gray-400 shadow-xl p-4 rounded-2xl bg-white">
                <h3 className="text-lg font-semibold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent  mb-2">
                  Consultation Details
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base">
                  <li>
                    {" "}
                    <b>Duration:</b> 30 minutes (extendable as per requirement)
                  </li>
                  <li>
                    <b>Consultation Fee</b> Consultation Fee: Very Nominal as
                    mentioned in the form.
                  </li>
                  <li>
                    <b>Additional Benefit:</b> Additional Benefit: One
                    complimentary follow-up session
                  </li>
                  <li>
                    <b> Services Covered:</b> Income Tax, GST, business
                    registration, personal finance tax planning, accounting,
                    Other Services.
                  </li>
                  <li>
                    <b>Availability:</b> Monday to Sunday, 9:00 AM – 9:00 PM
                  </li>
                  <li>
                    {" "}
                    <b>Modes Available:</b> Phone Call, Zoom, or Google Meet
                  </li>
                </ul>
              </div>

              {/* How It Works Card */}
              <div className="border-t-2 border-gray-400 shadow-xl p-4 rounded-2xl ">
                <h3 className="text-lg font-semibold bg-linear-to-r from-blue-500 via-teal-400 to-gray-900 bg-clip-text text-transparent mb-2">
                  How It Works
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base">
                  <li>Click “Pay & Book My Call”.</li>
                  <li>
                    Fill in the booking form with your details and preferred
                    appointment date & time.
                  </li>
                  <li>
                    Our expert Chartered Accountant will connect with you via
                    phone, Zoom, or Google Meet at the scheduled time.
                  </li>
                  <li>
                    Receive clear, actionable and professional guidance during
                    your consultation.
                  </li>
                  <li>
                    Enjoy one free follow-up session for continued support.
                  </li>
                </ol>
              </div>

              {/* Why Choose Card */}
              {/* <div className="border-t-2 border-gray-400 shadow-xl p-4 rounded-2xl bg-white">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  💬 Why Choose Online CA Services
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li>Verified & Highly Experienced Chartered Accountants</li>
                  <li>
                    Specialists in Taxation, GST, Registrations & Personal
                    Finance
                  </li>
                  <li>Quick appointment booking with guaranteed callback</li>
                  <li>Secure, confidential & reliable service</li>
                  <li>Detailed guidance with structured follow-up support</li>
                  <li>
                    End-to-end assistance for individuals, businesses &
                    start-ups
                  </li>
                </ul>
              </div> */}

              {/* Disclaimer Card */}
              {/* <div className="border-t-2 border-gray-400 shadow-xl p-4 rounded-2xl bg-linear-to-br from-teal-600 to-blue-700 text-white">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  ⚠️ Disclaimer
                </h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Online CA Services is an independent online platform that
                  connects users with experienced and verified Chartered
                  Accountants for tax, GST, and compliance-related
                  consultations. We act only as a facilitator and do not provide
                  any professional certification, audit services, or legal
                  representation on behalf of any CA.
                </p>
              </div> */}
            </div>
          </div>
        </div>
        {/* WHY CHOOSE SECTION */}
        <section className="bg-linear-to-br mt-12 from-teal-200 via-white to-blue-200 text-gray-700 py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Online CA Services?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Verified & Highly Experienced Chartered Accountants",
              "Specialists in Taxation, GST, Registrations & Personal Finance",
              "Quick appointment booking with guaranteed callback",
              "Secure, confidential & reliable service",
              "Detailed guidance with structured follow-up support",
              "End-to-end assistance for individuals, businesses & start-ups",
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
