import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Schedule Your Free Tour Today',
  description: 'Contact Symphony Childcare to schedule a free tour, ask questions, or enroll your child. Located at 681 Navajo Way, Fremont. Call (510) 565-0226 for immediate assistance.',
  keywords: [
    'contact Symphony Childcare',
    'schedule tour',
    'Fremont childcare enrollment',
    'after school program contact',
    '681 Navajo Way Fremont',
    '510 565 0226',
    'childcare questions'
  ],
  openGraph: {
    title: 'Contact Symphony Childcare - Schedule Your Free Tour',
    description: 'Get in touch to schedule a tour, ask questions, or enroll your child in our premium after-school program in Fremont, CA.',
    url: 'https://symphonychildcare.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Schedule Your Free Tour Today
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step in giving your child the best after-school experience.
            Contact us to learn more about our programs and schedule a personalized tour.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-gray-900">
                  Get Started Today
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 2 hours.
                  Or call us directly at <strong>(510) 565-0226</strong> to speak
                  with Director Taruna Gupta immediately.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We're here to answer any questions about our programs,
                  enrollment process, or scheduling a tour.
                </p>
              </div>

              <ContactInfo />

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-gray-900">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="tel:(510)565-0226"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Now</div>
                      <div className="text-sm text-gray-600">Speak with Director Taruna</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@symphonychildcare.com"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="p-2 bg-secondary-100 rounded-lg">
                      <Mail className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-sm text-gray-600">info@symphonychildcare.com</div>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=681+Navajo+Way,+Fremont,+CA+94539"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="p-2 bg-accent-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Visit Us</div>
                      <div className="text-sm text-gray-600">681 Navajo Way, Fremont, CA</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-gray-900">
                  Program Hours
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-900">3:00 PM - 6:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday - Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  <strong>Extended hours available upon request.</strong> We understand
                  that work schedules can be unpredictable, and we're here to help.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-secondary-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-gray-900">
                  Location & Access
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">
                    681 Navajo Way<br />
                    Fremont, CA 94539
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-900 mb-1">School Pickup & Drop-off</div>
                  <div className="text-gray-600">
                    Warm Springs • James Leitch • Weibel
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-900 mb-1">Service Areas</div>
                  <div className="text-gray-600 text-sm">
                    We provide pickup and drop-off services for these three schools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}