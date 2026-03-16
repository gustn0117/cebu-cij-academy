import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Campus() {
  const { t } = useLanguage();
  return (
    <Layout title={t.fac.campusTitle}>
      <PageHeader title={t.fac.campusTitle} subtitle={t.fac.campusSub} breadcrumb={[{ label: t.nav.facilities, href: '/facilities' }, { label: t.fac.campusTitle }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.campusHeading}</h2>
            <p>{t.fac.campusDesc}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
