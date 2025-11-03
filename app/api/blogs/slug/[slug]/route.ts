import {NextRequest, NextResponse} from 'next/server'
import connectDB from '@/app/lib/mongodb'
import Blog from '@/app/models/Blog'

// GET blog by slug
export async function GET(
	request: NextRequest,
	{params}: {params: Promise<{slug: string}>}
) {
	try {
		await connectDB()

		const {slug} = await params

		const blog = await Blog.findOne({slug}).lean()

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
		console.error('Error fetching blog by slug:', error)
		return NextResponse.json(
			{success: false, error: error.message || 'Failed to fetch blog'},
			{status: 500}
		)
	}
}
