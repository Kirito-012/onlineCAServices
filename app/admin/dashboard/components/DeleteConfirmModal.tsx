'use client'
import {useState} from 'react'
import {AlertTriangle} from 'lucide-react'
import toast from 'react-hot-toast'

interface DeleteConfirmModalProps {
	blogId: string
	onClose: () => void
	onBlogDeleted: () => void
}

export default function DeleteConfirmModal({
	blogId,
	onClose,
	onBlogDeleted,
}: DeleteConfirmModalProps) {
	const [loading, setLoading] = useState(false)

	const handleDelete = async () => {
		setLoading(true)

		try {
			const auth = sessionStorage.getItem('adminAuth')
			if (!auth) {
				toast.error('Not authenticated')
				return
			}

			const response = await fetch(`/api/blogs/${blogId}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${auth}`,
				},
			})

			const data = await response.json()

			if (response.ok) {
				toast.success('Successfully Deleted')
				onBlogDeleted()
			} else {
				toast.error(data.error || 'Failed to delete blog')
			}
		} catch (error) {
			console.error('Error deleting blog:', error)
			toast.error('An error occurred while deleting the blog')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
			<div className='bg-white rounded-2xl shadow-2xl w-full max-w-md p-6'>
				{/* Icon */}
				<div className='flex justify-center mb-4'>
					<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
						<AlertTriangle className='w-8 h-8 text-red-600' />
					</div>
				</div>

				{/* Heading */}
				<h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
					Delete Blog?
				</h2>

				{/* Message */}
				<p className='text-gray-600 text-center mb-6'>
					Are you sure you want to delete this blog? This action cannot be
					undone.
				</p>

				{/* Buttons */}
				<div className='flex gap-3'>
					<button
						onClick={onClose}
						disabled={loading}
						className='flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
						Cancel
					</button>
					<button
						onClick={handleDelete}
						disabled={loading}
						className='flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow'>
						{loading ? 'Deleting...' : 'Yes, Delete'}
					</button>
				</div>
			</div>
		</div>
	)
}
