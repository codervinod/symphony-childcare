import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, ChefHat, Heart, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 via-secondary-600/5 to-accent-500/6"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/80 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/70 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-200/60 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float"></div>

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where Your Child{' '}
                <span className="text-gradient">Thrives</span>{' '}
                After School
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Safe, supervised environment with personal attention, homework help,
                and enriching activities. Give your child the best after-school experience
                while you focus on work with complete peace of mind.
              </p>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Safety First</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary-100 rounded-lg">
                  <ChefHat className="h-5 w-5 text-secondary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Fresh Homemade Meals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent-100 rounded-lg">
                  <Heart className="h-5 w-5 text-accent-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Homely Atmosphere</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Small Group Advantage</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary group flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Schedule Your Free Tour</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:(510)565-0226"
                className="btn-outline flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Call Now: (510) 565-0226</span>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>California Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Background Checked Staff</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>4+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Image Collage - exactly matching current website layout */}
          <div className="relative max-w-2xl mx-auto">
            <div className="space-y-4">
              {/* Top row - Two images side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top left - Homework Help */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero/homework-help.jpg"
                    alt="Taruna providing personalized homework assistance to a child"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    priority
                  />
                </div>

                {/* Top right - Professional Director */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero/director-professional.jpg"
                    alt="Taruna Gupta, Professional Director of Symphony Childcare"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Bottom - Educational Activities (single wide image) */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero/children-chess.jpg"
                  alt="Children engaged in educational chess activities at Symphony Childcare"
                  width={800}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Stats section - below the images */}
              <div className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-display font-bold text-2xl text-primary-600">2024</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-2xl text-secondary-600">4+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-2xl text-accent-600">5★</div>
                      <div className="text-sm text-gray-600">Parent Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full animate-bounce-subtle opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary-200 rounded-full animate-float opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}