import Link from 'next/link'
import { Clock, Users, GraduationCap, Calendar } from 'lucide-react'

export default function ProgramOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our After-School Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured yet flexible programming designed to support your child's academic success
            and personal growth in a safe, engaging environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-gray-900">
                Daily Schedule & Activities
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Clock className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">3:00 PM - 4:30 PM</div>
                    <div className="text-gray-600">Homework Help & Academic Support</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-secondary-100 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">4:30 PM - 5:30 PM</div>
                    <div className="text-gray-600">Enrichment Activities & STEM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-accent-100 rounded-lg">
                    <Users className="h-5 w-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5:30 PM - 6:30 PM</div>
                    <div className="text-gray-600">Free Play & Flexible Pickup</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold text-gray-900">Program Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Director provides homework assistance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>STEM activities and creative arts projects</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Outdoor play and physical activities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Nutritious snacks and meals provided</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h4 className="font-display text-xl font-semibold text-gray-900 mb-4">
                Program Information
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Age Groups</span>
                  <span className="text-gray-900">K-8th Grade</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Program Hours</span>
                  <span className="text-gray-900">3:00 PM - 6:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Group Size</span>
                  <span className="text-gray-900">Small intimate groups</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Staff Ratio</span>
                  <span className="text-gray-900">Low ratio, personal attention</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Pricing</span>
                  <span className="text-gray-900 font-semibold">Contact for Rates</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/program-details"
                  className="btn-primary w-full text-center"
                >
                  View Full Program Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}