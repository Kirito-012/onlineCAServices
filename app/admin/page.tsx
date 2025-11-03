'use client'
import {useState, FormEvent} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import {Eye, EyeOff, Lock} from 'lucide-react'

export default function AdminLogin() {
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setError('')
		setLoading(true)

		try {
			// Store password in session storage for API calls
			sessionStorage.setItem('adminAuth', password)

			// Verify password by making a test API call
			const response = await fetch('/api/blogs', {
				headers: {
					Authorization: `Bearer ${password}`,
				},
			})

			if (response.ok) {
				router.push('/admin/dashboard')
			} else {
				setError('Invalid password')
				sessionStorage.removeItem('adminAuth')
			}
		} catch (err) {
			setError('An error occurred. Please try again.')
			sessionStorage.removeItem('adminAuth')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='min-h-screen bg-linear-to-br from-teal-50 to-white flex items-center justify-center px-4'>
			<div className='w-full max-w-md'>
				<div className='bg-white rounded-2xl shadow-xl p-8'>
					{/* Logo */}
					<div className='flex justify-center mb-6'>
						<div className='relative h-16 w-40'>
							<Image
								src='/logo.jpg'
								alt='Online CA Services'
								fill
								className='object-contain'
								priority
							/>
						</div>
					</div>

					{/* Heading */}
					<h1 className='text-3xl font-bold text-center text-gray-800 mb-2'>
						Admin Login
					</h1>
					<p className='text-center text-gray-600 mb-8'>
						Enter your password to access the admin panel
					</p>

					{/* Form */}
					<form onSubmit={handleSubmit} className='space-y-6'>
						{/* Password Field */}
						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Password
							</label>
							<div className='relative'>
								<div className='absolute inset-y-0 text-gray-700 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5' />
								</div>
								<input
									type={showPassword ? 'text' : 'password'}
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='block w-full text-gray-800 pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-500 transition-all'
									placeholder='Enter admin password'
									required
								/>
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700 hover:text-gray-600 transition-colors'>
									{showPassword ? (
										<EyeOff className='h-5 w-5' />
									) : (
										<Eye className='h-5 w-5' />
									)}
								</button>
							</div>
						</div>

						{/* Error Message */}
						{error && (
							<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
								{error}
							</div>
						)}

						{/* Submit Button */}
						<button
							type='submit'
							disabled={loading}
							className='w-full bg-linear-to-r from-teal-600 to-teal-700 text-white py-3.5 px-4 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
							{loading ? 'Verifying...' : 'Login'}
						</button>
					</form>
				</div>

				{/* Footer Text */}
				<p className='text-center text-gray-500 text-sm mt-6'>
					2024 Online CA Services. All rights reserved.
				</p>
			</div>
		</div>
	)
}
