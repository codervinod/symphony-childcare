'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import testimonialsData from '@/lib/data/testimonials.json'

const testimonials = testimonialsData.map(testimonial => ({
  id: testimonial.id,
  name: testimonial.parentName,
  role: testimonial.role,
  text: testimonial.quote,
  rating: testimonial.rating
}))

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="section-padding section-bg-warm">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the families who trust us
            with their most precious gifts every day.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="card rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-accent-100 rounded-full">
                <Quote className="h-8 w-8 text-accent-600" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author info */}
              <div className="space-y-2">
                <div className="font-display font-semibold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="font-display font-bold text-3xl text-primary-600">2024</div>
            <div className="text-gray-600">Founded</div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-3xl text-secondary-600">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-3xl text-accent-600">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-3xl text-primary-600">25</div>
            <div className="text-gray-600">Max Group Size</div>
          </div>
        </div>
      </div>
    </section>
  )
}