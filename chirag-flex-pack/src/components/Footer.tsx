import { ownerData } from '@/data/ownerData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Company Information */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              {ownerData.companyName}
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1rem' }}>
              {ownerData.description}
            </p>
            <div style={{ color: '#9ca3af' }}>
              <p style={{ marginBottom: '0.5rem' }}>📍 {ownerData.address}</p>
              <p style={{ marginBottom: '0.5rem' }}>📞 {ownerData.phone1}</p>
              <p style={{ marginBottom: '0.5rem' }}>📧 {ownerData.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#home" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#products" style={{ color: '#9ca3af', textDecoration: 'none' }}>Products</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About Us</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Business Information */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Business Info
            </h3>
            <div style={{ color: '#9ca3af' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Proprietor:</strong> {ownerData.proprietor}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>GSTIN:</strong> {ownerData.gstin}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Contact Person:</strong> {ownerData.contactPerson}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Website:</strong> {ownerData.website}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
              Contact Details
            </h3>
            <div style={{ color: '#9ca3af' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Primary:</strong> {ownerData.phone1}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Secondary:</strong> {ownerData.phone2}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> {ownerData.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
            © {new Date().getFullYear()} {ownerData.companyName}. All rights reserved.
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Manufacturers & Exporters of LD, HD, HM Plastic Bags, Industrial Liners, and Garbage Bags
          </p>
        </div>
      </div>
    </footer>
  );
}