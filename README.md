<div align="center">

# 🛒 Angular Product Page

A responsive e-commerce product listing and shopping cart built with **Angular**, **TypeScript**, and **SCSS**.

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

<!-- Replace with your live demo URL once deployed -->
<!-- [![Live Demo](https://img.shields.io/badge/Live_Demo-4CAF50?style=for-the-badge&logo=vercel&logoColor=white)](https://your-demo-url.vercel.app) -->

</div>

---

## 📸 Preview

<!-- Add screenshots after deployment. Recommended: one grid view + one cart view -->
> _Screenshots coming soon — deploy to GitHub Pages or Vercel and add images here._

---

## ✨ Features

- **Product Grid** — clean responsive layout showcasing products with images, names, and prices
- **Add to Cart** — add and remove items from a persistent shopping cart
- **Cart Summary** — live item count and total price calculation
- **Responsive Design** — mobile-first SCSS layout that works across all screen sizes
- **Component Architecture** — structured Angular components following separation of concerns

---

## 🗂️ Project Structure

```
product-Page/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/       # Product grid component
│   │   │   ├── product-card/       # Individual product card
│   │   │   └── cart/               # Shopping cart component
│   │   ├── models/
│   │   │   └── product.model.ts    # Product interface / type definitions
│   │   ├── services/
│   │   │   └── cart.service.ts     # Cart state management service
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.module.ts
│   ├── assets/
│   └── styles/
│       └── _variables.scss         # Global SCSS variables
├── angular.json
├── package.json
└── tsconfig.json
```

> _Update this section to match your actual directory structure._

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or above
- [Angular CLI](https://angular.io/cli) v16 or above

```bash
npm install -g @angular/cli
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ahmadrkh/angular-simple-product-page.git
cd angular-simple-product-page/product-Page

# 2. Install dependencies
npm install

# 3. Start the development server
ng serve

# 4. Open in browser
# Navigate to http://localhost:4200
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Angular 17+ | Component framework |
| TypeScript | Type-safe logic |
| SCSS | Styling & layout |
| RxJS | Reactive state (cart service) |
| Angular CLI | Build tooling |

---

## 🧠 What I Learned

Building this project reinforced several key Angular and front-end concepts:

- **Angular Services & Dependency Injection** — using a `CartService` with `BehaviorSubject` to share state across components without a third-party store
- **Component Communication** — passing data down with `@Input()` and emitting events up with `@Output()` / `EventEmitter`
- **TypeScript Interfaces** — defining a strict `Product` model to catch type errors at compile time
- **SCSS Architecture** — using variables, mixins, and nesting to keep styles maintainable
- **Reactive Programming with RxJS** — subscribing to cart state changes and updating the UI automatically

---

## 🗺️ Roadmap

Planned improvements (see [Issues](https://github.com/ahmadrkh/angular-simple-product-page/issues)):

- [ ] Add product detail page with Angular Router
- [ ] Filter products by category and price range
- [ ] Persist cart to `localStorage` so it survives page refresh
- [ ] Add unit tests with Jasmine / Karma
- [ ] Add `OnPush` change detection strategy for performance
- [ ] Deploy live demo to GitHub Pages or Netlify
- [ ] Add Angular animations for cart add/remove feedback

---

## 📄 License

MIT — feel free to use this project as a reference or starting point.

---

<div align="center">
Made by <a href="https://github.com/ahmadrkh">Ahmadreza Khanari</a> — <a href="https://ahmadrkh.github.io">Portfolio</a> · <a href="https://linkedin.com/in/ahmadreza-khanari">LinkedIn</a>
</div>
