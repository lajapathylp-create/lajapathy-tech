import { motion } from 'framer-motion';

/* ─── Logo data ─────────────────────────────────────────────────────────────
   15 fictional-but-plausible startup names rendered as clean SVG wordmarks.
   All are monochrome so they pick up the white/light-gray colour from CSS.
────────────────────────────────────────────────────────────────────────────── */
const logos = [
  { id: 1, name: 'Arcova', viewBox: '0 0 100 32', path: 'M8 28L20 4l12 24M12 20h16M36 4h6v24h-6zM36 4h14a6 6 0 010 12H36M56 28V4l14 14L84 4v24M92 4v24M92 4h-8a8 8 0 000 16h8' },
  { id: 2, name: 'Nexlora', viewBox: '0 0 110 32', path: 'M4 28V4l16 24V4M28 4v24h18M28 16h12M54 16a12 12 0 1124 0 12 12 0 01-24 0zM84 4v24h16M84 16h10M108 4v24' },
  { id: 3, name: 'Veltrix', viewBox: '0 0 100 32', path: 'M4 4l12 24L28 4M36 4v24h18M60 4l12 12-12 12M60 16h14M84 16l16-12M84 16l16 12' },
  { id: 4, name: 'Quorbit', viewBox: '0 0 108 32', path: 'M16 4a12 12 0 100 24 12 12 0 000-24zM24 24l8 4M36 4h8a12 12 0 010 24H36zM56 4h8a12 12 0 010 24H56M78 4v24M78 4h14a6 6 0 010 12H78M96 28l-4-12' },
  { id: 5, name: 'Synapse', viewBox: '0 0 112 32', path: 'M4 22a8 8 0 0014 0 8 8 0 0116 0M36 10a8 8 0 0116 0M54 4v24M60 4h8a6 6 0 010 12H60v12M82 4v24M82 4h16a6 6 0 010 12H82M108 4v24' },
  { id: 6, name: 'Lumio', viewBox: '0 0 90 32', path: 'M4 4v20a8 8 0 0016 0V4M28 4v24h18M28 16h12M54 16a12 12 0 1124 0 12 12 0 01-24 0z' },
  { id: 7, name: 'Paravox', viewBox: '0 0 110 32', path: 'M4 4h8a12 12 0 010 24H4zM28 4v24M28 4h14a6 6 0 010 12H28M50 4l18 24M50 28l18-24M76 4v24h16M76 16h10M100 4v24' },
  { id: 8, name: 'Dropform', viewBox: '0 0 118 32', path: 'M4 4h8a12 12 0 010 24H4zM28 4v24M28 4h8a6 6 0 010 12H28M50 16a12 12 0 1124 0 12 12 0 01-24 0zM80 4v24h16M80 16h10M104 4h8a12 12 0 010 24h-8' },
  { id: 9, name: 'Krato', viewBox: '0 0 84 32', path: 'M4 4v24M4 16l16-12M4 16l16 12M28 4v24M28 4h14a6 6 0 010 12H28M50 16a12 12 0 1124 0 12 12 0 01-24 0z' },
  { id: 10, name: 'Zenvoy', viewBox: '0 0 98 32', path: 'M4 4h22L4 28h22M34 4v24M34 4h8a12 12 0 010 24H34M62 4v24M62 4h16a6 6 0 010 12H62M78 4h16M78 28h16M86 4v24' },
  { id: 11, name: 'Fluxera', viewBox: '0 0 106 32', path: 'M4 4v24h14M4 16h10M26 4v20a8 8 0 0016 0V4M50 16a12 12 0 1124 0 12 12 0 01-24 0zM80 4v24M80 4h14a6 6 0 010 12H80M96 4h10' },
  { id: 12, name: 'Brightops', viewBox: '0 0 124 32', path: 'M4 4h8a6 6 0 014 10.4A6 6 0 0112 28H4zM28 4v24M28 4h8a6 6 0 010 12H28M50 16a12 12 0 1124 0 12 12 0 01-24 0zM80 4v24h16M80 16h10M104 4v24h16M104 16h10' },
  { id: 13, name: 'Cardex', viewBox: '0 0 96 32', path: 'M24 8a12 12 0 100 16M32 4v24M32 4h14a6 6 0 010 12H32M54 4v24M54 4h14a6 6 0 010 12H54M76 4l10 12-10 12' },
  { id: 14, name: 'Prismly', viewBox: '0 0 100 32', path: 'M4 4h8a6 6 0 010 12H4M4 22h10M22 4v24M28 4v24h16M28 16h10M52 4v24M58 4l14 24M58 28l14-24M82 4h14M82 16h10M82 28h14' },
  { id: 15, name: 'Orbify', viewBox: '0 0 94 32', path: 'M16 4a12 12 0 100 24 12 12 0 000-24zM34 4h8a12 12 0 010 24h-8zM56 4v24M62 4h8a6 6 0 010 12H62M62 16h10a6 6 0 010 12H62v-12M82 4h10' },
];

/* Duplicate for seamless infinite loop */
const allLogos = [...logos, ...logos];

export const LogoMarquee = () => {
  return (
    <section
      aria-label="Trusted by Growing Teams"
      style={{ background: '#0B0B0B' }}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* ── Section heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="flex items-center justify-center gap-4 mb-10 sm:mb-14"
      >
        <div className="h-px w-8 sm:w-12 bg-white/20" />
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white/35 select-none">
          Trusted by Growing Teams
        </span>
        <div className="h-px w-8 sm:w-12 bg-white/20" />
      </motion.div>

      {/* ── Marquee track ── */}
      <div className="relative">

        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: 'clamp(60px, 8vw, 140px)',
            background: 'linear-gradient(to right, #0B0B0B 0%, transparent 100%)',
          }}
        />

        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: 'clamp(60px, 8vw, 140px)',
            background: 'linear-gradient(to left, #0B0B0B 0%, transparent 100%)',
          }}
        />

        {/* Scrolling belt */}
        <div className="overflow-hidden">
          <div className="logo-marquee-belt flex items-center">
            {allLogos.map((logo, idx) => (
              <LogoItem key={`${logo.id}-${idx}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframe + hover-pause styles ── */}
      <style>{`
        @keyframes logoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .logo-marquee-belt {
          animation: logoScroll 38s linear infinite;
          width: max-content;
        }

        .logo-marquee-belt:hover {
          animation-play-state: paused;
        }

        .logo-item {
          opacity: 0.55;
          transition: opacity 0.3s ease, transform 0.3s ease;
          filter: brightness(0) invert(1);
        }

        .logo-item:hover {
          opacity: 1;
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

/* ─── Individual logo item ──────────────────────────────────────────────── */
function LogoItem({ logo }: { logo: typeof logos[number] }) {
  return (
    <div
      className="logo-item flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-default"
      style={{
        /* Responsive: show ~2-3 on mobile, ~4 on tablet, ~6 on desktop */
        width: 'clamp(100px, 16.66vw, 190px)',
        padding: '0 clamp(12px, 2vw, 32px)',
      }}
      title={logo.name}
      aria-label={logo.name}
    >
      <svg
        viewBox={logo.viewBox}
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: '#fff', width: 'auto', maxWidth: '100%' }}
        aria-hidden="true"
      >
        <path d={logo.path} />
      </svg>

      {/* Wordmark label */}
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(9px, 1vw, 11px)',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#fff',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {logo.name}
      </span>
    </div>
  );
}

export default LogoMarquee;
