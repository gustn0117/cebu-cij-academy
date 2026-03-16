import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Cafeteria() {
  return (
    <Layout title="Cafeteria">
      <PageHeader title="Cafeteria" subtitle="Nutritious meals for students" breadcrumb={[{ label: 'Facilities', href: '/facilities' }, { label: 'Cafeteria' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Cafeteria</h2>
            <p>Our cafeteria serves nutritious meals daily for all students and staff.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
