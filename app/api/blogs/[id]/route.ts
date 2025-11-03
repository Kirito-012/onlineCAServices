import {NextRequest, NextResponse} from 'next/server'
import connectDB from '@/app/lib/mongodb'
import Blog from '@/app/models/Blog'
import {checkAuth, unauthorizedResponse} from '@/app/lib/auth'
import mongoose from 'mongoose'

// GET single blog by ID
export async function GET(
	request: NextRequest,
	{params}: {params: Promise<{id: string}>}
) {
	try {
		await connectDB()

		const {id} = await params

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{success: false, error: 'Invalid blog ID'},
				{status: 400}
			)
		}

		const blog = await Blog.findById(id).lean()

		if (!blog) {
			return NextResponse.json(
				{success: false, error: 'Blog not found'},
				{status: 404}
			)
		}

		return NextResponse.json({
			success: true,
			data: blog,
		})
	} catch (error: any) {
		console.error('Error fetching blog:', error)
		return NextResponse.json(
			{success: false, error: error.message || 'Failed to fetch blog'},
			{status: 500}
		)
	}
}

// PUT update blog
export async function PUT(
	request: NextRequest,
	{params}: {params: Promise<{id: string}>}
) {
	try {
		// Check authentication
		if (!checkAuth(request)) {
			return unauthorizedResponse()
		}

		await connectDB()

		const {id} = await params

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{success: false, error: 'Invalid blog ID'},
				{status: 400}
			)
		}

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

		const blog = await Blog.findByIdAndUpdate(id, body, {
			new: true,
			runValidators: true,
		})

		if (!blog) {
			return NextResponse.json(
				{success: false, error: 'Blog not found'},
				{status: 404}
			)
		}

		return NextResponse.json({
			success: true,
			data: blog,
			message: 'Blog updated successfully',
		})
	} catch (error: any) {
		console.error('Error updating blog:', error)
		return NextResponse.json(
			{success: false, error: error.message || 'Failed to update blog'},
			{status: 500}
		)
	}
}

// DELETE blog
export async function DELETE(
	request: NextRequest,
	{params}: {params: Promise<{id: string}>}
) {
	try {
		// Check authentication
		if (!checkAuth(request)) {
			return unauthorizedResponse()
		}

		await connectDB()

		const {id} = await params

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{success: false, error: 'Invalid blog ID'},
				{status: 400}
			)
		}

		const blog = await Blog.findByIdAndDelete(id)

		if (!blog) {
			return NextResponse.json(
				{success: false, error: 'Blog not found'},
				{status: 404}
			)
		}

		return NextResponse.json({
			success: true,
			message: 'Blog deleted successfully',
		})
	} catch (error: any) {
		console.error('Error deleting blog:', error)
		return NextResponse.json(
			{success: false, error: error.message || 'Failed to delete blog'},
			{status: 500}
		)
	}
}
