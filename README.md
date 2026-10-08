# 🐮🚀 LittleCow — littlecow.space

Static bilingual (ES/EN) PWA landing for LittleCow: group crowdfunding ("hacer una vaquita") for graduation trips, gifts, teams and causes.

## Structure

```
index.html              Single page (all copy uses data-i18n keys)
styles.css              Design system (cream / purple / deep green / lime)
app.js                  i18n, calculator, member list, PWA install, scroll reveals
sw.js                   Service worker (network-first, offline fallback)
manifest.webmanifest    PWA manifest with icons + screenshots
404.html                "Lost in space" page
CNAME                   littlecow.space
.nojekyll               Skip Jekyll processing on GitHub Pages
assets/logo.svg         Astronaut cow logo
assets/icons/           192/512/maskable/apple-touch icons
assets/screenshots/     Desktop + mobile screenshots (ES/EN)
assets/og-image.png     Social share image
```

## Deploy on GitHub Pages

1. Push everything to the repo root (branch `main`).
2. Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.
3. Custom domain: `littlecow.space` (the `CNAME` file already sets it). Tick **Enforce HTTPS**.
4. DNS at your registrar:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<your-user>.github.io`

The service worker only registers over HTTPS, so test install on the live domain.

## Languages

Language is auto-detected from the browser, toggled with ES/EN and remembered in `localStorage`. Add or edit copy in the `I18N` object in `app.js`. Amounts are formatted with `Intl.NumberFormat` (USD for now; change `currency` in `money()`).

## Waitlist

The form currently stores emails only in the visitor's browser (placeholder). Before launch, point it to a real endpoint (Formspree, Supabase, Google Apps Script, etc.) inside the `submit` handler in `app.js`.

## Recommended AI features (roadmap)

| Feature | What it does | Why it matters |
|---|---|---|
| Receipt reader | Vision model reads a bank-transfer screenshot → amount, date, payer; auto-matches to a member | Biggest pain in AR group funds: manual reconciliation of transferencias |
| Goal planner | One-sentence description → realistic budget breakdown + installment plan | Removes the "how much do we need?" friction at creation |
| Friendly nudges | Generates personalized WhatsApp reminders in the group's tone | Nobody wants to be the debt collector |
| Arrival forecast | Predicts if the goal will be met by the deadline from contribution pace, suggests tweaks | Early warning instead of last-minute panic |
| Campaign story | Writes the description + share image, ES/EN | Better sharing → more contributors |

Suggested stack when it goes dynamic: Supabase (auth + DB), Mercado Pago / Stripe for payments, and the Claude API behind a small serverless function (never call the AI API directly from the static site — it would expose the key).
