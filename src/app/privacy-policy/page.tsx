import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Symphony Childcare',
  description: 'Privacy policy for Symphony Childcare, detailing how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Last updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card prose prose-lg max-w-none">

              <h2>Introduction</h2>
              <p>
                At Symphony Childcare, we are committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>

              <h3>Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>Parent/guardian names and contact information</li>
                <li>Child's name, age, and relevant health/safety information</li>
                <li>Emergency contact information</li>
                <li>Educational and behavioral information relevant to childcare</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3>Website Information</h3>
              <p>When you visit our website, we may collect:</p>
              <ul>
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Contact form submissions</li>
                <li>Cookie data (if applicable)</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>Providing childcare services to your child</li>
                <li>Communicating with parents about their child's progress and activities</li>
                <li>Emergency contact and safety purposes</li>
                <li>Billing and payment processing</li>
                <li>Improving our services and programs</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties,
                except in the following circumstances:
              </p>
              <ul>
                <li><strong>Emergency Situations:</strong> When necessary to protect the safety of a child</li>
                <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                <li><strong>Service Providers:</strong> With trusted third parties who help us operate our business (e.g., payment processors)</li>
                <li><strong>Consent:</strong> When you have given explicit consent</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                We are committed to protecting children's privacy. We only collect information about
                children that is necessary for providing childcare services. We do not collect personal
                information from children under 13 through our website without parental consent.
              </p>

              <h2>Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes
                outlined in this policy, comply with legal obligations, resolve disputes, and enforce
                our agreements.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of non-essential communications</li>
                <li>Request information about how your data is used</li>
              </ul>

              <h2>Contact Information</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Symphony Childcare</strong><br />
                Director: Taruna Gupta<br />
                Address: 681 Navajo Way, Fremont, CA 94539<br />
                Phone: <a href="tel:(510)565-0226" className="text-primary-600">(510) 565-0226</a><br />
                Email: <a href="mailto:taruna@symphonychildcare.com" className="text-primary-600">taruna@symphonychildcare.com</a></p>
              </div>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant
                changes by posting the new policy on our website with an updated "Last updated" date.
              </p>

              <h2>California Privacy Rights</h2>
              <p>
                If you are a California resident, you may have additional rights under the California
                Consumer Privacy Act (CCPA). Please contact us for more information about exercising
                these rights.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}