# WEAROFIT - Premium Beauty & Cosmetics E-Commerce Platform

A modern, responsive Next.js e-commerce platform for luxury beauty, skincare, makeup, haircare, fragrance, and wellness products.

## 🎯 Project Overview

WEAROFIT is a full-featured beauty e-commerce platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The platform showcases premium cosmetic products with an elegant, luxury aesthetic and seamless shopping experience across all devices.

---

## 📁 Project Structure

\`\`\`
wearofit/
├── app/                              # Next.js App Router pages
│   ├── page.tsx                      # Homepage
│   ├── layout.tsx                    # Root layout with metadata
│   ├── globals.css                   # Global Tailwind styles
│   │
│   ├── about/
│   │   └── page.tsx                  # About Us page
│   ├── contact/
│   │   └── page.tsx                  # Contact Us page
│   ├── support/
│   │   └── page.tsx                  # Support/FAQ page
│   │
│   ├── shop/
│   │   └── page.tsx                  # Main shop page
│   ├── shop-all/
│   │   └── page.tsx                  # All products page
│   ├── categories/[slug]/
│   │   └── page.tsx                  # Dynamic category pages
│   │
│   ├── skincare/
│   │   └── page.tsx                  # Skincare category
│   ├── makeup/
│   │   └── page.tsx                  # Makeup category
│   ├── haircare/
│   │   └── page.tsx                  # Haircare category
│   ├── fragrance/
│   │   └── page.tsx                  # Fragrance category
│   ├── wellness/
│   │   └── page.tsx                  # Wellness category
│   ├── sets/
│   │   └── page.tsx                  # Product Sets category
│   │
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.tsx              # Individual product detail page
│   │   ├── eye-cream-collection/
│   │   ├── hydrating-face-serum/
│   │   ├── luxe-facial-mask/
│   │   ├── night-renewal-serum/
│   │   ├── rose-oil-elixir/
│   │   └── spf-moisturizer/          # Showcase product pages
│   │
│   ├── cart/
│   │   └── page.tsx                  # Shopping cart page
│   ├── checkout/
│   │   └── page.tsx                  # Checkout page
│   │
│   ├── login/
│   │   └── page.tsx                  # Login page
│   ├── signup/
│   │   └── page.tsx                  # Sign up page
│   ├── account/
│   │   └── page.tsx                  # User account page
│   │
│   └── support/
│       └── loading.tsx               # Support loading state
│
├── components/                       # Reusable React components
│   ├── header.tsx                    # Main navigation header
│   ├── footer.tsx                    # Footer with links & info
│   ├── hero.tsx                      # Hero section
│   ├── hero-slider.tsx               # Hero image carousel
│   ├── hero-card.tsx                 # Hero card component
│   │
│   ├── banner-carousel.tsx           # Auto-play carousel with manual controls
│   ├── auto-carousel-section.tsx     # Auto carousel section
│   ├── product-slider.tsx            # Product image slider
│   │
│   ├── categories.tsx                # Categories section
│   ├── featured-products.tsx         # Featured products display
│   ├── product-card.tsx              # Individual product card
│   ├── product-slider.tsx            # Product carousel
│   │
│   ├── mixed-cards-section.tsx       # Mixed layout cards section
│   ├── vertical-cards-section.tsx    # Vertical cards layout
│   ├── small-square-cards.tsx        # Small card grid
│   │
│   ├── filter-bar-section.tsx        # Product filtering
│   ├── social-banner.tsx             # Social media banner
│   │
│   ├── skincare-content.tsx          # Skincare category content
│   ├── makeup-content.tsx            # Makeup category content
│   ├── haircare-content.tsx          # Haircare category content
│   ├── fragrance-content.tsx         # Fragrance category content
│   ├── wellness-content.tsx          # Wellness category content
│   ├── sets-content.tsx              # Sets category content
│   │
│   ├── theme-provider.tsx            # Theme configuration
│   │
│   └── ui/                           # shadcn/ui components
│       ├── button.tsx                # Button component
│       ├── card.tsx                  # Card component
│       ├── input.tsx                 # Input component
│       ├── select.tsx                # Select/dropdown
│       ├── dialog.tsx                # Modal dialog
│       ├── drawer.tsx                # Drawer/sidebar
│       ├── carousel.tsx              # Carousel component
│       ├── spinner.tsx               # Loading spinner
│       ├── tabs.tsx                  # Tabbed content
│       ├── accordion.tsx             # Accordion component
│       ├── badge.tsx                 # Badge labels
│       ├── avatar.tsx                # User avatars
│       ├── pagination.tsx            # Page navigation
│       ├── form.tsx                  # Form handling
│       ├── checkbox.tsx              # Checkboxes
│       ├── radio-group.tsx           # Radio buttons
│       ├── toast.tsx                 # Toast notifications
│       ├── alert.tsx                 # Alert messages
│       ├── skeleton.tsx              # Loading skeleton
│       └── [other UI components]...
│
├── lib/                              # Utility functions & data
│   ├── products.ts                   # Product data and utilities
│   └── utils.ts                      # Helper functions (cn, etc)
│
├── hooks/                            # Custom React hooks
│   ├── use-mobile.ts                 # Mobile detection hook
│   └── use-toast.ts                  # Toast notification hook
│
├── public/                           # Static assets
│   ├── images/
│   │   ├── luxury-purple-cosmetic-serum-bottle.jpg
│   │   ├── luxury-purple-face-mask-jar.jpg
│   │   ├── luxury-white-pearl-cream-jar.jpg
│   │   ├── carousel-*.jpg            # Carousel images
│   │   ├── category-*.jpg            # Category images
│   │   ├── about-hero.jpg            # About page hero
│   │   ├── about-story.jpg           # About page story
│   │   ├── team-*.jpg                # Team member photos
│   │   └── [product images]...
│   ├── data/                         # Product data JSON files
│   │   ├── Skincare.json
│   │   ├── Makeup.json
│   │   ├── Haircare.json
│   │   ├── Fragrance.json
│   │   ├── Wellness.json
│   │   └── Sets.json
│   ├── icon.svg
│   ├── apple-icon.png
│   └── [icon files]
│
├── scripts/                          # Executable Node.js/Python scripts
│
├── Configuration Files
│   ├── next.config.mjs               # Next.js configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── tailwind.config.js            # Tailwind CSS (v4 - in globals.css)
│   ├── postcss.config.mjs            # PostCSS configuration
│   ├── components.json               # shadcn/ui config
│   └── package.json                  # Dependencies and scripts
│
├── README.md                         # This file
├── .gitignore                        # Git ignore rules
└── pnpm-lock.yaml                    # Dependency lock file
\`\`\`

---

## 🚀 Features

### User Experience
- ✅ **Responsive Design** - Mobile-first approach, works perfectly on all screen sizes
- ✅ **Product Browsing** - Browse by category (Skincare, Makeup, Haircare, Fragrance, Wellness, Sets)
- ✅ **Search & Filter** - Advanced filtering by price, rating, popularity
- ✅ **Product Details** - Rich product pages with images, descriptions, reviews
- ✅ **Shopping Cart** - Add/remove items, update quantities
- ✅ **Checkout Flow** - Secure checkout process
- ✅ **User Accounts** - Login/signup, account management
- ✅ **Carousels** - Auto-play and manual navigation for products
- ✅ **Touch Support** - Swipe gestures on mobile for carousels

### Design & Performance
- ✅ **Modern UI** - Clean, luxury aesthetic with premium design
- ✅ **Dark Mode Support** - Theme switching capability
- ✅ **Optimized Images** - Responsive images with proper sizing
- ✅ **Fast Loading** - Optimized components and lazy loading
- ✅ **SEO Ready** - Metadata optimization, semantic HTML
- ✅ **Accessibility** - ARIA roles, screen reader support

### Technical
- ✅ **Next.js 16** - Latest App Router with performance optimizations
- ✅ **React 19** - Latest React features and hooks
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS v4** - Modern utility-first styling
- ✅ **shadcn/ui** - High-quality component library
- ✅ **Responsive Layout** - Flexbox & CSS Grid
- ✅ **Carousel Components** - Auto-play with manual controls
- ✅ **Touch Events** - Swipe and drag support

---

## 🎨 Design System

### Color Palette
- **Primary Brand Color**: Purple/Lavender (luxury feel)
- **Neutrals**: White, Gray, Black variants
- **Accents**: Rose gold, subtle complementary colors

### Typography
- **Headings**: Premium sans-serif font
- **Body Text**: Clean, readable sans-serif
- **Line Height**: 1.4-1.6 for optimal readability

### Layout
- **Desktop (lg)**: Full-width layouts, multi-column grids
- **Tablet (md)**: 2-column layouts, optimized spacing
- **Mobile (sm)**: Single-column, stacked layouts
- **Mobile (base)**: Touch-friendly, spacious interactions

---

## 📦 Key Components

### Layout Components
- **Header**: Navigation with search bar (always visible), mobile menu drawer
- **Footer**: Links, copyright, company info, social links
- **Hero Section**: Eye-catching main banner with images

### Product Components
- **Product Card**: Showcase individual products with images, price, rating
- **Product Slider**: Carousel for multiple products
- **Category Cards**: Grid of category selections
- **Featured Products**: Highlighted product collections

### Interactive Components
- **Banner Carousel**: 6-card carousel with auto-play (3s), manual controls (desktop), touch support (mobile)
- **Filter Bar**: Sort and filter products by various criteria
- **Shopping Cart**: Add/remove items, quantity management
- **Checkout**: Multi-step purchase process

### Content Sections
- **Mixed Cards Section**: Combines carousel, small cards, and banner
- **Vertical Cards Section**: Stacked card layouts
- **Category Content**: Skincare, Makeup, Haircare, Fragrance, Wellness

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | Framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling |
| **shadcn/ui** | Component library |
| **Recharts** | Charts (if needed) |
| **Sonner** | Toast notifications |

---

## 🚦 Getting Started

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/wearofit.git
cd wearofit

# Install dependencies using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
\`\`\`

### Development
\`\`\`bash
# Start development server
pnpm dev
# Open http://localhost:3000
\`\`\`

### Production Build
\`\`\`bash
pnpm build
pnpm start
\`\`\`

---

## 📄 Page Structure

### Home Page (`/`)
- Hero slider with premium images
- Featured products section
- Category showcase
- Auto-play carousel (6 products, 3s interval)
- Mixed cards section with filters
- Social media banner
- Newsletter signup

### Category Pages (`/skincare`, `/makeup`, `/haircare`, `/fragrance`, `/wellness`, `/sets`)
- Category header with description
- Product filter and sort
- Product grid with cards
- Category-specific content

### Product Detail Page (`/products/[id]`)
- Product images gallery
- Product information (price, rating, description)
- Reviews section
- Related products
- Add to cart button

### Shop Pages
- **Shop** (`/shop`): Main shop entry
- **Shop All** (`/shop-all`): Complete product listing
- **Cart** (`/cart`): Shopping cart
- **Checkout** (`/checkout`): Purchase flow

### User Pages
- **Login** (`/login`): User authentication
- **Signup** (`/signup`): New account creation
- **Account** (`/account`): User profile management

### Info Pages
- **About** (`/about`): Company story, values, team, timeline
- **Contact** (`/contact`): Contact form and information
- **Support** (`/support`): FAQ and support resources

---

## 🎯 Key Features Breakdown

### 1. Banner Carousel (Full-Width)
- 6 product cards rotating every 3 seconds
- Manual navigation buttons (desktop only)
- Touch/swipe support (mobile)
- Clickable dot indicators to jump to any slide
- Auto-play with manual override
- Responsive height (2:1 on mobile, 3:1 on tablet, 4:1 on desktop)

### 2. Responsive Header
- Logo/brand name
- Search bar (always visible on mobile)
- Navigation menu (mobile drawer)
- Shopping cart icon
- Account/user menu
- Mobile drawer with category navigation

### 3. Product Filtering
- Filter by price range
- Sort by popularity, newest, price
- Search products
- Category navigation

### 4. Mobile Optimizations
- Touch-friendly buttons (48px minimum)
- Stacked layouts on small screens
- Hidden desktop controls (carousel buttons)
- Full-width search bar always visible
- Optimized tap targets

---

## 📱 Responsive Breakpoints

- **Mobile (base)**: < 640px
- **Tablet (sm)**: ≥ 640px
- **Laptop (md)**: ≥ 768px
- **Desktop (lg)**: ≥ 1024px
- **Large Desktop (xl)**: ≥ 1280px

---

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customization
- Edit colors in `app/globals.css` theme variables
- Modify fonts in `app/layout.tsx`
- Update product data in `lib/products.ts`
- Customize components in `components/ui/`

---

## 📊 Product Data Structure

Products are defined in:
- `/lib/products.ts` - Main product data
- `/public/data/*.json` - Category-specific JSON files

Each product includes:
\`\`\`typescript
{
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  category: string
  image: string
  description: string
  features: string[]
  badge?: string
  inStock: boolean
}
\`\`\`

---

## 🎨 Customization Guide

### Changing Colors
1. Open `app/globals.css`
2. Update the CSS variables in the `:root` section
3. All components will automatically update

### Adding New Product
1. Add to `/lib/products.ts` or relevant JSON file
2. Add product image to `/public/`
3. Update component if needed

### Creating New Page
1. Create new file in `app/[category]/page.tsx`
2. Import layout components (header, footer)
3. Add category-specific content component

---

## 📞 Support

For issues, questions, or suggestions:
- **Contact Page**: `/contact`
- **Support Page**: `/support`
- **About Page**: `/about`

---

## 👥 Credits

**Designed & Developed by** [Sujan Das](https://github.com/sujandasadhikari)

© 2025 Wearofit. All rights reserved.

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 🚀 Future Enhancements

- [ ] Payment gateway integration (Stripe)
- [ ] User authentication (Supabase/Auth0)
- [ ] Database integration for dynamic products
- [ ] Admin dashboard
- [ ] Order tracking
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Analytics integration
- [ ] Multi-language support

---

**Last Updated**: November 2025
