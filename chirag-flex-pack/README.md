# CHIRAG FLEX PACK - Static Website

A modern, responsive static website for CHIRAG FLEX PACK, a manufacturer and exporter of plastic bags and packaging solutions.

## Features

- ✅ **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, and structured data
- ✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Static Generation** - Fast loading with Next.js static generation
- ✅ **Search & Filter** - Product search and sorting functionality
- ✅ **Contact Form** - Interactive contact form with validation
- ✅ **Accessibility** - WCAG compliant with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) or any static hosting

## Project Structure

```
chirag-flex-pack/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ProductsSection.tsx # Products grid with search/filter
│   │   ├── ProductCard.tsx     # Individual product card
│   │   ├── AboutSection.tsx    # Company information
│   │   ├── ContactSection.tsx  # Contact form and info
│   │   └── Footer.tsx          # Footer with links
│   └── data/
│       ├── ownerData.ts        # Company information
│       └── productsData.ts     # Product catalog
├── public/
│   └── images/                 # Product images (add your images here)
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chirag-flex-pack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Company Information

Update the company details in `src/data/ownerData.ts`:

```typescript
export const ownerData = {
  companyName: "YOUR COMPANY NAME",
  proprietor: "YOUR NAME",
  gstin: "YOUR GSTIN",
  // ... other details
};
```

### Products

Add or modify products in `src/data/productsData.ts`:

```typescript
export const productsData = [
  {
    id: 1,
    name: "Product Name",
    price: "100",
    dimensions: "10x10 cm",
    features: "Product features",
    imageUrl: "/images/1.png",
  },
  // ... more products
];
```

### Product Images

1. Add your product images to `public/images/`
2. Name them as `1.png`, `2.png`, etc. (matching the product IDs)
3. Recommended image size: 400x400px or larger
4. Supported formats: PNG, JPG, WebP

### Styling

The website uses Tailwind CSS. You can customize:

- Colors: Update the blue color scheme in components
- Fonts: Change the Inter font in `layout.tsx`
- Layout: Modify component spacing and grid layouts

## SEO Features

The website includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling instructions

## Performance

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Caching**: Static assets cached for better performance

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any static hosting platform:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: chiragflexpack536@gmail.com
- Phone: +91 98254 07134

---

**CHIRAG FLEX PACK** - Manufacturers & Exporters of High-Quality Plastic Bags and Packaging Solutions
