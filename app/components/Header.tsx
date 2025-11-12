'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* ✅ Logo Section */}
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

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-base text-gray-700 font-medium">
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

        {/* ✅ Desktop Book Button */}
        <div className="hidden md:block">
          <Link
            href="/book-appointment"
            className="bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow"
          >
            <Phone size={16} />
            Book CA Call
          </Link>
        </div>

        {/* ✅ Mobile Layout (Logo + Button + Menu) */}
        <div className="flex md:hidden items-center gap-3">
          {/* Book Button for small screens */}
          <Link
            href="/book-appointment"
            className="bg-teal-600 text-white px-3 py-2 rounded-md text-xs font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow"
          >
            <Phone size={14} />
            Book CA Call
          </Link>

          {/* Menu Icon */}
          <button
            className="text-gray-700 focus:outline-none hover:text-teal-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
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
          </nav>
        </div>
      )}
    </header>
  );
}
