import { HeroSection } from "@/components/hero-section"
import { GatheringSection } from "@/components/gathering-section"
import { DharmaSection } from "@/components/dharma-section"
import { TeachersSection } from "@/components/teachers-section"
import { OutreachSection } from "@/components/outreach-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <GatheringSection />
      <DharmaSection />
      <TeachersSection />
      <OutreachSection />
    </>
  )
}
