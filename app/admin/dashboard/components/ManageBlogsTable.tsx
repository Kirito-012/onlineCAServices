'use client'
import {useState, useEffect} from 'react'
import {Pencil, Trash2, ChevronLeft, ChevronRight} from 'lucide-react'
import toast from 'react-hot-toast'
import EditBlogModal from './EditBlogModal'
import DeleteConfirmModal from './DeleteConfirmModal'

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

export default function ManageBlogsTable() {
	const [blogs, setBlogs] = useState<Blog[]>([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
	const [deletingBlogId, setDeletingBlogId] = useState<string | null>(null)

	const fetchBlogs = async (page: number = 1) => {
		setLoading(true)
		try {
			const response = await fetch(`/api/blogs?page=${page}&limit=10`)
			const data = await response.json()

			if (data.success) {
				setBlogs(data.data)
				setTotalPages(data.pagination.pages)
				setCurrentPage(page)
			} else {
				toast.error('Failed to fetch blogs')
			}
		} catch (error) {
			console.error('Error fetching blogs:', error)
			toast.error('An error occurred while fetching blogs')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchBlogs()
	}, [])

	const handleEdit = (blog: Blog) => {
		setEditingBlog(blog)
	}

	const handleDelete = (blogId: string) => {
		setDeletingBlogId(blogId)
	}

	const handleBlogUpdated = () => {
		setEditingBlog(null)
		fetchBlogs(currentPage)
	}

	const handleBlogDeleted = () => {
		setDeletingBlogId(null)
		fetchBlogs(currentPage)
	}

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-GB')
	}

	const truncateText = (text: string, maxLength: number) => {
		return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
	}

	if (loading) {
		return (
			<div className='flex justify-center items-center py-12'>
				<div className='text-gray-600'>Loading blogs...</div>
			</div>
		)
	}

	if (blogs.length === 0) {
		return (
			<div className='text-center py-12'>
				<p className='text-gray-600 text-lg'>No blogs found</p>
				<p className='text-gray-500 text-sm mt-2'>
					Add your first blog using the "Add Blog" tab
				</p>
			</div>
		)
	}

	return (
		<>
			<div className='overflow-x-auto'>
				<table className='w-full'>
					<thead>
						<tr className='bg-gray-50 border-b border-gray-200'>
							<th className='px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
								#
							</th>
							<th className='px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
								Image
							</th>
							<th className='px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
								Meta Title
							</th>
							<th className='px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
								Meta Description
							</th>
							<th className='px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
								Date Created
							</th>
							<th className='px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{blogs.map((blog, index) => (
							<tr
								key={blog._id}
								className='hover:bg-gray-50 transition-colors duration-150'>
								<td className='px-4 py-4 text-sm text-gray-700'>
									{(currentPage - 1) * 10 + index + 1}
								</td>
								<td className='px-4 py-4'>
									<img
										src={blog.image}
										alt={blog.metaTitle}
										className='w-12 h-12 object-cover rounded-lg border border-gray-200'
									/>
								</td>
								<td className='px-4 py-4 text-sm text-gray-900 font-medium'>
									{truncateText(blog.metaTitle, 50)}
								</td>
								<td className='px-4 py-4 text-sm text-gray-600'>
									{truncateText(blog.metaDescription, 80)}
								</td>
								<td className='px-4 py-4 text-sm text-gray-700'>
									{formatDate(blog.dateCreated)}
								</td>
								<td className='px-4 py-4 text-center'>
									<div className='flex justify-center gap-2'>
										<button
											onClick={() => handleEdit(blog)}
											className='p-2 cursor-pointer text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-150'
											title='Edit'>
											<Pencil size={18} />
										</button>
										<button
											onClick={() => handleDelete(blog._id)}
											className='p-2 cursor-pointer text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150'
											title='Delete'>
											<Trash2 size={18} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-200'>
					<p className='text-sm text-gray-600'>
						Page {currentPage} of {totalPages}
					</p>
					<div className='flex gap-2'>
						<button
							onClick={() => fetchBlogs(currentPage - 1)}
							disabled={currentPage === 1}
							className='flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>
							<ChevronLeft size={16} />
							Previous
						</button>
						<button
							onClick={() => fetchBlogs(currentPage + 1)}
							disabled={currentPage === totalPages}
							className='flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>
							Next
							<ChevronRight size={16} />
						</button>
					</div>
				</div>
			)}

			{/* Modals */}
			{editingBlog && (
				<EditBlogModal
					blog={editingBlog}
					onClose={() => setEditingBlog(null)}
					onBlogUpdated={handleBlogUpdated}
				/>
			)}

			{deletingBlogId && (
				<DeleteConfirmModal
					blogId={deletingBlogId}
					onClose={() => setDeletingBlogId(null)}
					onBlogDeleted={handleBlogDeleted}
				/>
			)}
		</>
	)
}
