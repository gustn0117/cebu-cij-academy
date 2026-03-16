import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Gallery() {
  return (
    <Layout title="Gallery">
      <PageHeader title="Gallery" subtitle="Moments at CIJ Academy" breadcrumb={[{ label: 'Community', href: '/community' }, { label: 'Gallery' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Photo Gallery</h2>
            <p>Browse photos of life at CIJ Academy.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
