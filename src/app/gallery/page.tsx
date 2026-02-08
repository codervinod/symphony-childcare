import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery - See Our Facility & Activities',
  description: 'Take a virtual tour of Symphony Childcare\'s facility. See our learning spaces, activity areas, outdoor playground, and children engaged in educational activities.',
  keywords: [
    'Symphony Childcare photos',
    'facility tour',
    'childcare facility Fremont',
    'learning spaces',
    'outdoor playground',
    'educational activities',
    'safe childcare environment'
  ],
  openGraph: {
    title: 'Symphony Childcare Photo Gallery - See Our Facility',
    description: 'Take a virtual tour of our facility and see children engaged in educational activities at Symphony Childcare.',
    url: 'https://symphonychildcare.com/gallery',
    images: [
      {
        url: '/images/gallery/facility/facility-01.jpg',
        width: 800,
        height: 600,
        alt: 'Symphony Childcare learning spaces and facility',
      },
    ],
  },
}

export default function GalleryPage() {
  const facilityImages = [
    {
      src: "/images/gallery/facility/facility-01.jpg",
      alt: "Symphony Childcare Learning Space",
      title: "Learning Environment",
      description: "Organized spaces designed for focused homework and study time"
    },
    {
      src: "/images/gallery/facility/facility-02.jpg",
      alt: "Symphony Childcare Activity Area",
      title: "Activity Area",
      description: "Creative spaces for arts, crafts, and group activities"
    },
    {
      src: "/images/gallery/facility/facility-03.jpg",
      alt: "Symphony Childcare Indoor Space",
      title: "Indoor Play Area",
      description: "Safe indoor spaces for games and social interaction"
    },
    {
      src: "/images/gallery/facility/facility-04.jpg",
      alt: "Symphony Childcare Common Area",
      title: "Common Area",
      description: "Comfortable spaces for meals and group gatherings"
    },
    {
      src: "/images/hero/outdoor-playground.png",
      alt: "Symphony Childcare Outdoor Playground",
      title: "Outdoor Playground",
      description: "Safe outdoor space for physical activities and fresh air"
    }
  ]

  const activityImages = [
    {
      src: "/images/gallery/activities/child-artwork.jpg",
      alt: "Children's Creative Artwork",
      title: "Creative Expression",
      description: "Children's artwork and creative projects on display"
    },
    {
      src: "/images/gallery/activities/healthy-meal.jpg",
      alt: "Nutritious Snacks and Meals",
      title: "Healthy Nutrition",
      description: "Nutritious meals and snacks provided daily"
    }
  ]

  return (
    <div className="min-h-screen hero-bg">
      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a virtual tour of our facility and see where your child will learn,
              play, and grow in a safe and nurturing environment.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Our Facility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {facilityImages.map((image, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Programs */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              Activities & Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {activityImages.map((image, index) => (
                <div key={index} className="card-warm group hover:scale-105 transition-transform duration-200">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                    {image.title}
                  </h3>
                  <p className="text-gray-600">
                    {image.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Safe Environment
              </h3>
              <p className="text-gray-600 text-sm">
                Secure facility with background-checked staff
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Homework Help
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated time and assistance for academic success
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Nutritious Meals
              </h3>
              <p className="text-gray-600 text-sm">
                Healthy snacks and meals provided daily
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-cream-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-sand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Flexible Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Extended hours available to fit your schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tour CTA */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <div className="card text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                See Our Facility in Person
              </h2>
              <p className="text-gray-700 mb-8">
                Pictures can only show so much. Schedule a tour to experience our warm,
                welcoming environment and meet Director Taruna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Schedule Your Tour
                </Link>
                <Link
                  href="/program-details"
                  className="btn-secondary"
                >
                  View Programs
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Questions? Call us at{' '}
                  <Link
                    href="tel:(510)565-0226"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    (510) 565-0226
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}