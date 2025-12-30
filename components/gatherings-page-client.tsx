"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

export function GatheringsPageClient() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "sunday-havan"

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section with Glassmorphism */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Gatherings
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join us for transformative experiences rooted in ancient Vedic traditions. 
          All are welcome, regardless of background or experience.
        </p>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList className="mb-6 md:mb-8 flex justify-center flex-wrap gap-2">
          <TabsTrigger value="sunday-havan" asChild>
            <Link href="/gatherings?tab=sunday-havan">Agnihotra</Link>
          </TabsTrigger>
          <TabsTrigger value="sandhya-practice" asChild>
            <Link href="/gatherings?tab=sandhya-practice">Sandhya Practice</Link>
          </TabsTrigger>
          <TabsTrigger value="rocketarm" asChild>
            <Link href="/gatherings?tab=rocketarm">Rocketarm Fellowship</Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sunday-havan" className="animate-in fade-in-50 duration-300 pt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Agnihotra</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience the traditional <strong>Haryanvi-style fire ritual</strong> every Sunday. 
                The fire is the mouth of the Divine; our offerings are the purification of our intent.
                This service satisfies our regular religious observance requirement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Every Sunday</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>10:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Mateo Sanctuary</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>All are welcome</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/support?tab=contact">Join Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/support?tab=donate">Support This Program</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/upved-havan.webp" 
                  alt="Agnihotra - Sacred Fire Ceremony" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
                <CardDescription>
                  A welcoming environment for spiritual growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Opening prayers and mantras</li>
                  <li>• Sacred fire ceremony with offerings</li>
                  <li>• Community fellowship and prasad</li>
                  <li>• Optional Q&A with teachers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sandhya-practice" className="animate-in fade-in-50 duration-300 pt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Sandhya Practice</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Practical applications of the Vedas, emphasizing the <strong>Kshatriya virtues</strong> of Haryana: 
                discipline, honesty, and physical vitality. Direct wisdom over theoretical debate.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Every Sunday</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>11:30 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Mateo Sanctuary</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/support?tab=contact">Join Us</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/meditate.webp" 
                  alt="Siddha-Vani - Dharma Discourse" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Application of Dharma in daily life</li>
                  <li>• The "Warrior-Sage" ideal</li>
                  <li>• Discipline and "Urdhva" (Upward Energy)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rocketarm" className="animate-in fade-in-50 duration-300 pt-6">
           <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Rocketarm (Rite of Urdhva Kanduka)</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A modern <strong>"Vedic Akhada"</strong> practice where the vertical throw serves as a meditation 
                on <strong>Ekagrata</strong> (one-pointed focus). This is "Kinetic Worship"—connecting body and spirit.
              </p>
               <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Weekly Sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Outdoor Locations</span>
                </div>
              </div>
               <div className="flex gap-4">
                <Button asChild>
                  <Link href="/join">Sign Up</Link>
                </Button>
              </div>
            </div>
             <Card className="overflow-hidden">
               <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-muted-foreground">Rocketarm Image</span>
              </div>
              <CardHeader>
                <CardTitle>The Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Physical discipline as spiritual practice</li>
                  <li>• Cultivating focus and power</li>
                  <li>• Fellowship through shared effort</li>
                </ul>
              </CardContent>
            </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
