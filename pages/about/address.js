import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Address() {
  const { t } = useLanguage();

  return (
    <Layout title={t.addr.title}>
      <PageHeader title={t.addr.title} subtitle={t.addr.subtitle} breadcrumb={[{ label: t.nav.aboutUs, href: '/about' }, { label: t.addr.title }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.addr.heading}</h2>
            <p>{t.addr.location}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
