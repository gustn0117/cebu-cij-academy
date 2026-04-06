import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Community() {
  const { t } = useLanguage();
  return (
    <Layout title={t.comm.title}>
      <PageHeader title={t.comm.title} subtitle={t.comm.subtitle} breadcrumb={[{ label: t.nav.community }]} backgroundImage="/images/headers/community.svg" />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.comm.heading}</h2>
            <p>{t.comm.desc}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
