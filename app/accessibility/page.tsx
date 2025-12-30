import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Accessibility | UPVED",
  description: "UPVED's commitment to digital and physical accessibility for all community members.",
}

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Accessibility Statement
        </h1>
        <p className="text-muted-foreground">
          Our commitment to making UPVED accessible to all
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              UPVED is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the 
              relevant accessibility standards.
            </p>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
              Level AA standards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility Features</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-2">
              <li>Keyboard navigation throughout the website</li>
              <li>Alt text for images</li>
              <li>Sufficient color contrast</li>
              <li>Resizable text without loss of functionality</li>
              <li>Clear and consistent navigation</li>
              <li>Descriptive link text</li>
              <li>Form labels and error messages</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Physical Accessibility</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Our gathering spaces are designed to be accessible to individuals with physical 
              disabilities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wheelchair-accessible entrances</li>
              <li>Accessible restrooms</li>
              <li>Reserved seating for mobility devices</li>
              <li>Assistance available upon request</li>
            </ul>
            <p>
              Please contact us in advance if you have specific accessibility needs so we 
              can ensure we accommodate you.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              We welcome your feedback on the accessibility of our website and physical spaces. 
              Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@upved.org" className="text-primary hover:underline">info@upved.org</a></li>
              <li>Phone: Available upon request</li>
            </ul>
            <p>
              We try to respond to feedback within 2 business days.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ongoing Efforts</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              We are actively working to increase the accessibility and usability of our 
              website. This includes regular audits, training for our team, and incorporating 
              accessibility best practices into our development process.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
