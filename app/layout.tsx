import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SidebarProvider } from "@/components/sidebar-provider"
import { Topbar } from "@/components/topbar"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UPVED | Ancient Wisdom, Modern Rituals",
  description:
    "A Vedic spiritual community rooted in the Arya Samaj tradition. Join us for Sunday Havan & Sandhya at our San Mateo Sanctuary.",
  generator: "v0.app",
  keywords: ["Vedic", "Arya Samaj", "Havan", "Spirituality", "San Mateo", "Church", "Vedanta"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SidebarProvider>
          <div className="min-h-screen bg-background">
            <Topbar />
            <div className="flex pt-14">
              <Sidebar />
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
