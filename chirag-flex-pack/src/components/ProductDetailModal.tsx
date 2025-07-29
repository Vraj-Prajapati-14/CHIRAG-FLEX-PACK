'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  dimensions: string;
  features: string;
  imageUrl: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 10,
            width: '2rem',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '50%'
          }}
        >
          ×
        </button>

        {/* Product Image */}
        <div style={{ 
          width: '100%', 
          height: '300px', 
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {!imageError ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>#{product.id}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{product.name}</div>
                <div style={{ fontSize: '1rem', opacity: '0.8' }}>Product Image</div>
              </div>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div style={{ padding: '2rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem', 
            color: '#1f2937' 
          }}>
            {product.name}
          </h2>

          <div style={{ marginBottom: '1.5rem' }}>
            {product.price !== "N/A" && (
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#6b7280' }}>Price: </span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>₹{product.price}</span>
              </div>
            )}
            
            {product.dimensions !== "N/A" && (
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#6b7280' }}>Dimensions: </span>
                <span style={{ fontSize: '1rem', color: '#374151' }}>{product.dimensions}</span>
              </div>
            )}
          </div>

          <div style={{ 
            borderTop: '1px solid #e5e7eb', 
            paddingTop: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600', 
              marginBottom: '1rem', 
              color: '#1f2937' 
            }}>
              Features & Specifications
            </h3>
            <p style={{ 
              color: '#6b7280', 
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              {product.features}
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            flexDirection: 'column'
          }}>
            <button
              onClick={() => {
                window.open(`tel:${ownerData.phone1}`, '_self');
              }}
              className="btn btn-primary"
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                fontSize: '1rem', 
                fontWeight: '600' 
              }}
            >
              📞 Call for Inquiry
            </button>
            <button
              onClick={() => {
                window.open(`mailto:${ownerData.email}?subject=Inquiry about ${product.name}`, '_self');
              }}
              className="btn"
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                fontSize: '1rem', 
                fontWeight: '600',
                border: '2px solid #2563eb',
                color: '#2563eb',
                backgroundColor: 'transparent'
              }}
            >
              ✉️ Email Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Import ownerData for contact information
import { ownerData } from '@/data/ownerData';