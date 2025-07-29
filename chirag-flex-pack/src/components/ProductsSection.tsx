'use client';

import { useState } from 'react';
import { productsData } from '@/data/productsData';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Filter products based on search term
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.features.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return (a.price === 'N/A' ? 0 : parseFloat(a.price)) - (b.price === 'N/A' ? 0 : parseFloat(b.price));
      case 'price-high':
        return (b.price === 'N/A' ? 0 : parseFloat(b.price)) - (a.price === 'N/A' ? 0 : parseFloat(a.price));
      default:
        return 0;
    }
  });

  return (
    <section id="products" style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Our Products
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Discover our comprehensive range of high-quality synthetic book covers and packaging solutions
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '28rem' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 1rem 0.5rem 2.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
            <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
              🔍
            </span>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              fontSize: '1rem'
            }}
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Count */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p style={{ color: '#6b7280' }}>
            Showing {sortedProducts.length} of {productsData.length} products
          </p>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4" style={{ alignItems: 'stretch' }}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '3rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem', color: '#111827' }}>No products found</h3>
            <p style={{ color: '#6b7280' }}>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}