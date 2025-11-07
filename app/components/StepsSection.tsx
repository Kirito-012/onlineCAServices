"use client";

import { motion } from "framer-motion";
import { ClipboardList, PhoneCall, CheckCircle } from "lucide-react";

export default function StepsSection() {
  const steps = [
    {
      id: 1,
      icon: <ClipboardList className="w-7 h-7 text-teal-700" />,
      title: "Share Your Requirements",
      desc: "Simply fill out our quick form with your needs — it takes just a minute to get started.",
    },
    {
      id: 2,
      icon: <PhoneCall className="w-7 h-7 text-teal-700" />,
      title: "Consult a CA Expert",
      desc: "Schedule a free consultation with our CA to discuss your specific requirements in detail.",
    },
    {
      id: 3,
      icon: <CheckCircle className="w-7 h-7 text-teal-700" />,
      title: "We Handle Everything",
      desc: "Relax while our experts take care of the entire process from start to finish for you.",
    },
  ];

  return (
    <section className="relative bg-linear-to-br from-teal-50 via-white to-blue-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent"
        >
          Only 3 Easy Steps to Get Started
        </motion.h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our streamlined process makes working with us simple, quick, and efficient.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-left  h-full bg-white rounded-2xl p-8 shadow-md border-t-4 border-gray-100 hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 ">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              <span className="absolute top-2 right-5 text-5xl font-bold text-gray-200 select-none">
                {step.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
