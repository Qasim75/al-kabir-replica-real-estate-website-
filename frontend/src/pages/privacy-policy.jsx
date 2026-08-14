import React from 'react';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const Section = ({ title, children, delay }) => (
  <Reveal delay={delay} className="mb-8">
    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
    <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">{children}</div>
  </Reveal>
);

const PrivacyPolicy = () => {
  useDocumentTitle('Privacy Policy');

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero */}
      <section
        className="text-white text-center py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #065f46 100%)' }}
      >
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">Last updated: 2026</p>
        </Reveal>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <Reveal className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 sm:p-12">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Al Kabir Developers ("we", "us", "our") respects your privacy. This policy explains what
            information we collect through this website, how we use it, and the choices you have.
          </p>

          <Section title="1. Information We Collect" delay={0.05}>
            <p>
              When you use our contact form, request a callback, submit a payment or adjustment form,
              or register for news, we collect the details you provide — such as your name, email
              address, phone number, project and plot information, and any message you send us.
            </p>
          </Section>

          <Section title="2. How We Use Your Information" delay={0.1}>
            <p>
              We use this information to respond to your inquiries, process payment and adjustment
              form requests, verify plot registrations, send project updates you've subscribed to,
              and improve our services. We do not sell your personal information to third parties.
            </p>
          </Section>

          <Section title="3. Data Storage & Security" delay={0.15}>
            <p>
              Submitted information is stored securely and access to it is restricted to authorized
              Al Kabir Developers staff. We take reasonable technical measures to protect your data
              from unauthorized access.
            </p>
          </Section>

          <Section title="4. Cookies" delay={0.2}>
            <p>
              This website may use basic cookies to improve browsing experience. You can disable
              cookies through your browser settings at any time.
            </p>
          </Section>

          <Section title="5. Your Choices" delay={0.25}>
            <p>
              You may unsubscribe from our newsletter at any time, and you can request that we
              update or delete the information you've submitted by contacting us directly.
            </p>
          </Section>

          <Section title="6. Contact Us" delay={0.3}>
            <p>
              If you have questions about this Privacy Policy or how your data is handled, reach out
              via our <a href="/contact" className="text-emerald-600 font-semibold hover:underline">Contact page</a>{' '}
              or call our toll-free line at 0800-11339.
            </p>
          </Section>
        </Reveal>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
