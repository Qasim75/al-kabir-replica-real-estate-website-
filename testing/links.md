# Project Testing Links

## Backend API Endpoints (Localhost:5000)

### Contact Form
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - View all submitted contacts

### Payments
- **POST** `/api/payments` - Submit payment request
- **GET** `/api/payments` - View all payment requests

### Adjustment Forms
- **POST** `/api/adjustment-forms` - Submit adjustment form
- **GET** `/api/adjustment-forms` - View all adjustment forms

### Verification
- **GET** `/api/verify/:regNo` - Verify registration number
- **POST** `/api/verify` - Create a verification record (for testing)

## MongoDB Connection
- **Connection String:** `mongodb+srv://<username>:<password>@cluster0.mongodb.net/alkabir_db?retryWrites=true&w=majority`
- **Database Name:** `alkabir_db`
- **Collections:** `contacts`, `payments`, `adjustmentforms`, `verifications`

## Frontend Pages
- **Home:** `/`
- **Contact:** `/contact`
- **Pay Online:** `/pay-online`
- **Adjustment Forms:** `/adjustment-forms`
- **Verification:** `/payment_verification`
