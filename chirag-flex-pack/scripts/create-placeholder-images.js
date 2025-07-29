const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder for each product
const createSVGPlaceholder = (productId, productName) => {
  const svg = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#grad1)"/>
  <text x="200" y="150" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white">Product #${productId}</text>
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="white" style="max-width: 350px;">${productName}</text>
  <text x="200" y="250" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="rgba(255,255,255,0.8)">Image Placeholder</text>
</svg>`;

  return svg;
};

// Product data (simplified for this script)
const products = [
  { id: 1, name: "Champion Gold" },
  { id: 2, name: "RADHIKA Super Heavy (Brown)" },
  { id: 3, name: "Champion's SUPER" },
  { id: 4, name: "Champion MAGIC" },
  { id: 5, name: "AYUSH SUPER" },
  { id: 6, name: "Champion's HEAVY (Transparent)" },
  { id: 7, name: "Champion SUPER HEAVY" },
  { id: 8, name: "Champion's MAX" },
  { id: 9, name: "CHAMPION TRANSPARENT" },
  { id: 10, name: "Vansh Note Book Cover" },
  { id: 11, name: "Generic Synthetic Book Cover" },
  { id: 12, name: "RADHIKA Super Heavy (Orange)" },
  { id: 13, name: "Champion's WONDER WARP" },
  { id: 14, name: "Champion's SUPREME PLUS" },
  { id: 15, name: "Class Mind" },
  { id: 16, name: "SCHOLAR (Gold)" },
  { id: 17, name: "Cp's CRYSTAL" },
  { id: 18, name: "Champion's DELUXE" },
  { id: 19, name: "Cp's DELUXE" },
  { id: 20, name: "SUPER" },
  { id: 21, name: "Cp's CRYSTAL (Variant)" },
  { id: 22, name: "Champion's SILVER" },
  { id: 23, name: "Champion's DELUXE (Variant)" },
  { id: 24, name: "Cp's SCHOOL TIME" },
  { id: 25, name: "Cp's DELUXE (Small)" },
  { id: 26, name: "Champion's Protecto" },
  { id: 27, name: "Champion's GOLD PREMIUM" },
  { id: 28, name: "Champion's DYNAMIC" },
  { id: 29, name: "Champion's ICON PLUS" },
  { id: 30, name: "Champion's PLATINUM" },
  { id: 31, name: "Champion's PRIDE" },
  { id: 32, name: "Champion's DIAMOND" }
];

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG placeholders for each product
products.forEach(product => {
  const svgContent = createSVGPlaceholder(product.id, product.name);
  const fileName = `${product.id}.svg`;
  const filePath = path.join(imagesDir, fileName);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated placeholder for product ${product.id}: ${product.name}`);
});

console.log('\nSVG placeholder images generated successfully!');
console.log('You can replace these with actual product images later.');