import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function Greeting() {
  return (
    <Layout title="Greeting">
      <PageHeader
        title="Greeting"
        description="Welcome to CIJ Academy"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Greeting' },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Welcome to CIJ Academy</h2>
            <p>
              Thank you for visiting CIJ Academy. We are a premier English language academy
              located in the beautiful city of Cebu, Philippines. Our mission is to provide
              the highest quality English education to students from around the world.
            </p>
            <p>
              At CIJ Academy, we believe that learning English is not just about mastering
              grammar and vocabulary. It is about building confidence, understanding different
              cultures, and opening doors to a world of opportunities.
            </p>

            <h3>Our Mission</h3>
            <p>
              We are committed to delivering an immersive English learning experience that
              combines academic excellence with cultural exchange. Our dedicated team of
              instructors works tirelessly to ensure every student achieves their language goals.
            </p>

            <h3>Our Promise</h3>
            <p>
              Whether you are a young learner taking your first steps in English or an adult
              looking to advance your career through better English communication, CIJ Academy
              is here to guide you every step of the way.
            </p>
            <p>
              We look forward to welcoming you to our campus and helping you begin your
              English learning journey.
            </p>

            <div style={{
              marginTop: 40,
              padding: '24px 32px',
              background: 'var(--primary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--primary)',
            }}>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>
                CIJ Academy Director
              </p>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                Cebu International Junior Academy
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
