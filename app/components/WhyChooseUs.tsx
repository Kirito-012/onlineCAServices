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
  Shield,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Verified Experts",
      desc: "You are connected only with qualified professionals who have relevant credentials..",
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      desc: "You get clear cost estimates and scope before work starts.",
    },
    {
      icon: UploadCloud,
      title: "Fully Online Process",
      desc: "No office visits - complete digital interaction and secure document handling.",
    },
    {
      icon: Clock,
      title: "User Support",
      desc: "Friendly coordination and responsive assistance throughout your journey.",
    },
    {
      icon: Globe,
      title: "All India Availability",
      desc: "Services accessible in every state and city across India.",
    },
    {
      icon: Shield,
      title: "Data Security",
      desc: "SSL-secured portal with strict information protection.",
    },
  ];

  const stats = [
    { value: "5000+", label: "Satisfied Clients", icon: Users },
    { value: "5.0", label: "Google Rating", icon: Star },
    { value: "100%", label: "Accurate Service", icon: CheckCircle },
    { value: "24/7", label: "Expert Support", icon: Headset },
  ];

  return (
    <section className="relative py-24 bg-linear-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2 text-sm font-semibold rounded-full bg-teal-100 text-teal-700 border border-teal-200">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-5 bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent"
          >
            India's Most Trusted Online CA Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            Our team of experienced professionals is dedicated to providing you
            with the best service at transparent pricing, ensuring your business
            stays compliant and grows seamlessly.
          </motion.p>
        </div>

        {/* Stats Section - Moved Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-teal-100 to-cyan-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                      {stat.icon === Star && (
                        <span className="text-yellow-500 ml-1">⭐</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-3 sm:px-3 md:px-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex justify-center"
              >
                <div className="w-full h-full bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                  {/* Icon Centered */}
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.desc}
                  </p>

                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-teal-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
