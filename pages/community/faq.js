import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <Layout title={t.comm.faqTitle}>
      <PageHeader title={t.comm.faqTitle} subtitle={t.comm.faqSub} breadcrumb={[{ label: t.nav.community, href: '/community' }, { label: t.comm.faqTitle }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.comm.faqHeading}</h2>
            <p>{t.comm.faqDesc}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
