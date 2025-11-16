"use client";

import {
  FileText,
  ClipboardCheck,
  Users,
  Building2,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="bg-linear-to-br from-gray-100 via-white to-slate-100 text-gray-900">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-28 h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
          {/* ✅ Background Image */}
          <div className="absolute inset-0">
            <img
              src="/S1.png"
              alt="Our Services – Online CA Services"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* ✅ Content */}
          <div className="relative z-10 container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl pt-16 sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Our Services – Online CA Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-100"
            >
              Trusted platform connecting users with qualified professionals for
              all their Income Tax, GST, Accounting, and Business Compliance
              needs across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex justify-center"
            >
              <Link
                href="#all-services"
                className="px-6 py-3 rounded-md text-white font-semibold shadow-md transition hover:opacity-90 bg-linear-to-r from-blue-500 to-teal-500"
              >
                Explore All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* GRID OF SERVICE CARDS */}
        <section
          id="all-services"
          className="max-w-7xl  mt-10 mx-auto px-6 pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm uppercase  tracking-widest text-gray-500">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent mt-2">
              What We Offer
            </h3>
            <p className=" text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At{" "}
              <span className="font-semibold text-[#008080]">
                Online CA Services
              </span>
              , we provide a comprehensive range of accounting, taxation, and
              compliance solutions to simplify your financial journey — all
              delivered online by verified experts.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </section>
        <section className="bg-gray-50 py-10 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm md:text-base text-gray-700 font-medium">
              *Fees will be confirmed after a comprehensive case review in consultation with a qualified and experienced Chartered Accountant. The final charges may vary based on the scope, complexity, and volume of work involved. Once the fee is agreed upon with the CA, you may proceed to pay it by clicking on the ‘Pay Fees’ button.
            </p>
            
          </div>
        </section>

        {/* 🔹 DETAILED SERVICE INFORMATION SECTION */}
        <section className=" py-20 mt-1 px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {detailedServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-md p-8 md:p-10 border-l-4 border-[#008080]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#008080] text-2xl">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold bg-linear-to-r from-teal-500 to-blue-400 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed">{service.desc}</p>

                <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
                  {service.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>

                <div className="mt-5 text-gray-700">
                  <strong>Why choose our professionals:</strong>{" "}
                  <span className="text-[#008080] font-medium">
                    ✅ Accurate filings, ✅ Deadline assurance, ✅ Secure online
                    process.
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="inline-block mt-6 text-[#0B3D91] font-semibold hover:underline"
                >
                  {service.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-white border-t py-16 text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-600 max-w-xl mx-auto"
          >
            Connect with a verified Chartered Accountant and manage your
            business or taxes professionally — all online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold"
              style={{ backgroundColor: "#008080" }}
            >
              Contact a CA Now
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#008080] text-[#008080] font-semibold hover:bg-[#008080] hover:text-white transition"
            >
              Learn More
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* --- SERVICE CARD COMPONENT --- */

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];

  priceAmount: string;
};

function ServiceCard({
  icon,
  title,
  desc,
  bullets,

  priceAmount,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full">
      <div>
        {/* Icon */}
        <div className="flex items-center gap-3 mb-3">{icon}</div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>

        {/* Bullets */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#008080] mt-1">✔</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mt-4 text-sm">
          <span className="text-xl font-semibold text-gray-800">Pricing: </span>
          <span className="text-[#008080] font-bold text-base">
            {priceAmount}
          </span>
        </div>
      </div>

      {/* CTA Button — Centered */}
      <Link
        href="https://pages.razorpay.com/professional-fees"
        className="
      bg-teal-600 
      text-white 
      px-5
      py-2 
      rounded-lg 
      text-sm 
      font-semibold 
      flex 
      items-center 
      justify-center 
      shadow-sm 
      transition-all 
      duration-300 
      hover:bg-white
      hover:text-gray-900

      hover:border-2
      hover:border-teal-200
      hover:shadow-md 
      hover:scale-105
      active:scale-95
      w-full
      mx-auto          /* ⬅ Centers the button */
      mt-6
    "
      >
        Pay   Fees
      </Link>
    </div>
  );
}

/* --- SERVICE DATA --- */
const services = [
  {
    icon: <FileText className="w-6 h-6 text-[#008080]" />,
    title: "Online CA for ITR Filing & Income Tax",
    desc: "Expert ITR filing, tax notice replies, and tax planning with 100% accuracy and deadline assurance.",
    bullets: [
      "ITR Filing (ITR-1 to ITR-7)",
      "Tax Notice Replies & Compliance",
      "Revised / Rectified Returns",
      "Tax Planning & Advisory",
    ],

    priceAmount: "₹499* Onwards",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-[#008080]" />,
    title: "Online CA for GST Registration & Return Filing",
    desc: "Find the right CA for GST registration or return filing — fully handled online by professionals.",
    bullets: [
      "GST Registration (Regular / Composition)",
      "GST Return Filing (GSTR-1, 3B, 9, 9C)",
      "GST Notices & Replies",
      "ITC Reconciliation",
    ],

    priceAmount: "₹999* Onwards",
  },
  {
    icon: <Users className="w-6 h-6 text-[#008080]" />,
    title: "Online CA for Accounting & Bookkeeping",
    desc: "Qualified accountants to manage your books, payroll, and reports efficiently and securely.",
    bullets: [
      "Monthly Bookkeeping (Tally / Zoho / QuickBooks)",
      "Payroll & Bank Reconciliation",
      "MIS & Financial Reports",
      "Virtual CFO Support",
    ],

    priceAmount: "₹999* Onwards",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#008080]" />,
    title: "Online CA for Company Registration & Business Setup",
    desc: "End-to-end support for business setup — from registration to startup advisory.",
    bullets: [
      "Proprietorship / LLP / Pvt Ltd / OPC Registration",
      "Startup India, MSME & UDYAM",
      "Shop & Establishment License",
    ],

    priceAmount: "₹1999* Onwards",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#008080]" />,
    title: "Online CA for Business Compliance & Advisory",
    desc: "Stay compliant with ROC filings, Director KYC, PAN/TAN, legal drafting, and audits.",
    bullets: [
      "ROC Annual Filings (MGT-7, AOC-4)",
      "Director KYC & Legal Drafting",
      "Audit & Due Diligence Reports",
    ],

    priceAmount: "₹1,999* Onwards",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#008080]" />,
    title: "Online CA near me for All-in-One Business Solutions",
    desc: "From ITR to GST to compliance — one digital platform for all your CA and business needs.",
    bullets: [
      "One-stop CA Platform",
      "Verified Professionals",
      "Secure Online Process",
    ],

    priceAmount: "₹1,999* Onwards",
  },
];

/* --- DETAILED SERVICES SECTION DATA --- */
const detailedServices = [
  {
    icon: "🧾",
    title: "Online CA for ITR Filing & Income Tax Services",
    desc: "Are you looking for an online CA for ITR filing or to handle your income tax matters? Our professionals assist with tax filing, compliance, and personalized advisory.",
    points: [
      "ITR Filing (ITR-1 to ITR-7) for individuals, freelancers, and businesses.",
      "Tax Notice Replies (143(1), 139(9), 148, 154).",
      "Revised / Rectified Returns.",
      "Tax Planning & Advisory under sections 80C, 80D, 80G.",
      "TDS Return Filing and Form 16 analysis.",
    ],
    cta: "File My ITR Online →",
  },
  {
    icon: "💰",
    title: "Online CA for GST Registration & Return Filing",
    desc: "Find a trusted CA for GST registration or return filing. Our experts handle everything from registration to return filing — 100% online.",
    points: [
      "New GST Registration (Regular / Composition).",
      "GST Return Filing (GSTR-1, 3B, 9, 9C).",
      "GST Notices & Replies (DRC-01, DRC-07, ASMT-10, etc.).",
      "ITC Reconciliation and GST Amendments.",
      "E-Invoicing & E-Way Bill Setup.",
    ],
    cta: "Connect with a GST Expert Now →",
  },
  {
    icon: "📚",
    title: "Online CA for Accounting & Bookkeeping Services",
    desc: "Startups, freelancers, and businesses can get their accounting managed efficiently by qualified professionals.",
    points: [
      "Monthly Bookkeeping (Tally / Zoho / QuickBooks).",
      "Ledger Scrutiny & Trial Balance Management.",
      "Payroll Processing & Salary Structuring.",
      "Bank Reconciliation Statements.",
      "MIS & Financial Report Preparation.",
    ],
    cta: "Get My Accounts Managed Online →",
  },
  {
    icon: "🏢",
    title: "Online CA for Company Registration & Business Setup",
    desc: "Get end-to-end support for business registration, incorporation, and startup advisory from experts.",
    points: [
      "Proprietorship & Partnership Firm Registration.",
      "LLP & One Person Company (OPC) Incorporation.",
      "Private Limited Company Registration (MCA).",
      "Startup India, MSME, and UDYAM Registration.",
      "Shop & Establishment License Assistance.",
    ],
    cta: "Register My Business Online →",
  },
  {
    icon: "⚖️",
    title: "Online CA for Business Compliance & Advisory",
    desc: "Ensure full compliance with ROC filings, Director KYC, PAN/TAN applications, and legal documentation.",
    points: [
      "ROC Annual Filings (MGT-7, AOC-4).",
      "Director KYC (DIR-3 KYC).",
      "PAN, TAN & DIN Applications.",
      "Legal Drafting & Agreements.",
      "Business Tax Advisory & Audit Reports.",
    ],
    cta: "Ensure My Business Compliance →",
  },
  {
    icon: "🧩",
    title: "Online CA near me for All-in-One Business Solutions",
    desc: "From tax filing to business registration, get everything your business needs under one platform.",
    points: [
      "CA for Business Registration, ITR & GST.",
      "End-to-End Compliance Solutions.",
      "Trusted & Verified CA Professionals.",
    ],
    cta: "Get Started with Online CA Services →",
  },
];
