import bcrypt from 'bcryptjs'

export function verifyPassword(password: string): boolean {
	const adminPassword = process.env.ADMIN_PASSWORD
	if (!adminPassword) {
		throw new Error('ADMIN_PASSWORD not configured')
	}
	return password === adminPassword
}

export function hashPassword(password: string): string {
	return bcrypt.hashSync(password, 10)
}

export function checkAuth(request: Request): boolean {
	const authHeader = request.headers.get('authorization')
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return false
	}

	const token = authHeader.substring(7)
	return verifyPassword(token)
}

export function unauthorizedResponse() {
	return new Response(JSON.stringify({error: 'Unauthorized'}), {
		status: 401,
		headers: {'Content-Type': 'application/json'},
	})
}
