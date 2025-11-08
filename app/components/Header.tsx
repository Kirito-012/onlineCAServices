'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.jpg"
            alt="Online CA Services"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-base text-gray-700 font-medium">
          {[
            ['/', 'Home'],
            ['/about', 'About Us'],
            ['/services', 'Services Offered'],
            ['/blogs', 'Blogs'],
            ['/faq', 'FAQs'],
            ['/contact', 'Contact Us'],
          ].map(([path, label]) => (
            <Link
              key={path}
              href={path}
              className={`hover:text-teal-600 transition-colors duration-300 ${
                pathname === path ? 'text-teal-600 font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Book Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/book-appointment"
            className="bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow"
          >
            <Phone size={16} />
            Book CA Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none hover:text-teal-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col items-center py-6 space-y-4 text-gray-700 font-medium text-sm">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/services', 'Services Offered'],
              ['/blogs', 'Blogs'],
              ['/faq', 'FAQs'],
              ['/contact', 'Contact Us'],
            ].map(([path, label]) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-teal-600 transition-colors ${
                  pathname === path ? 'text-teal-600 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 mt-2"
            >
              Book CA Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
