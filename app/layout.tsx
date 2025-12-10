import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter, Imperial_Script, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marielle-debut.vercel.app/"
const canonicalUrl = siteUrl.replace(/\/$/, "")
const eventImagePath = "/Couple_img/imagepreview.jpg"
const eventImageUrl = `${canonicalUrl}${eventImagePath}`
const eventTitle = "Marielle's 18th | Moonlit Masquerade Debut Celebration"
const eventDescription =
  "Join us as Marielle celebrates her 18th birthday on December 17, 2025 at Roy's Hotel & Convention Center. RSVP to her Moonlit Masquerade themed debut and be part of this magical evening."

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Marielle's 18th Birthday Debut - Moonlit Masquerade",
  startDate: "2025-12-17T18:00:00+08:00",
  endDate: "2025-12-17T23:00:00+08:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Roy's Hotel & Convention Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Roy's Hotel & Convention Center",
      addressLocality: "Philippines",
      addressCountry: "PH",
    },
  },
  image: [eventImageUrl],
  description:
    "Celebrate Marielle's 18th birthday debut on December 17, 2025 at Roy's Hotel & Convention Center. A Moonlit Masquerade themed celebration marking her coming of age. RSVP and join the festivities.",
  organizer: {
    "@type": "Person",
    name: "Marielle",
  },
  eventHashtag: "#MarielleAt18",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-serif" })
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: "400", variable: "--font-imperial-script" })
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cinzel" })

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: eventTitle,
    template: "%s | Marielle's Debut",
  },
  description: eventDescription,
  keywords:
    "Marielle debut, 18th birthday, debut celebration, Moonlit Masquerade, Roy's Hotel Convention Center, debut invitation, RSVP, coming of age, debut party, message wall, countdown, #MarielleAt18",
  applicationName: "Marielle's 18th Birthday Debut Invitation",
  authors: [
    { name: "Marielle" },
  ],
  creator: "Marielle",
  publisher: "Marielle",
  category: "Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  colorScheme: "dark",
  themeColor: "#0a1628",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  alternates: {
    canonical: canonicalUrl,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/favicon_io/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon_io/android-chrome-512x512.png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Marielle's 18th | Moonlit Masquerade Debut - December 17, 2025",
    description:
      "Join Marielle as she celebrates her 18th birthday on December 17, 2025 at Roy's Hotel & Convention Center. Experience a magical Moonlit Masquerade themed debut celebration. RSVP and leave a message!",
    url: canonicalUrl,
    siteName: "Marielle's 18th Birthday Debut",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: eventImageUrl,
        secureUrl: eventImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Marielle's 18th Birthday Debut - Moonlit Masquerade - December 17, 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marielle's 18th | Moonlit Masquerade Debut",
    description:
      "You're invited to Marielle's 18th birthday debut on December 17, 2025. Join the Moonlit Masquerade celebration at Roy's Hotel & Convention Center. RSVP now! #MarielleAt18",
    images: [eventImageUrl],
    creator: "@marielleat18",
    site: "@marielleat18",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Marielle's 18th",
    statusBarStyle: "default",
    capable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a1628" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/mobile-background/Phone.jpg" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/desktop-background/desktop.jpg" media="(min-width: 768px)" />
        <link rel="preload" as="image" href="/Couple_img/imagepreview.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} ${imperialScript.variable} ${cinzel.variable} font-inter antialiased text-foreground`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
