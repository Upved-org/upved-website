import { Metadata } from "next"
import { Suspense } from "react"
import { DharmaPageClient } from "@/components/dharma-page-client"

export const metadata: Metadata = { title: "Our Approach", description: "See how UPVED combines evidence, local leadership, durable funding, and transparent learning." }

export default function DharmaPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <DharmaPageClient />
    </Suspense>
  )
}
