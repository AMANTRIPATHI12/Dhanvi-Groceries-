# KiranaKart MERN Template

A modern, mobile-first grocery website template for Indian kirana/supermarket stores delivering within 2–5 km.

## Included modules
- Home page: hero CTA (Order/Call/WhatsApp), search, categories, best sellers, weekly offer, trust indicators, reviews, timings, contact, map.
- Products page: category filter, price filter, sort, dynamic search, responsive cards with weight selection.
- Cart page: quantity controls, remove, delivery fee logic, checkout CTA.
- Checkout: customer details, delivery slot, COD/UPI/online payment option (Razorpay-ready extension point).
- Order confirmation: generated order ID, ETA, WhatsApp summary link.
- Customer account: lightweight register/profile, saved addresses, order history, repeat last order, monthly subscription notes/image URL.
- Admin panel: price update, stock toggle, offer text, order dashboard, sales summary, CSV export.
- Smart features: pincode delivery restriction, grocery list image upload endpoint, WhatsApp click-to-chat, multi-store scalable backend folder structure.

## Architecture
- `client/`: React + Vite SPA with reusable pages/context.
- `server/`: Node.js + Express modular API with routes/controllers/services and optional MongoDB connection.
- Designed to be extended into multi-store marketplace (add Store model, tenant-aware APIs, delivery zones).

## Run
```bash
npm install
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## SEO and performance notes
- Mobile-first layout and semantic headings.
- Meta description in `client/index.html`.
- Optimized minimalist UI and simple navigation for neighborhood users.
- Replace emoji placeholders with compressed WebP product images + lazy loading in production.
