'use client'

import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {Mail, Phone, MapPin, Clock} from 'lucide-react'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Footer() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in')
					}
				})
			},
			{threshold: 0.1}
		)

		const elements = document.querySelectorAll('.footer-animate')
		elements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])
	return (
		<footer className='bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 text-white pt-16 pb-6 border-t border-gray-700'>
			<style
				jsx
				global>{`
				.footer-animate {
					opacity: 0;
					transform: translateY(20px);
					transition: opacity 0.6s ease-out, transform 0.6s ease-out;
				}
				.footer-animate.animate-in {
					opacity: 1;
					transform: translateY(0);
				}
				.footer-stagger-1 {
					transition-delay: 0.1s;
				}
				.footer-stagger-2 {
					transition-delay: 0.2s;
				}
				.footer-stagger-3 {
					transition-delay: 0.3s;
				}
				.footer-stagger-4 {
					transition-delay: 0.4s;
				}
			`}</style>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10'>
					{/* Brand Section */}
					<div className='footer-animate footer-stagger-1'>
						<h2 className='text-2xl font-bold mb-4 bg-linear-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'>
							Online CA Services
						</h2>
						<p className='text-gray-400 text-sm leading-relaxed mb-4'>
							An independent, privately managed portal that connects users with
							qualified professionals for Tax, GST, Accounting, and Business
							Compliance services across India.
						</p>
						{/* Social Links */}
						<div className='flex gap-3'>
							<a
								href='https://www.instagram.com/onlinecaservices'
								aria-label='Instagram'
								className='bg-white/5 p-2.5 rounded-lg hover:bg-teal-600 hover:scale-110 transition-all duration-300 border border-white/10'>
								<FaInstagram size={16} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className='footer-animate footer-stagger-2'>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Quick Links
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/about'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Services Offered
								</Link>
							</li>
							<li>
								<Link
									href='/faq'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									href='/blogs'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Blogs/Knowledge Hub
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div className='footer-animate footer-stagger-3'>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Legal Pages
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/disclaimer'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Disclaimer
								</Link>
							</li>
							<li>
								<Link
									href='/privacypolicy'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Privacy Policy
								</Link>
							</li>

							<li>
								<Link
									href='/terms'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href='/refundpolicy'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Refund Policy
								</Link>
							</li>
							<li>
								<Link
									href='/copyrightpolicy'
									className='text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group'>
									<span className='w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300'></span>
									Copyright Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className='footer-animate footer-stagger-4'>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Get In Touch
						</h3>
						<ul className='space-y-3'>
							<li className='flex items-start gap-3 text-gray-400 text-sm group'>
								<MapPin
									size={18}
									className='text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform'
								/>
								<span>Delhi, India</span>
							</li>
							<li className='flex items-start gap-3 text-gray-400 text-sm group'>
								<Phone
									size={18}
									className='text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform'
								/>
								<a
									href='tel:+919876543210'
									className='hover:text-teal-400 transition-colors'>
									+91 85952 36343
								</a>
							</li>
							<li className='flex items-start gap-3 text-gray-400 text-sm group'>
								<Mail
									size={18}
									className='text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform'
								/>
								<a
									href='mailto:support@onlinecaservices.in'
									className='hover:text-teal-400 transition-colors break-all'>
									 myonlinecaservices@gmail.com
								</a>
							</li>
							<li className='flex items-start gap-3 text-gray-400 text-sm group'>
								<Clock
									size={18}
									className='text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform'
								/>
								Monday to Sunday | 9:00 AM - 9:00 PM
							</li>
						</ul>
					</div>
				</div>
				<div className='text-center text-gray-400 text-sm leading-relaxed'>
					This platform does not directly provide services and it is not a
					registered CA firm, and has no affiliation or endorsement from The
					Institute of Chartered Accountants of India (ICAI).
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-gray-700 mt-2 pt-4'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-gray-400 text-sm'>
							© {new Date().getFullYear()} OnlineCA Services. All rights
							reserved.
						</p>
						<p className='text-gray-400 text-sm flex items-center gap-2'>
							Designed with{' '}
							<span className='font-semibold'>
								<a
									href='https://yritsolutions.com/'
									target='_blank'
									rel='noopener noreferrer'>
									YR IT Solutions
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
