# Changes in this revision

## 🐛 Critical bugs fixed

- **Backend wouldn't start** — `backend/index.js` had invalid syntax (stray backslashes
  before backticks in template literals). Rewritten and verified to run.
- **Double navbar/footer on 10 project pages** — `ProjectPageTemplate.jsx` (used by
  Maryam Town, Kings Town 2, Downtown, Jumairah Park, Al-Kareem City, Safari Villa,
  Business District, Life Enclave, Orchard, and Oasis) was rendering its own
  `<Navbar />`/`<Footer />` on top of the ones already rendered globally in `App.jsx`.
- **Duplicate navbar on the verification page** — same root cause, fixed.
- **7 broken hero background images** — contact, adjustment-forms, pay-online,
  payment-guide, payment-verification, and Kings Town Phase 1 all referenced image
  files that don't exist in `public/assets`. Replaced with a themed gradient.
- **Duplicate CSS key** — `payment_verification.jsx` had two `margin` keys in the
  same inline style object (the first was silently discarded).
- **Broken navbar links** — `/register`, `/privacy-policy`, and `/callback` were
  linked in the navbar/footer but had no matching page or route. Built all three.
- **No 404 page** — any unmatched URL rendered a blank page. Added a proper
  Not Found page wired as a catch-all route.

## 🔒 Security

- **Public data leak fixed** — `GET /api/contact`, `/api/payments`, and
  `/api/adjustment-forms` returned *all* customer submissions to anyone who
  visited the URL, no login required. Now protected by an `x-api-key` header
  checked against `ADMIN_API_KEY` in `.env`.
- **Input validation added** on every form endpoint (name/email/phone/amount
  checks) using `express-validator`, so malformed or empty submissions are
  rejected with a clear error instead of hitting the database.
- **Rate limiting added** on all `/api` routes to reduce spam/abuse.
- **`.gitignore` added** for both `frontend` and `backend` (the backend had
  none at all — `.env` with real secrets could have been committed).

## ⚙️ Backend

- Centralized error handling (`middleware/errorHandler.js`) — consistent JSON
  error responses, Mongoose validation/duplicate-key/cast errors formatted
  cleanly instead of leaking stack traces.
- New `Newsletter` and `Callback` models + routes to support the previously
  broken "Register for News" and "Request a Callback" pages.
- `.env.example` added for easy setup.

## 🎨 Frontend

- **Hardcoded API URLs removed** — 4 forms (`contact`, `pay-online`,
  `adjustment-forms`, `payment_verification`) called `http://localhost:5000`
  directly, which would silently fail once deployed anywhere else. Now routed
  through a single `utils/api.js` axios instance configured via
  `VITE_API_URL`, so the same build works in dev and production.
- **New pages**: Register for News, Privacy Policy, Request a Callback, 404 Not Found.
- **Scroll-to-top on navigation** — React Router does not do this by default;
  without it, clicking a link mid-scroll leaves you mid-page on the new route.
- **React error boundary** — an unexpected component error now shows a
  friendly recovery screen instead of a blank white page.
- **Per-page document titles** (`useDocumentTitle` hook) for better browser
  tabs/history and basic SEO.
- **Branding & SEO**: proper page title, favicon, meta description, keywords,
  and Open Graph/Twitter card tags in `index.html` (was the generic Vite default).
- **Route-based code splitting** — all pages except the homepage are now
  lazy-loaded (`React.lazy` + `Suspense`), cutting the initial JS bundle from
  ~580 KB to ~285 KB so the site loads faster.
- **Lint cleanup** — added `eslint-plugin-react` (JSX usages like
  `<motion.div>` were being flagged as unused imports without it), removed
  genuinely dead state, fixed remaining lint errors to zero.

## 🛠️ Admin Panel (new)

- Full login-protected admin dashboard at `/admin` — JWT-based auth (`Admin`
  model with bcrypt-hashed passwords, 7-day tokens by default).
- **Overview** page with live counts across all six submission types.
- **List + delete** views for Contact Messages, Payments, Adjustment Forms,
  and Newsletter subscribers.
- **Callback Requests** view with an inline status dropdown (pending →
  contacted → closed) in addition to delete.
- **Verification Records** view with delete, plus an **Add Record** form —
  this is what actually populates the public Payment Verification page's
  lookup, which previously had no way to receive data at all.
- **Account Settings** page to change the admin password.
- `npm run seed:admin -- <username> <password>` (backend) creates or resets
  the first login — there's intentionally no public signup endpoint.
- The old `x-api-key` protection still works as an alternative for
  scripted/API access; the admin panel itself uses proper JWT login sessions.

## 🌗 Dark / Light Mode Toggle (new)

- Animated sun/moon toggle switch, present on **every page** — in the navbar
  (desktop and mobile) for the public site, and in the sidebar for the admin
  panel.
- Preference is saved to the browser (`localStorage`) and restored on the
  next visit; if it's a first-time visit, it follows the visitor's OS/browser
  dark-mode setting automatically.
- No flash of the wrong theme on page load — the theme is applied by a small
  inline script before React even mounts.
- Full dark styling applied across: Navbar, Footer, Homepage, About, the
  shared project template (10 project pages), Services, Kings Town Phase I,
  Al Kabir Town Phase I/II, Amenities, History, Legal Approvals, Management,
  Terms, Privacy Policy, Register, Callback, and the entire Admin Panel
  (sidebar, tables, forms, cards).
- The five pages built with raw inline styles (Contact, Adjustment Forms, Pay
  Online, Payment Guide, Payment Verification) get dark styling too, via
  targeted CSS overrides, since inline styles can't take Tailwind's `dark:`
  classes directly.

## 🎬 Site-Wide Animation & Motion Pass (new)

**Global (applies to every page automatically):**
- Smooth fade/rise page transitions on every route change
- Animated top scroll-progress bar
- Animated "back to top" button with spring physics
- Themed smooth scroll + custom scrollbar

**Reusable animation components built:** `Reveal` (scroll-triggered fade/slide-in),
`StaggerContainer`/`StaggerItem` (grids animate in one card at a time),
`AnimatedCounter` (numbers count up when scrolled into view).

**Heavily animated:**
- Navbar (slide-down entrance, animated mobile menu, logo hover) and Footer
  (staggered columns, bouncy social icons) — every page benefits since these
  are global.
- Homepage — cinematic hero zoom, staggered hero text, count-up stats,
  staggered project cards with hover lift.
- The shared project template used by **10 project pages** (Downtown, Orchard,
  Al-Kareem City, Business District, Jumairah Park, Kings Town II, Maryam Town,
  Safari Villa, Life Enclave, Oasis) — parallax hero, scroll reveals, staggered
  galleries/amenities, animated CTA background blobs.
- Contact, Adjustment Forms, Pay Online, Payment Guide, Payment Verification,
  Register, Callback, Privacy Policy, Terms, and 404 pages — all previously had
  zero animation, now have entrance/scroll reveals and tactile button feedback.
- About, Al Kabir Town Phase I, Kings Town Phase I, Services — enhanced with
  staggered grids and real transitions.

**Bug found & fixed while wiring this up:** `services.jsx` used Tailwind
`animate-in fade-in slide-in-from-bottom-4` classes to animate tab switches,
but the `tailwindcss-animate` plugin those classes depend on was never
installed — so tab switching had **zero animation** despite looking like it
should. Replaced with real Framer Motion transitions.

**Other real bugs fixed along the way:**
- Navbar's "The Oasis" link pointed to a nonexistent `/theoasis` route
  instead of `/theoasisbyalkabir`.
- Footer linked to `/terms`, which had no page at all — built it.
- Homepage: 3 project cards (The Oasis Residence, Maryam Town, Safari Villas)
  linked to the *wrong* project pages (e.g. "Maryam Town" opened Al-Kareem
  City). Fixed all three.
- Homepage's "View All Projects" button linked back to the homepage itself.
- The two CTA buttons ("Contact Sales" / "Location Map") on all 10
  project-template pages did nothing — now wired to the Contact page and
  Google Maps respectively.

## 📌 Known follow-ups (not built — scoped out this round)

- Visual/content redesign was scoped to bug-level and structural fixes;
  a full page-by-page visual redesign of all 20+ project pages was not
  attempted in this pass.
- No password-reset-by-email flow for the admin account (password changes
  require knowing the current password, or re-running the seed script).
