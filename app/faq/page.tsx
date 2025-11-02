'use client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {useState} from 'react'
import {ChevronDown, Mail, MessageCircle} from 'lucide-react'

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

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<>
			<Header />
			<main className='min-h-screen bg-gray-50 pt-20 pb-16'>
				<style
					jsx
					global>{`
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.header-fade {
						animation: fadeInUp 0.8s ease-out forwards;
					}
					.content-fade {
						animation: fadeInUp 0.8s ease-out 0.4s forwards;
						opacity: 0;
					}
				`}</style>

				<div className='max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12'>
					{/* Header Section */}
					<div className='text-center mb-12 header-fade'>
						<h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
							Frequently Asked Questions
						</h1>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Get answers to common questions about our Tax, GST, Accounting &
							Business Registration Services
						</p>
					</div>

					{/* FAQ Accordion */}
					<div className='space-y-4 content-fade'>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg'>
								<button
									onClick={() => toggleFAQ(index)}
									className='w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors'>
									<span className='text-lg font-semibold text-gray-900 pr-4'>
										{index + 1}. {faq.question}
									</span>
									<ChevronDown
										className={`shrink-0 text-teal-600 transition-transform duration-300 ${
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
									} overflow-hidden`}>
									<div className='px-6 text-gray-700 leading-relaxed border-t border-gray-100'>
										{Array.isArray(faq.answer) ? (
											<div className='space-y-1'>
												{faq.answer.map((line, i) => (
													<p key={i}>{line}</p>
												))}
											</div>
										) : (
											<p>{faq.answer}</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* CTA Section */}
					<div className='mt-16 bg-linear-to-r from-teal-600 to-blue-700 rounded-xl p-8 text-white text-center shadow-lg content-fade'>
						<h2 className='text-2xl sm:text-3xl font-bold mb-3'>
							Still Confused? Let Our CA Guide You for Free
						</h2>
						<p className='text-teal-50 mb-6 max-w-2xl mx-auto'>
							Get a free expert consultation from verified professionals. We'll
							guide you through ITR filing, GST registration, accounting setup,
							or business incorporation — without any consultation charges.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<a
								href='https://wa.me/911219822222'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2'>
								<MessageCircle size={20} />
								Chat on WhatsApp
							</a>
							<a
								href='mailto:myonlinecaservices@gmail.com'
								className='bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2'>
								<Mail size={20} />
								Email Us
							</a>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
