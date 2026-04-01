import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FacilitiesSection() {
  const { t } = useLanguage();
  const [images, setImages] = useState([]);
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

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

  const openLightbox = (sectionImages, index) => {
    setLightbox({ open: true, images: sectionImages, index });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, images: [], index: 0 });
  };

  const goTo = useCallback((dir) => {
    setLightbox((prev) => {
      const len = prev.images.length;
      const next = (prev.index + dir + len) % len;
      return { ...prev, index: next };
    });
  }, []);

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goTo(-1);
      if (e.key === 'ArrowRight') goTo(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox.open, goTo]);

  const currentImg = lightbox.open ? lightbox.images[lightbox.index] : null;

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
              {liloanImages.map((img, i) => (
                <div
                  key={img.id}
                  className="facility-image-item"
                  onClick={() => openLightbox(liloanImages, i)}
                  style={{ cursor: 'pointer' }}
                >
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
              {premiumImages.map((img, i) => (
                <div
                  key={img.id}
                  className="facility-image-item"
                  onClick={() => openLightbox(premiumImages, i)}
                  style={{ cursor: 'pointer' }}
                >
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

      {/* Lightbox */}
      {lightbox.open && currentImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => { e.stopPropagation(); goTo(-1); }}
            aria-label="Previous"
          >&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImg.image_url} alt={currentImg.title || 'Facility'} />
            {currentImg.title && <div className="lightbox-caption">{currentImg.title}</div>}
            <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
          </div>
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => { e.stopPropagation(); goTo(1); }}
            aria-label="Next"
          >&#8250;</button>
        </div>
      )}
    </>
  );
}
