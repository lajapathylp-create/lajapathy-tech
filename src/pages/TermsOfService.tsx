import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Navigation from '@/components/Navigation';

const TermsOfService = () => {
  const breadcrumbItems = [
    { label: 'Terms of Service', href: '/terms-of-service' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <SEO
        title="Terms of Service"
        description="Terms and conditions for using Lajapathy design services."
        url="https://lajapathy.com/terms-of-service"
      />

      <main className="min-h-screen pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Terms of Service
            </h1>

            <p className="text-muted-foreground mb-8">
              Last updated: April, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">

              <section>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms.
                  If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2>2. Subscription-Based Services</h2>
                <p>
                  Lajapathy provides design services through a subscription model.
                  Clients can submit design requests which are handled based on plan priority and queue order.
                </p>
              </section>

              <section>
                <h2>3. Unlimited Requests (Queue System)</h2>
                <ul>
                  <li>You may submit unlimited design requests</li>
                  <li>Only one active task is worked on at a time (unless specified otherwise)</li>
                  <li>Requests are processed sequentially in a queue</li>
                  <li>You may reorder or reprioritize tasks at any time</li>
                </ul>
              </section>

              <section>
                <h2>4. Fair Usage Policy</h2>
                <p>
                  Our service is designed for continuous, reasonable usage.
                  Excessive or abusive usage that impacts service quality may be limited
                  to ensure fair access for all clients.
                </p>
              </section>

              <section>
                <h2>5. Service Level Agreement (SLA)</h2>
                <ul>
                  <li>Typical turnaround time: 24–72 hours per task</li>
                  <li>Complex tasks may require additional time</li>
                  <li>Response time: within 24 hours (business days)</li>
                  <li>Delays due to client feedback or missing inputs are excluded</li>
                </ul>
              </section>

              <section>
                <h2>6. Plan Tiers</h2>
                <ul>
                  <li><strong>Starter:</strong> One active request, standard turnaround</li>
                  <li><strong>Growth:</strong> Priority queue with faster turnaround</li>
                  <li><strong>Scale:</strong> Highest priority and multiple active tasks (if agreed)</li>
                </ul>
              </section>

              <section>
                <h2>7. Payments & Billing</h2>
                <ul>
                  <li>Subscriptions are billed monthly in advance</li>
                  <li>No refunds once a billing cycle begins</li>
                  <li>You may cancel anytime (effective next billing cycle)</li>
                  <li>Services may pause for unpaid invoices</li>
                </ul>
              </section>

              <section>
                <h2>8. Revisions</h2>
                <p>
                  Revisions are included within the scope of each request.
                  New or significantly different requests will be treated as new tasks.
                </p>
              </section>

              <section>
                <h2>9. Intellectual Property</h2>
                <p>
                  All work remains our property until full payment is received.
                  Upon payment, ownership transfers to the client unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2>10. Confidentiality (NDA)</h2>
                <p>
                  We treat all client data and materials as confidential.
                  We will not disclose any sensitive information without consent,
                  except where required by law.
                </p>
              </section>

              <section>
                <h2>11. Third-Party Services</h2>
                <p>
                  We may use third-party tools (such as email providers like Resend).
                  We are not responsible for downtime or failures caused by these services.
                </p>
              </section>

              <section>
                <h2>12. Limitation of Liability</h2>
                <p>
                  We are not liable for indirect or consequential damages.
                  Our total liability is limited to the amount paid for services.
                </p>
              </section>

              <section>
                <h2>13. Termination</h2>
                <p>
                  Either party may terminate the subscription.
                  Services continue until the end of the billing period.
                </p>
              </section>

              <section>
                <h2>14. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of India.
                </p>
              </section>

              <section>
                <h2>15. Contact</h2>
                <p>
                  For any questions:
                  <br />
                  <a href="mailto:info@lajapathy.com" className="text-accent hover:underline">
                    info@lajapathy.com
                  </a>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;