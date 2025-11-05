'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Mail, MessageCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getWhatsAppLink } from '../utils/whatsapp'

interface FAQItem {
  question: string
  answer: string | string[]
}

const faqs: FAQItem[] = [
  {
    question: 'Can I hire a CA online through Online CA Services?',
    answer:
      "Yes, you can easily hire a qualified and verified Chartered Accountant online through our portal. Simply share your requirement — whether it's ITR filing, GST registration, accounting, or business compliance — and our team will connect you with the right professional instantly.",
  },
  {
    question: 'What services do Online CA Services professionals provide?',
    answer: [
      'We connect you with qualified professionals who offer:',
      '• Income Tax Return (ITR) filing for individuals and businesses',
      '• GST registration and monthly return filing',
      '• Bookkeeping and accounting',
      '• Business registration (LLP, OPC, Private Limited, Partnership)',
      '• ROC annual compliance and director KYC',
      '• Tax notice replies and legal documentation support',
      '',
      'All services are delivered online, paperless, and securely.',
    ],
  },
  {
    question: 'How do I know which type of company registration is right for me?',
    answer:
      'Our professionals provide free initial guidance to help you decide whether a Proprietorship, LLP, OPC, or Private Limited Company suits your goals. They analyze your business model, partners, investment plans, and compliance expectations before recommending the best structure.',
  },
  {
    question: 'How long does it take to register a company in India?',
    answer: [
      'It usually takes 3 to 7 working days, depending on:',
      '• Type of business entity',
      '• Document verification',
      '• MCA approval timelines',
      '',
      'You can start your registration today with minimal documentation through Online CA Services.',
    ],
  },
  {
    question: 'Can foreigners or NRIs register a company in India?',
    answer:
      'Yes, NRIs and foreign nationals can register a business in India under FEMA and MCA guidelines. However, specific documents like passport, notarized proof of address, and authorized representative details are required. Our professionals can handle the entire registration process end-to-end.',
  },
  {
    question: 'How can Online CA Services help my business beyond registration?',
    answer:
      'We provide 360° business support — from tax planning, GST filing, payroll setup, and accounting automation to ROC compliance and audits. Think of us as your long-term digital finance partner.',
  },
  {
    question:
      'What are the benefits of filing ITR with a professional instead of doing it yourself?',
    answer: [
      'When you file through a qualified CA, you:',
      '✅ Avoid common filing errors',
      '✅ Claim all eligible deductions under Sections 80C, 80D, 80G, etc.',
      '✅ Prevent future tax notices',
      '✅ Get expert advice on refund optimization',
      '',
      'In short, your return is accurate, compliant, and stress-free.',
    ],
  },
  {
    question: 'How secure is my data when I upload documents?',
    answer:
      'All files uploaded through Online CA Services are protected using SSL encryption. Your data is stored on secure servers and shared only with verified professionals who handle your specific service request.',
  },
  {
    question: 'Are you a registered CA firm?',
    answer:
      'No. Online CA Services is an independent online portal that connects clients with verified and experienced professionals. We are not affiliated with The Institute of Chartered Accountants of India (ICAI) or any government body. All professionals working through our portal are individually qualified and licensed.',
  },
  {
    question: 'How do I get started with Online CA Services?',
    answer: [
      'You can begin in three simple steps:',
      '1️⃣ Click on the "Contact Us" button or fill the quick inquiry form.',
      '2️⃣ Share your service requirement (ITR, GST, Registration, etc.).',
      '3️⃣ Get connected with a qualified professional instantly for a free consultation.',
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index)

  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-800 overflow-hidden">
        {/* ✅ Hero Section */}
        <section className="relative py-20 md:py-28 h-[80vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0">
            <img
              src="/f1.jpeg"
              alt="FAQ Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Get answers to common questions about our Tax, GST, Accounting & Business Registration Services.
            </motion.p>
          </div>
        </section>

        {/* ✅ FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-teal-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-out ${
                    openIndex === index
                      ? 'max-h-[1000px] opacity-100 py-4'
                      : 'max-h-0 opacity-0 py-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 text-gray-700 leading-relaxed border-t border-gray-100">
                    {Array.isArray(faq.answer) ? (
                      <div className="space-y-1">
                        {faq.answer.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-linear-to-r from-teal-600 to-blue-700 rounded-2xl p-10 text-white text-center shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Still Confused? Let Our CA Guide You for Free
            </h2>
            <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
              Get a free expert consultation from verified professionals. We'll guide you through ITR filing, GST registration, accounting setup, or business incorporation — without any consultation charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:myonlinecaservices@gmail.com"
                className="bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
