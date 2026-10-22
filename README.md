# SILLAGE — Scent & Time

A responsive editorial storefront for a house that sells original "inspired-by" fragrances and homage timepieces. Everything runs in the browser with no build step or dependencies.

## Run it

Open `index.html` in a browser. For the best experience (and to avoid local-file restrictions), serve the folder with any static server:

```powershell
# If you have Node installed:
npx serve .

# Or with Python:
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What's included

- Editorial hero, collection, category edits, philosophy, reviews, journal and newsletter sections
- Eight products with original names, copy, pricing and photography
- Category filters and price/name sorting
- Live search (`/` shortcut) across product names, notes and details
- Quick-view modal with size selection and product details
- Persistent cart and wishlist via `localStorage`
- Quantity controls, free-shipping progress, and a demo checkout flow
- Responsive mobile navigation and layouts
- Reduced-motion support and accessible names/focus states

## Customize

- **Branding and copy:** `index.html` and `styles.css` (colors and type live at the top of the CSS in `:root`)
- **Products and prices:** the `products` array at the top of `app.js`
- **Images:** replace files in `assets/` and update the matching `image` paths in `app.js` or `index.html`
- **Checkout:** the current checkout is a front-end demo. Connect Shopify, Stripe, Snipcart or another commerce backend to accept real orders.

## Notes

The storefront uses an original brand identity, product names and imagery. It is positioned as original interpretations and original watch designs, not counterfeit goods. The footer includes an affiliation disclaimer.

Photography is sourced from Unsplash and bundled locally for this demo.
