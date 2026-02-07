import { MapPin, Phone, Mail, Clock, Calendar, Shield, Award } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary Contact Info */}
      <div className="card">
        <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">
          Get In Touch
        </h3>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Phone className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Phone</div>
              <a
                href="tel:(510)565-0226"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                (510) 565-0226
              </a>
              <div className="text-sm text-gray-600">Call or text anytime</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 bg-secondary-100 rounded-lg">
              <Mail className="h-5 w-5 text-secondary-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Email</div>
              <a
                href="mailto:info@symphonychildcare.com"
                className="text-secondary-600 hover:text-secondary-700 transition-colors"
              >
                info@symphonychildcare.com
              </a>
              <div className="text-sm text-gray-600">We respond within 2 hours</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 bg-accent-100 rounded-lg">
              <MapPin className="h-5 w-5 text-accent-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Address</div>
              <div className="text-gray-700">
                681 Navajo Way<br />
                Fremont, CA 94539
              </div>
              <a
                href="https://maps.google.com/?q=681+Navajo+Way,+Fremont,+CA+94539"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-700 text-sm transition-colors"
              >
                Get directions →
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Clock className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Program Hours</div>
              <div className="text-gray-700">Monday - Friday</div>
              <div className="text-gray-700">3:00 PM - 6:30 PM</div>
              <div className="text-sm text-gray-600">Extended hours available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Times */}
      <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Calendar className="h-5 w-5 text-primary-600" />
          </div>
          <h3 className="font-display text-lg font-semibold text-gray-900">
            What to Expect
          </h3>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">
              <strong>Phone calls:</strong> Answered during business hours or returned within 2 hours
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">
              <strong>Email inquiries:</strong> Response within 2 hours during business days
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">
              <strong>Tour requests:</strong> Scheduled within 24-48 hours
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">
              <strong>Emergency contacts:</strong> Available for current families 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Director Info */}
      <div className="card">
        <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">
          Speak Directly with Our Director
        </h3>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-secondary-100 rounded-full">
            <Award className="h-6 w-6 text-secondary-600" />
          </div>
          <div className="space-y-2">
            <div className="font-medium text-gray-900">Taruna Gupta, Director</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              When you call or email, you'll speak directly with Taruna, our experienced director.
              She's personally involved in every aspect of your child's care and can answer
              all your questions about our programs, philosophy, and enrollment process.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>15+ Years Experience</span>
              </span>
              <span>•</span>
              <span>Licensed & Certified</span>
              <span>•</span>
              <span>Background Checked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}