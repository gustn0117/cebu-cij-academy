import { useLanguage } from '@/lib/LanguageContext';
import { en as aboutEn, ja as aboutJa, zhTW as aboutZhTW, zhCN as aboutZhCN, vi as aboutVi } from '@/lib/translations/about';

const aboutT = { en: aboutEn, ja: aboutJa, 'zh-TW': aboutZhTW, 'zh-CN': aboutZhCN, vi: aboutVi };

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const a = aboutT[lang]?.about || aboutT.en.about;

  const featureIcons = [
    (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  ];

  return (
    <>
      <div id="about" className="section-divider">
        <div className="container">
          <h2>{t.nav.aboutUs}</h2>
        </div>
      </div>

      {/* Greeting Section */}
      <section id="greeting" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.greet.title}</h2>
            <span className="accent-line"></span>
          </div>
          <div className="content-block">
            <h2>{a.welcomeTitle}</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--gray-500)', marginBottom: 32 }}>
              {a.welcomeSub}
            </p>

            <p>
              {a.paragraph1.split('\n').map((line, i) => (
                <span key={i}>{line}{i < a.paragraph1.split('\n').length - 1 && <br />}</span>
              ))}
            </p>

            <p>
              {a.paragraph2.split(a.paragraph2Bold).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <strong>{a.paragraph2Bold}</strong>}
                </span>
              ))}
            </p>

            <p>
              {a.paragraph3line1}<br />
              <strong>{a.paragraph3line2}</strong><br />
              <strong>{a.paragraph3line3}</strong><br />
              <strong>{a.paragraph3line4}</strong>
            </p>

            <p>
              {a.paragraph4.split('\n').map((line, i) => (
                <span key={i}>{line}{i < a.paragraph4.split('\n').length - 1 && <br />}</span>
              ))}
            </p>

            <p>
              {a.paragraph5.split('\n').map((line, i) => (
                <span key={i}>{line}{i < a.paragraph5.split('\n').length - 1 && <br />}</span>
              ))}
            </p>

            <p>
              {a.paragraph6.split('\n').map((line, i) => (
                <span key={i}>{line}{i < a.paragraph6.split('\n').length - 1 && <br />}</span>
              ))}
            </p>

            <p>
              {a.paragraph7.split('\n').map((line, i) => (
                <span key={i}>{line}{i < a.paragraph7.split('\n').length - 1 && <br />}</span>
              ))}
            </p>

            <p>
              <strong>{a.ctaText}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.hist.title}</h2>
            <span className="accent-line"></span>
          </div>

          <div style={{ maxWidth: 800, margin: '40px auto' }}>
            {a.historyData.map((item, i) => (
              <div key={item.year} style={{
                display: 'flex',
                gap: 24,
                marginBottom: 40,
                position: 'relative',
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 100,
                  textAlign: 'right',
                  paddingTop: 4,
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}>{item.year}</span>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid var(--primary-light)',
                    flexShrink: 0,
                    marginTop: 6,
                  }}></div>
                  {i < a.historyData.length - 1 && (
                    <div style={{
                      width: 2,
                      flex: 1,
                      background: 'var(--gray-300)',
                      marginTop: 4,
                    }}></div>
                  )}
                </div>
                <div style={{
                  background: 'var(--white)',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)',
                  flex: 1,
                }}>
                  {item.events.map((event, j) => (
                    <div key={j} style={{ marginBottom: j < item.events.length - 1 ? 20 : 0 }}>
                      {event.title && (
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 8 }}>{event.title}</h4>
                      )}
                      <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                        {event.details.map((detail, k) => (
                          <li key={k} style={{ marginBottom: 4 }}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CIJ Section */}
      <section id="why-choose-cij" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.why.title}</h2>
            <span className="accent-line"></span>
          </div>

          <div className="content-block" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p>{a.whyIntro1}</p>
            <p>{a.whyIntro2}</p>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', marginTop: 16 }}>
              {a.whySlogan}
            </p>
          </div>

          <div className="feature-grid">
            {a.features.map((f, idx) => (
              <div className="feature-item" key={f.title}>
                <div className="feature-icon">{featureIcons[idx]}</div>
                <h4>{f.title}</h4>
                <div>
                  <ul>
                    {f.bullets.map((bullet, bi) => (
                      <li key={bi} dangerouslySetInnerHTML={{ __html: bullet }} />
                    ))}
                  </ul>
                  {f.footnote && (
                    <p style={{ marginTop: 12, fontStyle: 'italic', color: 'var(--gray-600)' }}>
                      {f.footnote}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 60,
            padding: '32px',
            background: 'var(--primary-light)',
            borderRadius: 'var(--radius)',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary)' }}>
              {a.whyCta}
            </p>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section id="address" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.nav.address || 'Address'}</h2>
            <span className="accent-line"></span>
          </div>
          <div className="content-block" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
              <strong>CIJ Academy</strong><br />
              Bayswater Subdivision, Pajac, Lapu-Lapu City, Cebu, Philippines 6015
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
