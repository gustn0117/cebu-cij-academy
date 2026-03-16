import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const milestones = [
  { year: '2012', title: 'Foundation', desc: 'CIJ Academy was established in Cebu, Philippines with a vision to provide quality English education.' },
  { year: '2014', title: 'Campus Expansion', desc: 'Expanded facilities to include new classrooms, dormitories, and recreational areas for students.' },
  { year: '2016', title: 'Junior Programs Launch', desc: 'Introduced specialized programs for junior learners, including Kinder and Junior levels.' },
  { year: '2018', title: 'International Recognition', desc: 'Received accreditation and recognition from international education bodies for our curriculum quality.' },
  { year: '2020', title: 'Online Programs', desc: 'Adapted to global changes by launching online English learning programs for remote students.' },
  { year: '2023', title: 'Renewed Vision', desc: 'Relaunched with updated curriculum, modern facilities, and a renewed commitment to excellence.' },
];

export default function History() {
  return (
    <Layout title="History">
      <PageHeader
        title="Our History"
        description="The journey of CIJ Academy"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'History' },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Our Journey</h2>
            <p>
              CIJ Academy has been at the forefront of English language education in Cebu
              since its founding. Over the years, we have grown from a small language school
              into a recognized international academy serving students from across the globe.
            </p>
          </div>

          <div style={{ maxWidth: 700, margin: '40px auto' }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{
                display: 'flex',
                gap: 24,
                marginBottom: 32,
                position: 'relative',
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 80,
                  textAlign: 'right',
                  paddingTop: 4,
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}>{m.year}</span>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid var(--primary-light)',
                    flexShrink: 0,
                    marginTop: 6,
                  }}></div>
                  {i < milestones.length - 1 && (
                    <div style={{
                      width: 2,
                      flex: 1,
                      background: 'var(--gray-300)',
                      marginTop: 4,
                    }}></div>
                  )}
                </div>
                <div style={{
                  background: 'var(--white)',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)',
                  flex: 1,
                }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 6 }}>{m.title}</h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
