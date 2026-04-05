import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/MagneticButton';
import heroBg from '@/assets/hero-bg.jpg';

const words = [
  { text: 'Design', number: '01' },
  { text: 'without', number: '02' },
  { text: 'Hiring', number: '03' },
  { text: 'Designers', number: '04', accent: true },
];

const marqueeLogos = [
  'Arcova', 'Nexlora', 'Veltrix', 'Quorbit', 'Synapse',
  'Lumio', 'Paravox', 'Dropform', 'Krato', 'Zenvoy',
  'Fluxera', 'Brightops', 'Cardex', 'Prismly', 'Orbify',
];

export const HeroSection = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 0.95]);

  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '10%']);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 50,
      y: (e.clientY - rect.top - rect.height / 2) / 50,
    });
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-[-5]" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-15 scale-110"
        />
        <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-background/20 via-transparent to-background/10" />
      </motion.div>


      {/* Side decorators - desktop only */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
        <motion.div
          className="text-xs font-mono text-muted-foreground tracking-widest"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          SCROLL TO EXPLORE
        </motion.div>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-xs font-mono text-muted-foreground">{currentTime}</span>
        <div className="w-px h-12 bg-foreground/20" />
        <span className="text-xs font-mono text-muted-foreground">IST</span>
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y }} className="w-full container-wide relative z-10 pt-24 sm:pt-32 pb-20 sm:pb-32 md:pb-48">
        {/* Inner content wrapper - full width on mobile, constrained on desktop */}
        <div className="md:max-w-5xl md:mx-auto">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12"
          >
            <span className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wider">
              Design Subscription Studio — Since 2006
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="mb-6 md:mb-8">
            {words.map((word, index) => (
              <div
                key={word.text}
                className={`relative ${index === 0 ? '' : '-mt-1 sm:-mt-2 md:-mt-4'}`}
                style={{ zIndex: words.length - index }}
              >
                <div className="py-0.5 sm:py-1 md:py-2">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.7 + index * 0.15,
                      ease: [0.19, 1, 0.22, 1]
                    }}
                    className="flex items-baseline gap-2 sm:gap-4"
                  >
                    <motion.span
                      className="text-xs sm:text-sm font-mono text-accent/60 hidden sm:inline-block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                    >
                      {word.number}
                    </motion.span>

                    <span
                      className={`font-syne font-black text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] tracking-tight leading-[1] ${word.accent ? 'text-accent' : 'text-foreground'
                        }`}
                    >
                      {word.text}
                    </span>
                  </motion.div>
                </div>

              </div>
            ))}
          </h1>

          {/* Description and CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-sm"
            >
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
                Subscription-based product design for growing teams and companies. Get UI/UX, product, and brand design delivered fast—without the overhead and delays of hiring in-house.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start"
            >
              <div className="flex flex-col gap-2">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-semibold rounded-full overflow-hidden text-sm sm:text-base w-full sm:w-auto shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] transition-all duration-300"
                  >
                    <span className="relative z-10">Request Design Support</span>
                    <motion.div
                      className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background/20 flex items-center justify-center"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 11L11 3M11 3H5M11 3V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ y: '100%' }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </Link>
                </MagneticButton>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="text-[10px] sm:text-xs text-muted-foreground/60 font-mono tracking-widest ml-4"
                >
                  We’ll respond within 24 hours
                </motion.p>
              </div>

              <MagneticButton>
                <Link
                  to="/work"
                  className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-foreground/20 text-foreground font-semibold rounded-full overflow-hidden hover:border-accent/50 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  <span className="relative z-10">View Case Studies</span>
                  <motion.span
                    className="relative z-10 text-accent"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-foreground/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { number: '150+', label: 'Design Requests Delivered' },
                { number: '50+', label: 'Teams Supported' },
                { number: '18', label: 'Designers Available' },
                { number: '19+', label: 'Years of Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Logo Marquee strip — visible in first viewport ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-[50px] left-0 right-0 z-20 pb-5 sm:pb-6"
      >
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
          <div className="h-px w-6 sm:w-10 bg-foreground/20" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-foreground/30 select-none">
            Trusted by growing teams & companies
          </span>
          <div className="h-px w-6 sm:w-10 bg-foreground/20" />
        </div>

        {/* Scrolling belt */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 'clamp(40px, 6vw, 120px)', background: 'linear-gradient(to right, hsl(0 0% 4%) 0%, transparent 100%)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 'clamp(40px, 6vw, 120px)', background: 'linear-gradient(to left, hsl(0 0% 4%) 0%, transparent 100%)' }}
          />

          <div className="hero-marquee-belt flex items-center">
            {[...marqueeLogos, ...marqueeLogos].map((name, idx) => (
              <div
                key={idx}
                className="hero-logo-item flex-shrink-0 flex items-center justify-center px-6 sm:px-10"
                style={{ minWidth: 'clamp(90px, 14vw, 160px)' }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 'clamp(10px, 1.1vw, 13px)',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    userSelect: 'none',
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes heroLogoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-marquee-belt {
          animation: heroLogoScroll 36s linear infinite;
          width: max-content;
        }
        .hero-marquee-belt:hover {
          animation-play-state: paused;
        }
        .hero-logo-item {
          opacity: 0.45;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .hero-logo-item:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>

    </motion.section>
  );
};

export default HeroSection;
