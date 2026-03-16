import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Facilities() {
  const { t } = useLanguage();
  return (
    <Layout title={t.fac.title}>
      <PageHeader title={t.fac.title} subtitle={t.fac.subtitle} breadcrumb={[{ label: t.nav.facilities }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.heading}</h2>
            <p>{t.fac.desc}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
