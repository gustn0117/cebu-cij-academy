import Link from 'next/link';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';

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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);
const IconQuote = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.08"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/></svg>
);

const featureColors = ['#0057B8', '#00B4D8', '#E4405F', '#25D366', '#FFB800', '#8B5CF6'];

const features = [
  { icon: <IconTeacher />, title: 'Expert Teachers', desc: 'Licensed and experienced English instructors with proven teaching methodologies.', color: featureColors[0] },
  { icon: <IconGlobe />, title: 'Global Environment', desc: 'Multicultural campus with students from Korea, Japan, Taiwan, and Vietnam.', color: featureColors[1] },
  { icon: <IconBook />, title: 'Proven Curriculum', desc: 'Structured learning programs with weekly assessments and measurable progress.', color: featureColors[2] },
  { icon: <IconPalm />, title: 'Cebu Location', desc: 'Study English in a beautiful tropical island with year-round warm weather.', color: featureColors[3] },
  { icon: <IconShield />, title: 'Safe Campus', desc: '24/7 security, on-site nurse, and dedicated staff ensuring student safety.', color: featureColors[4] },
  { icon: <IconUsers />, title: 'Small Classes', desc: 'Maximum 1:4 group ratio with personalized attention for each student.', color: featureColors[5] },
];

const programs = [
  { title: 'ESL Program', desc: 'General English for everyday communication. Build confidence in speaking, listening, reading, and writing.', href: '/programs/esl', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', tag: 'Most Popular' },
  { title: 'IELTS Program', desc: 'Intensive preparation for the IELTS exam with mock tests and strategy coaching.', href: '/programs/ielts', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop', tag: 'Test Prep' },
  { title: 'Junior Program', desc: 'Age-appropriate English education for children ages 4-17 with fun, interactive activities.', href: '/levels', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', tag: 'Kids & Teens' },
];

const steps = [
  { num: '01', title: 'Choose Your Program', desc: 'Select the program that matches your goals - ESL, IELTS, Business English, or Junior courses.' },
  { num: '02', title: 'Submit Application', desc: 'Fill out our simple online registration form and receive a confirmation within 24 hours.' },
  { num: '03', title: 'Arrive in Cebu', desc: 'We provide airport pickup and orientation to help you settle into campus life smoothly.' },
  { num: '04', title: 'Start Learning', desc: 'Begin your classes with a placement test and personalized study plan from day one.' },
];

const testimonials = [];

/* ── Page ── */
export default function Home() {
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
            Cebu, Philippines
          </span>
          <h1>Your English Journey<br /><span className="text-gradient">Starts Here</span></h1>
          <p>
            CIJ Academy offers world-class English education in the heart of Cebu.
            Programs for all ages and levels, from kids to adults.
          </p>
          <div className="hero-buttons">
            <Link href="/registration/how-to-register" className="hero-btn">
              Get Started <IconArrowRight />
            </Link>
            <Link href="/about" className="hero-btn-outline">
              Learn More
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
              <span className="section-tag">Why Choose Us</span>
              <h2>Why CIJ Academy?</h2>
              <p>Discover what makes CIJ Academy the premier choice for English education in Cebu.</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="feature-grid">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="feature-item" style={{'--accent': f.color}}>
                  <div className="feature-icon" style={{background: `${f.color}15`, color: f.color}}>
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
                  <span className="about-preview-badge-text">Years of<br />Excellence</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="about-preview-content">
                <span className="section-tag">About CIJ Academy</span>
                <h2>Premier English Academy <span className="text-gradient">Since 2003</span></h2>
                <p>
                  CIJ Academy is a leading English language institution located in the beautiful city of Cebu, Philippines.
                  With over 15 years of experience, we have helped thousands of students achieve their English language goals.
                </p>
                <div className="about-checklist">
                  {['TESDA Accredited Institution', 'Native & Filipino Expert Teachers', 'Airport Pickup & Full Support', 'Modern Campus with Pool & Gym'].map((item) => (
                    <div className="about-check" key={item}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about/greeting" className="btn-primary">
                  Read Our Story <IconArrowRight />
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
              <span className="section-tag">What We Offer</span>
              <h2>Our Programs</h2>
              <p>Tailored programs designed to meet your specific English learning goals.</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="card-grid">
            {programs.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 150}>
                <Link href={p.href} style={{ textDecoration: 'none' }}>
                  <div className="card">
                    <div className="card-image">
                      <img src={p.img} alt={p.title} />
                      <div className="card-image-overlay">
                        <span className="card-view-btn">View Program <IconArrowRight /></span>
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
              <span className="section-tag" style={{background:'rgba(255,255,255,0.15)',color:'#fff'}}>How It Works</span>
              <h2 style={{color:'#fff'}}>4 Simple Steps to Get Started</h2>
              <p style={{color:'rgba(255,255,255,0.75)'}}>From application to your first class, we make the process easy and seamless.</p>
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
              <span className="section-tag">Student Life</span>
              <h2>Campus Life</h2>
              <p>Experience a vibrant student life at our modern campus in Cebu.</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="campus-grid">
            <ScrollReveal className="campus-item campus-large"><img src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop" alt="Campus building" /><div className="campus-label">Modern Campus</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={100}><img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop" alt="Classroom" /><div className="campus-label">Classrooms</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={200}><img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop" alt="Dormitory" /><div className="campus-label">Dormitory</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={300}><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop" alt="Cafeteria food" /><div className="campus-label">Cafeteria</div></ScrollReveal>
            <ScrollReveal className="campus-item" delay={400}><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" alt="Gym" /><div className="campus-label">Facilities</div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* ▸ Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="section-tag">Testimonials</span>
              <h2>Student Stories</h2>
              <p>Hear from our graduates about their experience at CIJ Academy.</p>
              <span className="accent-line"></span>
            </div>
          </ScrollReveal>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150}>
                <div className="testimonial-card">
                  <div className="testimonial-quote"><IconQuote /></div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <img src={t.img} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.country}</span>
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
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of successful students who chose CIJ Academy.</p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/registration/how-to-register" className="hero-btn">Register Now <IconArrowRight /></Link>
              <Link href="/about/address" className="hero-btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Visit Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
