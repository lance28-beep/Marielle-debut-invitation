import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
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

const stars = generateStars(150);

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Duration of the loading sequence in ms
    const duration = 3000; 
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Small pause at 100% before triggering completion
        setTimeout(onComplete, 600);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: "blur(15px)",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
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
        className="absolute top-4 right-4 md:top-6 md:right-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Moon Glow */}
        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl w-48 h-48 md:w-64 md:h-64 -translate-x-1/2 -translate-y-1/2" />
        {/* Moon */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-200 via-white to-slate-100 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.5)]">
          {/* Moon Craters */}
          <div className="absolute top-6 left-8 w-6 h-6 md:w-8 md:h-8 bg-slate-300/40 rounded-full blur-sm" />
          <div className="absolute bottom-8 right-8 w-4 h-4 md:w-6 md:h-6 bg-slate-300/30 rounded-full blur-sm" />
          <div className="absolute top-1/2 left-4 w-3 h-3 md:w-4 md:h-4 bg-slate-300/50 rounded-full blur-sm" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6">
        
        {/* Giant Watermark Background - Moonlit Masquerade */}
        <motion.div 
          className="absolute select-none pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
           <span className="font-serif text-[12rem] md:text-[20rem] leading-none text-white/25 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">18</span>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative flex flex-col items-center">
            {/* Title: Moonlit Masquerade */}
            <div className="overflow-hidden mb-6">
                <motion.h2 
                    className="font-cinzel text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold tracking-wide text-center drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)] [text-shadow:_0_0_30px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.2)]"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                >
                    Moonlit Masquerade
                </motion.h2>
            </div>

            {/* Subtitle: Marielle's Enchanted Soiree */}
            <div className="overflow-hidden mb-8">
                <motion.p 
                    className="font-sans text-white/70 tracking-[0.3em] text-xs md:text-sm uppercase font-light text-center"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                    Marielle's Enchanted Soiree
                </motion.p>
            </div>

            {/* Name Reveal: Marielle */}
            <div className="relative mb-12">
                <div className="overflow-hidden py-2 px-4">
                  <motion.h1 
                      className="style-script-regular text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                      initial={{ y: "120%", opacity: 0, rotate: -2 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                      Marielle
                  </motion.h1>
                </div>
                
                {/* Decorative Star Elements */}
                <motion.div
                  className="absolute -right-6 top-1/2 -translate-y-1/2"
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(255,255,255,0.8)" />
                   </svg>
                </motion.div>
                <motion.div 
                  className="absolute -left-6 top-1/2 -translate-y-1/2"
                  initial={{ scale: 0, rotate: 45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(255,255,255,0.6)" />
                   </svg>
                </motion.div>
            </div>

        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#2a3a5a]/50 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default LoadingScreen;