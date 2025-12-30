import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | UPVED",
  description: "UPVED's privacy policy explaining how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          Last updated: December 2024
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              UPVED collects information you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register for events or gatherings</li>
              <li>Make a donation</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us through our website</li>
              <li>Participate in community programs</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, 
              and mailing address.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communicate about events and gatherings</li>
              <li>Process donations and provide tax receipts</li>
              <li>Send newsletters and community updates</li>
              <li>Respond to your inquiries</li>
              <li>Improve our programs and services</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information Sharing</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              UPVED does not sell, trade, or rent your personal information to third parties. 
              We may share information with service providers who assist us in operating our 
              website, conducting our activities, or servicing you, so long as those parties 
              agree to keep this information confidential.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we 
              cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:info@upved.org" className="text-primary hover:underline">
                info@upved.org
              </a>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@upved.org" className="text-primary hover:underline">
                info@upved.org
              </a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
