import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://symphonychildcare.com'),
  title: {
    default: 'Symphony Childcare | Premium After-School Program in Fremont, CA',
    template: '%s | Symphony Childcare'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/logos/symphony-logo-dark.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/symphony-logo-dark.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  description: 'Symphony Childcare provides safe, nurturing after-school care with homework help, enriching activities, and personal attention in Fremont, CA. Flexible pickup times and small group sizes.',
  keywords: [
    'after school program',
    'childcare Fremont CA',
    'homework help',
    'after school care',
    'Fremont childcare',
    'kids program',
    'safe childcare',
    'qualified educators',
    'Symphony Childcare'
  ],
  authors: [{ name: 'Symphony Childcare' }],
  creator: 'Symphony Childcare',
  publisher: 'Symphony Childcare',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://symphonychildcare.com',
    siteName: 'Symphony Childcare',
    title: 'Symphony Childcare | Premium After-School Program in Fremont, CA',
    description: 'Safe, nurturing after-school care with homework help and enriching activities. Qualified educators, flexible pickup times, and small group sizes in Fremont, CA.',
    images: [
      {
        url: '/images/social/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Symphony Childcare - Premium After-School Program in Fremont, CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Symphony Childcare | Premium After-School Program in Fremont, CA',
    description: 'Safe, nurturing after-school care with homework help and enriching activities. Qualified educators in Fremont, CA.',
    images: ['/images/social/og-image.png'],
  },
  alternates: {
    canonical: 'https://symphonychildcare.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'childcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans text-gray-900 bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}