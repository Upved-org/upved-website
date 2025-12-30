import { Metadata } from "next"
import { Suspense } from "react"
import { DharmaPageClient } from "@/components/dharma-page-client"

export const metadata: Metadata = {
  title: "Our Dharma | UPVED",
  description: "Explore the path of Vedic wisdom: The Arya Samaj tradition and 14 Vedic Principles that guide our community.",
}

export default function DharmaPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <DharmaPageClient />
    </Suspense>
  )
}
