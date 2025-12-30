import { Metadata } from "next"
import { Suspense } from "react"
import { GatheringsPageClient } from "@/components/gatherings-page-client"

export const metadata: Metadata = {
  title: "Gatherings | UPVED",
  description: "Join our weekly gatherings: Sunday Havan and Sandhya Practice. Experience the transformative power of Vedic rituals.",
}

export default function GatheringsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <GatheringsPageClient />
    </Suspense>
  )
}
