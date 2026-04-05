import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { Layout, Box, Palette, Monitor, Grid, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'UX / UI Design',
    description: 'Intuitive, user-centered interfaces for web and mobile products that drive engagement and usability.',
    number: '01',
  },
  {
    icon: Box,
    title: 'Product Design',
    description: 'End-to-end design for digital products—from wireframes to high-fidelity experiences.',
    number: '02',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'High-quality visual assets including social creatives, ads, presentations, and marketing materials.',
    number: '03',
  },
  {
    icon: Monitor,
    title: 'Web & Landing Pages',
    description: 'Conversion-focused websites and landing pages designed for performance and clarity.',
    number: '04',
  },
  {
    icon: Grid,
    title: 'Design Systems',
    description: 'Scalable component libraries and systems to ensure consistency across your product.',
    number: '05',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Design Support',
    description: 'Continuous design iterations, updates, and improvements as your product evolves.',
    number: '06',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const ServiceCard = ({ service, index, activeIndex, setActiveIndex }: ServiceCardProps) => {
  const Icon = service.icon;
  const isActive = activeIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      className="group relative"
    >
      <div className={`relative h-full p-8 md:p-10 border transition-all duration-500 flex flex-col ${isActive
        ? 'bg-accent/5 border-accent/30'
        : 'bg-card/30 border-border/50 hover:border-border'
        }`}>
        {/* Number */}
        <motion.span
          className={`absolute top-4 right-4 text-xs font-mono transition-colors duration-300 ${isActive ? 'text-accent' : 'text-muted-foreground/40'
            }`}
          animate={{ opacity: isActive ? 1 : 0.4 }}
        >
          {service.number}
        </motion.span>

        {/* Icon with animation */}
        <motion.div
          animate={{
            rotate: isActive ? 360 : 0,
            scale: isActive ? 1.1 : 1
          }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="w-14 h-14 flex items-center justify-center mb-6 relative"
        >
          <div className={`absolute inset-0 rounded-none border transition-all duration-300 ${isActive ? 'border-accent bg-accent/10' : 'border-border'
            }`} />
          <Icon className={`w-7 h-7 relative z-10 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground/70'
            }`} strokeWidth={1.5} />
        </motion.div>

        {/* Content */}
        <motion.h3
          className="font-syne font-bold text-xl md:text-2xl mb-3 transition-colors duration-300"
          animate={{ x: isActive ? 5 : 0 }}
        >
          {service.title}
        </motion.h3>
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        />

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrow */}
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="section-padding bg-transparent relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm font-mono text-accent">02</span>
              <span className="text-sm font-mono text-muted-foreground tracking-wider">WHAT YOU CAN REQUEST</span>
            </motion.div>

            <AnimatedLine delay={0.3}>
              <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
                Design capabilities, on demand.
              </h2>
            </AnimatedLine>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-md"
          >
            From product interfaces to marketing assets, request anything your team needs—we handle it as part of your design subscription.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* Call to action line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="font-syne font-medium text-2xl md:text-3xl lg:text-4xl text-white max-w-4xl mx-auto leading-tight">
            Unlimited design requests.<br />Prioritized and delivered one at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
