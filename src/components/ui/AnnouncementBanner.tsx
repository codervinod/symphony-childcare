'use client'

import Link from 'next/link'
import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-accent-600 to-accent-500 text-white py-3 px-4 relative">
      <div className="container-custom">
        <div className="flex items-center justify-center space-x-3 text-center">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            <span className="font-semibold">Limited Spots Available!</span>{' '}
            Only 5 spots remaining in our after-school program for Spring 2026.{' '}
            <Link
              href="/contact"
              className="underline hover:no-underline font-semibold"
            >
              Schedule your tour today
            </Link>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}