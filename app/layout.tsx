import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SidebarProvider } from "@/components/sidebar-provider"
import { Topbar } from "@/components/topbar"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://upved.org'),
  title: {
    default: "UPVED | Ancient Wisdom, Modern Rituals",
    template: "%s | UPVED",
  },
  description:
    "A Vedic spiritual community rooted in the Arya Samaj tradition. Join us for Sunday Havan & Sandhya at our San Mateo Sanctuary.",
  keywords: [
    "Vedic",
    "Arya Samaj",
    "Havan",
    "Agnihotra",
    "Spirituality",
    "San Mateo",
    "Church",
    "Vedanta",
    "Upved",
    "Haryana Vedic",
    "Dharma",
    "Meditation",
    "Yoga",
    "Sanskrit",
  ],
  authors: [{ name: "UPVED" }],
  creator: "UPVED",
  publisher: "UPVED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upved.org",
    siteName: "UPVED",
    title: "UPVED | Ancient Wisdom, Modern Rituals",
    description:
      "A Vedic spiritual community rooted in the Arya Samaj tradition. Join us for Sunday Havan & Sandhya at our San Mateo Sanctuary.",
    images: [
      {
        url: "/upved-logo.png",
        width: 1200,
        height: 630,
        alt: "UPVED Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPVED | Ancient Wisdom, Modern Rituals",
    description:
      "A Vedic spiritual community rooted in the Arya Samaj tradition. Join us for Sunday Havan & Sandhya at our San Mateo Sanctuary.",
    images: ["/upved-logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <div className="min-h-screen bg-background">
            <Topbar />
            <div className="flex pt-14">
              <Suspense fallback={null}>
                <Sidebar />
              </Suspense>
              <div className="flex-1 min-w-0 flex flex-col">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  )
}

