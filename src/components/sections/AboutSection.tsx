import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';

const stats = [
  { number: '150+', label: 'Design Requests Delivered', description: 'Successfully delivered' },
  { number: '18', label: 'Designers Available', description: 'Industry recognition' },
  { number: '98%', label: 'Client Retention Rate', description: 'Satisfaction rate' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    });
  };

  return (
    <section
      id="about"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="section-padding bg-transparent relative overflow-hidden"
    >




      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative">
            {/* Section header with number - moved inside for better flow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm font-mono text-accent">01</span>
              <span className="text-sm font-mono text-muted-foreground tracking-wider">WHY LP TECH</span>
            </motion.div>

            <AnimatedLine delay={0.2}>
              <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8 leading-[1.1]">
                Your dedicated design partner
              </h2>
            </AnimatedLine>

            <div className="space-y-6 mb-10">
              <AnimatedLine delay={0.4}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  We work as an extension of your team—delivering consistent, high-quality UI/UX, product, and brand design through a flexible subscription model.

                  No hiring, no onboarding delays, and no bottlenecks. Just reliable design support that adapts to your pace and priorities.
                </p>
              </AnimatedLine>

              <AnimatedLine delay={0.5}>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  Whether you’re building from scratch or scaling an existing product, we help teams move faster and maintain design consistency across every touchpoint.
                </p>
              </AnimatedLine>
            </div>

            {/* Stats with improved spacing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 py-8 border-t border-border/50"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="pl-4 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300">
                    <span className="font-syne font-bold text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors duration-300 block mb-1">
                      {stat.number}
                    </span>
                    <span className="block text-sm font-medium text-foreground mb-1">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image with unique frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
            style={{
              x: mousePosition.x * -1,
              y: mousePosition.y * -1,
            }}
          >
            {/* Decorative frame */}
            <motion.div
              className="absolute -top-4 -right-4 w-full h-full border border-accent/30"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
                alt="Creative team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/50" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-6 bottom-12 bg-background border border-border px-6 py-4 shadow-xl"
            >
              <span className="text-xs font-mono text-muted-foreground">ESTABLISHED</span>
              <span className="block font-syne font-bold text-3xl mt-1">2006</span>
            </motion.div>

            {/* Side label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              <span className="text-xs font-mono text-muted-foreground tracking-widest">
                CRAFTING DIGITAL EXPERIENCES
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
