import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Facilities() {
  const { t } = useLanguage();

  return (
    <Layout title={t.fac.title}>
      <PageHeader title={t.fac.title} description={t.fac.subtitle} breadcrumbs={[{ label: t.nav.facilities }]} />

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
    </Layout>
  );
}
