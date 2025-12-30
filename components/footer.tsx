import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  community: [
    { label: "Gatherings", href: "#gatherings" },
    { label: "Our Dharma", href: "#dharma" },
    { label: "Teachers", href: "#teachers" },
    { label: "RocketArm", href: "#rocketarm" },
  ],
  resources: [
    { label: "Vedic Texts", href: "#" },
    { label: "Mantra Guide", href: "#" },
    { label: "Practice Calendar", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  connect: [
    { label: "Contact Us", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Donate", href: "#" },
    { label: "Volunteer", href: "#" },
  ],
  legal: [
    { label: "501(c)(3) Status", href: "#" },
    { label: "Bylaws", href: "#" },
    { label: "Financial Transparency", href: "#" },
    { label: "Annual Report", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/upved-logo.png" alt="UPVED Logo" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="text-lg font-semibold tracking-tight text-foreground">UPVED</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A Vedic spiritual community rooted in the Arya Samaj tradition, serving communities across the United
              States.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Community</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Governance</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-border/50 bg-muted/30 p-6">
          <h4 className="text-sm font-semibold text-foreground">Legal Notice</h4>
          <div className="mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground">
            <p>
              <strong>UPVED</strong> is a registered 501(c)(3) tax-exempt religious organization and house of worship
              under the Internal Revenue Code. All donations to UPVED are tax-deductible to the fullest extent permitted
              by law. EIN available upon request.
            </p>
            <p>
              UPVED is organized and operated exclusively for religious, educational, and charitable purposes within the
              meaning of Section 501(c)(3) of the Internal Revenue Code. No part of the net earnings of UPVED shall
              inure to the benefit of any private individual.
            </p>
            <p>
              UPVED does not discriminate on the basis of race, color, national origin, sex, age, or disability in its
              programs, activities, or employment practices. All are welcome to attend our services and participate in
              our community programs.
            </p>
            <p>
              For questions regarding our tax-exempt status, financial records, or governance documents, please contact
              us at{" "}
              <Link href="mailto:info@upved.org" className="text-primary hover:underline">
                info@upved.org
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} UPVED. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">
              UPVED is a 501(c)(3) religious organization and house of worship.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Accessibility
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Non-Discrimination Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
