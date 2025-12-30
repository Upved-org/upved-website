"use client"

import type React from "react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Mail, MapPin, ArrowRight, Check, Heart, Shield, FileText, Scale, BarChart3 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const donationAmounts = [25, 50, 100, 250, 500]

export function SupportPageClient() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "donate"

  // Connect Form State
  const [connectSubmitted, setConnectSubmitted] = useState(false)
  const [connectData, setConnectData] = useState({
    name: "",
    email: "",
    interest: "general",
    message: "",
  })

  // Donate Form State
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50)
  const [customAmount, setCustomAmount] = useState("")
  const [isMonthly, setIsMonthly] = useState(false)
  const [donateSubmitted, setDonateSubmitted] = useState(false)

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setConnectSubmitted(true)
  }

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDonateSubmitted(true)
  }

  const displayAmount = selectedAmount === "custom" ? customAmount : selectedAmount

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Support
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Support our mission, connect with our community, or learn about our governance.
        </p>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList className="mb-6 md:mb-8 flex justify-center flex-wrap">
          <TabsTrigger value="donate" asChild>
            <Link href="/support?tab=donate">Donate</Link>
          </TabsTrigger>
          <TabsTrigger value="contact" asChild>
            <Link href="/support?tab=contact">Contact</Link>
          </TabsTrigger>
          <TabsTrigger value="governance" asChild>
            <Link href="/support?tab=governance">Governance</Link>
          </TabsTrigger>
        </TabsList>

        {/* Donate Tab */}
        <TabsContent value="donate" className="animate-in fade-in-50 duration-300 pt-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Support UPVED
              </h2>
              <p className="text-lg text-muted-foreground">
                Your generous contribution helps us maintain our gathering spaces and spread Vedic wisdom.
              </p>
            </div>

            {donateSubmitted ? (
              <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">Thank You</h3>
                <p className="mt-3 text-muted-foreground">
                  Your donation of ${displayAmount} has been received.
                </p>
                <Button className="mt-8" onClick={() => setDonateSubmitted(false)}>
                  Donate Again
                </Button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit}>
                  <div className="flex justify-center mb-8">
                  <div className="inline-flex rounded-md border border-border p-1 bg-muted/30">
                    <button
                      type="button"
                      onClick={() => setIsMonthly(false)}
                      className={`rounded-[4px] px-6 py-2 text-sm font-medium transition-colors ${
                        !isMonthly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMonthly(true)}
                      className={`rounded-[4px] px-6 py-2 text-sm font-medium transition-colors ${
                        isMonthly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="rounded-[12px] border border-border bg-card p-8 shadow-sm">
                  <label className="block text-sm font-medium mb-4">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedAmount(amount)}
                        className={`rounded-md border py-3 text-center font-semibold transition-colors ${
                          selectedAmount === amount
                            ? "border-foreground bg-primary/10 border-2"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedAmount("custom")}
                    className={`w-full rounded-md border py-3 text-center font-medium transition-colors ${
                      selectedAmount === "custom"
                        ? "border-foreground bg-primary/10 border-2"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    Custom Amount
                  </button>

                  {selectedAmount === "custom" && (
                    <div className="mt-4 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full rounded-[4px] border border-border bg-background py-3 pl-8 pr-4 text-lg font-semibold focus:border-foreground focus:outline-none"
                        placeholder="Enter amount"
                      />
                    </div>
                  )}

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      className="rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      required
                      className="rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    className="mt-4 w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                    placeholder="Email (for tax receipt)"
                  />

                  <Button
                    type="submit"
                    disabled={selectedAmount === "custom" && !customAmount}
                    className="mt-8 w-full h-12"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Donate ${displayAmount || "0"} {isMonthly && "Monthly"}
                  </Button>

                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment via Stripe</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="animate-in fade-in-50 duration-300">
          <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Reach out with questions, feedback, or to learn more about our community.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@upved.org" className="text-primary hover:underline">
                      info@upved.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Locations</h3>
                    <p className="text-muted-foreground">San Mateo, CA</p>
                    <p className="text-muted-foreground">Austin, TX (Coming Soon)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-border bg-card p-8 shadow-sm">
              {connectSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Thank You</h3>
                  <p className="mt-3 text-muted-foreground">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConnectSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={connectData.name}
                    onChange={(e) => setConnectData({ ...connectData, name: e.target.value })}
                    className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    required
                    value={connectData.email}
                    onChange={(e) => setConnectData({ ...connectData, email: e.target.value })}
                    className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                    placeholder="Email Address"
                  />
                  <select
                    value={connectData.interest}
                    onChange={(e) => setConnectData({ ...connectData, interest: e.target.value })}
                    className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="havan">Sunday Havan</option>
                    <option value="sandhya">Sandhya Practice</option>
                    <option value="volunteer">Volunteering</option>
                  </select>
                  <textarea
                    rows={4}
                    value={connectData.message}
                    onChange={(e) => setConnectData({ ...connectData, message: e.target.value })}
                    className="w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none resize-none"
                    placeholder="Your Message"
                  />
                  <Button type="submit" className="w-full h-12">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Governance Tab */}
        <TabsContent value="governance" className="animate-in fade-in-50 duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Governance & Transparency</h2>
              <p className="text-muted-foreground">
                UPVED is committed to transparency and responsible stewardship of resources.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle>501(c)(3) Status</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    UPVED is a registered 501(c)(3) tax-exempt religious organization. 
                    All donations are tax-deductible to the fullest extent permitted by law.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-primary" />
                    <CardTitle>Bylaws</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Our bylaws govern the operation of UPVED, ensuring fair and democratic 
                    decision-making within our community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <CardTitle>Financial Transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We maintain open financial records and provide regular reports to our 
                    community on how donations are used.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle>Annual Report</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Our annual report details our activities, impact, and financial 
                    stewardship over the past year.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">Request Documents</h3>
              <p className="text-muted-foreground mb-6">
                For copies of our EIN, bylaws, financial statements, or other governance documents, 
                please contact us.
              </p>
              <Button variant="outline" asChild>
                <Link href="mailto:info@upved.org">Contact Us</Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
