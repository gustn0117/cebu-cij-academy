import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FacilitiesSection() {
  const { t } = useLanguage();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/facility-images')
      .then((r) => r.json())
      .then((data) => {
        if (data && Array.isArray(data)) setImages(data);
      })
      .catch(() => {});
  }, []);

  const liloanImages = images.filter((img) => img.section === 'liloan');
  const premiumImages = images.filter((img) => img.section === 'premium');

  return (
    <>
      <div id="facilities" className="section-divider">
        <div className="container">
          <h2>{t.nav.facilities}</h2>
        </div>
      </div>

      {/* Liloan Campus */}
      <section id="liloan-campus" className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 24 }}>
            {t.nav.liloanCampus || 'Liloan Campus'}
          </h2>
          {liloanImages.length > 0 ? (
            <div className="facility-images-grid">
              {liloanImages.map((img) => (
                <div key={img.id} className="facility-image-item">
                  <img src={img.image_url} alt={img.title || 'Liloan Campus'} />
                  {img.title && <div className="facility-image-title">{img.title}</div>}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>No images uploaded yet.</p>
          )}
        </div>
      </section>

      {/* Premium Campus */}
      <section id="premium-campus" className="section section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 24 }}>
            {t.nav.premiumCampus || 'Premium Campus'}
          </h2>
          {premiumImages.length > 0 ? (
            <div className="facility-images-grid">
              {premiumImages.map((img) => (
                <div key={img.id} className="facility-image-item">
                  <img src={img.image_url} alt={img.title || 'Premium Campus'} />
                  {img.title && <div className="facility-image-title">{img.title}</div>}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>No images uploaded yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
