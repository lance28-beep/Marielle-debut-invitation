"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Instagram, Twitter, Facebook, MapPin, Calendar, Clock, Heart, Music2 } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

const STAR_POSITIONS = [
  { top: "6%", left: "12%", size: 2, opacity: 0.9 },
  { top: "12%", left: "32%", size: 2.4, opacity: 0.8 },
  { top: "9%", left: "58%", size: 2, opacity: 0.85 },
  { top: "7%", left: "78%", size: 1.6, opacity: 0.7 },
  { top: "18%", left: "84%", size: 2.5, opacity: 0.82 },
  { top: "22%", left: "18%", size: 2, opacity: 0.65 },
  { top: "28%", left: "42%", size: 3, opacity: 0.9 },
  { top: "26%", left: "66%", size: 2, opacity: 0.75 },
  { top: "34%", left: "80%", size: 1.8, opacity: 0.7 },
  { top: "36%", left: "28%", size: 2.2, opacity: 0.8 },
  { top: "44%", left: "12%", size: 1.8, opacity: 0.72 },
  { top: "42%", left: "50%", size: 2.4, opacity: 0.85 },
  { top: "48%", left: "70%", size: 2, opacity: 0.78 },
  { top: "52%", left: "88%", size: 1.9, opacity: 0.7 },
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

export function Footer() {
  const year = new Date().getFullYear()
  const debutDate = "December 17, 2025"
  const debutTime = "6:00 PM"
  const debutVenue = "Roy's Hotel and Convention Center, Araneta Ave, Tangub, Bacolod"

  const quotes = [
    `"And in her eyes, the stars found their mirror."`,
    "Thank you for lighting up Marielle's Moonlit Masquerade—your presence makes the night shimmer.",
    "Your wishes, prayers, and smiles will be the keepsakes she treasures most.",
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
      }, 3000)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(deleteTimeout)
      } else {
        setIsDeleting(false)
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
      }
    } else {
      const currentQuote = quotes[currentQuoteIndex]
      if (displayedText.length < currentQuote.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(typeTimeout)
      } else {
        setIsPaused(true)
        setIsDeleting(true)
      }
    }
  }, [displayedText, isDeleting, isPaused, currentQuoteIndex, quotes])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Countdown", href: "#countdown" },
    { label: "Messages", href: "#messages" },
    { label: "Details", href: "#details" },
    { label: "Entourage", href: "#entourage" },
    { label: "Snap & Share", href: "#snap-share" },
    { label: "RSVP", href: "#guest-list" },
    { label: "FAQ", href: "#faq" },
  ] as const

  return (
    <footer 
      className="relative z-20 mt-16 overflow-hidden bg-transparent"
    >
      {/* Moonlit backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2541] to-[#122f52]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(180,210,255,0.22),transparent_45%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_72%,rgba(120,170,255,0.18),transparent_55%)] opacity-70 blur-sm" />
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
                animationDelay: `${(idx % 7) * 0.25}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Monogram / Couple Illustration - centered at top */}
      <div className="relative z-10 flex flex-col items-center pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 opacity-95">
            <Image
              src="/monogram/monogramnew.png"
              alt="Marielle monogram"
              fill
              className="object-contain"
              priority={false}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(222deg) brightness(112%) contrast(98%)",
              }}
            />
            {/* Glow effect behind monogram */}
            <div className="absolute inset-0 blur-3xl bg-[#cfe7ff]/35 -z-10 scale-125" />
          </div>
        </motion.div>

        {/* Names & Date below illustration */}
        <div className="mt-4 sm:mt-5 md:mt-6 text-center">
          <p
            className={`${cormorant.className} tracking-[0.3em] text-[10px] sm:text-xs md:text-sm text-[#F0F0EE]/95`}
          >
            Marielle
          </p>
          <p
            className={`${cormorant.className} text-xs sm:text-sm md:text-base text-[#F0F0EE]/90 mt-1`}
          >
            {debutDate}
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pb-8 sm:pb-10 md:pb-12">
        <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12" variants={staggerChildren} initial="initial" animate="animate">
          {/* Couple Info */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/12 rounded-full flex items-center justify-center border border-white/30 flex-shrink-0 shadow-[0_0_22px_rgba(125,183,255,0.45)]">
                  <Heart className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" fill="#7db7ff" />
                </div>
                <h3 className="style-script-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-lg">Marielle</h3>
              </div>
              <div className="space-y-3 sm:space-y-3.5 md:space-y-4">
                <div className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 ${cormorant.className} text-white/90`}>
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-medium">{debutDate}</span>
                </div>
                <div className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 ${cormorant.className} text-white/90`}>
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{debutTime}</span>
                </div>
                <div className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 ${cormorant.className} text-white/90`}>
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{debutVenue}</span>
                </div>
              </div>
            </div>

            <motion.div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm: p-5 md:p-6 border border-white/20 shadow-[0_18px_45px_rgba(0,0,0,0.45)]" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <blockquote className={`${cormorant.className} text-white italic text-sm sm:text-base md:text-lg leading-relaxed min-h-[60px] sm:min-h-[70px] md:min-h-[80px]`}>
                "{displayedText}
                <span className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-white ml-1 animate-pulse">|</span>"
              </blockquote>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7db7ff]/85 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/85 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7db7ff]/85 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details quick tiles */}
          <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={fadeInUp}>
            <motion.div className="bg-white/8 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/14 transition-all duration-300 shadow-[0_14px_40px_rgba(0,0,0,0.35)]" whileHover={{ y: -5 }}>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-3.5 md:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/15 rounded-full flex items-center justify-center border border-white/40 flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                </div>
                <h4 className={`${cormorant.className} font-semibold text-base sm:text-lg md:text-xl text-white`}>Debut Night</h4>
              </div>
              <div className={`space-y-2 sm:space-y-2.5 md:space-y-3 ${cormorant.className} text-white/95 text-xs sm:text-sm`}>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  <span>{debutVenue}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  <span>{debutTime}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact + Quick Links */}
          <motion.div className="space-y-6 sm:space-y-7 md:space-y-8" variants={fadeInUp}>
            <div>
              <h4 className={`${cormorant.className} font-semibold text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-2.5 md:gap-3 text-white`}>
                <div className="w-1.5 sm:w-2 h-6 sm:h-7 md:h-8 bg-[#7db7ff]/85 rounded-full" /> Follow Us
              </h4>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-wrap">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/8 ring-1 ring-[#E0CFB5]/70 hover:bg-white/18 hover:ring-[#F0F0EE] transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/8 ring-1 ring-[#E0CFB5]/70 hover:bg-white/18 hover:ring-[#F0F0EE] transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/8 ring-1 ring-[#E0CFB5]/70 hover:bg-white/18 hover:ring-[#F0F0EE] transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Music2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a 
                  href="https://x.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/8 ring-1 ring-[#E0CFB5]/70 hover:bg-white/18 hover:ring-[#F0F0EE] transition-all duration-200 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h5 className={`${cormorant.className} font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-white`}>Quick Links</h5>
              <div className="space-y-1.5 sm:space-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block text-white/90 hover:text-[#F0F0EE] transition-colors duration-200 ${cormorant.className} text-xs sm:text-sm`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div className="border-t border-[#E0CFB5]/60 pt-6 sm:pt-7 md:pt-8" variants={fadeInUp}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
            <div className="text-center md:text-left">
                <p className={`text-[#F0F0EE]/95 ${cormorant.className} text-xs sm:text-sm`}>© {year} Marielle. All rights reserved.</p>
              <p className={`text-[#F0F0EE]/90 ${cormorant.className} text-xs sm:text-sm mt-0.5 sm:mt-1`}>
                Made with 💕 for our special day
              </p>
            </div>
            
            <div className="text-center md:text-right space-y-0.5 sm:space-y-1">
              <p className={`text-[#F0F0EE]/90 ${cormorant.className} text-[10px] sm:text-xs`}>
                Developed by{" "}
                <a 
                  href="https://lance28-beep.github.io/portfolio-website/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#F0F0EE] hover:text-[#D1AB6D] transition-colors duration-200 underline decoration-[#F0F0EE]/60 hover:decoration-[#D1AB6D]/80"
                >
                  Lance Valle
                </a>
              </p>
              <p className={`text-[#F0F0EE]/90 ${cormorant.className} text-[10px] sm:text-xs`}>
                Want a website like this? Visit{" "}
                <a 
                  href="https://www.facebook.com/WeddingInvitationNaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#F0F0EE] hover:text-[#D1AB6D] transition-colors duration-200 underline decoration-[#F0F0EE]/60 hover:decoration-[#D1AB6D]/80"
                >
                  Wedding Invitation Naga
                </a>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
