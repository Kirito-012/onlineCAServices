import mongoose, {Schema, Document, Model} from 'mongoose'

export interface IFAQ {
	question: string
	answer: string
}

export interface IBlog extends Document {
	metaTitle: string
	metaDescription: string
	image: string
	title: string
	blogDescription: string
	faqs?: IFAQ[]
	dateCreated: Date
	slug: string
	createdAt: Date
	updatedAt: Date
}

const FAQSchema = new Schema<IFAQ>(
	{
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: String,
			required: true,
		},
	},
	{_id: false}
)

const BlogSchema = new Schema<IBlog>(
	{
		metaTitle: {
			type: String,
			required: [true, 'Meta title is required'],
			maxlength: [60, 'Meta title cannot exceed 60 characters'],
			trim: true,
		},
		metaDescription: {
			type: String,
			required: [true, 'Meta description is required'],
			maxlength: [160, 'Meta description cannot exceed 160 characters'],
			trim: true,
		},
		image: {
			type: String,
			required: [true, 'Image is required'],
		},
		title: {
			type: String,
			required: [true, 'Title is required'],
			trim: true,
		},
		blogDescription: {
			type: String,
			required: [true, 'Blog description is required'],
		},
		faqs: {
			type: [FAQSchema],
			default: [],
		},
		dateCreated: {
			type: Date,
			required: [true, 'Date created is required'],
			default: Date.now,
		},
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
)

// Create slug from title before saving
BlogSchema.pre('save', async function (next) {
	// Generate slug if it doesn't exist or if title has been modified
	if (!this.slug || this.isModified('title')) {
		let baseSlug = this.title
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-')
			.trim()

		let slug = baseSlug
		let counter = 1

		// Check for uniqueness
		while (await mongoose.models.Blog?.findOne({slug, _id: {$ne: this._id}})) {
			slug = `${baseSlug}-${counter}`
			counter++
		}

		this.slug = slug
	}
	next()
})

// Indexes for better query performance
BlogSchema.index({slug: 1})
BlogSchema.index({dateCreated: -1})
BlogSchema.index({createdAt: -1})

const Blog: Model<IBlog> =
	mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema)

export default Blog
