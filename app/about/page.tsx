"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Settings,
  CheckCircle,
  Shield,
  Mail,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-800 overflow-hidden">
        <style jsx global>{`
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
          }
          .hero-fade {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* ✅ Hero Section */}
        <section className="relative py-20 md:py-28 h-[60vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0">
            <img
              src="/A1.png"
              alt="About Online CA Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl pt-12 sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Online CA Services – your trusted digital platform connecting you
              with certified chartered accountants and professionals across
              India for Income Tax, GST, and business compliance solutions.
            </motion.p>
          </div>
        </section>

        {/* ✅ Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          {/* Who We Are */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-teal-600" size={32} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Who We Are
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Online CA Services (
                <a
                  href="https://www.onlinecaservices.com"
                  className="text-teal-600 hover:text-teal-700 underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.onlinecaservices.com
                </a>
                ) is an independent digital platform that helps individuals,
                entrepreneurs, and businesses connect with qualified
                professionals for Income Tax, GST, Accounting, and Business
                Compliance services across India.
              </p>
              <p>
                We operate strictly as an information and connection portal.{" "}
                <strong>
                  Online CA Services is not a Chartered Accountancy firm
                </strong>
                , does not offer professional services directly, and is not
                affiliated with or endorsed by The Institute of Chartered
                Accountants of India (ICAI).
              </p>
              <p>
                Our goal is to make reliable, transparent, and affordable
                compliance assistance accessible to every taxpayer and business
                owner in the country through technology-enabled connectivity.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-10">
            {/*Our Mission */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-teal-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                To empower individuals and businesses by providing a simple,
                secure, and transparent online system that connects them with
                experienced professionals for all their taxation and
                business-compliance needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p>
                    <strong>Accessibility:</strong> Seamless online availability
                    of professional help across India.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p>
                    <strong>Transparency:</strong> Clear pricing, timelines, and
                    processes for every user.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p>
                    <strong>Integrity:</strong> Ethical coordination between
                    users and professionals.
                  </p>
                </div>
              </div>
            </div>

            {/*  Our Vision */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="text-teal-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                To be India's most trusted and user-friendly
                professional-connection platform, making compliance effortless
                for individuals and enterprises.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p>
                    <strong>Trust:</strong> Building long-term relationships
                    through consistent, reliable, and ethical services.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p>
                    <strong>Digital Empowerment:</strong> Leveraging technology
                    to simplify compliance for all individuals and businesses.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p>
                    <strong>Global Reach:</strong> Expanding services and
                    accessibility to support clients across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="text-teal-600" size={32} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                How We Work
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-10">
              We follow a transparent four-step process designed to ensure that
              every inquiry receives expert attention:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Submit Your Requirement",
                  text: "You fill out a quick online form specifying your tax or compliance need.",
                },
                {
                  title: "Expert Matching",
                  text: "Our system routes your inquiry to a qualified professional suited to your requirement.",
                },
                {
                  title: "Direct Communication",
                  text: "You interact directly with the professional to share details and documents.",
                },
                {
                  title: "Digital Completion",
                  text: "All work, filings, and confirmations are completed online for your convenience.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-linear-to-br from-teal-600 to-blue-700 rounded-2xl shadow-lg p-8 sm:p-12 text-white animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield size={28} />,
                  title: "Integrity & Ethics",
                  text: "Honest communication and fair dealings at every step.",
                },
                {
                  icon: <CheckCircle size={28} />,
                  title: "Professional Excellence",
                  text: "Only qualified experts handle user requests.",
                },
                {
                  icon: <Shield size={28} />,
                  title: "Confidentiality",
                  text: "Your data and documents remain private and protected.",
                },
                {
                  icon: <Eye size={28} />,
                  title: "Transparency",
                  text: "No hidden fees or unclear terms.",
                },
                {
                  icon: <Settings size={28} />,
                  title: "Innovation",
                  text: "Technology-driven solutions for modern financial needs.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-3">{value.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-teal-50 text-sm">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 text-center animate-on-scroll">
            <Mail className="text-teal-600 mx-auto mb-4" size={36} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              Have a query or need help connecting with a qualified
              professional? Reach out via email at{" "}
              <a
                href="mailto:myonlinecaservices@gmail.com"
                className="text-teal-600 hover:text-teal-700 underline font-medium"
              >
                myonlinecaservices@gmail.com
              </a>{" "}
              or use our Contact Form — we’ll ensure you’re matched with the
              right expert quickly.
            </p>
            <a
              href="https://wa.me/918595236343"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Connect with a Professional →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
