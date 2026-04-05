import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorkSection from '@/components/sections/WorkSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BackgroundSystem from '@/components/BackgroundSystem';
import PricingSection from "@/components/sections/PricingSection";
import { OrganizationSchema, WebsiteSchema, ProfessionalServiceSchema } from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEO
        title="Unlimited Design Subscription Service for Startups & Teams"
        description="Unlimited UI UX design, product design, and web design subscription. Fast turnaround, no hiring, no delays. Built for startups and growing teams."
        url="https://lajapathytech.com"
      />

      <OrganizationSchema />
      <ProfessionalServiceSchema />

      <CustomCursor />

      <BackgroundSystem>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navigation />

          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PricingSection />
            <WorkSection />
            <ProcessSection />
            <TestimonialsSection />
            <CTASection />
          </main>

          <Footer />
        </motion.div>
      </BackgroundSystem>
    </div>
  );
};

export default Index;
