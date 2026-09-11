# Technical Specification — One-Page Site "Web Developer for Furniture Website"

Version: 2026-09-12. Source: `REQUIREMENTS.txt` (job description from
Upwork).

**Job link (Upwork):** https://www.upwork.com/freelance-jobs/apply/Web-Developer-for-Furniture-Website_~022092571437501208185/

---

## 1. Goal and audience

**Goal:** a one-page landing page that sells the service "website
development for furniture businesses." A visitor should understand within
30 seconds: who you are, what you do, why for the furniture niche, and
leave a request.

**Target audience:**
- owners of furniture workshops, showrooms, online furniture stores;
- small furniture brands without a website or with an outdated one;
- furniture brands that need more than just a website — a sales tool
  (catalog, request form, chatbot consultant).

---

## 2. Positioning and USP

- **Who:** a web developer specializing specifically in websites for the
  furniture niche — knows how to present a product (wood texture,
  dimensions, configurations) and how to move a visitor to a request.
- **Main USP:** a proven approach, validated on a real project — the
  WoodFur case (landing page + AI chatbot consultant that answers product
  and pricing questions).
- **Second USP:** fast development via AI/vibecoding — a turnkey site in
  days, not months.
- **Tone of copy:** specific, to the point, with numbers and real
  examples. Not "we create unique solutions," but "a landing page with a
  catalog and a request form in 3–5 days."

---

## 3. One-page structure

1. Hero (headline + CTA)
2. Why furniture business — not like other websites
3. What's included in the site (capabilities)
4. Case study: WoodFur (proof)
5. AI chatbot consultant (separate highlight, with a sample dialogue)
6. How the work happens (process)
7. Packages and prices
8. Testimonials (if available)
9. Contact / request form

---

## 4. Content per section

### 4.1 Hero
- Headline: "A website for a furniture business that sells, not just
  shows a catalog."
- Subheadline: for whom (workshops, showrooms, online furniture stores).
- CTA button: "Discuss the project."
- Short visual proof: screenshot or mockup of the WoodFur site.

### 4.2 Why furniture business — not like other websites
- Needs large, sharp product photos (wood texture, hardware).
- Needs a clear way to show dimensions, materials, price — often with
  variants (wood species, size, color).
- The scenario "I want the same sofa but a different color" — the site
  should handle this without a call to a manager.

### 4.3 What's included in the site
- Responsive landing page or catalog site (3–7 pages as needed).
- Product cards with photo, price, materials.
- Request form / cost estimate.
- Telegram/WhatsApp integration for quick contact.
- Optional: AI chatbot consultant (see 4.5).

### 4.4 Case study: WoodFur
- What it is: a landing page for a solid-wood furniture brand, with an
  order form.
- Link: `https://woodfurnitur.netlify.app`
- Result/numbers — fill in if available (development time, increase in
  requests, etc.). Not confirmed yet — do not invent numbers.

### 4.5 AI chatbot consultant
- What it does: answers product questions, suggests specific items with
  prices (example: "Our Heritage pine table — $895"), keeps context across
  the conversation.
- Show a real dialogue screenshot (already available: `ChatBot_Screen.png`
  from the GitHub profile — confirm whether to reuse this same screenshot
  here or make a new one for this niche).
- Value to the client: the bot answers 24/7, reduces manager workload,
  moves the client to a request without waiting for a human reply.

### 4.6 How the work happens (process)
1. Brief — which products, what style, what the site must do.
2. Draft — first working version within 1–2 days.
3. Revisions — 2 rounds, with concrete deadlines.
4. Delivery — working site, instructions for updating the catalog.

### 4.7 Packages and prices

| Package | What's included | Timeline | Price |
|---|---|---|---|
| Landing page | 1 page, request form | 1 day | €30 |
| Catalog site | 3–7 pages, product cards | 3 days | €200 |
| Site + AI chatbot | Catalog plus consultant bot | 1 day | €100 |

### 4.8 Testimonials
Real client quotes, if available. If none — hide this section for now.

### 4.9 Contact / request form
- Form: name, contact, which product/business.
- Direct links: Telegram, email (from the current profile:
  `andrey.hamstering@gmail.com`, `t.me/AndreyHamstering`).

---

## 5. Functional requirements

- Request form sending to email and/or Telegram.
- CTA buttons on every content block.
- WoodFur case block — image/mockup, clickable link to the live site.
- Chatbot demo block — at minimum a static dialogue screenshot; an
  embedded interactive widget for demonstration if possible.

---

## 6. Design requirements

- "Furniture / wood" theme: warm, natural tones (wood, beige, charcoal),
  no cold IT styling.
- Large photos of products/interiors as the visual anchor.
- Mobile version is mandatory.
- Minimal text per screen, emphasis on photos and specifics (timelines,
  numbers).

---

## 7. Performance and SEO

- Homepage load time — up to 2 seconds on mobile internet.
- Meta tags for queries like "furniture store website," "furniture
  workshop web development" (refine the list by region and audience
  language).

---

## 8. Technology

- Frontend: HTML/CSS/JS or React — depending on catalog complexity.
- Hosting: Netlify/Vercel (as in the WoodFur case).
- Forms: Google Apps Script (as in the WoodFur case) or a separate form
  service.
- AI chatbot: same approach as in the WoodFur case.

---

## 9. Development stages

| Stage | Content | Timeline |
|---|---|---|
| 1 | Brief, structure, copy | 1 day |
| 2 | Design draft for approval | 1 day |
| 3 | Site build | 1–2 days |
| 4 | Revisions (2 rounds) | 1 day |
| 5 | Publish and review | 0.5 day |

---

## 10. Acceptance criteria

- All sections from the sitemap (section 3) are filled with real content,
  no placeholders or invented numbers.
- The request form actually sends data (verified with a test request).
- The WoodFur case is presented with a working link.
- The AI chatbot section contains a real or clearly marked demo example.
- The site opens correctly on mobile and desktop.

---

## 11. Open questions (still need your answers)

1. Domain and hosting for this landing page — your own domain, or a
   subdomain of `andrey.fi`?
2. Name/brand for this service, or does the site run under "Andrey
   Naralchuk"?
3. Are there other cases besides WoodFur for this niche, or just this one
   for now?
4. Do you need a separate chatbot demo specifically for the furniture
   niche, or reuse the existing WoodFur screenshot?
5. Site languages: English only, or also Russian/Finnish?
6. Do you already have copy, photos, or design references — send them if
   so; otherwise the copy and structure above are used as a draft.
