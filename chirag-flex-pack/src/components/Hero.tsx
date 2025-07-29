import { ownerData } from '@/data/ownerData';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Welcome to {ownerData.companyName}
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
            Leading Manufacturers & Exporters of High-Quality Plastic Bags and Industrial Solutions
          </p>
          <p style={{ fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '42rem', margin: '0 auto 3rem' }}>
            {ownerData.description}
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href="#products"
              className="btn btn-primary"
              style={{ padding: '0.75rem 2rem', fontSize: '1.125rem', fontWeight: '600' }}
            >
              View Our Products
            </a>
            <a
              href="#contact"
              className="btn"
              style={{ 
                padding: '0.75rem 2rem', 
                fontSize: '1.125rem', 
                fontWeight: '600',
                border: '2px solid white',
                color: 'white',
                backgroundColor: 'transparent'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Company Highlights */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.5rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Quality Products</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Premium LD, HD, HM Plastic Bags and Industrial Liners
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.5rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Export Excellence</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Serving global markets with reliable packaging solutions
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.5rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Customer Focus</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Dedicated support and customized solutions for your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}