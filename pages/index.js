import Link from 'next/link';
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
const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#333"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);
const IconQuote = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.08"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/></svg>
);

const testimonials = [];

/* ── Page ── */
export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: <IconTeacher />, title: t.home.feat1Title, desc: t.home.feat1Desc },
    { icon: <IconGlobe />, title: t.home.feat2Title, desc: t.home.feat2Desc },
    { icon: <IconBook />, title: t.home.feat3Title, desc: t.home.feat3Desc },
    { icon: <IconPalm />, title: t.home.feat4Title, desc: t.home.feat4Desc },
    { icon: <IconShield />, title: t.home.feat5Title, desc: t.home.feat5Desc },
    { icon: <IconUsers />, title: t.home.feat6Title, desc: t.home.feat6Desc },
  ];

  const programs = [
    { title: t.home.eslTitle, desc: t.home.eslDesc, href: '/programs/esl', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', tag: t.home.eslTag },
    { title: t.home.ieltsTitle, desc: t.home.ieltsDesc, href: '/programs/ielts', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop', tag: t.home.ieltsTag },
    { title: t.home.juniorTitle, desc: t.home.juniorDesc, href: '/levels', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', tag: t.home.juniorTag },
  ];

  const steps = [
    { num: '01', title: t.home.step1Title, desc: t.home.step1Desc },
    { num: '02', title: t.home.step2Title, desc: t.home.step2Desc },
    { num: '03', title: t.home.step3Title, desc: t.home.step3Desc },
    { num: '04', title: t.home.step4Title, desc: t.home.step4Desc },
  ];

  return (
    <Layout title="Home">
      {/* ▸ Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=900&fit=crop" alt="CIJ Academy Campus" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content hero-anim">
          <span className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight:6,verticalAlign:'middle'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {t.home.badge}
          </span>
          <h1>{t.home.heroTitle1}<br /><span className="text-gradient">{t.home.heroTitle2}</span></h1>
          <p>
            {t.home.heroDesc}
          </p>
          <div className="hero-buttons">
            <Link href="/registration/how-to-register" className="hero-btn">
              {t.home.getStarted} <IconArrowRight />
            </Link>
            <Link href="/about" className="hero-btn-outline">
              {t.home.learnMore}
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-mouse"><div className="hero-scroll-wheel"></div></div>
        </div>
      </section>

      {/* ▸ Features */}
      <section className="section section-decorated">
        <div className="decor-circle decor-circle-1"></div>
        <div className="decor-circle decor-circle-2"></div>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="section-tag">{t.home.whyTag}</span>
              <h2>{t.home.whyTitle}</h2>
              <p>{t.home.whyDesc}</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="feature-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="feature-item">
                  <div className="feature-icon">
                    {f.icon}
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ▸ About Preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-preview">
            <ScrollReveal direction="right">
              <div className="about-preview-image">
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=700&h=500&fit=crop" alt="Students studying" />
                <div className="about-preview-badge">
                  <span className="about-preview-badge-num">15+</span>
                  <span className="about-preview-badge-text">{t.home.yearsExcellence}</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="about-preview-content">
                <span className="section-tag">{t.home.aboutTag}</span>
                <h2>{t.home.aboutTitle} <span className="text-gradient">{t.home.aboutSince}</span></h2>
                <p>
                  {t.home.aboutDesc}
                </p>
                <div className="about-checklist">
                  {[t.home.check1, t.home.check2, t.home.check3, t.home.check4].map((item) => (
                    <div className="about-check" key={item}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about/greeting" className="btn-primary">
                  {t.home.readStory} <IconArrowRight />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ▸ Programs */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="section-tag">{t.home.progTag}</span>
              <h2>{t.home.progTitle}</h2>
              <p>{t.home.progDesc}</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="card-grid">
            {programs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Link href={p.href} style={{ textDecoration: 'none' }}>
                  <div className="card">
                    <div className="card-image">
                      <img src={p.img} alt={p.title} />
                      <div className="card-image-overlay">
                        <span className="card-view-btn">{t.home.viewProgram} <IconArrowRight /></span>
                      </div>
                    </div>
                    <div className="card-body">
                      <span className="card-tag">{p.tag}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ▸ How It Works */}
      <section className="section section-gradient">
        <div className="container">
          <ScrollReveal>
            <div className="section-title" style={{color:'#fff'}}>
              <span className="section-tag" style={{background:'rgba(255,255,255,0.15)',color:'#fff'}}>{t.home.howTag}</span>
              <h2 style={{color:'#fff'}}>{t.home.howTitle}</h2>
              <p style={{color:'rgba(255,255,255,0.75)'}}>{t.home.howDesc}</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 150}>
                <div className="step-card">
                  <span className="step-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  {i < steps.length - 1 && <div className="step-connector"></div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ▸ Campus Life */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="section-tag">{t.home.campusTag}</span>
              <h2>{t.home.campusTitle}</h2>
              <p>{t.home.campusDesc}</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="campus-grid">
            <ScrollReveal className="campus-item campus-large"><img src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop" alt="Campus building" /><div className="campus-label">{t.home.campusModern}</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={100}><img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop" alt="Classroom" /><div className="campus-label">{t.home.campusClassrooms}</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={200}><img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop" alt="Dormitory" /><div className="campus-label">{t.home.campusDorm}</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={300}><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop" alt="Cafeteria food" /><div className="campus-label">{t.home.campusCafe}</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={400}><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" alt="Gym" /><div className="campus-label">{t.home.campusFacilities}</div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* ▸ Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="section-tag">{t.home.testiTag}</span>
              <h2>{t.home.testiTitle}</h2>
              <p>{t.home.testiDesc}</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="testimonial-grid">
            {testimonials.map((tm, i) => (
              <ScrollReveal key={tm.name} delay={i * 150}>
                <div className="testimonial-card">
                  <div className="testimonial-quote"><IconQuote /></div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p className="testimonial-text">&ldquo;{tm.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <img src={tm.img} alt={tm.name} className="testimonial-avatar" />
                    <div>
                      <strong>{tm.name}</strong>
                      <span>{tm.country}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ▸ CTA */}
      <section className="cta-section">
        <div className="cta-bg">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=600&fit=crop" alt="Cebu beach" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaDesc}</p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/registration/how-to-register" className="hero-btn">{t.home.registerNow} <IconArrowRight /></Link>
              <Link href="/about/address" className="hero-btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>{t.home.visitUs}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
