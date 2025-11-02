'use client'
import {useState} from 'react'
import {FaUser, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'

export default function HeroSection() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		service: '',
	})

	return (
		<section className='relative text-white flex items-center justify-center bg-linear-to-br from-teal-600 via-teal-700 to-blue-900'>
			<style jsx>{`
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
				@keyframes fadeInLeft {
					from {
						opacity: 0;
						transform: translateX(-30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
				@keyframes fadeInRight {
					from {
						opacity: 0;
						transform: translateX(30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
				.animate-fade-in-up {
					animation: fadeInUp 0.8s ease-out forwards;
				}
				.animate-fade-in-left {
					animation: fadeInLeft 0.8s ease-out forwards;
				}
				.animate-fade-in-right {
					animation: fadeInRight 0.8s ease-out forwards;
				}
				.delay-100 {
					animation-delay: 0.1s;
					opacity: 0;
				}
				.delay-200 {
					animation-delay: 0.2s;
					opacity: 0;
				}
				.delay-300 {
					animation-delay: 0.3s;
					opacity: 0;
				}
				.delay-400 {
					animation-delay: 0.4s;
					opacity: 0;
				}
				.delay-500 {
					animation-delay: 0.5s;
					opacity: 0;
				}
				.delay-600 {
					animation-delay: 0.6s;
					opacity: 0;
				}
				.delay-700 {
					animation-delay: 0.7s;
					opacity: 0;
				}
				.delay-800 {
					animation-delay: 0.8s;
					opacity: 0;
				}
			`}</style>
			<div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent'></div>

			<div className='relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-8 lg:px-12 z-10 py-12'>
				{/* Left Content */}
				<div className='lg:w-1/2 space-y-5 text-center lg:text-left w-full'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight animate-fade-in-left'>
						<span className='text-white'>
							Trusted & Expert Chartered Accountants for{' '}
						</span>
						<span className='text-teal-300'>
							ITR Filing, GST Returns, Accounting & Company Registration
						</span>
					</h1>

					<p className='text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-left delay-200'>
						Online CA Services Near Me - Simple, Secure & Affordable Chartered
						Accountant Support Across India
					</p>

					{/* Feature Highlights */}
					{/* <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6 animate-fade-in-up delay-300'>
						{[
							{title: '50,000+ Happy Clients', icon: '👥'},
							{title: '4.9★ Google Rating', icon: '⭐'},
							{title: 'No Hidden Fees', icon: '📄'},
							{title: 'Pan India Coverage', icon: '🌐'},
						].map((f, i) => (
							<div
								key={i}
								className='bg-white/10 backdrop-blur-sm p-3 rounded-lg text-xs sm:text-sm text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300'>
								<div className='text-xl mb-1'>{f.icon}</div>
								<div className='font-medium'>{f.title}</div>
							</div>
						))}
					</div> */}

					{/* CTA Buttons */}
					<div className='flex flex-wrap gap-3 mt-6 animate-fade-in-left delay-400 justify-center lg:justify-start'>
						<button className='cursor-pointer bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-teal-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'>
							Chat on WhatsApp
						</button>
						<button className='cursor-pointer bg-white text-teal-700 border-2 border-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-teal-100 hover:scale-105 transition-all duration-200 shadow-lg'>
							Book CA Consultation →
						</button>
					</div>
				</div>

				{/* Right Form */}
				<div className='w-full max-w-md mx-auto lg:mx-0 bg-linear-to-br from-white/85 via-teal-50/75 to-blue-50/80 backdrop-blur-md rounded-xl shadow-2xl border border-white/40 p-6 lg:p-7 animate-fade-in-right delay-500'>
					<h2 className='text-xl font-bold text-center text-gray-900 mb-2'>
						Request a Callback
					</h2>
					<p className='text-center text-gray-600 text-xs mb-5'>
						Fill out the form and our experts will reach out shortly.
					</p>

					<form className='space-y-3.5'>
						<div className='relative'>
							<FaUser className='absolute left-3 top-3 text-gray-400 text-sm' />
							<input
								type='text'
								placeholder='Full Name'
								className='w-full pl-10 pr-3 text-black py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all'
							/>
						</div>

						<div className='relative'>
							<FaPhoneAlt className='absolute left-3 top-3 text-gray-400 text-sm' />
							<input
								type='tel'
								placeholder='Mobile Number'
								className='w-full pl-10 pr-3 text-black py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all'
							/>
						</div>

						<div className='relative'>
							<FaEnvelope className='absolute left-3 top-3 text-gray-400 text-sm' />
							<input
								type='email'
								placeholder='Email Address'
								className='w-full pl-10 pr-3 text-black py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all'
							/>
						</div>

						<select className='w-full px-3 py-2.5 text-sm rounded-lg text-gray-600 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all'>
							<option>Select Service Interested In</option>
							<option>Company Registration</option>
							<option>GST Filing</option>
							<option>Accounting & Tax</option>
							<option>Trademark Registration</option>
						</select>

						<button
							type='submit'
							className='w-full bg-teal-600 cursor-pointer hover:bg-teal-700 hover:scale-105 text-white font-semibold py-2.5 text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg mt-4'>
							Get Free Consultation
						</button>

						<p className='text-center text-xs text-gray-500 mt-3'>
							🔒 Your data is safe with us. We value your privacy.
						</p>
					</form>
				</div>
			</div>
		</section>
	)
}
