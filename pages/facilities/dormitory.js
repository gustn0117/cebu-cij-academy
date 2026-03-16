import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Dormitory() {
  const { t } = useLanguage();
  return (
    <Layout title={t.fac.dormTitle}>
      <PageHeader title={t.fac.dormTitle} subtitle={t.fac.dormSub} breadcrumb={[{ label: t.nav.facilities, href: '/facilities' }, { label: t.fac.dormTitle }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.fac.dormTitle}</h2>
            <p>{t.fac.dormDesc}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
