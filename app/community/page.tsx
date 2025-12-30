import { Metadata } from "next"
import { Suspense } from "react"
import { CommunityPageClient } from "@/components/community-page-client"

export const metadata: Metadata = {
  title: "Community | UPVED",
  description: "Join our community programs including Wellness Walks and Community Games. Building connections through shared experiences.",
}

export default function CommunityPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <CommunityPageClient />
    </Suspense>
  )
}
