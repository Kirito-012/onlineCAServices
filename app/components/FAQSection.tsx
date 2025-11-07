'use client'

import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {ChevronDown} from 'lucide-react'
import Link from 'next/link'

export default function FAQSection() {
	const faqs = [
		{
			question: 'Can I hire a CA online through Online CA Services?',
			answer:
				'Yes, you can easily hire a Chartered Accountant online through our platform. Our expert CAs provide virtual consultation, documentation, and compliance filing services from anywhere in India.',
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
			question:
				'How do I know which type of company registration is right for me?',
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
			question:
				'How can Online CA Services help my business beyond registration?',
			answer:
				'We provide 360° business support — from tax planning, GST filing, payroll setup, and accounting automation to ROC compliance and audits. Think of us as your long-term digital finance partner.',
		},
	]

	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<section className='py-20 bg-gray-50 text-gray-800'>
			<div className='max-w-4xl mx-auto px-6 sm:px-8 lg:px-12'>
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					className='text-center mb-10'>
					<h2 className='text-3xl bg-linear-to-r from-blue-600 via-teal-400 to-gray-900 bg-clip-text text-transparent md:text-4xl font-bold mb-2'>
						Frequently Asked Questions
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Get answers to common questions about our business registration and
						CA services.
					</p>
				</motion.div>

				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{delay: index * 0.05}}
							className='bg-white rounded-xl shadow-sm border border-gray-100'>
							<button
								onClick={() => toggleFAQ(index)}
								className='w-full flex justify-between items-center text-left p-5 focus:outline-none hover:bg-gray-50 transition rounded-xl'>
								<span className='font-medium text-gray-800 text-base md:text-lg'>
									{faq.question}
								</span>
								<motion.span
									animate={{rotate: activeIndex === index ? 180 : 0}}
									transition={{duration: 0.3}}>
									<ChevronDown className='w-5 h-5 text-gray-600' />
								</motion.span>
							</button>

							<AnimatePresence initial={false}>
								{activeIndex === index && (
									<motion.div
										key='content'
										initial={{opacity: 0, height: 0}}
										animate={{opacity: 1, height: 'auto'}}
										exit={{opacity: 0, height: 0}}
										transition={{duration: 0.4, ease: 'easeInOut'}}
										className='overflow-hidden border-t border-gray-100'>
										<div className='p-5 text-gray-600 text-sm md:text-base leading-relaxed'>
											{Array.isArray(faq.answer) ? (
												<div className='space-y-2'>
													{faq.answer.map((line, i) => (
														<p key={i} className={line.startsWith('•') ? 'ml-4' : ''}>
															{line}
														</p>
													))}
												</div>
											) : (
												<p>{faq.answer}</p>
											)}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.3}}
					className='text-center mt-10'>
					<Link
						href='/faq'
						className='inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'>
						Read More FAQs
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
