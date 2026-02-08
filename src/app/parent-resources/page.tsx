import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parent Resources - FAQs & Enrollment Information',
  description: 'Find answers to frequently asked questions about Symphony Childcare. Learn about enrollment, operating hours, what to expect, and how we support your child\'s growth.',
  keywords: [
    'parent resources',
    'childcare FAQ',
    'enrollment information',
    'what to expect',
    'parent handbook',
    'childcare questions',
    'Symphony Childcare policies'
  ],
  openGraph: {
    title: 'Parent Resources & FAQs - Symphony Childcare',
    description: 'Essential information for parents including enrollment details, FAQs, and what to expect from our after-school program.',
    url: 'https://symphonychildcare.com/parent-resources',
  },
}

export default function ParentResourcesPage() {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open Monday through Friday from 3:00 PM to 6:30 PM. We are closed on weekends. Extended hours may be available upon request to accommodate your family's needs."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide pickup and drop-off services for Warm Springs Elementary and James Leitch Elementary schools. We're conveniently located at 681 Navajo Way in Fremont."
    },
    {
      question: "How can I schedule a tour?",
      answer: "You can schedule a tour by calling us at (510) 565-0226 or by filling out our contact form. We'd love to show you our facility and discuss how we can support your family."
    },
    {
      question: "What should my child bring?",
      answer: "Please have your child bring their homework, any school supplies they need, and a positive attitude! We provide snacks and have supplies for activities."
    },
    {
      question: "How do you handle homework time?",
      answer: "We provide a dedicated quiet time for homework completion with Director Taruna available to offer assistance and support when needed."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "The safety of your child is our top priority. We maintain a secure facility with careful supervision at all times. Please contact us to learn more about our specific safety protocols."
    }
  ]

  return (
    <div className="min-h-screen hero-bg">
      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Parent Resources
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about Symphony Childcare. Find answers to
              common questions and helpful information for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <Link
                href="tel:(510)565-0226"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                (510) 565-0226
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                Monday - Friday, 3:00 PM - 6:30 PM
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-700">681 Navajo Way</p>
              <p className="text-gray-700">Fremont, CA 94539</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Schedule Tour
              </h3>
              <Link
                href="/contact"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                Book Your Visit
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                See our facility in person
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Information */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              Getting Started
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                    Enrollment Process
                  </h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span>Contact us to discuss your needs and schedule a tour</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span>Visit our facility and meet Director Taruna</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span>Complete enrollment paperwork and discuss start date</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span>Welcome your child to Symphony Childcare!</span>
                    </li>
                  </ol>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>A warm, welcoming environment for your child</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Support with homework and academic success</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Opportunities for creative expression and play</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Building friendships and social skills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Nutritious snacks and caring supervision</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Communication */}
      <section className="section-bg-warm">
        <div className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              Safety & Communication
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-warm">
                <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4 text-center">
                  Your Child's Safety
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure facility with controlled access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Constant supervision by Director Taruna</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Emergency procedures in place</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Clean, child-safe environment</span>
                  </li>
                </ul>
              </div>

              <div className="card-warm">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4 text-center">
                  Staying Connected
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Direct phone contact during operating hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Updates about your child's day</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Open communication with director Taruna</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Feedback and suggestions welcomed</span>
                  </li>
                </ul>
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
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-8">
              We're here to help! Contact us to discuss your specific needs
              or to learn more about how Symphony Childcare can support your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact Us Today
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