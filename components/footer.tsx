import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter, FaThreads, FaTiktok } from "react-icons/fa6"

const footerLinks = {
  community: [
    { label: "Gatherings", href: "/gatherings" },
    { label: "Community", href: "/community" },
  ],
  learn: [
    { label: "Our Dharma", href: "/dharma" },
    { label: "Teachings", href: "/teachings" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Governance", href: "/support?tab=governance" },
  ],
  getInvolved: [
    { label: "Join us", href: "/join" },
    { label: "Volunteer", href: "/join?tab=volunteer" },
    { label: "Donate", href: "/support?tab=donate" },
    { label: "Contact", href: "/support?tab=contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left Side - Logo and Description */}
          <div className="lg:max-w-sm">
            <Link href="/" className="flex items-center gap-1">
              <Image src="/upved-logo-nobg.webp" alt="UPVED Logo" width={44} height={44} className="h-11 w-11 object-contain" />
              <span className="text-xl font-bold tracking-tight text-foreground">UPVED</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A Vedic spiritual community rooted in the Arya Samaj tradition, serving communities across the United States.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              UPVED is a 501(c)(3) religious organization. All donations are tax-deductible.
            </p>
          </div>

          {/* Middle - Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12 flex-1">
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Community</h4>
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
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Learn</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.learn.map((link) => (
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
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
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
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Get Involved</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.getInvolved.map((link) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UPVED. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Social Links - Horizontal Row on Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/upved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-opacity hover:opacity-80"
            >
              <FaFacebook className="h-5 w-5 text-[#1877F2]" />
            </a>
            <a
              href="https://instagram.com/upved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-80"
            >
              <FaInstagram className="h-5 w-5 text-[#E4405F]" />
            </a>
            <a
              href="https://youtube.com/@upved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-opacity hover:opacity-80"
            >
              <FaYoutube className="h-5 w-5 text-[#FF0000]" />
            </a>
            <a
              href="https://x.com/upved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="transition-opacity hover:opacity-80"
            >
              <FaXTwitter className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://threads.net/@upved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="transition-opacity hover:opacity-80"
            >
              <FaThreads className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://tiktok.com/@upved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-opacity hover:opacity-80"
            >
              <FaTiktok className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
