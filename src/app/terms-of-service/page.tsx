import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Symphony Childcare',
  description: 'Terms of service for Symphony Childcare, outlining the terms and conditions for our childcare services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl">
            Last updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card prose prose-lg max-w-none">

              <h2>Introduction</h2>
              <p>
                Welcome to Symphony Childcare. These Terms of Service ("Terms") govern your use of our
                childcare services and website. By enrolling your child or using our services, you agree
                to be bound by these Terms.
              </p>

              <h2>Enrollment and Registration</h2>

              <h3>Enrollment Process</h3>
              <ul>
                <li>All children must be enrolled before attending our program</li>
                <li>Enrollment requires completed registration forms and required documentation</li>
                <li>We reserve the right to deny enrollment based on program capacity or suitability</li>
                <li>A registration fee may be required to secure enrollment</li>
              </ul>

              <h3>Required Documentation</h3>
              <p>Before enrollment, parents must provide:</p>
              <ul>
                <li>Completed enrollment and emergency contact forms</li>
                <li>Current immunization records</li>
                <li>Physician's physical examination form (if required)</li>
                <li>Any relevant medical or behavioral information</li>
              </ul>

              <h2>Program Policies</h2>

              <h3>Hours of Operation</h3>
              <ul>
                <li>Monday through Friday: 3:00 PM - 6:30 PM</li>
                <li>Extended hours may be available upon request</li>
                <li>We are closed on major holidays and may have modified hours during school breaks</li>
              </ul>

              <h3>Pickup and Drop-off</h3>
              <ul>
                <li>Children must be picked up by authorized individuals only</li>
                <li>Late pickup fees may apply for children picked up after closing time</li>
                <li>We provide pickup services from designated schools</li>
                <li>Parents must notify us of any changes to pickup arrangements</li>
              </ul>

              <h2>Health and Safety</h2>

              <h3>Illness Policy</h3>
              <ul>
                <li>Children with fever, vomiting, or contagious illness must stay home</li>
                <li>Children must be fever-free for 24 hours before returning</li>
                <li>We reserve the right to exclude children who appear ill</li>
                <li>Parents will be contacted immediately if a child becomes ill during care</li>
              </ul>

              <h3>Emergency Procedures</h3>
              <ul>
                <li>In case of emergency, we will contact parents immediately</li>
                <li>We may seek emergency medical care if parents cannot be reached</li>
                <li>Emergency contact information must be kept current</li>
              </ul>

              <h2>Payment Terms</h2>

              <h3>Tuition and Fees</h3>
              <ul>
                <li>Tuition rates are established annually and subject to change with notice</li>
                <li>Payment is due in advance according to your selected payment schedule</li>
                <li>Late payment fees may apply to overdue accounts</li>
                <li>Registration fees are non-refundable</li>
              </ul>

              <h3>Refund Policy</h3>
              <ul>
                <li>Tuition is non-refundable for days missed due to child illness or family vacation</li>
                <li>No refund is provided for emergency closures due to weather or other circumstances</li>
                <li>Two weeks' written notice is required for withdrawal</li>
              </ul>

              <h2>Behavior and Discipline</h2>

              <h3>Behavior Expectations</h3>
              <p>We expect all children to:</p>
              <ul>
                <li>Treat others with respect and kindness</li>
                <li>Follow program rules and guidelines</li>
                <li>Use appropriate language and behavior</li>
                <li>Respect property and materials</li>
              </ul>

              <h3>Discipline Policy</h3>
              <ul>
                <li>We use positive guidance and redirection techniques</li>
                <li>Persistent behavior problems will be addressed with parents</li>
                <li>We reserve the right to terminate services for serious behavioral issues</li>
              </ul>

              <h2>Parent Responsibilities</h2>
              <p>Parents agree to:</p>
              <ul>
                <li>Provide accurate and complete enrollment information</li>
                <li>Keep all contact and medical information current</li>
                <li>Follow program policies and procedures</li>
                <li>Pay all fees and tuition on time</li>
                <li>Communicate openly with staff about their child's needs</li>
                <li>Pick up children on time</li>
              </ul>

              <h2>Termination of Services</h2>

              <h3>Termination by Parents</h3>
              <ul>
                <li>Two weeks' written notice is required</li>
                <li>Tuition is due for the full notice period regardless of attendance</li>
                <li>All fees and outstanding balances must be paid</li>
              </ul>

              <h3>Termination by Symphony Childcare</h3>
              <p>We may terminate services immediately for:</p>
              <ul>
                <li>Non-payment of fees or tuition</li>
                <li>Failure to comply with program policies</li>
                <li>Aggressive or inappropriate behavior by child or parent</li>
                <li>Providing false information on enrollment forms</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                Symphony Childcare's liability is limited to the direct cost of childcare services.
                We are not liable for indirect, incidental, or consequential damages. Parents
                acknowledge that participation in activities involves inherent risks.
              </p>

              <h2>Photography and Media</h2>
              <p>
                We may take photographs or videos of children during program activities for
                educational purposes or marketing materials. Parents will be notified and may
                opt-out of such use.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms are governed by California state law. Any disputes will be resolved
                in the appropriate courts of Alameda County, California.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Symphony Childcare</strong><br />
                Director: Taruna Gupta<br />
                Address: 681 Navajo Way, Fremont, CA 94539<br />
                Phone: <a href="tel:(510)565-0226" className="text-primary-600">(510) 565-0226</a><br />
                Email: <a href="mailto:taruna@symphonychildcare.com" className="text-primary-600">taruna@symphonychildcare.com</a></p>
              </div>

              <h2>Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Changes will be posted on our website
                and parents will be notified of significant changes. Continued use of our
                services constitutes acceptance of modified Terms.
              </p>

              <h2>Acknowledgment</h2>
              <p>
                By enrolling your child at Symphony Childcare, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of Service.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}