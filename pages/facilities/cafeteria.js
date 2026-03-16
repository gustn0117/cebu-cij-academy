import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Cafeteria() {
  const { t } = useLanguage();
  return (
    <Layout title={t.fac.cafeTitle}>
      <PageHeader title={t.fac.cafeTitle} subtitle={t.fac.cafeSub} breadcrumb={[{ label: t.nav.facilities, href: '/facilities' }, { label: t.fac.cafeTitle }]} />
      <section className="section">
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
