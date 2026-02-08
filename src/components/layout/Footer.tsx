import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logos/symphony-logo-compact.png"
                alt="Symphony Childcare Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div>
                <div className="font-display font-bold text-xl text-white">
                  Symphony Childcare
                </div>
                <div className="text-gray-300 text-sm">
                  Where Your Child Thrives
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing safe, nurturing after-school care with personal attention,
              homework help, and enriching activities for children in the Fremont community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/program-details" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Program Details
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/parent-resources" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>681 Navajo Way</div>
                  <div>Fremont, CA 94539</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:(510)565-0226"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  (510) 565-0226
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:taruna@symphonychildcare.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  taruna@symphonychildcare.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Program Hours</h3>
            <div className="flex items-start space-x-3 mb-3">
              <Clock size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
              <div className="text-gray-300 text-sm">
                <div className="font-medium mb-1">Monday - Friday</div>
                <div>3:00 PM - 6:30 PM</div>
                <div className="text-xs text-gray-400 mt-1">
                  Extended hours available upon request
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="btn-secondary w-full text-center text-sm py-2 px-4"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Symphony Childcare. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}