import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program Details - After School Care & Activities',
  description: 'Detailed information about Symphony Childcare\'s after-school program. Operating hours 3:00-6:30 PM, homework help, creative activities, and school pickup from Warm Springs and James Leitch Elementary.',
  keywords: [
    'after school program details',
    'homework help',
    'school pickup service',
    'Warm Springs Elementary',
    'James Leitch Elementary',
    'after school activities',
    'Fremont childcare hours'
  ],
  openGraph: {
    title: 'After School Program Details - Symphony Childcare',
    description: 'Learn about our comprehensive after-school program including homework help, activities, and school pickup services.',
    url: 'https://symphonychildcare.com/program-details',
  },
}

export default function ProgramDetailsPage() {
  const operatingHours = [
    { day: "Monday", hours: "3:00 PM - 6:30 PM" },
    { day: "Tuesday", hours: "3:00 PM - 6:30 PM" },
    { day: "Wednesday", hours: "3:00 PM - 6:30 PM" },
    { day: "Thursday", hours: "3:00 PM - 6:30 PM" },
    { day: "Friday", hours: "3:00 PM - 6:30 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" }
  ]

  return (
    <div className="min-h-screen hero-bg">
      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              After School Program Details
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive after-school program designed to support your child's
              academic success and personal growth in a safe, nurturing environment.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Our After School Program
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Symphony Childcare provides a structured yet flexible environment where
                children can complete homework, engage in creative activities, and build
                meaningful friendships with their peers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated homework assistance and study time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Safe, supervised environment with personal care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Nutritious snacks and meals provided</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Creative and educational activities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero/outdoor-playground.png"
                alt="Children playing safely at Symphony Childcare"
                width={450}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              Operating Hours
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                  <p className="text-sm text-accent-800 font-medium">
                    Extended hours available upon request
                  </p>
                  <p className="text-sm text-accent-700 mt-1">
                    Contact us to discuss flexible scheduling options for your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            What Your Child Will Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Homework Time
              </h3>
              <p className="text-gray-600">
                Dedicated quiet time for homework completion with assistance available
                from Director Taruna when needed.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v7zM9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Creative Activities
              </h3>
              <p className="text-gray-600">
                Arts and crafts, creative projects, and hands-on activities that
                encourage imagination and self-expression.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Social Time
              </h3>
              <p className="text-gray-600">
                Opportunities to build friendships through group activities,
                games, and collaborative projects.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-cream-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-sand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Healthy Meals
              </h3>
              <p className="text-gray-600">
                Nutritious snacks and meals to keep children energized and
                support healthy growth and development.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Active Play
              </h3>
              <p className="text-gray-600">
                Outdoor and indoor physical activities to promote fitness,
                coordination, and overall well-being.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Safe Environment
              </h3>
              <p className="text-gray-600">
                Constant supervision and a secure facility ensure your child's
                safety and your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              School Pickup & Drop-off Services
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="card text-center">
                <p className="text-lg text-gray-700 mb-6">
                  We provide convenient pickup and drop-off services for students at these Fremont schools:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">Warm Springs Elementary</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">James Leitch Elementary</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Ready to Enroll?
            </h2>
            <p className="text-gray-700 mb-8">
              Contact us today to learn more about our program and schedule a visit
              to see why Symphony Childcare is the right choice for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Started Today
              </Link>
              <Link
                href="tel:(510)565-0226"
                className="btn-secondary"
              >
                Call (510) 565-0226
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}