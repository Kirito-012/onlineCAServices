'use client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'
import {useEffect} from 'react'
import {
	Building2,
	Target,
	Eye,
	Settings,
	CheckCircle,
	Shield,
	Mail,
} from 'lucide-react'

export default function About() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in')
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		)

		const elements = document.querySelectorAll('.animate-on-scroll')
		elements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])
	return (
		<>
			<Header />
			<main className='min-h-screen bg-gray-50 pt-20 pb-16'>
				<style
					jsx
					global>{`
					.animate-on-scroll {
						opacity: 0;
						transform: translateY(30px);
						transition: opacity 0.6s ease-out, transform 0.6s ease-out;
					}
					.animate-on-scroll.animate-in {
						opacity: 1;
						transform: translateY(0);
					}
					.stagger-1 {
						transition-delay: 0.1s;
					}
					.stagger-2 {
						transition-delay: 0.2s;
					}
					.stagger-3 {
						transition-delay: 0.3s;
					}
					.stagger-4 {
						transition-delay: 0.4s;
					}
					.hero-fade {
						animation: fadeInUp 0.8s ease-out forwards;
					}
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
				`}</style>
				<div className='max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12'>
					{/* Hero Section */}
					<div className='bg-linear-to-r from-teal-600 to-blue-700 rounded-xl p-8 sm:p-12 mb-12 text-white shadow-lg hero-fade'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
							About Us
						</h1>
						<p className='text-teal-50 text-lg sm:text-xl max-w-3xl'>
							Online CA Services – Connecting You with Qualified Professionals
							Across India
						</p>
					</div>

					{/* Content Container */}
					<div className='space-y-12'>
						{/* Who We Are */}
						<section className='bg-white rounded-xl shadow-md p-6 sm:p-10 animate-on-scroll'>
							<div className='flex items-center gap-3 mb-6'>
								<Building2
									className='text-teal-600'
									size={32}
								/>
								<h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
									Who We Are
								</h2>
							</div>
							<div className='space-y-4 text-gray-700 leading-relaxed'>
								<p>
									Online CA Services (
									<a
										href='https://www.onlinecaservices.com'
										className='text-teal-600 hover:text-teal-700 underline font-medium'
										target='_blank'
										rel='noopener noreferrer'>
										https://www.onlinecaservices.com
									</a>
									) is an independent, privately managed digital platform that
									helps individuals, entrepreneurs, and businesses connect with
									qualified professionals for Income Tax, GST, Accounting, and
									Business Compliance services across India.
								</p>
								<p>
									We operate strictly as an information and connection portal.{' '}
									<strong>
										Online CA Services is not a Chartered Accountancy firm
									</strong>
									, does not offer professional services directly, and is not
									affiliated with or endorsed by The Institute of Chartered
									Accountants of India (ICAI).
								</p>
								<p>
									Our goal is to make reliable, transparent, and affordable
									compliance assistance accessible to every taxpayer and
									business owner in the country through technology-enabled
									connectivity.
								</p>
							</div>
						</section>

						{/* Mission & Vision */}
						<div className='grid md:grid-cols-2 gap-6'>
							{/* Mission */}
							<section className='bg-white rounded-xl shadow-md p-6 sm:p-8 animate-on-scroll stagger-1'>
								<div className='flex items-center gap-3 mb-6'>
									<Target
										className='text-teal-600'
										size={28}
									/>
									<h2 className='text-2xl font-bold text-gray-900'>
										Our Mission
									</h2>
								</div>
								<p className='text-gray-700 leading-relaxed mb-6'>
									To empower individuals and businesses by providing a simple,
									secure, and transparent online system that connects them with
									experienced and qualified professionals for all their taxation
									and business-compliance needs.
								</p>
								<div className='space-y-3'>
									<p className='font-semibold text-gray-800 mb-3'>
										We focus on three pillars:
									</p>
									<div className='flex items-start gap-3'>
										<CheckCircle
											className='text-teal-600 shrink-0 mt-1'
											size={20}
										/>
										<div>
											<strong className='text-gray-900'>Accessibility:</strong>
											<span className='text-gray-700'>
												{' '}
												Seamless online availability of professional help across
												India.
											</span>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<CheckCircle
											className='text-teal-600 shrink-0 mt-1'
											size={20}
										/>
										<div>
											<strong className='text-gray-900'>Transparency:</strong>
											<span className='text-gray-700'>
												{' '}
												Clear pricing, timelines, and processes for every user.
											</span>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<CheckCircle
											className='text-teal-600 shrink-0 mt-1'
											size={20}
										/>
										<div>
											<strong className='text-gray-900'>Integrity:</strong>
											<span className='text-gray-700'>
												{' '}
												Ethical and responsible coordination between users and
												professionals.
											</span>
										</div>
									</div>
								</div>
							</section>

							{/* Vision */}
							<section className='bg-white rounded-xl shadow-md p-6 sm:p-8 animate-on-scroll stagger-2'>
								<div className='flex items-center gap-3 mb-6'>
									<Eye
										className='text-teal-600'
										size={28}
									/>
									<h2 className='text-2xl font-bold text-gray-900'>
										Our Vision
									</h2>
								</div>
								<p className='text-gray-700 leading-relaxed'>
									To be India's most trusted and user-friendly
									professional-connection platform, making financial and
									regulatory compliance effortless for both individuals and
									enterprises.
								</p>
							</section>
						</div>

						{/* How We Work */}
						<section className='bg-white rounded-xl shadow-md p-6 sm:p-10 animate-on-scroll'>
							<div className='flex items-center gap-3 mb-6'>
								<Settings
									className='text-teal-600'
									size={32}
								/>
								<h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
									How We Work
								</h2>
							</div>
							<p className='text-gray-700 leading-relaxed mb-8'>
								We follow a transparent four-step process designed to ensure
								that every inquiry receives expert attention:
							</p>
							<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
								{/* Step 1 */}
								<div className='bg-linear-to-br from-teal-50 to-blue-50 rounded-lg p-6 border-2 border-teal-100 hover:shadow-lg hover:scale-105 transition-all duration-300'>
									<div className='bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>
										1
									</div>
									<h3 className='font-bold text-gray-900 mb-2'>
										Submit Your Requirement
									</h3>
									<p className='text-gray-700 text-sm'>
										You fill out a quick online form specifying your tax or
										compliance need.
									</p>
								</div>

								{/* Step 2 */}
								<div className='bg-linear-to-br from-teal-50 to-blue-50 rounded-lg p-6 border-2 border-teal-100 hover:shadow-lg hover:scale-105 transition-all duration-300'>
									<div className='bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>
										2
									</div>
									<h3 className='font-bold text-gray-900 mb-2'>
										Expert Matching
									</h3>
									<p className='text-gray-700 text-sm'>
										Our system routes your inquiry to a qualified professional
										suited to your requirement.
									</p>
								</div>

								{/* Step 3 */}
								<div className='bg-linear-to-br from-teal-50 to-blue-50 rounded-lg p-6 border-2 border-teal-100 hover:shadow-lg hover:scale-105 transition-all duration-300'>
									<div className='bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>
										3
									</div>
									<h3 className='font-bold text-gray-900 mb-2'>
										Direct Communication
									</h3>
									<p className='text-gray-700 text-sm'>
										You interact directly with the professional to share details
										and documents.
									</p>
								</div>

								{/* Step 4 */}
								<div className='bg-linear-to-br from-teal-50 to-blue-50 rounded-lg p-6 border-2 border-teal-100 hover:shadow-lg hover:scale-105 transition-all duration-300'>
									<div className='bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>
										4
									</div>
									<h3 className='font-bold text-gray-900 mb-2'>
										Digital Completion
									</h3>
									<p className='text-gray-700 text-sm'>
										All work, filings, and confirmations are completed online
										for your convenience.
									</p>
								</div>
							</div>
							<p className='text-gray-700 leading-relaxed mt-8 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600'>
								Throughout the process, Online CA Services maintains
								confidentiality and ensures that user information is shared only
								for the intended purpose.
							</p>
						</section>

						{/* Why Choose Us */}
						<section className='bg-white rounded-xl shadow-md p-6 sm:p-10 animate-on-scroll'>
							<h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-8'>
								Why Choose Online CA Services
							</h2>
							<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								<div className='flex items-start gap-3'>
									<CheckCircle
										className='text-teal-600 shrink-0 mt-1'
										size={24}
									/>
									<div>
										<h3 className='font-bold text-gray-900 mb-1'>
											Verified Experts
										</h3>
										<p className='text-gray-700 text-sm'>
											You are connected only with qualified professionals who
											have relevant credentials.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<CheckCircle
										className='text-teal-600 shrink-0 mt-1'
										size={24}
									/>
									<div>
										<h3 className='font-bold text-gray-900 mb-1'>
											All India Availability
										</h3>
										<p className='text-gray-700 text-sm'>
											Services accessible in every state and city across India.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<CheckCircle
										className='text-teal-600 shrink-0 mt-1'
										size={24}
									/>
									<div>
										<h3 className='font-bold text-gray-900 mb-1'>
											Fully Online Process
										</h3>
										<p className='text-gray-700 text-sm'>
											No office visits - complete digital interaction and secure
											document handling.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<CheckCircle
										className='text-teal-600 shrink-0 mt-1'
										size={24}
									/>
									<div>
										<h3 className='font-bold text-gray-900 mb-1'>
											Transparent Pricing
										</h3>
										<p className='text-gray-700 text-sm'>
											You get clear cost estimates and scope before work starts.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<CheckCircle
										className='text-teal-600 shrink-0 mt-1'
										size={24}
									/>
									<div>
										<h3 className='font-bold text-gray-900 mb-1'>
											Data Security & Confidentiality
										</h3>
										<p className='text-gray-700 text-sm'>
											SSL-secured portal with strict information protection.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<CheckCircle
										className='text-teal-600 shrink-0 mt-1'
										size={24}
									/>
									<div>
										<h3 className='font-bold text-gray-900 mb-1'>
											User Support
										</h3>
										<p className='text-gray-700 text-sm'>
											Friendly coordination and responsive assistance throughout
											your journey.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Core Values */}
						<section className='bg-linear-to-br from-teal-600 to-blue-700 rounded-xl shadow-lg p-6 sm:p-10 text-white animate-on-scroll'>
							<h2 className='text-2xl sm:text-3xl font-bold mb-8'>
								Our Core Values
							</h2>
							<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								<div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
									<Shield
										className='mb-3'
										size={28}
									/>
									<h3 className='font-bold text-lg mb-2'>Integrity & Ethics</h3>
									<p className='text-teal-50 text-sm'>
										Honest communication and fair dealings at every step.
									</p>
								</div>

								<div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
									<CheckCircle
										className='mb-3'
										size={28}
									/>
									<h3 className='font-bold text-lg mb-2'>
										Professional Excellence
									</h3>
									<p className='text-teal-50 text-sm'>
										Only qualified experts handle user requests.
									</p>
								</div>

								<div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
									<Shield
										className='mb-3'
										size={28}
									/>
									<h3 className='font-bold text-lg mb-2'>Confidentiality</h3>
									<p className='text-teal-50 text-sm'>
										Your data and documents remain private and protected.
									</p>
								</div>

								<div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
									<Eye
										className='mb-3'
										size={28}
									/>
									<h3 className='font-bold text-lg mb-2'>Transparency</h3>
									<p className='text-teal-50 text-sm'>
										No hidden fees or unclear terms.
									</p>
								</div>

								<div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
									<Settings
										className='mb-3'
										size={28}
									/>
									<h3 className='font-bold text-lg mb-2'>Innovation</h3>
									<p className='text-teal-50 text-sm'>
										Technology-driven solutions for modern financial needs.
									</p>
								</div>
							</div>
						</section>

						{/* Legal Status & Disclaimer */}
						<section className='bg-amber-50 rounded-xl shadow-md p-6 sm:p-10 border-l-4 border-amber-500 animate-on-scroll'>
							<h2 className='text-2xl font-bold text-gray-900 mb-6'>
								Legal Status & Disclaimer
							</h2>
							<div className='space-y-4 text-gray-700 leading-relaxed'>
								<p>
									<strong>Online CA Services</strong> is a privately managed
									referral and information platform. It does not offer Chartered
									Accountancy services directly, is not a registered CA firm,
									and has no affiliation with The Institute of Chartered
									Accountants of India (ICAI).
								</p>
								<p>
									The term <strong>"CA Services"</strong> in our domain name is
									used purely in a descriptive sense, indicating that the portal
									connects users with qualified professionals in India. Such use
									is protected under Section 30(2)(a) of the Trade Marks Act
									1999 as honest descriptive use.
								</p>
								<p>
									For further details, please refer to our{' '}
									<Link
										href='/privacypolicy'
										className='text-teal-600 hover:text-teal-700 underline font-medium'>
										Disclaimer, Privacy Policy, and Terms of Use
									</Link>
									.
								</p>
							</div>
						</section>

						{/* Get in Touch */}
						<section className='bg-white rounded-xl shadow-md p-6 sm:p-10 animate-on-scroll'>
							<div className='flex items-center gap-3 mb-6'>
								<Mail
									className='text-teal-600'
									size={32}
								/>
								<h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
									Get in Touch
								</h2>
							</div>
							<p className='text-gray-700 leading-relaxed mb-6'>
								Have a query or need help connecting with a qualified
								professional? Reach out via email at{' '}
								<a
									href='mailto:myonlinecaservices@gmail.com'
									className='text-teal-600 hover:text-teal-700 underline font-medium'>
									myonlinecaservices@gmail.com
								</a>{' '}
								or use our Contact Form, and we'll ensure you're matched with
								the right expert as quickly as possible.
							</p>
							<Link
								href='/contact'
								className='inline-block bg-teal-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl'>
								Connect with a Professional Now →
							</Link>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
