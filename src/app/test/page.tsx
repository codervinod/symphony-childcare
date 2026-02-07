export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Test Typography */}
        <section>
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Typography Test
          </h1>
          <h2 className="font-display text-2xl font-semibold text-primary-600 mb-2">
            Primary Color Heading
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            This is a paragraph test with regular text. It should use Inter font.
          </p>
        </section>

        {/* Test Colors */}
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Color Palette Test
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-primary-600 text-white rounded-lg">
              Primary Blue
            </div>
            <div className="p-4 bg-secondary-600 text-white rounded-lg">
              Secondary Green
            </div>
            <div className="p-4 bg-accent-600 text-white rounded-lg">
              Accent Orange
            </div>
          </div>
        </section>

        {/* Test Buttons */}
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Button Test
          </h2>
          <div className="flex space-x-4">
            <button className="btn-primary">
              Primary Button
            </button>
            <button className="btn-secondary">
              Secondary Button
            </button>
            <button className="btn-outline">
              Outline Button
            </button>
          </div>
        </section>

        {/* Test Card */}
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Card Test
          </h2>
          <div className="card">
            <h3 className="font-display text-xl font-semibold mb-2">Card Title</h3>
            <p className="text-gray-600">
              This is a card component with shadow and rounded corners.
            </p>
          </div>
        </section>

        {/* Test Icons */}
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Icon Test (Lucide React)
          </h2>
          <div className="flex space-x-4">
            <div className="p-3 bg-primary-100 rounded-lg">
              <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="p-3 bg-secondary-100 rounded-lg">
              <svg className="h-6 w-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </section>

        {/* Test Responsive Grid */}
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Responsive Grid Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="card">
                <h3 className="font-semibold">Item {num}</h3>
                <p className="text-sm text-gray-600">Responsive grid item</p>
              </div>
            ))}
          </div>
        </section>

        {/* Test Animations */}
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Animation Test
          </h2>
          <div className="flex space-x-8">
            <div className="w-16 h-16 bg-primary-600 rounded-full animate-bounce-subtle"></div>
            <div className="w-16 h-16 bg-secondary-600 rounded-full animate-float"></div>
            <div className="w-16 h-16 bg-accent-600 rounded-full animate-pulse"></div>
          </div>
        </section>
      </div>
    </div>
  )
}