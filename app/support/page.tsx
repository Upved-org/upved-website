import { Metadata } from "next"
import { Suspense } from "react"
import { SupportPageClient } from "@/components/support-page-client"

export const metadata: Metadata = { title: "Support", description: "Fund UPVED environmental programs, contact the team, and view governance information." }

export default function SupportPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <SupportPageClient />
    </Suspense>
  )
}
