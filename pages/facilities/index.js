import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Facilities() {
  return (
    <Layout title="Facilities">
      <PageHeader title="Facilities" subtitle="Explore our campus facilities" breadcrumb={[{ label: 'Facilities' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Our Facilities</h2>
            <p>CIJ Academy provides world-class facilities for a comfortable learning experience.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
