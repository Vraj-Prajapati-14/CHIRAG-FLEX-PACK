'use client';

import { useState } from 'react';
import { ownerData } from '@/data/ownerData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Contact Us
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Get in touch with us for any inquiries about our products or services
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Contact Information */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1f2937' }}>
              Get In Touch
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  backgroundColor: '#2563eb', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  📞
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>Phone Numbers</h4>
                  <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>{ownerData.phone1}</p>
                  <p style={{ color: '#6b7280' }}>{ownerData.phone2}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  backgroundColor: '#2563eb', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  ✉️
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>Email</h4>
                  <p style={{ color: '#6b7280' }}>{ownerData.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  backgroundColor: '#2563eb', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  🌐
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>Website</h4>
                  <p style={{ color: '#6b7280' }}>{ownerData.website}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  backgroundColor: '#2563eb', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  📍
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>Address</h4>
                  <p style={{ color: '#6b7280', lineHeight: '1.5' }}>{ownerData.address}</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Business Hours</h4>
              <p style={{ marginBottom: '0.5rem' }}><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1f2937' }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: '600' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}