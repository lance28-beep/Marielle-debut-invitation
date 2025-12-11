"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/section"
import Image from "next/image"
import { motion } from "motion/react"
import { Cormorant_Garamond } from "next/font/google"
import { siteConfig } from "@/content/site"
import Counter from "@/components/Counter"

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

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownUnitProps {
  value: number
  label: string
}

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

function CountdownUnit({ value, label }: CountdownUnitProps) {
  const places = value >= 100 ? [100, 10, 1] : [10, 1]

  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      {/* Elegant card with subtle hover glow */}
      <div className="relative w-full max-w-[88px] sm:max-w-[96px] md:max-w-[110px] lg:max-w-[120px] group">
        {/* Glow on hover */}
        <div className="pointer-events-none absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#D1AB6D]/28 via-[#9B7C6A]/18 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

        {/* Main card */}
        <div className="relative rounded-xl sm:rounded-2xl border border-white/40/80 bg-white/95/90 px-2.5 py-2.5 sm:px-3.5 sm:py-3.5 md:px-4 md:py-4 shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
          <div className="relative z-10 flex items-center justify-center countdown-gradient-text">
            <Counter
              value={value}
              places={places}
              fontSize={26}
              padding={4}
              gap={2}
              textColor="transparent"
              fontWeight={800}
              borderRadius={6}
              horizontalPadding={3}
              gradientHeight={0}
              gradientFrom="transparent"
              gradientTo="transparent"
              counterStyle={{
                backgroundColor: "transparent",
              }}
              digitStyle={{
                minWidth: "1.15ch",
                fontFamily: "Arial, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <span className="text-[10px] sm:text-xs md:text-sm font-inter font-semibold uppercase tracking-[0.16em] text-white/90">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  // Fixed date to mirror hero: December 17, 2025 at 6:00 PM
  const ceremonyMonth = "December"
  const ceremonyDayNumber = "17"
  const ceremonyYear = "2025"
  const ceremonyTimeDisplay = "6:00 PM"
  
  // Parse the date: December 17, 2025 at 6:00 PM PH Time (GMT+0800)
  // Extract time from "10:30 A.M., PH Time" -> "10:30 A.M."
  const timeStr = ceremonyTimeDisplay.split(",")[0].trim() // "10:30 A.M."
  
  // Create date string in ISO-like format for better parsing
  // December 20, 2025 -> 2025-12-20
  const monthMap: { [key: string]: string } = {
    "January": "01", "February": "02", "March": "03", "April": "04",
    "May": "05", "June": "06", "July": "07", "August": "08",
    "September": "09", "October": "10", "November": "11", "December": "12"
  }
  const monthNum = monthMap[ceremonyMonth] || "12"
  const dayNum = ceremonyDayNumber.padStart(2, "0")
  
  // Parse time: "3:00 PM" -> 15:00
  const timeMatch = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i)
  let hour = 15 // default 3 PM
  let minutes = 0
  
  if (timeMatch) {
    hour = parseInt(timeMatch[1])
    minutes = parseInt(timeMatch[2])
    const ampm = timeMatch[3].toUpperCase()
    if (ampm === "PM" && hour !== 12) hour += 12
    if (ampm === "AM" && hour === 12) hour = 0
  }
  
  // Create date in GMT+8 (PH Time)
  // Using Date.UTC and adjusting for GMT+8 offset (subtract 8 hours to convert GMT+8 to UTC)
  const parsedTargetDate = new Date(Date.UTC(
    parseInt(ceremonyYear),
    parseInt(monthNum) - 1,
    parseInt(dayNum),
    hour - 8, // Convert GMT+8 to UTC
    minutes,
    0
  ))
  
  const targetTimestamp = Number.isNaN(parsedTargetDate.getTime())
    ? new Date(Date.UTC(2025, 11, 20, 2, 30, 0)).getTime() // Fallback: December 20, 2025, 10:30 AM GMT+8 = 2:30 AM UTC
    : parsedTargetDate.getTime()

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = targetTimestamp
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetTimestamp])

  return (
    <Section
      id="countdown"
      className="relative bg-transparent py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Moonlit backdrop for Masquerade motif */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2541] to-[#122f52]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,210,255,0.22),transparent_45%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,170,255,0.18),transparent_55%)] opacity-70 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081020]/65 via-transparent to-transparent" />
        {/* Starfield */}
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

      {/* Monogram - centered at top */}
      <div className="relative flex justify-center pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8 md:mb-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[20rem] md:h-[20rem] lg:w-[24rem] lg:h-[24rem] xl:w-[26rem] xl:h-[26rem] opacity-95">
            <Image
              src="/monogram/monogramnew.png"
              alt="Marielle Monogram"
              fill
              className="object-contain"
              sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 24rem, (min-width: 768px) 20rem, (min-width: 640px) 18rem, 14rem"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(100%) drop-shadow(0 0 25px rgba(255,255,255,0.35)) drop-shadow(0 0 45px rgba(125,183,255,0.45))",
                objectFit: "contain",
              }}
              priority
            />
            {/* Glow effect behind monogram */}
            <div className="absolute inset-0 blur-3xl bg-[#cfe7ff]/32 -z-10 scale-125" />
          </div>
        </motion.div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/25" />
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#bfe0ff] to-[#7db7ff] rounded-full shadow-[0_0_12px_rgba(125,183,255,0.85)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/25" />
        </div>
        
        <h2 className="imperial-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
          Countdown to Marielle&apos;s Debut
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 font-light max-w-xl mx-auto leading-relaxed px-2">
          Moments away from her Moonlit Masquerade—join us as Marielle steps into eighteen beneath a sky of light and song.
        </p>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1 h-1 bg-white/70 rounded-full" />
          <div className="w-1 h-1 bg-white/40 rounded-full" />
          <div className="w-1 h-1 bg-white/70 rounded-full" />
        </div>
      </div>

      {/* Save The Date Card */}
      <div className="relative z-10">
        <div className="flex justify-center px-3 sm:px-4">
          <div className="max-w-2xl w-full">

            {/* Numeric countdown: Days / Hours / Minutes / Seconds */}
            <div className="mt-2 sm:mt-4 md:mt-6 font-inter">
              <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
                {/* 2x2 on mobile, 4 in a row from md+ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-sm sm:max-w-md md:max-w-xl">
                  <CountdownUnit value={timeLeft.days} label="Days" />
                  <CountdownUnit value={timeLeft.hours} label="Hours" />
                  <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                  <CountdownUnit value={timeLeft.seconds} label="Seconds" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
            {/* Date Section - Layout matched with hero date block */}
            <div className="relative sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="w-full max-w-2xl mx-auto">
                <div
                  className={`${cormorant.className} flex flex-col items-center gap-1.5 sm:gap-2.5 md:gap-3 text-white`}
                  style={{ textShadow: "0 4px 16px rgba(0,0,0,0.6)" }}
                >
                  {/* Month */}
                  <span className="text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] font-light">
                    {ceremonyMonth}
                  </span>

                  {/* Day and time row */}
                  <div className="flex w-full items-center gap-2 sm:gap-4 md:gap-5">
                    {/* Day of week & divider */}
                    <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2.5">
                      <span className="h-[0.5px] flex-1 bg-white/35" />
                      <span className="text-[0.6rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-light">
                        Wed
                      </span>
                      <span className="h-[0.5px] w-6 sm:w-8 md:w-10 bg-white/35" />
                    </div>

                    {/* Day number with glow */}
                    <div className="relative flex items-center justify-center px-3 sm:px-4 md:px-5">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 mx-auto h-[70%] max-h-[180px] w-[100px] sm:w-[140px] md:w-[170px] rounded-full bg-gradient-to-b from-[#bfe0ff]/32 via-[#7db7ff]/22 to-transparent blur-[28px] opacity-85"
                      />
                      <span
                        className="relative text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] font-light leading-none tracking-wider"
                        style={{
                          background: "linear-gradient(180deg, #e8f6ff 0%, #7db7ff 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          textShadow:
                            "0 0 20px rgba(125,183,255,0.55), 0 0 40px rgba(94,150,230,0.4), 0 4px 20px rgba(0,0,0,0.6)",
                          filter:
                            "drop-shadow(0 0 30px rgba(125,183,255,0.6)) drop-shadow(0 0 50px rgba(94,150,230,0.5))",
                        }}
                      >
                        {ceremonyDayNumber.padStart(2, "0")}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="flex flex-1 items-center gap-1.5 sm:gap-2.5">
                      <span className="h-[0.5px] w-6 sm:w-8 md:w-10 bg-white/35" />
                      <span className="text-[0.6rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-light">
                        {ceremonyTimeDisplay.split(",")[0]}
                      </span>
                      <span className="h-[0.5px] flex-1 bg-white/35" />
                    </div>
                  </div>

                  {/* Year */}
                  <span className="text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] font-light">
                    {ceremonyYear}
                  </span>
                </div>
              </div>
            </div>
      </div>
    </Section>
  )
}
