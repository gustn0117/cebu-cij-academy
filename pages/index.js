import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/LanguageContext';

/* ── SVG Icons ── */
const IconTeacher = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);
const IconBook = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="13" y2="11"/>
  </svg>
);
const IconPalm = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 21H6.5C5.67 21 5 20.33 5 19.5C5 18.67 5.67 18 6.5 18H17.5C18.33 18 19 18.67 19 19.5C19 20.33 18.33 21 17.5 21Z"/>
    <path d="M12 18V10"/><path d="M12 10C12 10 8 6 4 7"/><path d="M12 10C12 10 16 6 20 7"/>
    <path d="M12 10C12 10 10 4 12 2C14 4 12 10 12 10Z"/>
  </svg>
);
const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
  </svg>
);
const IconUsers = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

/* ── Page (server-side fetch hero slides to avoid flash) ── */
export async function getServerSideProps() {
  let heroSlides = [];
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/hero-slides`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        heroSlides = data.map((s) => s.image_url);
      }
    }
  } catch {}
  return { props: { heroSlides } };
}

export default function Home({ heroSlides = [] }) {
  const { t } = useLanguage();
  const initialSlides = heroSlides.length > 0 ? heroSlides : null;
  const [slides, setSlides] = useState(initialSlides);
  const [slidesReady, setSlidesReady] = useState(!!initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Client-side fallback: if SSR didn't provide slides, fetch them
  useEffect(() => {
    if (slides) return;
    fetch('/api/hero-slides')
      .then((r) => r.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSlides(data.map((s) => s.image_url));
        }
        setSlidesReady(true);
      })
      .catch(() => {
        setSlidesReady(true);
      });
  }, [slides]);

  const slideCount = slides ? slides.length : 0;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slideCount <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
  }, [slideCount]);

  useEffect(() => {
    if (slideCount > 0) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer, slideCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startTimer();
  };

  const features = [
    { icon: <IconTeacher />, title: t.home.feat1Title, desc: t.home.feat1Desc },
    { icon: <IconGlobe />, title: t.home.feat2Title, desc: t.home.feat2Desc },
    { icon: <IconBook />, title: t.home.feat3Title, desc: t.home.feat3Desc },
    { icon: <IconPalm />, title: t.home.feat4Title, desc: t.home.feat4Desc },
    { icon: <IconShield />, title: t.home.feat5Title, desc: t.home.feat5Desc },
    { icon: <IconUsers />, title: t.home.feat6Title, desc: t.home.feat6Desc },
  ];

  return (
    <Layout title="Home">
      {/* ▸ Hero */}
      <section className="hero" style={!slidesReady ? { background: '#1A1A2E' } : undefined}>
        {slides && slides.length > 0 && (
          <div className={`hero-slider ${slidesReady ? 'hero-slider-ready' : ''}`}>
            {slides.map((src, i) => (
              <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
                <img src={src} alt={`CIJ Academy Campus ${i + 1}`} className="hero-bg-img" />
                <div className="hero-overlay"></div>
              </div>
            ))}
          </div>
        )}
        <div className="hero-content hero-anim">
          <span className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight:6,verticalAlign:'middle'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {t.home.badge}
          </span>
          <h1>{t.home.heroTitle1}<br /><span className="text-gradient">{t.home.heroTitle2}</span></h1>
          <p>
            {t.home.heroDesc}
          </p>
        </div>
        {slides && slides.length > 0 && (
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-mouse"><div className="hero-scroll-wheel"></div></div>
        </div>
      </section>

      {/* ▸ Features */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1A1A2E', marginBottom: 12 }}>
            {t.home.featTitle || 'Why Choose CIJ Academy?'}
          </h2>
          <p style={{ color: '#6c757d', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto 48px' }}>
            {t.home.featSubtitle || 'Premier English education in the heart of Cebu'}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
          }}>
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div style={{
                  padding: '32px 24px',
                  borderRadius: 16,
                  background: '#f8f9fa',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}>
                  <div style={{ color: '#B91C1C', marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A1A2E', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: '#6c757d', fontSize: '0.92rem', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
