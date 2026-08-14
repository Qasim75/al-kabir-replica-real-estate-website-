import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/PageLoader';
import PageTransition from './components/motion/PageTransition';
import ScrollProgressBar from './components/motion/ScrollProgressBar';
import BackToTop from './components/motion/BackToTop';
import { AdminAuthProvider } from './utils/AdminAuthContext';
import { ThemeProvider } from './utils/ThemeContext';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';

// Homepage loads eagerly for the fastest first paint; every other route is
// code-split so visitors only download the page they actually navigate to.
import Alkabir from './pages/alkabir';

const About = lazy(() => import('./pages/about'));
const Alkabirdowntown = lazy(() => import('./pages/alkabirdowntown'));
const Alkabirorchad = lazy(() => import('./pages/alkabirorchad'));
const Alkabirtownphase1 = lazy(() => import('./pages/alkabirtownphase1'));
const Alkabirtownphase2 = lazy(() => import('./pages/alkabirtownphase2'));
const Alkareemcity = lazy(() => import('./pages/alkareemcity'));
const Amenities = lazy(() => import('./pages/amenities'));
const Businessdistrict = lazy(() => import('./pages/businessdistrict'));
const History = lazy(() => import('./pages/history'));
const Jumairahpark = lazy(() => import('./pages/Jumairahpark'));
const Kingstownphase1 = lazy(() => import('./pages/kingstownphase1'));
const Kingstownphase2 = lazy(() => import('./pages/kingstownphase2'));
const LegalApprovals = lazy(() => import('./pages/legal-approvals'));
const Management = lazy(() => import('./pages/management'));
const Maryamtown = lazy(() => import('./pages/maryamtown'));
const Safarivilla = lazy(() => import('./pages/safarivilla'));
const Services = lazy(() => import('./pages/services'));
const Thelifeenclave = lazy(() => import('./pages/thelifeenclave'));
const Theoasisbyalkabir = lazy(() => import('./pages/theoasisbyalkabir'));
const PaymentVerification = lazy(() => import('./pages/payment_verification'));
const Contact = lazy(() => import('./pages/contact'));
const AdjustmentForms = lazy(() => import('./pages/adjustment-forms'));
const PayOnline = lazy(() => import('./pages/pay-online'));
const PaymentGuide = lazy(() => import('./pages/payment-guide'));
const Register = lazy(() => import('./pages/register'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy'));
const Terms = lazy(() => import('./pages/terms'));
const Callback = lazy(() => import('./pages/callback'));
const NotFound = lazy(() => import('./pages/not-found'));

// Admin panel
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminOverview = lazy(() => import('./pages/admin/AdminOverview'));
const AdminContacts = lazy(() => import('./pages/admin/AdminContacts'));
const AdminPayments = lazy(() => import('./pages/admin/AdminPayments'));
const AdminAdjustmentForms = lazy(() => import('./pages/admin/AdminAdjustmentForms'));
const AdminVerifications = lazy(() => import('./pages/admin/AdminVerifications'));
const AdminNewsletter = lazy(() => import('./pages/admin/AdminNewsletter'));
const AdminCallbacks = lazy(() => import('./pages/admin/AdminCallbacks'));
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'));

const PublicSite = () => (
  <div className="App bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
    <ScrollProgressBar />
    <Navbar />
    <main>
      <Suspense fallback={<PageLoader />}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Alkabir />} />
            <Route path="/about" element={<About />} />
            <Route path="/alkabirdowntown" element={<Alkabirdowntown />} />
            <Route path="/alkabirorchad" element={<Alkabirorchad />} />
            <Route path="/alkabirtownphase1" element={<Alkabirtownphase1 />} />
            <Route path="/alkabirtownphase2" element={<Alkabirtownphase2 />} />
            <Route path="/alkareemcity" element={<Alkareemcity />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/businessdistrict" element={<Businessdistrict />} />
            <Route path="/history" element={<History />} />
            <Route path="/jumairahpark" element={<Jumairahpark />} />
            <Route path="/kingstownphase1" element={<Kingstownphase1 />} />
            <Route path="/kingstownphase2" element={<Kingstownphase2 />} />
            <Route path="/legal-approvals" element={<LegalApprovals />} />
            <Route path="/management" element={<Management />} />
            <Route path="/maryamtown" element={<Maryamtown />} />
            <Route path="/safarivilla" element={<Safarivilla />} />
            <Route path="/services" element={<Services />} />
            <Route path="/thelifeenclave" element={<Thelifeenclave />} />
            <Route path="/theoasisbyalkabir" element={<Theoasisbyalkabir />} />
            <Route path="/payment_verification" element={<PaymentVerification />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adjustment-forms" element={<AdjustmentForms />} />
            <Route path="/pay-online" element={<PayOnline />} />
            <Route path="/payment-guide" element={<PaymentGuide />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </main>
    <Footer />
    <BackToTop />
  </div>
);

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <ThemeProvider>
        <AdminAuthProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Admin panel — separate layout, no public Navbar/Footer */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/*"
                element={
                  <AdminProtectedRoute>
                    <AdminLayout>
                      <Routes>
                        <Route index element={<AdminOverview />} />
                        <Route path="contacts" element={<AdminContacts />} />
                        <Route path="payments" element={<AdminPayments />} />
                        <Route path="adjustment-forms" element={<AdminAdjustmentForms />} />
                        <Route path="verifications" element={<AdminVerifications />} />
                        <Route path="newsletter" element={<AdminNewsletter />} />
                        <Route path="callbacks" element={<AdminCallbacks />} />
                        <Route path="settings" element={<AdminSettings />} />
                      </Routes>
                    </AdminLayout>
                  </AdminProtectedRoute>
                }
              />

              {/* Public website */}
              <Route path="/*" element={<PublicSite />} />
            </Routes>
          </Suspense>
        </AdminAuthProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
