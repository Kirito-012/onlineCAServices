import {Metadata} from 'next'
import {notFound} from 'next/navigation'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BlogContent from './components/BlogContent'

interface Blog {
	_id: string
	metaTitle: string
	metaDescription: string
	image: string
	title: string
	blogDescription: string
	faqs?: {question: string; answer: string}[]
	dateCreated: string
	slug: string
}

async function getBlog(slug: string): Promise<Blog | null> {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
		const response = await fetch(`${baseUrl}/api/blogs/slug/${slug}`, {
			cache: 'no-store',
		})

		if (!response.ok) {
			return null
		}

		const data = await response.json()
		return data.success ? data.data : null
	} catch (error) {
		console.error('Error fetching blog:', error)
		return null
	}
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{slug: string}>
}): Promise<Metadata> {
	const {slug} = await params
	const blog = await getBlog(slug)

	if (!blog) {
		return {
			title: 'Blog Not Found | Online CA Services',
		}
	}

	return {
		title: blog.metaTitle,
		description: blog.metaDescription,
		openGraph: {
			title: blog.metaTitle,
			description: blog.metaDescription,
			images: [blog.image],
			type: 'article',
		},
		twitter: {
			card: 'summary_large_image',
			title: blog.metaTitle,
			description: blog.metaDescription,
			images: [blog.image],
		},
	}
}

export default async function BlogDetailPage({
	params,
}: {
	params: Promise<{slug: string}>
}) {
	const {slug} = await params
	const blog = await getBlog(slug)

	if (!blog) {
		notFound()
	}

	return (
		<>
			<Header />
			<BlogContent blog={blog} />
			<Footer />
		</>
	)
}
