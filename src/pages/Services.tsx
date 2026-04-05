import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';

const services = [
  {
    id: 'brand-identity',
    title: 'Brand Systems',
    tagline: 'Build a brand that scales.',
    description: 'Build a scalable brand system—from strategy to execution. Everything you need to create, evolve, and maintain a consistent visual identity.',
    features: [
      'Brand strategy & positioning',
      'Logo systems & variations',
      'Design tokens (color, type, spacing)',
      'Brand guidelines',
      'Marketing & collateral assets',
      'Brand Voice & messaging',
    ],
    timeline: '4-6 weeks',
    popular: false,
    number: '01',
  },
  {
    id: 'web-design',
    title: 'Web Experiences',
    tagline: 'Design experiences that convert.',
    description: 'Design and launch high-performing websites—built for speed, clarity, and conversion. Everything from UX to development, handled as part of your subscription.',
    features: [
      'UX strategy & user flows',
      'Conversion-focused UI design',
      'Scalable frontend development',
      'CMS & content systems',
      'Performance & Core Web Vitals',
      'SEO-ready foundations',
    ],
    timeline: '6-10 weeks',
    popular: true,
    number: '02',
  },
  {
    id: 'digital-campaign',
    title: 'Growth Campaigns',
    tagline: 'Creative built to perform.',
    description: 'Plan, design, and launch high-impact campaigns—built to drive engagement, conversion, and growth. All executed as part of your ongoing design subscription.',
    features: [
      'Campaign strategy & positioning',
      'Creative direction & concepts',
      'High-performing ad creatives',
      'Social & performance assets',
      'Motion & video design',
      'Campaign analytics & iteration',
    ],
    timeline: '3-5 weeks',
    popular: false,
    number: '03',
  },
  {
    id: 'product-design',
    title: 'Product Interfaces',
    tagline: 'Built for usability and scale.',
    description: 'Design scalable product experiences—from flows to full UI systems. Everything from UX to interface design, delivered continuously through your subscription.',
    features: [
      'User flows & experience architecture',
      'Wireframes & interactive prototypes',
      'Scalable UI systems & components',
      'Interaction & motion design',
      'Design systems & documentation',
      'Developer-ready handoff',
    ],
    timeline: '8-12 weeks',
    popular: false,
    number: '04',
  },
];

const addOns = [
  {
    name: 'Motion & Animation',
    number: '01',
    subtext: '→ UI motion, explainer videos, micro-interactions'
  },
  {
    name: 'Creative Direction',
    number: '02',
    subtext: '→ Campaign concepts, visual direction, brand storytelling'
  },
  {
    name: 'Content & Copy',
    number: '03',
    subtext: '→ Product messaging, landing pages, marketing copy'
  },
];

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<number | null>(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const addOnsRef = useRef(null);
  const processRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const addOnsInView = useInView(addOnsRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 30,
      y: (e.clientY - window.innerHeight / 2) / 30,
    });
  };

  return (
    <div className="min-h-screen bg-background" onMouseMove={handleMouseMove}>
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">


        {/* Floating shapes */}
        <motion.div
          className="absolute top-32 right-[10%] w-20 h-20 border border-accent/20"
          style={{ transform: 'rotate(45deg)', x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-[15%] w-32 h-32 rounded-full border border-accent/10"
          style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        />



        <div className="container-wide relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="text-sm font-mono text-accent">01</span>
            <span className="text-sm font-mono text-muted-foreground tracking-wider">SERVICES</span>
          </motion.div>

          <div className="max-w-4xl">
            {['Design Capabilities &', 'System'].map((text, index) => (
              <div key={text} className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={heroInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  className={`font-syne font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] ${index === 1 ? 'text-accent' : 'text-foreground'
                    }`}
                >
                  {text}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mt-8"
          >
            Everything your team needs—delivered through a fast, flexible design system.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 md:py-32 relative">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-accent">02</span>
              <span className="text-sm font-mono text-muted-foreground tracking-wider">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-syne font-bold leading-tight max-w-3xl">
              Everything you need to design, ship, and scale.
            </h2>
          </motion.div>

          {/* Interactive Grid */}
          <div className="grid md:grid-cols-2 border-t border-l border-border">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative border-r border-b border-border min-h-[500px] md:min-h-[600px] overflow-hidden bg-background"
              >
                {/* Default View (Always visible/background) */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-0">
                  <div className="flex justify-between items-start">
                    <span className="text-6xl md:text-8xl font-syne font-bold text-foreground/5 group-hover:text-accent/10 transition-colors duration-500">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-500">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="space-y-4 mb-12 md:mb-0">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold leading-[0.9] group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Reveal Panel (Slides up) */}
                <div className="absolute inset-x-0 bottom-0 h-[85%] md:h-[75%] bg-card/95 backdrop-blur-xl border-t border-border p-8 md:p-12 flex flex-col justify-between transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
                  <div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.slice(0, 6).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between border-t border-border/50 pt-6">
                    <Link
                      to="/contact"
                      className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      Start request →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section ref={addOnsRef} className="py-24 md:py-32 relative overflow-hidden">
        <div className="container-wide">
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm font-mono text-accent">03</span>
              <span className="text-sm font-mono text-muted-foreground tracking-wider">ADD-ONS</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-syne font-bold max-w-2xl mx-auto">
              Extend your design capabilities—instantly, on demand.
            </h2><br></br>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Specialized capabilities available within your subscription—when you need them.</p>
          </motion.div>

          {/* Typographic Ledger List */}
          <div className="max-w-6xl mx-auto border-t border-border">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-baseline justify-between py-12 md:py-16 border-b border-border cursor-pointer"
              >
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="font-mono text-sm text-accent/50 group-hover:text-accent transition-colors duration-300">
                    {addon.number}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-3xl md:text-6xl font-syne font-bold text-foreground group-hover:text-accent group-hover:translate-x-4 transition-all duration-500 ease-out">
                      {addon.name}
                    </h3>
                    {(addon as any).subtext && (
                      <span className="text-sm md:text-lg font-mono text-accent/60 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-700 delay-100">
                        {(addon as any).subtext}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8 mt-6 md:mt-0 pl-[calc(2rem+1px)] md:pl-0">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-accent text-2xl">+</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="container-wide">
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm font-mono text-accent">04</span>
              <span className="text-sm font-mono text-muted-foreground tracking-wider">OUR PROCESS</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-syne font-bold max-w-2xl mx-auto">
              How we deliver—continuously.
            </h2><br></br>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">A continuous system designed to keep your design moving—without bottlenecks.</p>
          </motion.div>

          {/* Architectural Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-y border-border">
            {[
              { step: '01', title: 'Understand', desc: 'We align on your goals and priorities—so every request starts with clarity.', icon: '◇' },
              { step: '02', title: 'Define', desc: 'We scope and prioritize work—so the right things get done at the right time.', icon: '○' },
              { step: '03', title: 'Design', desc: 'We design, iterate, and refine—delivering high-quality work at speed.', icon: '△' },
              { step: '04', title: 'Deliver', desc: 'Review, refine, and move forward—improving continuously with every cycle.', icon: '□' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[500px] border-b md:border-b-0 md:border-r border-border last:border-b-0 last:border-r-0 hover:bg-foreground hover:text-background transition-colors duration-500"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xl font-mono group-hover:text-accent transition-colors duration-300">
                    {phase.step}
                  </span>
                  <motion.span
                    className="text-3xl text-accent opacity-50 group-hover:opacity-100 group-hover:text-background transition-all duration-300"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                  >
                    {phase.icon}
                  </motion.span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl font-syne font-bold mb-6 group-hover:text-background transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-background/80 transition-colors duration-300">
                    {phase.desc}
                  </p>

                  <div className="h-px w-8 bg-border mt-8 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-foreground/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-accent mb-6 block">START TODAY</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-syne font-bold mb-6">
              Start your design subscription.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Get a dedicated design team—fast, flexible, and ready when you are.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full"
              >
                Request Design Support
                <motion.div
                  className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </MagneticButton>

          </motion.div><br />
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">No contracts • Pause anytime • 48hr turnaround</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
