'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Program Details', href: '/program-details' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Parent Resources', href: '/parent-resources' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top banner with contact info */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a
                href="tel:(510)565-0226"
                className="hover:text-primary-200 transition-colors"
                aria-label="Call Symphony Childcare"
              >
                (510) 565-0226
              </a>
            </div>
            <div className="hidden sm:block text-primary-200">|</div>
            <div className="hidden sm:block">
              📍 681 Navajo Way, Fremont, CA
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-1 hover:scale-105 transition-all duration-300">
              <Image
                src="/images/logos/symphony-logo-dark.png"
                alt="Symphony Childcare Logo"
                width={60}
                height={60}
                className="h-9 w-auto"
                priority
              />
            </div>
            <div className="block">
              <div className="font-display font-bold text-lg sm:text-xl text-primary-900 tracking-tight">
                Symphony Childcare
              </div>
              <div className="hidden sm:block text-sm text-primary-700 font-medium">
                Where Your Child Thrives
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary ml-4"
            >
              Schedule Tour
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary w-full text-center mt-4 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}