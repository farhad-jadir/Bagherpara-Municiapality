// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// সিম্পল অথেন্টিকেশন ফাংশন (production এ JWT বা proper auth ব্যবহার করুন)
const isAuthenticated = (request: NextRequest): boolean => {
  const authToken = request.cookies.get('admin-token')?.value
  // এখানে আপনার actual authentication logic implement করুন
  return authToken === process.env.ADMIN_SECRET_TOKEN
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin routes protection
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!isAuthenticated(request)) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Prevent accessing login page if already authenticated
  if (pathname === '/admin/login' && isAuthenticated(request)) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/admin/login'
  ]
}