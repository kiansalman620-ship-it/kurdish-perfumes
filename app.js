/* =========================================================
   SILLAGE — storefront interactions
   ========================================================= */

const products = [
  {
    id: "ambre-nuit",
    name: "Ambre Nuit",
    number: "No. 01",
    category: "fragrance",
    typeLine: "No. 01 · Eau de parfum · 50 ml",
    type: "Eau de parfum",
    price: 58,
    badge: "Bestseller",
    image: "assets/perfume-01.jpg",
    alt: "Ambre Nuit eau de parfum bottle in warm light",
    desc: "An amber glow after dark. Warm resins, soft vanilla and cedarwood, composed to linger close to the skin.",
    notes: ["Amber", "Vanilla", "Cedarwood"],
    notesLabel: "Notes",
    details: "50 ml eau de parfum. A vegan, cruelty-free formula blended and bottled in Grasse, France. Alcohol denat., parfum, aqua.",
    reviews: "212 reviews",
    rating: "4.9",
    defaultVariant: 1,
    variantLabel: "Size",
    variants: [
      { label: "30 ml", price: 42 },
      { label: "50 ml", price: 58 },
      { label: "100 ml", price: 92 }
    ]
  },
  {
    id: "fig-blanc",
    name: "Fig Blanc",
    number: "No. 07",
    category: "fragrance",
    typeLine: "No. 07 · Eau de parfum · 50 ml",
    type: "Eau de parfum",
    price: 54,
    badge: "New",
    image: "assets/perfume-02.jpg",
    alt: "Fig Blanc eau de parfum bottle with a clean backdrop",
    desc: "Green fig leaf and bright bergamot over a clean bed of white musk. A warm-weather signature that never shouts.",
    notes: ["Fig leaf", "Bergamot", "White musk"],
    notesLabel: "Notes",
    details: "50 ml eau de parfum. A vegan, cruelty-free formula blended and bottled in Grasse, France. Alcohol denat., parfum, aqua.",
    reviews: "96 reviews",
    rating: "4.8",
    defaultVariant: 1,
    variantLabel: "Size",
    variants: [
      { label: "30 ml", price: 40 },
      { label: "50 ml", price: 54 },
      { label: "100 ml", price: 84 }
    ]
  },
  {
    id: "oud-mineral",
    name: "Oud Minéral",
    number: "No. 13",
    category: "fragrance",
    typeLine: "No. 13 · Eau de parfum · 50 ml",
    type: "Eau de parfum",
    price: 64,
    badge: "Limited",
    image: "assets/perfume-03.jpg",
    alt: "Oud Minéral eau de parfum bottle on a textured surface",
    desc: "Smoked oud, saffron and mineral vetiver. Dry, magnetic and quietly luxurious — for evenings that go late.",
    notes: ["Oud", "Saffron", "Vetiver"],
    notesLabel: "Notes",
    details: "50 ml eau de parfum. A vegan, cruelty-free formula blended and bottled in Grasse, France. Alcohol denat., parfum, aqua.",
    reviews: "74 reviews",
    rating: "4.9",
    defaultVariant: 1,
    variantLabel: "Size",
    variants: [
      { label: "30 ml", price: 48 },
      { label: "50 ml", price: 64 },
      { label: "100 ml", price: 104 }
    ]
  },
  {
    id: "neroli-soleil",
    name: "Neroli Soleil",
    number: "No. 21",
    category: "fragrance",
    typeLine: "No. 21 · Eau de parfum · 50 ml",
    type: "Eau de parfum",
    price: 52,
    badge: "",
    image: "assets/perfume-04.jpg",
    alt: "Neroli Soleil eau de parfum bottle in sunlight",
    desc: "Sunlit neroli, bitter citrus and orange blossom. The feeling of a linen shirt on a hot afternoon.",
    notes: ["Neroli", "Sun citrus", "Orange blossom"],
    notesLabel: "Notes",
    details: "50 ml eau de parfum. A vegan, cruelty-free formula blended and bottled in Grasse, France. Alcohol denat., parfum, aqua.",
    reviews: "58 reviews",
    rating: "4.7",
    defaultVariant: 1,
    variantLabel: "Size",
    variants: [
      { label: "30 ml", price: 38 },
      { label: "50 ml", price: 52 },
      { label: "100 ml", price: 82 }
    ]
  },
  {
    id: "meridian-36",
    name: "The Meridian 36",
    number: "T-01",
    category: "timepieces",
    typeLine: "36 mm · Sapphire crystal · Quartz",
    type: "Timepiece",
    price: 189,
    badge: "Bestseller",
    image: "assets/watch-01.jpg",
    alt: "The Meridian 36 watch with a minimal dial",
    desc: "A quiet essential. Brushed steel, a warm ivory dial and a sapphire-coated crystal, sized for everyday.",
    notes: ["36 mm case", "Sapphire crystal", "Japanese quartz"],
    notesLabel: "Specification",
    details: "316L stainless steel case, 36 mm. Sapphire-coated mineral crystal. Japanese quartz movement. 5 ATM water resistance. Two-year movement warranty.",
    reviews: "184 reviews",
    rating: "4.9",
    defaultVariant: 0,
    variantLabel: "Case size",
    variants: [{ label: "36 mm", price: 189 }]
  },
  {
    id: "sovereign-40",
    name: "The Sovereign 40",
    number: "T-02",
    category: "timepieces",
    typeLine: "40 mm · Green dial · Quartz",
    type: "Timepiece",
    price: 229,
    badge: "",
    image: "assets/watch-02.jpg",
    alt: "The Sovereign 40 watch with a green dial",
    desc: "A dress watch with presence. Deep green dial, gold-tone indices and a slim profile under any cuff.",
    notes: ["40 mm case", "Gold-tone indices", "Sapphire crystal"],
    notesLabel: "Specification",
    details: "316L stainless steel case with gold-tone finish, 40 mm. Deep green sunray dial. Sapphire-coated mineral crystal. Japanese quartz movement. 3 ATM water resistance. Two-year movement warranty.",
    reviews: "91 reviews",
    rating: "4.8",
    defaultVariant: 0,
    variantLabel: "Case size",
    variants: [{ label: "40 mm", price: 229 }]
  },
  {
    id: "chronograph-no-4",
    name: "Chronograph No. 4",
    number: "T-03",
    category: "timepieces",
    typeLine: "40 mm · Chronograph · Quartz",
    type: "Timepiece",
    price: 249,
    badge: "New",
    image: "assets/watch-03.jpg",
    alt: "Chronograph No. 4 watch with a panda dial",
    desc: "A panda-dial chronograph inspired by the golden age of motorsport. Balanced, legible, quietly fast.",
    notes: ["40 mm case", "Panda dial", "Chronograph"],
    notesLabel: "Specification",
    details: "316L stainless steel case, 40 mm. Matte black panda dial with three counters. Sapphire-coated mineral crystal. Japanese quartz chronograph movement. 5 ATM water resistance. Two-year movement warranty.",
    reviews: "63 reviews",
    rating: "4.8",
    defaultVariant: 0,
    variantLabel: "Case size",
    variants: [{ label: "40 mm", price: 249 }]
  },
  {
    id: "diver-38",
    name: "The Diver 38",
    number: "T-04",
    category: "timepieces",
    typeLine: "38 mm · 100 m · Rotating bezel",
    type: "Timepiece",
    price: 219,
    badge: "Limited",
    image: "assets/watch-04.jpg",
    alt: "The Diver 38 watch with a rotating bezel",
    desc: "A compact diver with a rotating bezel, 100 m water resistance and a dial that reads at a glance.",
    notes: ["38 mm case", "100 m resistance", "Rotating bezel"],
    notesLabel: "Specification",
    details: "316L stainless steel case, 38 mm. Unidirectional rotating bezel. Luminous indices and hands. Sapphire-coated mineral crystal. Japanese quartz movement. 10 ATM water resistance. Two-year movement warranty.",
    reviews: "107 reviews",
    rating: "4.9",
    defaultVariant: 0,
    variantLabel: "Case size",
    variants: [{ label: "38 mm", price: 219 }]
  }
];

const CART_KEY = "sillage_cart_v1";
const WISH_KEY = "sillage_wishlist_v1";
const FREE_SHIPPING = 75;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const money = (value) => `$${Number(value).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
const getProduct = (id) => products.find((product) => product.id === id);

let cart = loadCart();
let wishlist = loadWishlist();
let activeFilter = "all";
let activeSort = "featured";
let currentProduct = null;
let currentVariantIndex = 0;
let toastTimer = null;
let lastFocused = null;

/* ---------- Storage ---------- */

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) => {
      const product = getProduct(item.id);
      return product && Number(item.qty) > 0 && product.variants.some((variant) => variant.label === item.variant);
    }).map((item) => ({ id: item.id, variant: item.variant, qty: Math.min(10, Number(item.qty)) }));
  } catch {
    return [];
  }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* storage unavailable */ }
}

function loadWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(WISH_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((id) => getProduct(id)) : [];
  } catch {
    return [];
  }
}

function saveWishlist() {
  try { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)); } catch { /* storage unavailable */ }
}

/* ---------- Product rendering ---------- */

function cardPrice(product) {
  return product.variants[product.defaultVariant]?.price ?? product.price;
}

function renderProducts() {
  const grid = $("#product-grid");
  const list = products
    .filter((product) => activeFilter === "all" || product.category === activeFilter)
    .sort((a, b) => {
      if (activeSort === "price-asc") return cardPrice(a) - cardPrice(b);
      if (activeSort === "price-desc") return cardPrice(b) - cardPrice(a);
      if (activeSort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  grid.innerHTML = list.map((product, index) => {
    const badgeClass = product.badge === "Limited" ? "badge-limited" : "";
    const isWished = wishlist.includes(product.id);
    const selectedVariant = product.variants[product.defaultVariant] || product.variants[0];
    return `
      <article class="product-card" style="animation-delay:${index * 45}ms">
        <div class="product-media">
          <button class="product-media-hit" data-quickview="${product.id}" aria-label="Quick view ${product.name}"></button>
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
          <span class="product-badge ${badgeClass}">${product.badge}</span>
          <button class="wish-btn ${isWished ? "is-wished" : ""}" data-wish="${product.id}" aria-label="${isWished ? "Remove" : "Save"} ${product.name} ${isWished ? "from" : "to"} wishlist" aria-pressed="${isWished}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.5-7-9.5A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5C19 15.5 12 20 12 20Z"/></svg>
          </button>
          <button class="quick-add" data-quick-add="${product.id}" data-variant="${product.defaultVariant}" aria-label="Add ${product.name}, ${selectedVariant.label}, to bag">Add <span aria-hidden="true">+</span></button>
        </div>
        <div class="product-info">
          <div class="product-topline">
            <h3 class="product-name"><button class="product-name-btn" data-quickview="${product.id}">${product.name}</button></h3>
            <span class="product-price">${money(selectedVariant.price)}</span>
          </div>
          <p class="product-type">${product.typeLine}</p>
          <div class="product-notes">
            ${product.notes.map((note, noteIndex) => `${noteIndex ? '<i aria-hidden="true">·</i>' : ""}<span>${note}</span>`).join("")}
          </div>
        </div>
      </article>
    `;
  }).join("");

  updateFilterUI();
}

function updateFilterUI() {
  $$(".filter").forEach((button) => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function setFilter(filter) {
  activeFilter = ["all", "fragrance", "timepieces"].includes(filter) ? filter : "all";
  renderProducts();
}

/* ---------- Cart ---------- */

function cartCount() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function cartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    const variant = product?.variants.find((option) => option.label === item.variant);
    return total + (variant ? variant.price * item.qty : 0);
  }, 0);
}

function addToCart(id, variantLabel, qty = 1) {
  const product = getProduct(id);
  if (!product) return;
  const variant = product.variants.find((option) => option.label === variantLabel) || product.variants[0];
  const existing = cart.find((item) => item.id === id && item.variant === variant.label);
  if (existing) {
    existing.qty = Math.min(10, existing.qty + qty);
  } else {
    cart.push({ id, variant: variant.label, qty });
  }
  saveCart();
  renderCart();
  showToast(`${product.name} added to your bag`);
  openCart();
}

function updateQty(key, delta) {
  const item = cart.find((entry) => `${entry.id}::${entry.variant}` === key);
  if (!item) return;
  item.qty = Math.max(0, Math.min(10, item.qty + delta));
  if (item.qty === 0) {
    cart = cart.filter((entry) => entry !== item);
  }
  saveCart();
  renderCart();
}

function removeItem(key) {
  cart = cart.filter((entry) => `${entry.id}::${entry.variant}` !== key);
  saveCart();
  renderCart();
}

function renderCart() {
  const count = cartCount();
  const drawerCount = $("#cart-drawer-count");
  const itemsWrap = $("#cart-items");
  const empty = $("#cart-empty");
  const foot = $("#cart-foot");

  $("#bag-count").textContent = count;
  $("#cart-open").setAttribute("aria-label", `Open bag, ${count} ${count === 1 ? "item" : "items"}`);
  drawerCount.textContent = `(${count})`;

  if (!cart.length) {
    itemsWrap.innerHTML = "";
    itemsWrap.hidden = true;
    empty.classList.add("is-visible");
    foot.hidden = true;
    $("#shipping-progress").style.width = "0%";
    $("#shipping-message").textContent = `You’re ${money(FREE_SHIPPING)} away from complimentary shipping.`;
    return;
  }

  itemsWrap.hidden = false;
  empty.classList.remove("is-visible");
  foot.hidden = false;

  itemsWrap.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    const variant = product.variants.find((option) => option.label === item.variant) || product.variants[0];
    const key = `${item.id}::${item.variant}`;
    return `
      <div class="cart-item">
        <div class="cart-item-media"><img src="${product.image}" alt="${product.alt}"></div>
        <div class="cart-item-info">
          <div class="cart-item-top">
            <div>
              <p class="cart-item-name">${product.name}</p>
              <p class="cart-item-variant">${product.type} · ${variant.label}</p>
            </div>
            <button class="cart-item-remove" data-cart-remove="${key}" aria-label="Remove ${product.name} from bag">×</button>
          </div>
          <div class="cart-item-bottom">
            <div class="qty-control" aria-label="Quantity">
              <button data-cart-minus="${key}" aria-label="Decrease quantity">−</button>
              <span aria-live="polite">${item.qty}</span>
              <button data-cart-plus="${key}" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">${money(variant.price * item.qty)}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const subtotal = cartSubtotal();
  $("#cart-subtotal").textContent = money(subtotal);
  const remaining = FREE_SHIPPING - subtotal;
  $("#shipping-progress").style.width = `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%`;
  $("#shipping-message").textContent = remaining > 0
    ? `You’re ${money(remaining)} away from complimentary shipping.`
    : "Complimentary shipping unlocked.";
}

function openCart() {
  lastFocused = document.activeElement;
  const overlay = $("#cart-overlay");
  const drawer = $("#cart-drawer");
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  syncBodyLock();
  setTimeout(() => $("#cart-close").focus(), 120);
}

function closeCart() {
  const overlay = $("#cart-overlay");
  const drawer = $("#cart-drawer");
  overlay.classList.remove("is-visible");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  setTimeout(() => { overlay.hidden = true; }, 380);
  syncBodyLock();
  restoreFocus();
}

/* ---------- Wishlist ---------- */

function toggleWishlist(id) {
  const product = getProduct(id);
  if (!product) return;
  const saved = wishlist.includes(id);
  wishlist = saved ? wishlist.filter((entry) => entry !== id) : [...wishlist, id];
  saveWishlist();
  $$(`[data-wish="${id}"]`).forEach((button) => {
    button.classList.toggle("is-wished", !saved);
    button.setAttribute("aria-pressed", String(!saved));
    button.setAttribute("aria-label", `${saved ? "Save" : "Remove"} ${product.name} ${saved ? "to" : "from"} wishlist`);
  });
  showToast(saved ? `${product.name} removed from wishlist` : `${product.name} saved to wishlist`);
}

/* ---------- Quick view ---------- */

function openQuickView(id, variantIndex) {
  const product = getProduct(id);
  if (!product) return;
  lastFocused = document.activeElement;
  currentProduct = product;
  currentVariantIndex = Number.isInteger(Number(variantIndex))
    ? Math.max(0, Math.min(product.variants.length - 1, Number(variantIndex)))
    : product.defaultVariant;

  $("#qv-image").src = product.image;
  $("#qv-image").alt = product.alt;
  $("#qv-type").textContent = `${product.number} · ${product.type}`;
  $("#qv-name").textContent = product.name;
  $("#qv-reviews").textContent = `${product.rating} · ${product.reviews}`;
  $("#qv-desc").textContent = product.desc;
  $("#qv-details").textContent = product.details;
  $("#qv-badge").textContent = product.badge;
  $("#qv-badge").className = `product-badge ${product.badge === "Limited" ? "badge-limited" : ""}`;
  $("#qv-option-label").textContent = product.variantLabel;
  $("#qv-notes").innerHTML = `<span><b>${product.notesLabel}</b> ${product.notes.join(" · ")}</span>`;

  renderVariantOptions();
  renderQuickViewPrice();

  const wrap = $("#quickview-wrap");
  wrap.hidden = false;
  syncBodyLock();
  setTimeout(() => $(".modal-close", wrap).focus(), 120);
}

function renderVariantOptions() {
  if (!currentProduct) return;
  const wrap = $("#qv-options");
  if (currentProduct.variants.length <= 1) {
    wrap.innerHTML = `<span class="size-option is-selected">${currentProduct.variants[0].label}</span>`;
    return;
  }
  wrap.innerHTML = currentProduct.variants.map((variant, index) => `
    <button class="size-option ${index === currentVariantIndex ? "is-selected" : ""}" data-variant-option="${index}" aria-pressed="${index === currentVariantIndex}">${variant.label}</button>
  `).join("");
}

function renderQuickViewPrice() {
  if (!currentProduct) return;
  const variant = currentProduct.variants[currentVariantIndex] || currentProduct.variants[0];
  $("#qv-price").textContent = money(variant.price);
  $("#qv-add-price").textContent = `— ${money(variant.price)}`;
}

function closeQuickView() {
  $("#quickview-wrap").hidden = true;
  currentProduct = null;
  syncBodyLock();
  restoreFocus();
}

/* ---------- Search ---------- */

function openSearch() {
  lastFocused = document.activeElement;
  const overlay = $("#search-overlay");
  overlay.hidden = false;
  syncBodyLock();
  renderSearchResults("");
  setTimeout(() => $("#search-input").focus(), 80);
}

function closeSearch() {
  $("#search-overlay").hidden = true;
  $("#search-input").value = "";
  syncBodyLock();
  restoreFocus();
}

function renderSearchResults(query) {
  const results = $("#search-results");
  const term = query.trim().toLowerCase();
  const list = products.filter((product) => {
    if (!term) return ["ambre-nuit", "fig-blanc", "meridian-36", "chronograph-no-4"].includes(product.id);
    return [product.name, product.number, product.type, product.desc, ...product.notes, ...product.variants.map((v) => v.label)]
      .join(" ")
      .toLowerCase()
      .includes(term);
  });

  if (!list.length) {
    results.innerHTML = `<p class="search-empty">Nothing found for “${query.replace(/[<>&"]/g, "")}”.<br>Try “amber”, “oud” or “quartz”.</p>`;
    return;
  }

  results.innerHTML = list.slice(0, 8).map((product) => {
    const variant = product.variants[product.defaultVariant] || product.variants[0];
    return `
      <button class="search-result" data-quickview="${product.id}" data-search-variant="${product.defaultVariant}">
        <img src="${product.image}" alt="">
        <span>
          <span class="search-result-name">${product.name}</span>
          <span class="search-result-type">${product.typeLine}</span>
        </span>
        <span class="search-result-price">${money(variant.price)}</span>
      </button>
    `;
  }).join("");
}

/* ---------- Info ---------- */

const infoContent = {
  shipping: {
    title: "Shipping & returns",
    body: "<p><strong>Complimentary shipping</strong> on all orders over $75. Orders under $75 ship at a flat rate of $8. We ship worldwide from New York.</p><p>Orders leave our studio within 1–2 business days. Standard delivery is 3–5 business days in the US and 7–12 business days internationally.</p><p>Unopened fragrance and unworn timepieces may be returned within 30 days of delivery. Contact hello@sillage.studio to start a return.</p>"
  },
  warranty: {
    title: "Watch warranty",
    body: "<p><strong>Two years, movement included.</strong> Every SILLAGE timepiece is covered against manufacturing defects in the movement and case for two years from purchase.</p><p>The warranty does not cover normal wear, accidental damage, water damage from misuse, or batteries after the first year. Repairs are handled by our studio in New York.</p>"
  },
  fragrance: {
    title: "Fragrance care",
    body: "<p><strong>Keep it in the dark.</strong> Store your fragrance away from direct sunlight and heat. A cool, dry shelf is ideal — the bathroom is not.</p><p>Our fragrances are alcohol-based and vegan. As with any fragrance, patch test before first use and avoid contact with eyes. All bottles are recyclable.</p>"
  },
  privacy: {
    title: "Privacy & terms",
    body: "<p>This is a front-end demo storefront. Your bag and wishlist are stored locally in your browser using localStorage. No personal data is transmitted to a server.</p><p>Product names, brand identity and editorial copy are original to this demo. SILLAGE is not affiliated with any designer brand. Our fragrances are original interpretations, and our timepieces are original designs.</p><p>For a production store, connect your preferred commerce platform and publish a full privacy policy and terms of service.</p>"
  },
  stockists: {
    title: "Stockists",
    body: "<p>SILLAGE is currently available online and at our studio in New York. We are opening a small number of stockists in 2026.</p><p>If you would like to carry the collection, write to hello@sillage.studio with a little about your space.</p>"
  }
};

function openInfo(type) {
  const content = infoContent[type];
  if (!content) return;
  lastFocused = document.activeElement;
  $("#info-title").textContent = content.title;
  $("#info-body").innerHTML = content.body;
  $("#info-wrap").hidden = false;
  syncBodyLock();
  setTimeout(() => $("#info-wrap .modal-close").focus(), 100);
}

function closeInfo() {
  $("#info-wrap").hidden = true;
  syncBodyLock();
  restoreFocus();
}

/* ---------- Checkout ---------- */

function openCheckout() {
  if (!cart.length) return;
  const returnFocus = lastFocused || document.activeElement;
  closeCart();
  lastFocused = returnFocus;
  const overlay = $("#checkout-wrap");
  const subtotal = cartSubtotal();
  const shipping = subtotal >= FREE_SHIPPING ? 0 : 8;
  const total = subtotal + shipping;

  $("#checkout-summary").innerHTML = `
    ${cart.map((item) => {
      const product = getProduct(item.id);
      const variant = product.variants.find((option) => option.label === item.variant);
      return `<div class="checkout-line"><span>${product.name} · ${variant.label} × ${item.qty}</span><span>${money(variant.price * item.qty)}</span></div>`;
    }).join("")}
    <div class="checkout-line"><span>Shipping</span><span>${shipping ? money(shipping) : "Complimentary"}</span></div>
    <div class="checkout-line checkout-total"><span>Total</span><span>${money(total)}</span></div>
  `;

  $("#checkout-success").hidden = true;
  $("#demo-checkout-form").hidden = false;
  $("#demo-checkout-form").reset();
  overlay.hidden = false;
  syncBodyLock();
  setTimeout(() => $("#checkout-wrap .modal-close").focus(), 100);
}

function closeCheckout() {
  $("#checkout-wrap").hidden = true;
  syncBodyLock();
  restoreFocus();
}

/* ---------- Modals, drawers, lock ---------- */

function syncBodyLock() {
  const anyOpen =
    $("#mobile-nav").classList.contains("is-open") ||
    $("#cart-drawer").classList.contains("is-open") ||
    !$("#search-overlay").hidden ||
    $$(".modal-wrap").some((wrap) => !wrap.hidden);
  document.body.classList.toggle("is-locked", anyOpen);
}

function restoreFocus() {
  if (lastFocused && document.contains(lastFocused)) {
    setTimeout(() => lastFocused.focus({ preventScroll: true }), 60);
  }
  lastFocused = null;
}

function closeAllOverlays() {
  if (!$("#search-overlay").hidden) closeSearch();
  if (!$("#info-wrap").hidden) closeInfo();
  if (!$("#quickview-wrap").hidden) closeQuickView();
  if (!$("#checkout-wrap").hidden) closeCheckout();
  if ($("#cart-drawer").classList.contains("is-open")) closeCart();
  if ($("#mobile-nav").classList.contains("is-open")) closeMobileNav();
}

/* ---------- Mobile nav ---------- */

function openMobileNav() {
  lastFocused = document.activeElement;
  const nav = $("#mobile-nav");
  nav.classList.add("is-open");
  nav.setAttribute("aria-hidden", "false");
  $("#menu-open").setAttribute("aria-expanded", "true");
  syncBodyLock();
  setTimeout(() => $("#menu-close").focus(), 200);
}

function closeMobileNav() {
  const nav = $("#mobile-nav");
  nav.classList.remove("is-open");
  nav.setAttribute("aria-hidden", "true");
  $("#menu-open").setAttribute("aria-expanded", "false");
  syncBodyLock();
  restoreFocus();
}

/* ---------- Toast ---------- */

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

/* ---------- Global listeners ---------- */

document.addEventListener("click", (event) => {
  const target = event.target;

  const mobileLink = target.closest('#mobile-nav a[href^="#"]');
  if (mobileLink && !target.closest("[data-filter-link]")) closeMobileNav();

  const quickView = target.closest("[data-quickview]");
  if (quickView) {
    event.preventDefault();
    const variant = quickView.dataset.searchVariant;
    if (!$("#search-overlay").hidden) closeSearch();
    openQuickView(quickView.dataset.quickview, variant);
    return;
  }

  const quickAdd = target.closest("[data-quick-add]");
  if (quickAdd) {
    event.preventDefault();
    const product = getProduct(quickAdd.dataset.quickAdd);
    const index = Number(quickAdd.dataset.variant);
    const variant = product?.variants[index] || product?.variants[0];
    if (product && variant) addToCart(product.id, variant.label);
    return;
  }

  const wish = target.closest("[data-wish]");
  if (wish) {
    event.preventDefault();
    toggleWishlist(wish.dataset.wish);
    return;
  }

  const filterLink = target.closest("[data-filter-link]");
  if (filterLink) {
    event.preventDefault();
    if ($("#mobile-nav").classList.contains("is-open")) closeMobileNav();
    setFilter(filterLink.dataset.filterLink);
    setTimeout(() => $("#shop").scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    return;
  }

  const filterButton = target.closest(".filter");
  if (filterButton) {
    setFilter(filterButton.dataset.filter);
    return;
  }

  const cartPlus = target.closest("[data-cart-plus]");
  if (cartPlus) return updateQty(cartPlus.dataset.cartPlus, 1);

  const cartMinus = target.closest("[data-cart-minus]");
  if (cartMinus) return updateQty(cartMinus.dataset.cartMinus, -1);

  const cartRemove = target.closest("[data-cart-remove]");
  if (cartRemove) return removeItem(cartRemove.dataset.cartRemove);

  const variantOption = target.closest("[data-variant-option]");
  if (variantOption) {
    currentVariantIndex = Number(variantOption.dataset.variantOption);
    renderVariantOptions();
    renderQuickViewPrice();
    return;
  }

  const infoLink = target.closest("[data-info]");
  if (infoLink) {
    event.preventDefault();
    openInfo(infoLink.dataset.info);
    return;
  }

  const searchTerm = target.closest("[data-search-term]");
  if (searchTerm) {
    $("#search-input").value = searchTerm.dataset.searchTerm;
    renderSearchResults(searchTerm.dataset.searchTerm);
    $("#search-input").focus();
    return;
  }

  const closeTarget = target.closest("[data-close]");
  if (closeTarget) {
    const which = closeTarget.dataset.close;
    if (which === "quickview") closeQuickView();
    if (which === "info") closeInfo();
    if (which === "checkout") closeCheckout();
    return;
  }

  if (target.closest("#cart-open")) return openCart();
  if (target.closest("#cart-close") || target.closest("#cart-overlay")) return closeCart();
  if (target.closest("#checkout-btn")) return openCheckout();
  if (target.closest("#cart-shop")) {
    closeCart();
    setTimeout(() => $("#shop").scrollIntoView({ behavior: "smooth" }), 250);
    return;
  }
  if (target.closest("#search-open")) return openSearch();
  if (target.closest("#search-close")) return closeSearch();
  if (target.closest("#menu-open")) return openMobileNav();
  if (target.closest("#menu-close")) return closeMobileNav();
  if (target.closest("#account-open")) {
    showToast("Accounts are coming soon — join the newsletter below.");
    return;
  }

  const deadLink = target.closest('a[href="#"]');
  if (deadLink) {
    event.preventDefault();
    if (deadLink.classList.contains("brand")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    showToast("That page is part of the next chapter.");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllOverlays();
  if (event.key === "/" && $("#search-overlay").hidden && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    openSearch();
  }
});

$("#qv-add").addEventListener("click", () => {
  if (!currentProduct) return;
  const product = currentProduct;
  const variant = product.variants[currentVariantIndex] || product.variants[0];
  closeQuickView();
  addToCart(product.id, variant.label);
});

$("#search-input").addEventListener("input", (event) => renderSearchResults(event.target.value));

$("#sort-select").addEventListener("change", (event) => {
  activeSort = event.target.value;
  renderProducts();
});

$("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#newsletter-email");
  const note = $("#newsletter-note");
  const email = input.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    note.textContent = "Please enter a valid email address.";
    note.style.color = "#f3d7c9";
    input.focus();
    return;
  }
  note.textContent = "Welcome in. Your first note from the atelier is on its way.";
  note.style.color = "#f3efe7";
  input.value = "";
  showToast("You’re on the list");
});

$("#demo-checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  $("#demo-checkout-form").hidden = true;
  $("#checkout-success").hidden = false;
  cart = [];
  saveCart();
  renderCart();
  showToast("Demo order placed — no payment taken");
});

window.addEventListener("scroll", () => {
  $("#site-header").classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

/* ---------- Initialization ---------- */

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" })
  : null;

$$(".reveal").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("is-visible");
});

$("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
