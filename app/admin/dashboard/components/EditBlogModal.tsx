'use client'
import {useState, useEffect, FormEvent} from 'react'
import dynamic from 'next/dynamic'
import {X, Plus, Trash2, Calendar} from 'lucide-react'
import toast from 'react-hot-toast'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css'
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

interface EditBlogModalProps {
	blog: Blog
	onClose: () => void
	onBlogUpdated: () => void
}

export default function EditBlogModal({
	blog,
	onClose,
	onBlogUpdated,
}: EditBlogModalProps) {
	const [loading, setLoading] = useState(false)
	const [metaTitle, setMetaTitle] = useState(blog.metaTitle)
	const [metaDescription, setMetaDescription] = useState(blog.metaDescription)
	const [image, setImage] = useState(blog.image)
	const [imagePreview, setImagePreview] = useState(blog.image)
	const [title, setTitle] = useState(blog.title)
	const [blogDescription, setBlogDescription] = useState(blog.blogDescription)
	const [faqs, setFaqs] = useState<FAQ[]>(blog.faqs || [])
	const [dateCreated, setDateCreated] = useState(
		new Date(blog.dateCreated).toISOString().split('T')[0]
	)

	const modules = {
		toolbar: [
			[{header: [1, 2, 3, false]}],
			[{size: ['small', false, 'large', 'huge']}],
			['bold', 'italic', 'underline'],
			[{list: 'ordered'}, {list: 'bullet'}],
			[{align: []}],
			['link'],
			['clean'],
		],
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			if (file.size > 2 * 1024 * 1024) {
				toast.error('Image size should be less than 2MB')
				return
			}

			const reader = new FileReader()
			reader.onloadend = () => {
				const base64 = reader.result as string
				setImage(base64)
				setImagePreview(base64)
			}
			reader.readAsDataURL(file)
		}
	}

	const addFAQ = () => {
		setFaqs([...faqs, {question: '', answer: ''}])
	}

	const removeFAQ = (index: number) => {
		setFaqs(faqs.filter((_, i) => i !== index))
	}

	const updateFAQ = (
		index: number,
		field: 'question' | 'answer',
		value: string
	) => {
		const updated = [...faqs]
		updated[index][field] = value
		setFaqs(updated)
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			const auth = sessionStorage.getItem('adminAuth')
			if (!auth) {
				toast.error('Not authenticated')
				return
			}

			// Filter out empty FAQs
			const validFaqs = faqs.filter((faq) => faq.question && faq.answer)

			const blogData = {
				metaTitle,
				metaDescription,
				image,
				title,
				blogDescription,
				faqs: validFaqs.length > 0 ? validFaqs : undefined,
				dateCreated: new Date(dateCreated).toISOString(),
			}

			const response = await fetch(`/api/blogs/${blog._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth}`,
				},
				body: JSON.stringify(blogData),
			})

			const data = await response.json()

			if (response.ok) {
				toast.success('Successfully Updated')
				onBlogUpdated()
			} else {
				toast.error(data.error || 'Failed to update blog')
			}
		} catch (error) {
			console.error('Error updating blog:', error)
			toast.error('An error occurred while updating the blog')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
			<div className='bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
				{/* Header */}
				<div className='sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl'>
					<h2 className='text-2xl font-bold text-gray-800'>Edit Blog</h2>
					<button
						onClick={onClose}
						className='text-gray-400 hover:text-gray-600 transition-colors'>
						<X size={24} />
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className='p-6 space-y-6'>
					{/* Meta Title */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Meta Title <span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							value={metaTitle}
							onChange={(e) => setMetaTitle(e.target.value)}
							maxLength={100}
							required
							className='w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-500 transition-all'
							placeholder='Enter meta title (max 100 characters)'
						/>
						<p className='text-xs text-gray-500 mt-1'>
							{metaTitle.length}/100 characters
						</p>
					</div>

					{/* Meta Description */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Meta Description <span className='text-red-500'>*</span>
						</label>
						<textarea
							value={metaDescription}
							onChange={(e) => setMetaDescription(e.target.value)}
							maxLength={200}
							required
							rows={3}
							className='w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-500 transition-all'
							placeholder='Enter meta description (max 200 characters)'
						/>
						<p className='text-xs text-gray-500 mt-1'>
							{metaDescription.length}/200 characters
						</p>
					</div>

					{/* Image Upload */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Image <span className='text-red-500'>*</span>
						</label>
						<input
							type='file'
							accept='image/jpeg,image/jpg,image/png,image/webp'
							onChange={handleImageChange}
							className='w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer transition-all'
						/>
						{imagePreview && (
							<div className='mt-3'>
								<img
									src={imagePreview}
									alt='Preview'
									className='w-48 h-32 object-cover rounded-lg border border-gray-300'
								/>
							</div>
						)}
					</div>

					{/* Title */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Title of the Blog <span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
							className='w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-500 transition-all'
							placeholder='Enter blog title'
						/>
					</div>

					{/* Blog Description */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Blog Description <span className='text-red-500'>*</span>
						</label>
						<div className='bg-white border border-gray-300 rounded-lg'>
							<ReactQuill
								theme='snow'
								value={blogDescription}
								onChange={setBlogDescription}
								modules={modules}
								className='h-64'
							/>
						</div>
						<div className='h-16'></div>
					</div>

					{/* FAQs */}
					<div>
						<div className='flex justify-between items-center mb-3'>
							<label className='block text-sm font-medium text-gray-700'>
								FAQs (Optional)
							</label>
							<button
								type='button'
								onClick={addFAQ}
								className='flex items-center gap-2 px-3 py-1.5 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow'>
								<Plus size={16} />
								Add FAQ
							</button>
						</div>

						{faqs.map((faq, index) => (
							<div
								key={index}
								className='bg-gray-50 p-4 rounded-lg mb-3 border border-gray-200'>
								<div className='flex justify-between items-start mb-3'>
									<span className='text-sm font-medium text-gray-700'>
										FAQ #{index + 1}
									</span>
									<button
										type='button'
										onClick={() => removeFAQ(index)}
										className='text-red-600 hover:text-red-700 transition-colors'>
										<Trash2 size={18} />
									</button>
								</div>
								<input
									type='text'
									value={faq.question}
									onChange={(e) => updateFAQ(index, 'question', e.target.value)}
									placeholder='Question'
									className='w-full text-gray-800 px-3 py-2.5 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-500 transition-all'
								/>
								<textarea
									value={faq.answer}
									onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
									placeholder='Answer'
									rows={3}
									className='w-full text-gray-800 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-500 transition-all'
								/>
							</div>
						))}
					</div>

					{/* Date Created */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Date Created <span className='text-red-500'>*</span>
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
								<Calendar className='h-5 w-5 text-gray-400' />
							</div>
							<input
								type='date'
								value={dateCreated}
								onChange={(e) => setDateCreated(e.target.value)}
								required
								className='w-full text-gray-800 pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all'
							/>
						</div>
					</div>

					{/* Action Buttons */}
					<div className='flex gap-4 pt-6 border-t border-gray-200'>
						<button
							type='submit'
							disabled={loading}
							className='flex-1 bg-linear-to-r from-teal-600 to-teal-700 text-white py-3.5 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
							{loading ? 'Updating...' : 'Update Blog'}
						</button>
						<button
							type='button'
							onClick={onClose}
							disabled={loading}
							className='px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
