import { HeroSection } from "@/components/hero-section"
import { GatheringSection } from "@/components/gathering-section"
import { DharmaSection } from "@/components/dharma-section"
import { TeachersSection } from "@/components/teachers-section"
import { OutreachSection } from "@/components/outreach-section"
import { DonateSection } from "@/components/donate-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsletterSection />
      <GatheringSection />
      <DharmaSection />
      <TeachersSection />
      <OutreachSection />
      <DonateSection />
    </>
  )
}
