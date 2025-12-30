import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community & Outreach | UPVED",
  description: "Join our wellness walks, sports challenges, and community programs rooted in Vedic values.",
}

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Community & Outreach</h1>
        <p className="text-muted-foreground">
          Join our programs designed to uplift spirits and strengthen community bonds.
        </p>
      </div>
      
      <Tabs defaultValue="community" className="w-full space-y-8">
        <TabsList className="bg-transparent p-0 gap-2 flex-wrap">
          <TabsTrigger 
            value="community" 
            className="px-6 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
          >
            Community
          </TabsTrigger>
          <TabsTrigger 
            value="wellness-walks" 
            className="px-6 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
          >
            Wellness Walks
          </TabsTrigger>
          <TabsTrigger 
            value="rocket-arm" 
            className="px-6 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
          >
            RocketArm Challenge
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Community Overview (Cards) */}
        <TabsContent value="community" className="space-y-6 animate-in fade-in-50 duration-300">
           <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
             {/* Wellness Walk Card */}
             <Card className="overflow-hidden border-border/50 hover:shadow-md transition-shadow">
               <div className="aspect-video relative bg-muted">
                  <Image 
                    src="/group-hiking-trail-sunrise-mountains-peaceful.jpg" 
                    alt="Hiking group regarding sunrise" 
                    fill 
                    className="object-cover" 
                  />
               </div>
               <CardHeader>
                 <CardTitle>Wellness Walks</CardTitle>
                 <CardDescription>Monthly nature walks for mindfulness and connection.</CardDescription>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-foreground/80 leading-relaxed">
                    Join us on the first Saturday of every month. Our wellness walks combine physical activity with spiritual reflection in nature's sanctuary.
                 </p>
               </CardContent>
               <CardFooter>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Next Walk: Jan 4, 8:00 AM</p>
               </CardFooter>
             </Card>

             {/* RocketArm Card */}
             <Card className="overflow-hidden border-border/50 hover:shadow-md transition-shadow">
               <div className="aspect-video relative bg-muted">
                  <Image 
                    src="/softball-game-community-sports-minimal.jpg" 
                    alt="Softball game" 
                    fill 
                    className="object-cover" 
                  />
               </div>
               <CardHeader>
                 <CardTitle>RocketArm Challenge</CardTitle>
                 <CardDescription>Test your throwing skills and compete for glory.</CardDescription>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-foreground/80 leading-relaxed">
                   A fun, competitive sports challenge for all ages using smart ball technology. Compete for the highest throw and fastest pitch.
                 </p>
               </CardContent>
               <CardFooter>
                 <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Coming Soon</p>
               </CardFooter>
             </Card>
           </div>
        </TabsContent>

        {/* Tab 2: Wellness Walks */}
        <TabsContent value="wellness-walks" className="animate-in fade-in-50 duration-300">
           {/* Ported Basic Content */}
           <div className="grid gap-8 lg:grid-cols-2">
             <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Wellness Walks Program</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us on the first Saturday of each month for a mindful hike through nature. These walks combine physical wellness with spiritual reflection, fostering community bonds while connecting with the natural world.
                  </p>
                </div>
                
                <div className="space-y-4 p-6 border rounded-xl bg-card">
                  <h3 className="font-semibold">Details</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2"><span className="font-medium">When:</span> First Saturday of every month</li>
                    <li className="flex gap-2"><span className="font-medium">Time:</span> 8:00 AM Start</li>
                    <li className="flex gap-2"><span className="font-medium">Where:</span> Various trails in Bay Area</li>
                  </ul>
                  <div className="pt-4">
                    <Button>Sign Up for Next Walk</Button>
                  </div>
                </div>
             </div>
             
             <div className="space-y-4">
               <div className="aspect-square relative rounded-xl overflow-hidden shadow-sm">
                 <Image src="/group-walking-nature-wellness-minimal.jpg" alt="Walking group" fill className="object-cover" />
               </div>
             </div>
           </div>
        </TabsContent>

        {/* Tab 3: Rocket Arm */}
        <TabsContent value="rocket-arm" className="animate-in fade-in-50 duration-300">
           <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 border rounded-xl border-dashed">
             <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
               <span className="text-xl">🚀</span>
             </div>
             <div>
               <h2 className="text-xl font-semibold">RocketArm Challenge</h2>
               <p className="text-muted-foreground max-w-md mx-auto mt-2">
                 Our tech-enabled sports competition is launching soon. Visit <a href="https://rocketarm.org" className="text-primary hover:underline">rocketarm.org</a> for updates.
               </p>
             </div>
             <Button variant="outline" asChild className="mt-4">
               <a href="https://rocketarm.org" target="_blank" rel="noreferrer">Visit Official Site</a>
             </Button>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
