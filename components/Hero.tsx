import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpen: () => void;
}

// Generate star positions
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    delay: Math.random() * 2,
  }));
};

// Generate stars - optimized count for performance
const stars = generateStars(100);

const Hero: React.FC<HeroProps> = ({ onOpen }) => {
  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.95,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* --- Background Layers (Matching LoadingScreen) --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Deep Blue Starry Night Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#1a2844] to-[#2a3a5a]" />
          
          {/* Animated Stars Layer */}
          <div className="absolute inset-0 overflow-hidden">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                }}
                animate={{
                  opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 2 + 1.5,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Moon Glow Effect - Top Right Corner */}
          <motion.div
            className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Moon Glow */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 -translate-x-1/2 -translate-y-1/2" />
            {/* Moon */}
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-200 via-white to-slate-100 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              {/* Moon Craters */}
              <div className="absolute top-4 left-5 sm:top-6 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-slate-300/40 rounded-full blur-sm" />
              <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-slate-300/30 rounded-full blur-sm" />
              <div className="absolute top-1/2 left-3 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-slate-300/50 rounded-full blur-sm" />
            </div>
          </motion.div>
          
          {/* Giant Watermark */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             <motion.span 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 0.08, scale: 1 }}
               transition={{ duration: 2, ease: "easeOut" }}
               className="font-serif text-[12vw] sm:text-[15vw] leading-none text-white/25 select-none blur-sm whitespace-nowrap"
             >
               Eighteenth
             </motion.span>
          </div>

          {/* Subtle Bottom Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#2a3a5a]/50 to-transparent pointer-events-none" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-6 sm:py-8">
        
        {/* Top Decoration */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 1 }}
           className="flex flex-col items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
        >
           <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 fill-white/10" />
           <p className="font-cinzel text-[9px] sm:text-[10px] md:text-xs tracking-[0.35em] sm:tracking-[0.4em] text-white/70 uppercase font-medium">
             You are invited
           </p>
        </motion.div>

        {/* Elegant Name Display */}
        <div className="relative mb-4 sm:mb-6 md:mb-10">
            <div className="relative z-10">
              <motion.h1 
                 className="style-script-regular text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-white tracking-tight leading-[0.9] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                 style={{ fontWeight: 400 }}
                 initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                 transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                 Marielle
              </motion.h1>
            </div>
        </div>

        {/* Copywriting - Elegant Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mb-6 sm:mb-8 max-w-md sm:max-w-lg px-4"
        >
          <p className="font-cinzel text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light italic">
            An enchanted evening awaits beneath the moonlit sky
          </p>
        </motion.div>

        {/* Copywriting - Descriptive Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-6 sm:mb-8 max-w-xs sm:max-w-md px-4"
        >
          <p className="font-cinzel text-[10px] sm:text-xs text-white/60 leading-relaxed">
            Join us for a magical celebration as we honor a new beginning
          </p>
        </motion.div>

        {/* Refined Premium Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="w-full max-w-xs sm:max-w-sm"
        >
          <button 
            onClick={onOpen}
            className="group relative w-full pl-6 sm:pl-9 pr-2 sm:pr-3 py-2.5 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_10px_35px_rgba(255,255,255,0.15)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(255,255,255,0.25)] hover:scale-[1.03] hover:bg-white/20 overflow-hidden"
          >
             {/* Shimmer Effect - Inside button, clipped by overflow-hidden */}
             <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shimmer_1.1s_ease-in-out] pointer-events-none" />
             
             <div className="relative flex items-center justify-center gap-3 sm:gap-6 z-10">
                <span className="font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.24em] text-white/90 uppercase font-semibold text-center group-hover:text-white transition-colors duration-300">
                  Open Invitation
                </span>
                
                {/* Circle Icon Button */}
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-white/50 group-hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] shrink-0">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/80 relative z-10 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
                </div>
             </div>
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Hero;