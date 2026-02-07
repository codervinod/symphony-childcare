export default function SimplePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1 style={{ color: '#0066ff', fontSize: '2rem', marginBottom: '1rem' }}>
        Symphony Childcare - Simple Test
      </h1>
      <p style={{ color: '#333', fontSize: '1.2rem', marginBottom: '2rem' }}>
        If you can see this styled text, then Next.js is working.
        The issue might be with Tailwind CSS compilation.
      </p>

      <div style={{
        backgroundColor: '#0066ff',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        display: 'inline-block',
        marginBottom: '2rem'
      }}>
        Inline Styled Button
      </div>

      <div className="bg-primary-600 text-white p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Tailwind CSS Test</h2>
        <p>If this box is blue with white text, Tailwind is working correctly.</p>
      </div>

      <div className="card">
        <h3 className="font-display text-lg font-semibold mb-2">Card Component Test</h3>
        <p className="text-gray-600">If this has shadows and padding, custom CSS classes are working.</p>
      </div>

      <div className="mt-8 p-4 bg-red-100 border border-red-400 rounded">
        <h3 className="text-red-800 font-semibold">Debug Info:</h3>
        <ul className="text-red-700 mt-2 space-y-1">
          <li>• Next.js: Working ✓</li>
          <li>• CSS Loading: {typeof window !== 'undefined' ? 'Client-side ✓' : 'Server-side ✓'}</li>
          <li>• Tailwind: Check if blue box above appears</li>
          <li>• Custom Classes: Check if card has shadow</li>
        </ul>
      </div>
    </div>
  )
}