import { useLanguage } from '@/lib/LanguageContext';

export default function FacilitiesSection() {
  const { t } = useLanguage();

  return (
    <>
      <div id="facilities" style={{ padding: '60px 0 20px', textAlign: 'center', background: 'var(--dark)', color: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>{t.nav.facilities}</h2>
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
      <section id="campus" className="section section-alt">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.campusTitle}</h2>
            <p>{t.fac.campusDesc}</p>
          </div>
        </div>
      </section>

      {/* Dormitory */}
      <section id="dormitory" className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.dormTitle}</h2>
            <p>{t.fac.dormDesc}</p>
          </div>
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
