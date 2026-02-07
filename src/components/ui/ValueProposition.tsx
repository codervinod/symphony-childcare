import { Shield, GraduationCap, Heart, Users, Clock, MapPin } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Licensed facility with background-checked staff, secure entry, and comprehensive safety protocols.'
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Dedicated homework time with qualified tutors ensuring your child\'s academic success.'
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'Warm, home-like atmosphere where children feel valued, supported, and genuinely cared for.'
  },
  {
    icon: Users,
    title: 'Small Group Sizes',
    description: 'Low child-to-staff ratios ensure individual attention and personalized care for each child.'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Convenient pickup times that work with your schedule, plus extended hours when needed.'
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Conveniently located in Fremont with easy access from major schools and neighborhoods.'
  }
]

export default function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Parents Choose Symphony Childcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand what working parents need: a safe, nurturing environment where children thrive
            academically and socially while you focus on your career with complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="p-3 bg-primary-100 rounded-xl inline-block group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Experience the Symphony Difference
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Join over 200 happy families who trust us with their most precious gift.
              Schedule a tour and see why parents consistently choose Symphony Childcare.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Schedule Your Free Tour</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}