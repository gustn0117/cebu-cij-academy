import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <Layout title={t.comm.galleryTitle}>
      <PageHeader title={t.comm.galleryTitle} subtitle={t.comm.gallerySub} breadcrumb={[{ label: t.nav.community, href: '/community' }, { label: t.comm.galleryTitle }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.comm.galleryHeading}</h2>
            <p>{t.comm.galleryDesc}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
