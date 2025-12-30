"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar, BookOpen, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
  const [activeTab, setActiveTab] = useState("join")

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 md:mb-8">
          <TabsTrigger value="join">Join Us</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
        </TabsList>

        {/* Join Us Tab */}
        <TabsContent value="join" className="mt-8">
          <div className="text-center mb-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-primary/10 mb-6">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Join Our Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a growing spiritual community rooted in Vedic wisdom and the Arya Samaj tradition.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Attend Gatherings</h3>
                <p className="text-muted-foreground mb-4">
                  Join us for weekly Havan ceremonies and Sandhya practice. All are welcome regardless of background or experience.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/gatherings">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Learn with Us</h3>
                <p className="text-muted-foreground mb-4">
                  Explore Vedic teachings, study sacred texts, and engage with our community of seekers and scholars.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/teachings">Explore Teachings</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">Stay Connected</h3>
              <p className="text-center text-muted-foreground mb-6">
                Subscribe to our newsletter for updates on gatherings, teachings, and community events.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                    required
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Volunteer Tab */}
        <TabsContent value="volunteer" className="mt-8">
          <div className="text-center mb-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-primary/10 mb-6">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Volunteer with UPVED
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your time and talents to help spread Vedic wisdom and support our growing community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Event Support</h3>
                <p className="text-sm text-muted-foreground">
                  Help with setup, coordination, and hospitality during our weekly gatherings and special events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Teaching Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Support our teachers by helping with materials, translations, and facilitating study groups.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Outreach</h3>
                <p className="text-sm text-muted-foreground">
                  Help share our message through social media, community events, and partnership development.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-semibold mb-4">Express Your Interest</h3>
              <p className="text-muted-foreground mb-6">
                Fill out this form and we'll be in touch with volunteer opportunities that match your interests and availability.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your interests and skills..."
                  rows={4}
                  className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none resize-none"
                  required
                />
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">Questions about volunteering?</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:volunteer@upved.org" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="h-4 w-4" />
                volunteer@upved.org
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
