import {NextRequest, NextResponse} from 'next/server'
import connectDB from '@/app/lib/mongodb'
import Blog from '@/app/models/Blog'
import {checkAuth, unauthorizedResponse} from '@/app/lib/auth'

// GET all blogs
export async function GET(request: NextRequest) {
	try {
		await connectDB()

		const searchParams = request.nextUrl.searchParams
		const page = parseInt(searchParams.get('page') || '1')
		const limit = parseInt(searchParams.get('limit') || '10')
		const skip = (page - 1) * limit

		const blogs = await Blog.find()
			.sort({dateCreated: -1})
			.skip(skip)
			.limit(limit)
			.lean()

		const total = await Blog.countDocuments()

		return NextResponse.json({
			success: true,
			data: blogs,
			pagination: {
				page,
				limit,
				total,
				pages: Math.ceil(total / limit),
			},
		})
	} catch (error: any) {
		console.error('Error fetching blogs:', error)
		return NextResponse.json(
			{success: false, error: error.message || 'Failed to fetch blogs'},
			{status: 500}
		)
	}
}

// POST new blog
export async function POST(request: NextRequest) {
	try {
		// Check authentication
		if (!checkAuth(request)) {
			return unauthorizedResponse()
		}

		await connectDB()

		const body = await request.json()

		// Validate required fields
		const requiredFields = [
			'metaTitle',
			'metaDescription',
			'image',
			'title',
			'blogDescription',
			'dateCreated',
		]
		for (const field of requiredFields) {
			if (!body[field]) {
				return NextResponse.json(
					{success: false, error: `${field} is required`},
					{status: 400}
				)
			}
		}

		// Create new blog
		const blog = await Blog.create(body)

		return NextResponse.json(
			{
				success: true,
				data: blog,
				message: 'Blog created successfully',
			},
			{status: 201}
		)
	} catch (error: any) {
		console.error('Error creating blog:', error)
		return NextResponse.json(
			{success: false, error: error.message || 'Failed to create blog'},
			{status: 500}
		)
	}
}
