# Al Kabir Developers — Website

Full-stack real estate website: React (Vite + Tailwind) frontend and an Express/MongoDB backend.

## Project Structure

```
Al-Kabir-developers.replica/
├── frontend/   React + Vite + Tailwind CSS site
├── backend/    Express + MongoDB API
└── testing/    Manual QA notes / link checklist
```

## Quick Start

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # then edit MONGO_URI and ADMIN_API_KEY
npm run dev             # or: npm start
```

The API runs on `http://localhost:5000` by default. Set `MONGO_URI` to your MongoDB
connection string (local or Atlas), and set `ADMIN_API_KEY` to a private value —
this key is required to read submitted form data (see "Internal data routes" below).

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env   # points VITE_API_URL at your backend
npm run dev
```

The site runs on `http://localhost:5173` by default.

## Environment Variables

**backend/.env**
| Variable | Description |
|---|---|
| `PORT` | Port the API listens on (default `5000`) |
| `MONGO_URI` | MongoDB connection string |
| `NODE_ENV` | `development` or `production` |
| `CORS_ORIGIN` | Comma-separated list of allowed frontend origins in production |
| `ADMIN_API_KEY` | Secret required (as `x-api-key` header) to read submitted form data |

**frontend/.env**
| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL of the backend API, e.g. `http://localhost:5000/api` |

## API Overview

All form-submission endpoints are public (`POST`). All data-listing endpoints
require authentication — either an admin login (JWT) or an `x-api-key` header
matching `ADMIN_API_KEY` — since they return customer-submitted personal information.

| Endpoint | Method | Auth | Purpose |
|---|---|---|---|
| `/api/health` | GET | — | Health check |
| `/api/contact` | POST | — | Submit contact form |
| `/api/contact` | GET | 🔒 | List contact submissions |
| `/api/contact/:id` | DELETE | 🔒 | Delete a contact submission |
| `/api/payments` | POST | — | Submit online payment details |
| `/api/payments` | GET | 🔒 | List payment submissions |
| `/api/payments/:id` | DELETE | 🔒 | Delete a payment submission |
| `/api/adjustment-forms` | POST | — | Submit an adjustment form |
| `/api/adjustment-forms` | GET | 🔒 | List adjustment forms |
| `/api/adjustment-forms/:id` | DELETE | 🔒 | Delete an adjustment form |
| `/api/verify/:regNo` | GET | — | Public lookup by registration number |
| `/api/verify` | GET | 🔒 | List all verification records |
| `/api/verify` | POST | 🔒 | Create a verification record |
| `/api/verify/record/:id` | DELETE | 🔒 | Delete a verification record |
| `/api/newsletter` | POST | — | Register for news / newsletter signup |
| `/api/newsletter` | GET | 🔒 | List subscribers |
| `/api/newsletter/:id` | DELETE | 🔒 | Delete a subscriber |
| `/api/callback` | POST | — | Request a callback |
| `/api/callback` | GET | 🔒 | List callback requests |
| `/api/callback/:id` | PATCH | 🔒 | Update a callback request's status |
| `/api/callback/:id` | DELETE | 🔒 | Delete a callback request |
| `/api/admin/login` | POST | — | Admin login, returns a JWT |
| `/api/admin/me` | GET | 🔒 | Current logged-in admin |
| `/api/admin/change-password` | PUT | 🔒 | Change the admin password |
| `/api/admin/stats` | GET | 🔒 | Dashboard summary counts |

## Admin Panel

The admin dashboard lives at **`/admin`** on the frontend (e.g.
`http://localhost:5173/admin`) and lets you view, delete, and manage everything
submitted through the site's forms — contact messages, payments, adjustment
forms, verification records, newsletter subscribers, and callback requests.
It is not linked from the public navigation; visit the URL directly.

**First-time setup — create your login:**

```bash
cd backend
npm run seed:admin -- youradminname yourpassword
```

(Or set `ADMIN_SEED_USERNAME` / `ADMIN_SEED_PASSWORD` in `backend/.env` and run
`npm run seed:admin` with no arguments. Running the command again for an
existing username resets that account's password.)

Then go to `/admin/login`, sign in, and you're in. You can change your
password any time from **Account Settings** inside the dashboard.

> Note: `/api/verify/:regNo` (the public lookup customers use on the Payment
> Verification page) only returns results for records you've added — add a
> record from **Admin → Verifications → Add Record** for each plot/customer
> you want customers to be able to verify.


## Notes

- See `CHANGES.md` for a full list of what was fixed, secured, and added in this revision.
- `frontend/README.md` has additional frontend-specific notes from the original scaffold.
