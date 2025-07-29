import { ownerData } from '@/data/ownerData';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            About {ownerData.companyName}
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Leading manufacturers and exporters of high-quality plastic packaging solutions
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Company Story */}
          <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
              Our Story
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1rem' }}>
              {ownerData.companyName} has been at the forefront of plastic packaging innovation for years. 
              We specialize in manufacturing and exporting premium LD, HD, HM Plastic Bags, Industrial Liners, 
              and Garbage Bags to meet the diverse needs of our global clientele.
            </p>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner 
              for businesses worldwide.
            </p>
          </div>

          {/* What We Do */}
          <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
              What We Do
            </h3>
            <ul style={{ color: '#6b7280', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Manufacture high-quality plastic bags and liners</li>
              <li style={{ marginBottom: '0.5rem' }}>Export to international markets</li>
              <li style={{ marginBottom: '0.5rem' }}>Provide customized packaging solutions</li>
              <li style={{ marginBottom: '0.5rem' }}>Ensure sustainable manufacturing practices</li>
              <li style={{ marginBottom: '0.5rem' }}>Maintain strict quality control standards</li>
            </ul>
          </div>
        </div>

        {/* Business Details */}
        <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center' }}>
            Business Information
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#9ca3af' }}>
                Company Details
              </h4>
              <p style={{ marginBottom: '0.25rem' }}><strong>Name:</strong> {ownerData.companyName}</p>
              <p style={{ marginBottom: '0.25rem' }}><strong>Proprietor:</strong> {ownerData.proprietor}</p>
              <p style={{ marginBottom: '0.25rem' }}><strong>GSTIN:</strong> {ownerData.gstin}</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#9ca3af' }}>
                Contact Information
              </h4>
              <p style={{ marginBottom: '0.25rem' }}><strong>Contact:</strong> {ownerData.contactPerson}</p>
              <p style={{ marginBottom: '0.25rem' }}><strong>Phone:</strong> {ownerData.phone1}</p>
              <p style={{ marginBottom: '0.25rem' }}><strong>Email:</strong> {ownerData.email}</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#9ca3af' }}>
                Location
              </h4>
              <p style={{ lineHeight: '1.5' }}>{ownerData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}