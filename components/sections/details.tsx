import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Clock, PartyPopper, MapPin, Navigation, Copy, Check, Palette, Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Great_Vibes, Inter } from "next/font/google"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })

const STAR_POSITIONS = [
  { top: "8%", left: "12%", size: 2, opacity: 0.9 },
  { top: "14%", left: "32%", size: 3, opacity: 0.75 },
  { top: "10%", left: "58%", size: 2, opacity: 0.85 },
  { top: "6%", left: "78%", size: 1.5, opacity: 0.7 },
  { top: "18%", left: "85%", size: 2.5, opacity: 0.8 },
  { top: "22%", left: "18%", size: 2, opacity: 0.65 },
  { top: "28%", left: "42%", size: 3, opacity: 0.9 },
  { top: "26%", left: "65%", size: 2, opacity: 0.75 },
  { top: "32%", left: "82%", size: 1.6, opacity: 0.7 },
  { top: "36%", left: "28%", size: 2.2, opacity: 0.8 },
  { top: "44%", left: "12%", size: 1.8, opacity: 0.72 },
  { top: "40%", left: "48%", size: 2.4, opacity: 0.85 },
  { top: "46%", left: "70%", size: 2, opacity: 0.78 },
  { top: "52%", left: "86%", size: 1.8, opacity: 0.68 },
  { top: "58%", left: "24%", size: 2.6, opacity: 0.82 },
  { top: "60%", left: "54%", size: 1.9, opacity: 0.75 },
  { top: "64%", left: "76%", size: 2.2, opacity: 0.8 },
  { top: "70%", left: "14%", size: 2, opacity: 0.7 },
  { top: "74%", left: "38%", size: 2.6, opacity: 0.84 },
  { top: "78%", left: "60%", size: 2, opacity: 0.74 },
  { top: "82%", left: "82%", size: 1.8, opacity: 0.7 },
  { top: "86%", left: "50%", size: 2.4, opacity: 0.82 },
  { top: "90%", left: "20%", size: 2, opacity: 0.72 },
]

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems((prev) => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems((prev) => {
          const updated = new Set(prev)
          updated.delete(itemId)
          return updated
        })
      }, 1800)
    } catch (error) {
      console.error("Failed to copy text:", error)
    }
  }

  const { ceremony, reception } = siteConfig
  const venue = "Roy's Hotel and Convention Center"
  const venueAddress = "Araneta Ave, Tangub, Bacolod (Negros Occidental), Philippines"
  const entourageCall = ceremony.entourageTime
  const guestsCall = ceremony.guestsTime
  const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(venueAddress)}`

  const openInMaps = () => {
    window.open(mapsLink, "_blank", "noopener,noreferrer")
  }

  const colorPalette = [
    "#0f2541",
    "#1e3a67",
    "#27467a",
    "#4f7cbf",
    "#7db7ff",
    "#9ac8ff",
    "#cfe7ff",
    "#e8f6ff",
  ]

  const schedule = [
    { label: "Ceremony Begins", value: ceremony.time },
    { label: "Reception Follows", value: reception.time },
    entourageCall && { label: "Entourage Call Time", value: entourageCall },
    guestsCall && { label: "Guest Doors Open", value: guestsCall },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <Section id="details" className="relative overflow-hidden py-14 sm:py-18 md:py-20 lg:py-24 bg-transparent">
      {/* Moonlit backdrop to match countdown */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2541] to-[#122f52]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,210,255,0.22),transparent_45%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,170,255,0.18),transparent_55%)] opacity-70 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081020]/65 via-transparent to-transparent" />
        <div className="absolute inset-0">
          {STAR_POSITIONS.map((star, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDuration: `${2 + (idx % 5) * 0.5}s`,
                animationDelay: `${(idx % 7) * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[10px] sm:text-xs tracking-[0.48em] uppercase text-white">
            For Marielle
          </div>
          <h2
            className={`${greatVibes.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_18px_48px_rgba(8,16,34,0.75)] mt-4`}
          >
            Moonlit Masquerade Guide
          </h2>
          <p
            className={`${inter.className} text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed`}
          >
            Step into Marielle&apos;s Moonlit Masquerade. Find the when, where, and how to keep the night graceful, glowing, and right on time.
          </p>
        </div>



        <div className="grid gap-5 lg:gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch mb-12 sm:mb-16 lg:mb-20">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/14 bg-white/8 backdrop-blur-2xl shadow-[0_26px_65px_rgba(8,16,34,0.42)]">
            <div className="relative h-[220px] sm:h-60 md:h-80 lg:h-[420px] xl:h-[460px] overflow-hidden">
              <Image
                src="/Details/Roy's Hotel & Convention Center.jpg"
                alt={venue}
                fill
                priority
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172822]/95 via-[#172822]/35 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 sm:bottom-6 text-white">
                <h3 className="text-xl sm:text-3xl font-serif font-semibold tracking-wide drop-shadow-lg">
                  Roy&apos;s Hotel & Convention Center
                </h3>
                <p className="text-[10px] sm:text-[12px] text-white/80 tracking-[0.24em] uppercase">
                  Araneta Ave, Tangub, Bacolod
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-7 lg:p-8 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="inline-flex justify-center rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-white/85 text-[9px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.32em] uppercase whitespace-nowrap">
                  Wednesday • December 17, 2025 • 6:00 PM
                </div>
                  <p className="text-[10px] sm:text-xs text-white/70 tracking-[0.3em] uppercase text-center sm:text-right">
                    Arrive early to savor the moonlit welcome
                  </p>
                </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                {schedule.map((entry) => (
                  <div
                    key={entry.label}
                    className="rounded-2xl border border-white/18 bg-white/12 px-3.5 py-3 text-center shadow-[0_12px_30px_rgba(12,20,46,0.28)]"
                  >
                    <p className="text-[9px] sm:text-[11px] tracking-[0.34em] uppercase text-white/70 mb-1">
                      {entry.label}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base font-semibold">
                      <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>{entry.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/18 bg-white/10 px-4 py-3.5 flex items-start sm:items-center gap-2.5 sm:gap-3 shadow-[0_12px_30px_rgba(12,20,46,0.25)]">
                <MapPin className="mt-[2px] sm:mt-0 h-4 w-4 sm:h-5 sm:w-5 text-[#7db7ff] flex-shrink-0" />
                <div className="text-[11px] sm:text-sm text-white/75 leading-relaxed">
                  <p className="font-semibold text-white">{venue}</p>
                  <p>{venueAddress}</p>
                  <p className="mt-1 text-white/70 text-[11px] sm:text-[12px]">⭐️ 4 stars out of 5 — comfort, facilities, and amenities as rated by the property.</p>
                </div>
              </div>

              <div className="flex flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={openInMaps}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0f2541] via-[#1e3a67] to-[#7db7ff] px-4 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_14px_36px_rgba(8,16,34,0.45)]"
                  aria-label="Get directions to the venue"
                >
                  <Navigation className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Get Directions
                </button>
                <button
                  onClick={() => copyToClipboard(venueAddress, "venue")}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-4 py-3 text-xs sm:text-sm font-semibold text-white/85 shadow-[0_12px_30px_rgba(12,20,48,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:text-white"
                  aria-label="Copy venue address"
                >
                  {copiedItems.has("venue") ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">
                    {copiedItems.has("venue") ? "Copied!" : "Copy Address"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div className="rounded-[26px] sm:rounded-[30px] border border-white/18 bg-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(8,16,34,0.4)] p-5 sm:p-7 lg:p-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <PartyPopper className="h-6 w-6 text-[#7db7ff]" />
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.38em] text-white/70">Debut Agenda</p>
                  <h3 className="text-white text-base sm:text-lg font-semibold">Moments to Look Forward To</h3>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-3.5 w-3.5 text-[#7db7ff]" />
                  18 Moonlit Flowers &amp; 18 Treasures follow the program—bring a short wish or keepsake for Marielle.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-3.5 w-3.5 text-[#7db7ff]" />
                  Arrive before call time to sign the guest book and enjoy portraits under the moonlit backdrop.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-3.5 w-3.5 text-[#7db7ff]" />
                  Program closes by 9:00 PM so you can travel home safely after the moonlit festivities.
                </li>
              </ul>
            </div>

            <div className="rounded-[26px] sm:rounded-[30px] border border-white/18 bg-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(8,16,34,0.4)] p-5 sm:p-7 lg:p-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <Palette className="h-6 w-6 text-[#7db7ff]" />
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.38em] text-white/70">Attire & Palette</p>
                  <h3 className="text-white text-base sm:text-lg font-semibold">Enchanted Elegance</h3>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75 leading-relaxed">
                <li>
                  Ladies: {siteConfig.dressCode.guests.ladies}.
                </li>
                <li>Gentlemen: {siteConfig.dressCode.guests.gentlemen}.</li>
                <li className="italic text-white/85">{siteConfig.dressCode.note}</li>
              </ul>
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_8px_24px_rgba(10,16,34,0.4)]">
                <Image
                  src="/Details/debut-attire.png"
                  alt="Attire Color Palette Guide"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-[11px] sm:text-sm text-white/75">
                Kindly align outfits with the debut palette below for a cohesive, enchanted look.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {colorPalette.map((hex) => (
                  <span
                    key={hex}
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/25 shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
                    style={{ backgroundColor: hex }}
                    aria-label={`Palette color ${hex}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}