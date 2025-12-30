"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Gamepad2 } from "lucide-react"
import Image from "next/image"

export function CommunityPageClient() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "wellness-walks"

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Community
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Building connections through shared experiences. Join us for wellness activities 
          and community games that bring people together.
        </p>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList className="mb-6 md:mb-8 flex justify-center">
          <TabsTrigger value="wellness-walks" asChild>
            <Link href="/community?tab=wellness-walks">Wellness Walks</Link>
          </TabsTrigger>
          <TabsTrigger value="community-games" asChild>
            <Link href="/community?tab=community-games">Community Games</Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wellness-walks" className="animate-in fade-in-50 duration-300 pt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Wellness Walks</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect with nature and community through our regular wellness walks. These 
                mindful walking sessions combine gentle exercise with meditation and fellowship.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Every Saturday morning</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Local parks (rotating locations)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>All fitness levels welcome</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/support?tab=contact">Join a Walk</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/group-hiking-nature-trail-morning-sunshine.webp" 
                  alt="Wellness Walks - Community hiking in nature" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
                <CardDescription>Mind, body, and community wellness</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Physical exercise in nature</li>
                  <li>• Guided mindfulness practice</li>
                  <li>• Community connection</li>
                  <li>• Stress reduction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community-games" className="animate-in fade-in-50 duration-300 pt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Community Games</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From RocketArm challenges to traditional games, our community games bring 
                families together for fun and friendly competition. All ages welcome!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  <span>RocketArm Throwing Challenge</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Family-friendly activities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Monthly game days</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/support?tab=contact">Get Involved</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/people-throwing-ball-sky-outdoor-sports.webp" 
                  alt="Community Games - RocketArm Challenge" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Featured: RocketArm Challenge</CardTitle>
                <CardDescription>Test your throwing skills!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The RocketArm Challenge uses advanced sensors to measure throw height and 
                  create friendly competition. Join our leaderboards and compete with the community!
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://rocketarm.app" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
