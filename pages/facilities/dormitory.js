import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Dormitory() {
  return (
    <Layout title="Dormitory">
      <PageHeader title="Dormitory" subtitle="Comfortable student housing" breadcrumb={[{ label: 'Facilities', href: '/facilities' }, { label: 'Dormitory' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Dormitory</h2>
            <p>Our dormitory provides comfortable accommodations for all students.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
