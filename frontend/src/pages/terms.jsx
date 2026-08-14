import React from 'react';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const Section = ({ title, children, delay }) => (
  <Reveal delay={delay} className="mb-8">
    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
    <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">{children}</div>
  </Reveal>
);

const TermsAndConditions = () => {
  useDocumentTitle('Terms & Conditions');

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero */}
      <section
        className="text-white text-center py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #065f46 100%)' }}
      >
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Terms & Conditions</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">Last updated: 2026</p>
        </Reveal>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <Reveal className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 sm:p-12">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            By accessing or using the Al Kabir Developers website, you agree to the following terms.
            Please read them carefully before submitting any forms or making any payments through this site.
          </p>

          <Section title="1. Use of This Website" delay={0.05}>
            <p>
              This website provides information about Al Kabir Developers' housing and commercial
              projects, and allows you to make inquiries, request callbacks, submit payment or
              adjustment forms, and verify plot registrations. You agree to provide accurate
              information when using these forms.
            </p>
          </Section>

          <Section title="2. Property Information" delay={0.1}>
            <p>
              Project details, layouts, amenities, and pricing shown on this website are for general
              guidance and are subject to change. Final terms for any plot or unit are governed by
              the official booking/sale agreement signed with Al Kabir Developers, not by this website.
            </p>
          </Section>

          <Section title="3. Payments" delay={0.15}>
            <p>
              Payment submissions made through this website are requests for processing and do not
              constitute automatic confirmation. Please retain your payment receipts and confirm
              status through our office or the Payment Verification page.
            </p>
          </Section>

          <Section title="4. Intellectual Property" delay={0.2}>
            <p>
              All content on this website — including text, images, logos, and project renderings —
              is the property of Al Kabir Developers and may not be reproduced without permission.
            </p>
          </Section>

          <Section title="5. Limitation of Liability" delay={0.25}>
            <p>
              Al Kabir Developers is not liable for any loss arising from reliance on information
              published on this website. We make reasonable efforts to keep information accurate
              and up to date but cannot guarantee it is error-free at all times.
            </p>
          </Section>

          <Section title="6. Changes to These Terms" delay={0.3}>
            <p>
              We may update these Terms & Conditions from time to time. Continued use of this
              website after changes are posted constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="7. Contact Us" delay={0.35}>
            <p>
              For questions about these terms, reach out via our{' '}
              <a href="/contact" className="text-emerald-600 font-semibold hover:underline">Contact page</a>{' '}
              or call our toll-free line at 0800-11339.
            </p>
          </Section>
        </Reveal>
      </section>
    </div>
  );
};

export default TermsAndConditions;
