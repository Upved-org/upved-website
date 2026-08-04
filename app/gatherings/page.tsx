import { Metadata } from "next"
import { Suspense } from "react"
import { GatheringsPageClient } from "@/components/gatherings-page-client"

export const metadata: Metadata = { title: "Programs", description: "Explore UPVED habitat restoration, climate education, and community action programs." }

export default function GatheringsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <GatheringsPageClient />
    </Suspense>
  )
}
