'use client'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import {Calendar, ArrowRight} from 'lucide-react'

interface Blog {
	_id: string
	metaTitle: string
	metaDescription: string
	image: string
	title: string
	dateCreated: string
	slug: string
}

export default function BlogsGrid() {
	const [blogs, setBlogs] = useState<Blog[]>([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)

	const fetchBlogs = async (pageNum: number) => {
		setLoading(true)
		try {
			const response = await fetch(`/api/blogs?page=${pageNum}&limit=9`)
			const data = await response.json()

			if (data.success) {
				if (pageNum === 1) {
					setBlogs(data.data)
				} else {
					setBlogs((prev) => [...prev, ...data.data])
				}
				setHasMore(data.pagination.page < data.pagination.pages)
			}
		} catch (error) {
			console.error('Error fetching blogs:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchBlogs(1)
	}, [])

	const loadMore = () => {
		const nextPage = page + 1
		setPage(nextPage)
		fetchBlogs(nextPage)
	}

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	}

	if (loading && page === 1) {
		return (
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div
							key={i}
							className='bg-white rounded-xl shadow-sm overflow-hidden animate-pulse'>
							<div className='w-full h-48 bg-gray-200'></div>
							<div className='p-6 space-y-3'>
								<div className='h-4 bg-gray-200 rounded w-3/4'></div>
								<div className='h-4 bg-gray-200 rounded w-full'></div>
								<div className='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}

	if (blogs.length === 0) {
		return (
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='text-center'>
					<p className='text-gray-600 text-lg'>No blogs available yet.</p>
					<p className='text-gray-500 text-sm mt-2'>
						Check back soon for new content!
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			{/* Blogs Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{blogs.map((blog) => (
					<Link
						key={blog._id}
						href={`/blogs/${blog.slug}`}
						className='group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200'>
						{/* Image */}
						<div className='relative w-full h-48 overflow-hidden'>
							<img
								src={blog.image}
								alt={blog.metaTitle}
								className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
							/>
						</div>

						{/* Content */}
						<div className='p-6'>
							{/* Date */}
							<div className='flex items-center gap-2 text-sm text-gray-500 mb-3'>
								<Calendar size={16} />
								<span>{formatDate(blog.dateCreated)}</span>
							</div>

							{/* Title */}
							<h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2'>
								{blog.metaTitle}
							</h3>

							{/* Description */}
							<p className='text-gray-600 text-sm mb-4 line-clamp-3'>
								{blog.metaDescription}
							</p>

							{/* Read More Button */}
							<div className='flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all'>
								Read More
								<ArrowRight size={16} />
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Load More Button */}
			{hasMore && (
				<div className='text-center mt-12'>
					<button
						onClick={loadMore}
						disabled={loading}
						className='px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow'>
						{loading ? 'Loading...' : 'Load More Blogs'}
					</button>
				</div>
			)}
		</div>
	)
}
