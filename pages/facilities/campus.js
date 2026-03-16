import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Campus() {
  return (
    <Layout title="Campus">
      <PageHeader title="Campus" subtitle="Our learning environment" breadcrumb={[{ label: 'Facilities', href: '/facilities' }, { label: 'Campus' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Campus Tour</h2>
            <p>Take a look at our modern campus designed for effective learning.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
