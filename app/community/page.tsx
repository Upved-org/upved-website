import { Metadata } from "next"
import { Suspense } from "react"
import { CommunityPageClient } from "@/components/community-page-client"

export const metadata: Metadata = { title: "Community", description: "Join UPVED local chapters, field days, and community environmental action." }

export default function CommunityPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4">Loading...</div>}>
      <CommunityPageClient />
    </Suspense>
  )
}
