import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedLine } from "@/components/AnimatedText";

export default function PricingSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const plans = [
        {
            name: "Starter",
            priceLabel: "Starting from",
            price: "₹69K",
            subNote: "Best for early-stage teams",
            highlight: false,
            description: "For early-stage teams getting started",
            features: [
                "1 active request",
                "2–3 day turnaround",
                "UI/UX design",
                "Brand & marketing creatives",
                "Landing pages & basic assets",
                "Email support",
            ],
            cta: "Get Started",
        },
        {
            name: "Growth",
            priceLabel: "Starting from",
            price: "₹1.2L",
            subNote: "Most teams invest ₹1.2L – ₹2L/month",
            highlight: true,
            description: "For scaling startups (most popular)",
            features: [
                "2 active requests",
                "1–2 day turnaround",
                "Full UI/UX design",
                "Brand identity & systems",
                "Ads, landing pages & creatives",
                "Priority support",
            ],
            cta: "Get a Free Consultation",
        },
        {
            name: "Scale",
            priceLabel: "Starting from",
            price: "₹2L",
            subNote: "Custom scope for high-growth teams",
            highlight: false,
            description: "For high-growth teams",
            features: [
                "3–4 active requests",
                "Same-day priority",
                "End-to-end design support",
                "UX strategy + product design",
                "Full branding & campaigns",
                "Dedicated design partner",
            ],
            cta: "Book a Call",
        },
    ];

    return (
        <section
            id="pricing"
            ref={sectionRef}
            className="section-padding bg-transparent relative overflow-hidden"
        >
            <div className="container-wide relative z-10">
                {/* Section header */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="text-sm font-mono text-accent">03</span>
                        <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">Memberships</span>
                    </motion.div>

                    <div className="max-w-3xl">
                        <AnimatedLine delay={0.3}>
                            <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                                Flexible Design Subscriptions
                            </h2>
                        </AnimatedLine>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 1 } : {}}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                        >
                            One subscription. Product, brand, and growth design—delivered continuously.
                            Get a full design team for less than the cost of one designer.
                        </motion.p>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => {
                        const isActive = activeIndex === index;
                        const isStaticHighlight = plan.highlight && activeIndex === null;
                        const isShowingActive = isActive || isStaticHighlight;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className="group relative h-full"
                            >
                                <div
                                    className={`relative h-full p-8 md:p-10 border flex flex-col
      transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30
      ${isShowingActive
                                            ? "border-accent/30 bg-accent/5"
                                            : "border-border/50 bg-card/30 hover:border-border"
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {plan.highlight && (
                                        <div
                                            className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest
          ${isShowingActive
                                                    ? "bg-accent text-black shadow-md"
                                                    : "bg-muted/50 text-muted-foreground"
                                                }`}
                                        >
                                            Popular
                                        </div>
                                    )}

                                    {/* Plan Name */}
                                    <h3
                                        className={`font-syne font-bold text-2xl mb-3 transition-colors duration-300 ${isShowingActive ? "text-accent" : "text-foreground"
                                            }`}
                                    >
                                        {plan.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl md:text-4xl font-syne font-bold">
                                                {plan.price}
                                            </span>
                                            <span className="text-xs font-mono text-muted-foreground">
                                                /month
                                            </span>
                                        </div>

                                        {/* subtle pricing hint */}
                                        <p className="text-[10px] text-muted-foreground font-mono mt-1">
                                            Starting price
                                        </p>

                                        {/* sub note */}
                                        {plan.subNote && (
                                            <p className="text-[11px] text-accent/80 mt-2 font-mono">
                                                {plan.subNote}
                                            </p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="mb-6 text-muted-foreground leading-relaxed">
                                        {plan.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-10 text-left">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div
                                                    className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center border transition-colors ${isShowingActive
                                                        ? "border-accent text-accent"
                                                        : "border-muted-foreground/30 text-muted-foreground/30"
                                                        }`}
                                                >
                                                    <Check size={10} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <a
                                        href={`/contact?plan=${plan.name}`}
                                        className={`w-full py-4 text-center rounded-none text-xs font-mono font-bold uppercase tracking-widest transition duration-300 
  ${isShowingActive
                                                ? "bg-accent text-black shadow-md hover:bg-accent/90"
                                                : "bg-white text-black hover:bg-white/90"
                                            }`}
                                    >
                                        {plan.cta}
                                    </a>
                                </div>
                            </motion.div>

                        );
                    }
                    )}

                </div>

                {/* Micro Trust */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-16 pt-8 border-t border-border/50 text-xs font-mono text-muted-foreground flex flex-wrap justify-center gap-x-12 gap-y-6"
                >
                    <span className="flex items-center gap-2">• Pause anytime</span>
                    <span className="flex items-center gap-2">• No contracts</span>
                    <span className="flex items-center gap-2">• Fast turnaround</span>
                    <span className="flex items-center gap-2">• Dedicated support</span>
                </motion.div>
            </div>
        </section>
    );
}