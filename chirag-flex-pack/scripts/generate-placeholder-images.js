const fs = require('fs');
const path = require('path');

// Create a simple HTML file that will generate placeholder images
const generatePlaceholderHTML = (productId, productName) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .product-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 400px;
            width: 100%;
        }
        .product-id {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .product-name {
            font-size: 18px;
            margin-bottom: 20px;
            line-height: 1.4;
        }
        .placeholder-text {
            font-size: 14px;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="product-card">
        <div class="product-id">Product #{productId}</div>
        <div class="product-name">${productName}</div>
        <div class="placeholder-text">Product Image Placeholder</div>
    </div>
</body>
</html>
`;

// Generate placeholder images for all products
const productsData = require('../src/data/productsData.ts').productsData;

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder HTML files for each product
productsData.forEach(product => {
    const htmlContent = generatePlaceholderHTML(product.id, product.name);
    const fileName = `${product.id}.html`;
    const filePath = path.join(imagesDir, fileName);
    
    fs.writeFileSync(filePath, htmlContent);
    console.log(`Generated placeholder for product ${product.id}: ${product.name}`);
});

console.log('\nPlaceholder HTML files generated successfully!');
console.log('You can convert these to images using a tool like Puppeteer or use them as placeholders.');