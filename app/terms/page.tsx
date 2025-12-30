import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service | UPVED",
  description: "Terms of Service for UPVED website and community programs.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Last updated: December 2024
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              By accessing and using the UPVED website, you accept and agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use 
              our website.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use of Website</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else's use of the website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful or malicious content</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Donations</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              All donations made through our website are final and non-refundable, except in 
              cases of error or fraud. UPVED is a registered 501(c)(3) organization, and 
              donations are tax-deductible to the extent permitted by law.
            </p>
            <p>
              Donors will receive a tax receipt for their records via email.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              All content on this website, including text, graphics, logos, and images, is the 
              property of UPVED or its content suppliers and is protected by copyright laws. 
              You may not reproduce, distribute, or create derivative works without our 
              express written permission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              The information on this website is provided "as is" without warranties of any kind. 
              UPVED does not warrant that the website will be uninterrupted or error-free.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              UPVED shall not be liable for any indirect, incidental, special, or consequential 
              damages arising out of or in connection with your use of this website.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website 
              constitutes acceptance of the modified terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              For questions about these Terms of Service, contact us at{" "}
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
