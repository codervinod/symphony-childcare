'use client'

import { useState } from 'react'
import { useForm } from '@formspree/react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  parentName: string
  email: string
  phone: string
  childName: string
  childAge: string
  programInterest: string
  message: string
  tourInterest: boolean
}

export default function ContactForm() {
  // Configured with Symphony Childcare Formspree form
  const [state, handleSubmit] = useForm("mzdabyvo")

  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    programInterest: '',
    message: '',
    tourInterest: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create form data for Formspree
    const formDataForSubmit = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataForSubmit.append(key, value.toString())
    })

    // Add additional context
    formDataForSubmit.append('_subject', 'New Contact Form Submission - Symphony Childcare')
    formDataForSubmit.append('_replyto', formData.email)

    await handleSubmit(formDataForSubmit)
  }

  if (state.succeeded) {
    return (
      <div className="card text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-green-100 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-gray-900">
            Thank You!
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We've received your message and will get back to you within 2 hours during business hours.
            If you need immediate assistance, please call us at{' '}
            <a href="tel:(510)565-0226" className="text-primary-600 font-semibold">
              (510) 565-0226
            </a>.
          </p>
        </div>
        <button
          onClick={() => {
            setFormData({
              parentName: '',
              email: '',
              phone: '',
              childName: '',
              childAge: '',
              programInterest: '',
              message: '',
              tourInterest: false
            })
            // Reset form state if needed
          }}
          className="btn-outline"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-6">
      {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <div className="text-sm text-red-700">
              There was an error submitting the form. Please try again or call us directly.
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Parent Name */}
        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
            Parent/Guardian Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            required
            value={formData.parentName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Child Name */}
        <div>
          <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
            Child's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            required
            value={formData.childName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Child's first name"
          />
        </div>

        {/* Child Age/Grade */}
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
            Child's Age/Grade <span className="text-red-500">*</span>
          </label>
          <select
            id="childAge"
            name="childAge"
            required
            value={formData.childAge}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          >
            <option value="">Select age/grade</option>
            <option value="5-6 (Kindergarten)">5-6 years (Kindergarten)</option>
            <option value="6-7 (1st Grade)">6-7 years (1st Grade)</option>
            <option value="7-8 (2nd Grade)">7-8 years (2nd Grade)</option>
            <option value="8-9 (3rd Grade)">8-9 years (3rd Grade)</option>
            <option value="9-10 (4th Grade)">9-10 years (4th Grade)</option>
            <option value="10-11 (5th Grade)">10-11 years (5th Grade)</option>
            <option value="11-12 (6th Grade)">11-12 years (6th Grade)</option>
            <option value="12-13 (7th Grade)">12-13 years (7th Grade)</option>
            <option value="13-14 (8th Grade)">13-14 years (8th Grade)</option>
          </select>
        </div>

        {/* Program Interest */}
        <div>
          <label htmlFor="programInterest" className="block text-sm font-medium text-gray-700 mb-2">
            Program Interest
          </label>
          <select
            id="programInterest"
            name="programInterest"
            value={formData.programInterest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          >
            <option value="">Select program type</option>
            <option value="After School Program (Full-time)">After School Program (Full-time)</option>
            <option value="After School Program (Part-time)">After School Program (Part-time)</option>
            <option value="Drop-in Care">Drop-in Care</option>
            <option value="Summer Program">Summer Program</option>
            <option value="Just Exploring Options">Just Exploring Options</option>
          </select>
        </div>
      </div>

      {/* Tour Interest */}
      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="tourInterest"
            checked={formData.tourInterest}
            onChange={handleInputChange}
            className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <span className="text-gray-700">
            I'm interested in scheduling a free tour of the facility
          </span>
        </label>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message or Questions
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Tell us about your specific needs, questions, or concerns..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <div className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to be contacted by Symphony Childcare
        regarding our programs and services.
      </div>
    </form>
  )
}