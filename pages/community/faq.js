import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function FAQ() {
  return (
    <Layout title="FAQ">
      <PageHeader title="FAQ" subtitle="Frequently asked questions" breadcrumb={[{ label: 'Community', href: '/community' }, { label: 'FAQ' }]} />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about CIJ Academy.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
