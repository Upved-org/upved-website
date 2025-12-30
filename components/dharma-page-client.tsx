"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const principles = [
  "God is the source of all true knowledge",
  "God is all-truth, all-knowledge, and all-bliss",
  "The Vedas are the books of true knowledge",
  "One should always be ready to accept truth",
  "All actions should be performed in accordance with Dharma",
  "The primary aim is to do good to the whole world",
  "All should be treated with love, righteousness, and justice",
  "Ignorance should be dispelled, knowledge promoted",
  "One should not be satisfied with one's own progress only",
  "All should follow social rules for the benefit of all",
  "All should promote both physical and spiritual well-being",
  "Service to humanity is service to God",
  "The cycle of karma governs all actions",
  "Liberation comes through knowledge and right action",
]

const vedicTexts = [
  { name: "Rigveda", description: "The oldest Veda, containing hymns of praise and spiritual knowledge" },
  { name: "Yajurveda", description: "Contains formulas for rituals and ceremonies" },
  { name: "Samaveda", description: "The Veda of melodies and chants" },
  { name: "Atharvaveda", description: "Contains hymns, spells, and incantations" },
]

const faqs = [
  { q: "Do I need to be Hindu to attend?", a: "No. UPVED welcomes all seekers regardless of religious background. The Vedic wisdom is universal." },
  { q: "What language are services in?", a: "Services are conducted in English with Sanskrit mantras. Translations are always provided." },
  { q: "Is there a membership fee?", a: "No. All our gatherings are free to attend. We accept voluntary donations to support our programs." },
  { q: "Can children attend?", a: "Absolutely! We have programs for all ages and families are always welcome." },
]

export function DharmaPageClient() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "path"

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Upved Dharma
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We revive the <strong>Purushartha</strong> (valorous action) of the ancient <strong>Brahmavarta</strong> region. Bridging ancient energy dynamics with modern life.
        </p>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList className="mb-6 md:mb-8 flex justify-center flex-wrap">
          <TabsTrigger value="path" asChild>
            <Link href="/dharma?tab=path">The Path</Link>
          </TabsTrigger>
          <TabsTrigger value="principles" asChild>
            <Link href="/dharma?tab=principles">Upved Principles</Link>
          </TabsTrigger>
          <TabsTrigger value="texts" asChild>
            <Link href="/dharma?tab=texts">Vedic Texts</Link>
          </TabsTrigger>
          <TabsTrigger value="faq" asChild>
            <Link href="/dharma?tab=faq">FAQ</Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="path" className="animate-in fade-in-50 duration-300 pt-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">The Vedic Path</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>The Disciple of Action</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  We are distinct from traditional Vedanta societies which often prioritize intellectual contemplation (<em>Jnana</em>). 
                  <strong>UPVED</strong> is rooted in the <strong>Karma-Kshetra</strong> (Field of Action).
                </p>
                <p>
                  We represent the <strong>Haryana-Vedic</strong> spirit: direct, grounded, and physically disciplined. 
                  We seek to transform the daily grind into a spiritual <strong>Kurukshetra</strong>—a field where every challenge is met with 
                  valour and clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Core Beliefs</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-3">
                  <li><strong>Brahmavarta Lineage:</strong> Honoring the sacred land between the Saraswati and Drishadvati rivers</li>
                  <li><strong>Agni & Urdhva:</strong> The dual disciplines of Sacred Fire and Upward Kinetic Energy</li>
                  <li><strong>Siddha-Vani:</strong> Direct wisdom over theoretical debate</li>
                  <li><strong>Warrior-Sage Ideal:</strong> Cultivating physical vitality alongside spiritual insight</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="principles" className="animate-in fade-in-50 duration-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">The Haryanvi Dharma Code</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((principle, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{principle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="texts" className="animate-in fade-in-50 duration-300">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Sacred Vedic Texts</h2>
            
            <div className="grid gap-6">
              {vedicTexts.map((text) => (
                <Card key={text.name}>
                  <CardHeader>
                    <CardTitle>{text.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {text.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="animate-in fade-in-50 duration-300 mt-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {faq.a}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
