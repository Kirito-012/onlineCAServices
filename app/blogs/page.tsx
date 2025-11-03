import {Metadata} from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogsGrid from './components/BlogsGrid'

export const metadata: Metadata = {
	title: 'Blogs | Online CA Services',
	description:
		'Read the latest blogs and articles about taxation, GST, ITR filing, company registration, and accounting from expert Chartered Accountants.',
}

export default function BlogsPage() {
	return (
		<>
			<Header />
			<main className='min-h-screen bg-gray-50 pt-20'>
				{/* Hero Section */}
				<section className='bg-linear-to-br from-teal-600 to-teal-700 text-white py-16'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						<h1 className='text-4xl md:text-5xl font-bold mb-4'>
							Our Blogs
						</h1>
						<p className='text-xl text-teal-50 max-w-3xl mx-auto'>
							Stay updated with the latest insights, tips, and guides on
							taxation, compliance, and financial management from our expert
							Chartered Accountants.
						</p>
					</div>
				</section>

				{/* Blogs Grid */}
				<BlogsGrid />
			</main>
			<Footer />
		</>
	)
}
