import React from 'react';
import { motion } from 'framer-motion';

const BackgroundSystem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative isolate w-full min-h-screen overflow-hidden">
      {/* Global Background Opacity Control */}
      <div className="opacity-90">
        {/* Layer 0: Solid Base */}
        <div className="fixed inset-0 z-[-5] bg-[#0B0B0B]" />
        {/* Layer 1: Base Gradient & Grain */}
        <div
          className="fixed inset-0 z-[-4] bg-gradient-to-br from-[#0B0B0B] to-[#111111]"
        />
        <div className="fixed inset-0 z-[-3] premium-bg-grain pointer-events-none" />

        {/* Layer 2: Atmospheric Glow (Right-biased) */}
        <div
          className="fixed top-[-10%] right-[-5%] w-[70vw] h-[70vw] z-[-2] rounded-full opacity-25 pointer-events-none bg-[radial-gradient(circle,hsl(var(--premium-glow)/0.8)_0%,transparent_70%)] blur-[150px]"
        />
        <div
          className="fixed bottom-[10%] left-[-10%] w-[50vw] h-[50vw] z-[-2] rounded-full opacity-[0.01] pointer-events-none bg-[radial-gradient(circle,hsl(var(--premium-glow)/0.4)_0%,transparent_70%)] blur-[130px]"
        />

        {/* Layer 3: Abstract geometric shapes (LP inspired) */}
        <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
          {/* Diamond shape top left */}
          <motion.div
            initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
            animate={{ opacity: 0.06, rotate: 45, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-[15%] left-[5%] w-64 h-64 border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-md hidden lg:block"
          />

          {/* Angled rectangle bottom right */}
          <motion.div
            initial={{ opacity: 0, rotate: -15, y: 50 }}
            animate={{ opacity: 0.05, rotate: -15, y: 0 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-[20%] right-[10%] w-[400px] h-32 border border-foreground/10 bg-gradient-to-r from-foreground/5 to-transparent backdrop-blur-[2px] hidden md:block"
          />
        </div>

        {/* Layer 4: Accent Elements (Dots/Squares) */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 bg-accent/40 rounded-full glow-sm" />
          <div className="absolute bottom-[35%] left-[20%] w-1 h-1 bg-foreground/20 rotate-45" />
        </div>

        {/* Layer 5: Hairline horizontal guides */}
        <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-foreground/[0.1] max-w-[1400px] mx-auto left-1/2 -translate-x-1/2" />
          <div className="absolute top-[50%] left-0 w-full h-[1px] bg-foreground/[0.1] max-w-[1200px] mx-auto left-1/2 -translate-x-1/2" />
          <div className="absolute top-[80%] left-0 w-full h-[1px] bg-foreground/[0.1] max-w-[1600px] mx-auto left-1/2 -translate-x-1/2" />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSystem;
