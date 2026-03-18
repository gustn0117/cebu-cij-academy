import { useLanguage } from '@/lib/LanguageContext';

export default function FacilitiesSection() {
  const { t } = useLanguage();

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
        </div>
      </section>

      {/* Dormitory */}
      <section id="premium-campus" className="section">
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
