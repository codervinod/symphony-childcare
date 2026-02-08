import Image from 'next/image'
import Link from 'next/link'
import { Award, Heart, GraduationCap, Shield } from 'lucide-react'

export default function DirectorIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Meet Our Director
              </h2>
              <h3 className="text-2xl font-semibold text-primary-600">
                Taruna Gupta
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                "With a deep-rooted passion for early childhood education and a commitment to creating
                a nurturing environment for young minds, I am excited to lead Symphony Childcare."
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                My goal is to foster a space where children can thrive academically, creatively,
                and socially, all while feeling supported and cared for. At Symphony Childcare,
                we believe every child deserves individual attention and the opportunity to reach
                their full potential.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">California Certified</div>
                    <div className="text-sm text-gray-600">State-Required ECE Credentials</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary-100 rounded-lg">
                    <Award className="h-5 w-5 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dedicated Since 2021</div>
                    <div className="text-sm text-gray-600">4+ Years Experience</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-100 rounded-lg">
                    <Shield className="h-5 w-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certified</div>
                    <div className="text-sm text-gray-600">CPR & First Aid</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Heart className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Licensed</div>
                    <div className="text-sm text-gray-600">State Licensed Facility</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/about"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <span>Learn More About Our Team</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              {/* Director photo */}
              <Image
                src="/images/hero/director-professional.jpg"
                alt="Taruna Gupta, Director and Founder of Symphony Childcare"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Decorative quote */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <blockquote className="text-sm italic text-gray-700">
                    "Every child is unique and deserves to be celebrated for who they are."
                  </blockquote>
                  <cite className="text-xs font-semibold text-primary-600 mt-2 block">
                    - Taruna Gupta, Director
                  </cite>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}