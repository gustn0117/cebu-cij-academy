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

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.heading}</h2>
            <p>{t.fac.desc}</p>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="liloan-campus" className="section section-alt">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.campusTitle}</h2>
            <p>{t.fac.campusDesc}</p>
          </div>
          {liloanImages.length > 0 && (
            <div className="facility-images-grid">
              {liloanImages.map((img) => (
                <div key={img.id} className="facility-image-item">
                  <img src={img.image_url} alt={img.title || 'Liloan Campus'} />
                  {img.title && <div className="facility-image-title">{img.title}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Dormitory */}
      <section id="premium-campus" className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.dormTitle}</h2>
            <p>{t.fac.dormDesc}</p>
          </div>
          {premiumImages.length > 0 && (
            <div className="facility-images-grid">
              {premiumImages.map((img) => (
                <div key={img.id} className="facility-image-item">
                  <img src={img.image_url} alt={img.title || 'Premium Campus'} />
                  {img.title && <div className="facility-image-title">{img.title}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cafeteria */}
      <section id="cafeteria" className="section section-alt">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.cafeTitle}</h2>
            <p>{t.fac.cafeDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
}
