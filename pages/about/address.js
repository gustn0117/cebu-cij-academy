import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Address() {
  return (
    <Layout title="Address">
      <PageHeader title="Address" subtitle="How to find us" breadcrumb={[{ label: 'About Us', href: '/about' }, { label: 'Address' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>CIJ Academy Location</h2>
            <p>Cebu City, Cebu, Philippines</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
