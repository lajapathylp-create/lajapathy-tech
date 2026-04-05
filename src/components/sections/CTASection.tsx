import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/MagneticButton';
import { AnimatedLine } from '@/components/AnimatedText';
import { Mail, ArrowUpRight } from 'lucide-react';

const words = [
  { text: "Design", number: '01' },
  { text: 'delivered', number: '02', accent: true },
  { text: 'when you', number: '03' },
  { text: 'need it ', number: '04' },
];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="section-padding relative overflow-hidden"
    >



      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16 md:mb-20"
        >
          <span className="text-sm font-mono text-accent">06</span>
          <span className="text-sm font-mono text-muted-foreground tracking-wider">START A CONVERSATION</span>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main headline with numbers */}
          <div className="mb-12 md:mb-16 flex flex-wrap items-baseline gap-x-6 md:gap-x-10">
            {words.map((word, index) => (
              <div key={index} className="inline-block overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.1,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="flex items-baseline gap-4"
                >
                  <motion.span
                    className="text-sm font-mono text-accent/60 hidden sm:inline-block"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {word.number}
                  </motion.span>
                  <span
                    className={`font-syne font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] ${word.accent ? 'text-accent' : 'text-foreground'
                      }`}
                  >
                    {word.text}
                    {word.accent && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="block h-1.5 bg-accent mt-2 origin-left"
                      />
                    )}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Description and CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
            >
              Tell us what you need. We’ll handle the rest —fast, reliable, and on demand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold rounded-full overflow-hidden whitespace-nowrap"
                >
                  <Mail className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Request Design Support</span>
                  <motion.div
                    className="relative z-10 w-6 h-6 rounded-full bg-background/20 flex items-center justify-center"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                  />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 pt-8 border-t border-foreground/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: 'Email', value: 'info@lajapathy.com', href: 'mailto:info@lajapathy.com' },
                { label: 'Location', value: 'Madurai, India', href: null },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  className="group"
                >
                  <span className="text-xs font-mono text-muted-foreground block mb-2">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-syne font-semibold text-lg hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      {item.value}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="font-syne font-semibold text-lg">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
