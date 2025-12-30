import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vedic Resources | UPVED",
  description: "Explore sacred texts, mantra guides, and practice calendars to deepen your spiritual journey.",
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <p className="text-muted-foreground mb-8">
        Explore texts, guides, and tools to deepen your Vedic practice.
      </p>

      <Tabs defaultValue="texts" className="w-full">
        <TabsList className="flex-wrap h-auto gap-2 bg-transparent justify-start p-0 mb-8">
            <TabsTrigger 
              value="texts" 
              className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
            >
              Vedic Texts
            </TabsTrigger>
            <TabsTrigger 
              value="mantras" 
              className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
            >
              Mantra Guide
            </TabsTrigger>
            <TabsTrigger 
              value="calendar" 
              className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
            >
              Practice Calendar
            </TabsTrigger>
            <TabsTrigger 
              value="faq" 
              className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
            >
              FAQ
            </TabsTrigger>
        </TabsList>

        <TabsContent value="texts" className="space-y-4">
            <h2 className="text-2xl font-semibold">Vedic Texts</h2>
            <div className="p-6 border rounded-xl bg-card">
              <p>Library of sacred texts coming soon.</p>
            </div>
        </TabsContent>

        <TabsContent value="mantras" className="space-y-4">
            <h2 className="text-2xl font-semibold">Mantra Guide</h2>
            <div className="p-6 border rounded-xl bg-card">
              <p>Pronunciation and meaning guides coming soon.</p>
            </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
            <h2 className="text-2xl font-semibold">Practice Calendar</h2>
            <div className="p-6 border rounded-xl bg-card">
              <p>Upcoming auspicious dates and eclipse schedules coming soon.</p>
            </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="p-6 border rounded-xl bg-card">
              <p>Answers to common questions about Arya Samaj and our practices coming soon.</p>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
