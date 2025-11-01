"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Can I hire a CA online?",
      answer:
        "Yes, you can easily hire a Chartered Accountant online through our platform. Our expert CAs provide virtual consultation, documentation, and compliance filing services from anywhere in India.",
    },
    {
      question: "What services do OnlineCA’s Chartered Accountants provide?",
      answer:
        "Our CAs offer company registration, GST filing, tax return preparation, accounting, compliance management, and business advisory services — all online for your convenience.",
    },
    {
      question: "How do I know which type of company registration is right for me?",
      answer:
        "Our experts analyze your business needs and suggest the best registration type — Private Limited, LLP, or Proprietorship — based on your goals, scale, and future plans.",
    },
    {
      question: "How long does it take to register a company?",
      answer:
        "The registration process typically takes 5–7 working days, depending on document readiness and government processing time.",
    },
    {
      question: "Can foreigners register a company in India?",
      answer:
        "Yes, foreign nationals and NRIs can register companies in India under FEMA and Companies Act guidelines. Our experts assist with documentation, legal compliance, and banking setup.",
    },
    {
      question: "How can OnlineCA’s CA services help my business?",
      answer:
        "We handle accounting, taxation, and compliance, allowing you to focus on business growth while we manage your financial and legal responsibilities efficiently.",
    },
    {
      question:
        "Why should I choose OnlineCA for my business's compliance needs?",
      answer:
        "We combine technology with professional expertise to ensure timely, accurate, and hassle-free compliance for startups and enterprises alike.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl text-teal-400 md:text-4xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our business registration and
            CA services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 focus:outline-none hover:bg-gray-50 transition rounded-xl"
              >
                <span className="font-medium text-gray-800 text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="p-5 text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
