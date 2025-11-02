'use client'

import {motion} from 'framer-motion'
import {Mail, PhoneCall, MessageCircle} from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
	return (
		<section className='relative overflow-hidden bg-linear-to-br from-teal-50 via-white to-cyan-50 py-24 px-4'>
			{/* Decorative Blurs - Static for performance */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute -top-24 -left-20 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl' />
				<div className='absolute bottom-0 -right-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl' />
			</div>

			{/* Main Card */}
			<div className='relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12'>
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: '-100px'}}
					transition={{duration: 0.5, ease: 'easeOut'}}
					className='bg-white/95 shadow-2xl rounded-3xl p-10 md:p-14 border border-gray-200'
					style={{willChange: 'transform, opacity'}}>
					{/* Header */}
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center'>
						📞 Need Help?
					</h2>

					<p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-center mb-10'>
						Get connected with a qualified professional for your{' '}
						<span className='font-semibold text-gray-800'>
							Income Tax, GST, or Business Compliance
						</span>{' '}
						requirements. Our experts are ready to assist you with quick,
						accurate, and reliable solutions.
					</p>

					{/* Contact Info Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center'>
						<motion.div
							whileHover={{scale: 1.03}}
							transition={{duration: 0.2}}
							className='bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col items-center justify-center transition-shadow hover:shadow-lg'
							style={{willChange: 'transform'}}>
							<PhoneCall className='text-teal-600 w-8 h-8 mb-3' />
							<p className='font-medium text-gray-800'>Call Us</p>
							<span className='text-sm text-gray-600'>+91-XXXXXXXXXX</span>
						</motion.div>

						<motion.div
							whileHover={{scale: 1.03}}
							transition={{duration: 0.2}}
							className='bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col items-center justify-center transition-shadow hover:shadow-lg'
							style={{willChange: 'transform'}}>
							<Mail className='text-teal-500 w-8 h-8 mb-3' />
							<p className='font-medium text-gray-800'>Email Us</p>
							<span className='text-sm text-gray-600'>
								myonlinecaservices@gmail.com
							</span>
						</motion.div>

						<motion.div
							whileHover={{scale: 1.03}}
							transition={{duration: 0.2}}
							className='bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col items-center justify-center transition-shadow hover:shadow-lg'
							style={{willChange: 'transform'}}>
							<MessageCircle className='text-teal-500 w-8 h-8 mb-3' />
							<p className='font-medium text-gray-800'>WhatsApp</p>
							<Link
								href='https://wa.me/919999999999'
								target='_blank'
								className='text-sm text-teal-700 hover:underline'>
								Chat with Us
							</Link>
						</motion.div>
					</div>

					{/* CTA Button */}
					<div className='text-center'>
						<Link
							href='/contact'
							className='relative inline-flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-full bg-linear-to-r from-teal-500 to-cyan-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group'
							style={{willChange: 'transform'}}>
							<span className='relative z-10 flex items-center'>
								Submit Your Request
								<span className='ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1'>
									→
								</span>
							</span>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
