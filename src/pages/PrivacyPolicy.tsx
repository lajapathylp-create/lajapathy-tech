import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Navigation from '@/components/Navigation';

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Privacy Policy', href: '/privacy-policy' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO
        title="Privacy Policy"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
        url="https://lajapathytech.com/privacy-policy"
      />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <p className="text-muted-foreground mb-8">
              Last updated: April, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly when you:<br></br>
                  •	Fill out our contact form<br></br>
                  •	Communicate with us via email<br></br><br></br>

                  This may include:<br></br>
                  •	Name<br></br>
                  •	Email address<br></br>
                  •	Company name<br></br>
                  •	Message content<br></br>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to your inquiries</li>
                  <li>Provide design services and support</li>
                  <li>Communicate regarding your requests</li>
                  <li>Improve our services and website</li>
                </ul><br></br>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or rent your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  3.  Email Processing (Resend)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use a third-party email service provider, Resend, to process and deliver emails.
                  Your submitted data (name, email, message) may be securely processed through their infrastructure solely for communication purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  4. Data Storage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not store your personal data in a database.
                  Messages are delivered directly to our email inbox and used only for communication purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  5. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not share your personal information with third parties, except:<br></br>
                  •	When required by law<br></br>
                  •	To protect our legal rights<br></br>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  6. Cookies & Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use basic cookies to enhance user experience.
                  You can control cookie behavior through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  7. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  8. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to:<br /><br />
                  •	Request access to your data<br />
                  •	Request correction or deletion<br />
                  •	Opt out of communications<br /><br />

                  To do so, contact us below. <br />
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  9. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any privacy-related questions:<br />
                  <a
                    href="mailto:info@lajapathy.com"
                    className="text-accent hover:underline transition-colors"
                  >
                    info@lajapathy.com
                  </a>
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  10. Jurisdiction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This policy is governed by the laws of India.<br /><br />
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  11. GDPR (For European Economic Area Users)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR).<br /><br />

                  Legal Basis for Processing<br /><br />
                  We process your personal data based on:<br />
                  •	Consent – when you submit a contact form<br />
                  •	Legitimate interest – to respond to inquiries and provide services<br /><br />

                  ⸻<br /><br />

                  Your Rights Under GDPR<br /><br />
                  You have the right to:<br />
                  •	Access – Request copies of your personal data<br />
                  •	Rectification – Request correction of inaccurate data<br />
                  •	Erasure – Request deletion of your personal data<br />
                  •	Restriction – Request limitation of processing<br />
                  •	Data Portability – Request transfer of your data<br />
                  •	Objection – Object to processing based on legitimate interest<br /><br />

                  ⸻<br /><br />

                  Data Transfers<br /><br />
                  Your information may be processed outside the EEA (e.g., via third-party services like Resend).<br />
                  We ensure such transfers comply with applicable data protection laws.<br /><br />

                  ⸻<br /><br />

                  Data Retention<br /><br />
                  We retain your data only as long as necessary to respond to your inquiry and for legitimate business purposes.<br /><br />

                  ⸻<br /><br />

                  Withdraw Consent<br /><br />
                  You can withdraw your consent at any time by contacting us at:<br />
                  <a
                    href="mailto:info@lajapathy.com"
                    className="text-accent hover:underline transition-colors"
                  > info@lajapathy.com </a> <br /><br />

                  ⸻<br /><br />

                  Complaints<br /><br />
                  If you believe your data is being processed unlawfully, you have the right to lodge a complaint with your local data protection authority.<br /><br />
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
