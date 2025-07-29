'use client';

import { useState } from 'react';
import { ownerData } from '@/data/ownerData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          {/* Logo and Company Name */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              {ownerData.companyName}
            </h1>
            <p className="text-sm text-gray-600" style={{ display: 'none' }}>
              {ownerData.description}
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div style={{ display: 'none' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{ display: 'none' }}>
            <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
              <a href="#home" style={{ display: 'block', padding: '0.5rem 0' }}>Home</a>
              <a href="#products" style={{ display: 'block', padding: '0.5rem 0' }}>Products</a>
              <a href="#about" style={{ display: 'block', padding: '0.5rem 0' }}>About</a>
              <a href="#contact" style={{ display: 'block', padding: '0.5rem 0' }}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}