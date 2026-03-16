import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Community() {
  return (
    <Layout title="Community">
      <PageHeader title="Community" subtitle="Stay connected with CIJ Academy" breadcrumb={[{ label: 'Community' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Community</h2>
            <p>Join our community and stay updated with the latest news and events.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
