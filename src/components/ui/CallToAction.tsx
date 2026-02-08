import Link from 'next/link'
import { ArrowRight, Phone, Calendar, MapPin } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Ready to Give Your Child the Best After-School Experience?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join the Symphony Childcare family today. Schedule a free tour and see why
              parents trust us with their most precious gifts. Limited spots available!
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl group flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Your Free Tour</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="tel:(510)565-0226"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: (510) 565-0226</span>
            </Link>
          </div>

          {/* Quick info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-500/20 rounded-lg p-6 backdrop-blur-sm">
              <Calendar className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="font-display font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-primary-100">Personal response from Director Taruna</p>
            </div>

            <div className="bg-primary-500/20 rounded-lg p-6 backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="font-display font-semibold text-lg mb-2">Convenient Location</h3>
              <p className="text-primary-100">681 Navajo Way, Fremont - Easy pickup access</p>
            </div>

            <div className="bg-primary-500/20 rounded-lg p-6 backdrop-blur-sm">
              <Phone className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="font-display font-semibold text-lg mb-2">Personal Service</h3>
              <p className="text-primary-100">Speak directly with Director Taruna Gupta</p>
            </div>
          </div>

          {/* Urgency message */}
          <div className="bg-accent-500 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-lg">Limited Availability</span>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <p className="text-accent-50">
              Only <strong>5 spots remaining</strong> for Spring 2026 enrollment.
              Don't wait - secure your child's place today!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}