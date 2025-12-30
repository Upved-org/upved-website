import { Metadata } from "next"
import { Suspense } from "react"
import { SupportPageClient } from "@/components/support-page-client"

export const metadata: Metadata = {
  title: "Support | UPVED",
  description: "Support UPVED through donations, volunteer, or connect with our community. View our governance and transparency documents.",
}

export default function SupportPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <SupportPageClient />
    </Suspense>
  )
}
