import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Meet Director Taruna Gupta',
  description: 'Learn about Symphony Childcare\'s mission, meet Director Taruna Gupta, and discover our nurturing approach to after-school care in Fremont, CA.',
  keywords: [
    'Taruna Gupta',
    'childcare director',
    'early childhood education',
    'Fremont after school program',
    'qualified childcare staff',
    'Symphony Childcare mission',
    'safe childcare environment'
  ],
  openGraph: {
    title: 'About Symphony Childcare - Meet Our Director',
    description: 'Discover our story, meet Director Taruna Gupta, and learn about our nurturing approach to quality after-school care.',
    url: 'https://symphonychildcare.com/about',
    images: [
      {
        url: '/images/staff/director-taruna.jpg',
        width: 800,
        height: 600,
        alt: 'Taruna Gupta, Director of Symphony Childcare',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen hero-bg">
      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Symphony Childcare
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A nurturing environment where children thrive academically, creatively, and socially
              while feeling supported and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Meet Our Director
              </h2>
              <h3 className="font-display text-xl font-semibold text-primary-600 mb-4">
                Taruna Gupta, Director
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                "With a deep-rooted passion for early childhood education and a commitment to
                creating a nurturing environment for young minds, I am excited to lead Symphony
                Childcare. My goal is to foster a space where children can thrive academically,
                creatively, and socially, all while feeling supported and cared for."
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="tel:(510)565-0226"
                  className="btn-outline"
                >
                  Call Us Today
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative overflow-hidden rounded-full border-4 border-primary-200">
                  <Image
                    src="/images/staff/director-taruna.jpg"
                    alt="Taruna Gupta, Director of Symphony Childcare"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-display text-lg font-semibold text-primary-800 mb-2">
                  Taruna Gupta
                </h4>
                <p className="text-primary-700 font-medium">
                  Director & Founder
                </p>
                <p className="text-primary-600 text-sm mt-2">
                  Dedicated to providing quality childcare in Fremont
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Symphony Childcare was founded with a simple but powerful mission: to create
                a safe, nurturing environment where children can discover their potential,
                complete their homework with support, and build lasting friendships.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Located in the heart of Fremont at 681 Navajo Way, we serve families
                with pickup and drop-off services for Warm Springs, James Leitch, and Weibel Elementary schools, providing quality
                after-school care that gives parents peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Academic Support
              </h3>
              <p className="text-gray-600">
                We provide dedicated homework assistance to help children succeed
                academically while building confidence.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Safe & Nurturing
              </h3>
              <p className="text-gray-600">
                Creating a warm, family-like environment where every child feels
                valued, secure, and free to express themselves.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Social Development
              </h3>
              <p className="text-gray-600">
                Fostering friendships and social skills through group activities
                and collaborative learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              Our Facility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-warm">
                <Image
                  src="/images/gallery/facility/facility-01.jpg"
                  alt="Symphony Childcare Indoor Learning Space"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  Learning Spaces
                </h3>
                <p className="text-gray-600 text-sm">
                  Bright, organized areas designed for homework completion and educational activities.
                </p>
              </div>

              <div className="card-warm">
                <Image
                  src="/images/gallery/facility/facility-02.jpg"
                  alt="Symphony Childcare Activity Area"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  Activity Areas
                </h3>
                <p className="text-gray-600 text-sm">
                  Dedicated spaces for creative activities, games, and social interaction.
                </p>
              </div>

              <div className="card-warm">
                <Image
                  src="/images/hero/outdoor-playground.png"
                  alt="Symphony Childcare Outdoor Play Area"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  Outdoor Space
                </h3>
                <p className="text-gray-600 text-sm">
                  Safe outdoor play area where children can enjoy fresh air and physical activities.
                </p>
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
              Ready to Learn More?
            </h2>
            <p className="text-gray-700 mb-8">
              We'd love to meet you and your child. Schedule a tour to see our facility
              and learn more about our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule Your Tour
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