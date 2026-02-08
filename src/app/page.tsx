import Hero from '@/components/ui/Hero'
import ValueProposition from '@/components/ui/ValueProposition'
import ProgramOverview from '@/components/ui/ProgramOverview'
import DirectorIntro from '@/components/ui/DirectorIntro'
import TestimonialCarousel from '@/components/ui/TestimonialCarousel'
import CallToAction from '@/components/ui/CallToAction'
import AnnouncementBanner from '@/components/ui/AnnouncementBanner'
import StructuredData from '@/components/seo/StructuredData'

export const metadata = {
  title: 'Home',
  description: 'Symphony Childcare provides premium after-school care in Fremont, CA. Safe, supervised environment with homework help, enriching activities, and personal attention from Director Taruna.',
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <AnnouncementBanner />
      <Hero />
      <ValueProposition />
      <ProgramOverview />
      <DirectorIntro />
      <TestimonialCarousel />
      <CallToAction />
    </>
  )
}