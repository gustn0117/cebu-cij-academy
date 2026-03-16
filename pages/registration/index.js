import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Registration() {
  return (
    <Layout title="Registration">
      <PageHeader
        title="Registration"
        description="Join CIJ Academy today"
        breadcrumbs={[{ label: 'Registration' }]}
      />
      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Link href="/registration/how-to-register" style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-image" style={{ background: 'linear-gradient(135deg, #0057B8 0%, #00B4D8 100%)', color: '#fff' }}>
                  <span style={{ fontSize: '3rem' }}>📝</span>
                </div>
                <div className="card-body">
                  <h3>How to Register</h3>
                  <p>Step-by-step guide to enrolling at CIJ Academy. Learn about the registration process, required documents, and important dates.</p>
                </div>
              </div>
            </Link>
            <Link href="/registration/school-rules" style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-image" style={{ background: 'linear-gradient(135deg, #FFB800 0%, #FF6B6B 100%)', color: '#fff' }}>
                  <span style={{ fontSize: '3rem' }}>📋</span>
                </div>
                <div className="card-body">
                  <h3>School Rules</h3>
                  <p>Important rules and regulations that all students must follow during their stay at CIJ Academy.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
