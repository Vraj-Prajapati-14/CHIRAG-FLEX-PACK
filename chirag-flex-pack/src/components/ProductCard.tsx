import Image from 'next/image';
import { useState } from 'react';
import ProductDetailModal from './ProductDetailModal';

interface Product {
  id: number;
  name: string;
  price: string;
  dimensions: string;
  features: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="product-card">
        {/* Product Image */}
        <div className="product-image">
          {!imageError ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={200}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              onError={handleImageError}
            />
          ) : (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              height: '100%',
              padding: '1rem'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>#{product.id}</div>
              <div style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', textAlign: 'center' }}>{product.name}</div>
              <div style={{ fontSize: '0.875rem', opacity: '0.8' }}>Product Image</div>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="product-content">
          <h3 className="product-title">
            {product.name}
          </h3>
          
          <div className="product-details">
            {product.price !== "N/A" && (
              <div className="product-price">
                <span>Price:</span>
                <span>₹{product.price}</span>
              </div>
            )}
            
            {product.dimensions !== "N/A" && (
              <div className="product-dimensions">
                <span>Dimensions:</span>
                <span>{product.dimensions}</span>
              </div>
            )}
          </div>

          <div className="product-features">
            <h4>Features:</h4>
            <p title={product.features}>
              {product.features}
            </p>
          </div>

          <div className="product-actions">
            <button 
              className="btn btn-primary"
              onClick={handleViewDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}