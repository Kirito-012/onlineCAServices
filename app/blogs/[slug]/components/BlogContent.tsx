'use client'
import {useState} from 'react'
import {Calendar, Clock, ChevronDown, ChevronUp, Share2} from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'

interface FAQ {
	question: string
	answer: string
}

interface Blog {
	_id: string
	metaTitle: string
	metaDescription: string
	image: string
	title: string
	blogDescription: string
	faqs?: FAQ[]
	dateCreated: string
	slug: string
}

interface BlogContentProps {
	blog: Blog
}

export default function BlogContent({blog}: BlogContentProps) {
	const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	}

	const calculateReadTime = (html: string) => {
		const text = html.replace(/<[^>]*>/g, '')
		const words = text.split(/\s+/).length
		const minutes = Math.ceil(words / 200)
		return `${minutes} min read`
	}

	const toggleFAQ = (index: number) => {
		setExpandedFAQ(expandedFAQ === index ? null : index)
	}

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: blog.title,
					text: blog.metaDescription,
					url: window.location.href,
				})
			} catch (error) {
				console.log('Error sharing:', error)
			}
		} else {
			// Fallback: copy to clipboard
			navigator.clipboard.writeText(window.location.href)
			alert('Link copied to clipboard!')
		}
	}

	// Sanitize HTML content
	const sanitizedContent = DOMPurify.sanitize(blog.blogDescription)

	return (
		<main className='min-h-screen bg-gray-50 pt-20'>
			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Title */}
				<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
					{blog.title}
				</h1>

				{/* Meta Info */}
				<div className='flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200'>
					<div className='flex items-center gap-2'>
						<Calendar size={18} />
						<span>{formatDate(blog.dateCreated)}</span>
					</div>
					<div className='flex items-center gap-2'>
						<Clock size={18} />
						<span>{calculateReadTime(blog.blogDescription)}</span>
					</div>
					<button
						onClick={handleShare}
						className='ml-auto flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors'>
						<Share2 size={18} />
						<span>Share</span>
					</button>
				</div>

				{/* Featured Image */}
				<div className='mb-10 rounded-2xl overflow-hidden shadow-lg'>
					<img
						src={blog.image}
						alt={blog.title}
						className='w-full h-auto object-cover'
					/>
				</div>

				{/* Blog Content */}
				<div
					className='prose prose-lg max-w-none mb-12'
					style={{
						color: '#374151',
						lineHeight: '1.8',
					}}>
					<style jsx global>{`
						.prose h1 {
							font-size: 2.25rem;
							font-weight: 700;
							margin-top: 2rem;
							margin-bottom: 1rem;
							color: #1f2937;
						}
						.prose h2 {
							font-size: 1.875rem;
							font-weight: 700;
							margin-top: 2rem;
							margin-bottom: 1rem;
							color: #1f2937;
						}
						.prose h3 {
							font-size: 1.5rem;
							font-weight: 600;
							margin-top: 1.5rem;
							margin-bottom: 0.75rem;
							color: #374151;
						}
						.prose p {
							margin-bottom: 1.25rem;
							font-size: 1.125rem;
						}
						.prose ul,
						.prose ol {
							margin-bottom: 1.25rem;
							padding-left: 1.5rem;
						}
						.prose li {
							margin-bottom: 0.5rem;
						}
						.prose strong {
							font-weight: 600;
							color: #1f2937;
						}
						.prose a {
							color: #0d9488;
							text-decoration: underline;
						}
						.prose a:hover {
							color: #0f766e;
						}
					`}</style>
					<div dangerouslySetInnerHTML={{__html: sanitizedContent}} />
				</div>

				{/* FAQs Section */}
				{blog.faqs && blog.faqs.length > 0 && (
					<div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Frequently Asked Questions
						</h2>
						<div className='space-y-4'>
							{blog.faqs.map((faq, index) => (
								<div
									key={index}
									className='border border-gray-200 rounded-lg overflow-hidden'>
									<button
										onClick={() => toggleFAQ(index)}
										className='w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors'>
										<span className='font-semibold text-gray-900 pr-4'>
											{faq.question}
										</span>
										{expandedFAQ === index ? (
											<ChevronUp
												size={20}
												className='text-teal-600 shrink-0'
											/>
										) : (
											<ChevronDown
												size={20}
												className='text-gray-400 shrink-0'
											/>
										)}
									</button>
									{expandedFAQ === index && (
										<div className='px-5 pb-5 text-gray-600 border-t border-gray-200 pt-4'>
											{faq.answer}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				)}

				{/* Call to Action */}
				<div className='bg-linear-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white shadow-lg'>
					<h3 className='text-2xl font-bold mb-3'>Need Expert Assistance?</h3>
					<p className='text-teal-50 mb-6 max-w-2xl mx-auto'>
						Our team of experienced Chartered Accountants is here to help you
						with all your taxation and compliance needs.
					</p>
					<a
						href='/contact'
						className='inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-sm'>
						Contact Us Today
					</a>
				</div>
			</article>

			{/* Schema Markup for SEO */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Article',
						headline: blog.title,
						description: blog.metaDescription,
						image: blog.image,
						datePublished: blog.dateCreated,
						author: {
							'@type': 'Organization',
							name: 'Online CA Services',
						},
						publisher: {
							'@type': 'Organization',
							name: 'Online CA Services',
							logo: {
								'@type': 'ImageObject',
								url: '/logo.jpg',
							},
						},
						mainEntityOfPage: {
							'@type': 'WebPage',
							'@id': `https://onlinecaservices.com/blogs/${blog.slug}`,
						},
					}),
				}}
			/>

			{/* FAQ Schema Markup */}
			{blog.faqs && blog.faqs.length > 0 && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'FAQPage',
							mainEntity: blog.faqs.map((faq) => ({
								'@type': 'Question',
								name: faq.question,
								acceptedAnswer: {
									'@type': 'Answer',
									text: faq.answer,
								},
							})),
						}),
					}}
				/>
			)}
		</main>
	)
}
