'use client'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {LogOut} from 'lucide-react'
import AddBlogForm from './components/AddBlogForm'
import ManageBlogsTable from './components/ManageBlogsTable'
import {Toaster} from 'react-hot-toast'

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState<'add' | 'manage'>('add')
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [refreshKey, setRefreshKey] = useState(0)
	const router = useRouter()

	useEffect(() => {
		// Check authentication
		const auth = sessionStorage.getItem('adminAuth')
		if (!auth) {
			router.push('/admin')
		} else {
			setIsAuthenticated(true)
		}
	}, [router])

	const handleLogout = () => {
		sessionStorage.removeItem('adminAuth')
		router.push('/admin')
	}

	const handleBlogAdded = () => {
		setRefreshKey((prev) => prev + 1)
		setActiveTab('manage')
	}

	if (!isAuthenticated) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<div className='text-gray-600'>Loading...</div>
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			<Toaster position='top-right' />

			{/* Header */}
			<header className='bg-white shadow-md border-b border-gray-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5'>
					<div className='flex justify-between items-center'>
						<h1 className='text-3xl font-bold bg-linear-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent'>Admin Panel</h1>
						<button
							onClick={handleLogout}
							className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200'>
							<LogOut size={20} />
							<span className='font-medium'>Logout</span>
						</button>
					</div>
				</div>
			</header>

			{/* Tabs */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8'>
				<div className='bg-white rounded-xl shadow-lg border border-gray-200'>
					{/* Tab Navigation */}
					<div className='border-b border-gray-200 bg-gray-50 rounded-t-xl'>
						<nav className='flex -mb-px px-2'>
							<button
								onClick={() => setActiveTab('add')}
								className={`px-6 cursor-pointer py-4 text-sm font-semibold border-b-2 transition-colors duration-200 ${
									activeTab === 'add'
										? 'border-teal-600 text-teal-600'
										: 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
								}`}>
								Add Blog
							</button>
							<button
								onClick={() => setActiveTab('manage')}
								className={`px-6 cursor-pointer py-4 text-sm font-semibold border-b-2 transition-colors duration-200 ${
									activeTab === 'manage'
										? 'border-teal-600 text-teal-600'
										: 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
								}`}>
								Manage Blogs
							</button>
						</nav>
					</div>

					{/* Tab Content */}
					<div className='p-6'>
						{activeTab === 'add' ? (
							<AddBlogForm onBlogAdded={handleBlogAdded} />
						) : (
							<ManageBlogsTable key={refreshKey} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
