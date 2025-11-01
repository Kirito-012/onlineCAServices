"use client";

import { motion } from "framer-motion";
import {
  Users,
  IndianRupee,
  UploadCloud,
  Clock,
  Globe,
  Headphones,
  Star,
  CheckCircle,
  Headset,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert CA Team",
      desc: "Qualified professionals with years of experience in taxation and compliance.",
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-blue-600" />,
      title: "Transparent Pricing",
      desc: "No hidden fees. Pay only for what you see. Complete pricing transparency.",
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-blue-600" />,
      title: "100% Digital Process",
      desc: "Upload documents securely online. Track progress in real-time.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Fast Turnaround",
      desc: "Get your work done within 24–48 hours, meeting all deadlines.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Pan India Support",
      desc: "Serving businesses across all states and union territories.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "Free Expert Consultation",
      desc: "Get guidance from our expert CAs before making any commitment.",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Satisfied Clients", icon: <Users className="w-6 h-6 text-yellow-500" /> },
    { value: "4.9 ⭐", label: "Google Rating", icon: <Star className="w-6 h-6 text-yellow-500" /> },
    { value: "100%", label: "Accurate Service", icon: <CheckCircle className="w-6 h-6 text-green-500" /> },
    { value: "24/7", label: "Expert Support", icon: <Headset className="w-6 h-6 text-blue-600" /> },
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-800 font-semibold">
            Why Choose Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-4xl text-teal-400 font-bold mb-4"
        >
          India's Most Trusted Online Chartered Accountants
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-600 mb-12"
        >
          Our team of experienced professionals is dedicated to providing you
          with the best service at transparent pricing.
        </motion.p>

        {/* Features Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white shadow-md rounded-2xl p-8"
          style={{ willChange: "transform, opacity" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
