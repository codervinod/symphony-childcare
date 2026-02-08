import { Shield, ChefHat, Heart, Users, Home, MapPin } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'California licensed facility with background-checked staff and secure environment maintained to the highest safety standards.'
  },
  {
    icon: ChefHat,
    title: 'Fresh Homemade Meals',
    description: 'Nutritious Indian vegetarian meals prepared fresh daily by Director Taruna, ensuring healthy and delicious food your child will love.'
  },
  {
    icon: Heart,
    title: 'Homely Atmosphere',
    description: 'Warm, family-like environment where children receive the same love and care as they would at home, not just supervision.'
  },
  {
    icon: Users,
    title: 'Small Group Advantage',
    description: 'Unlike large daycares with 30+ kids, our intimate setting ensures every child gets personal attention and individualized care.'
  },
  {
    icon: Home,
    title: 'Spotless & Organized',
    description: 'Meticulously maintained clean environment with organized learning spaces - a stark contrast to overcrowded facilities.'
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Conveniently located in Fremont with pickup service from Warm Springs and James Leitch Elementary schools.'
  }
]

export default function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Symphony Over Large Daycares?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of personalized care. While large daycares focus on capacity,
            we focus on quality - giving your child the individual attention and homemade care they deserve.
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
              Experience the Personal Touch Difference
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              See why parents choose our intimate, caring environment over large impersonal daycares.
              Schedule a tour and taste the difference homemade care makes.
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