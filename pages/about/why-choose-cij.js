import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const reasons = [
  { icon: '👨‍🏫', title: 'Professional Instructors', desc: 'Our teachers are highly trained professionals with years of experience in English language education. Each instructor is dedicated to helping students achieve their learning goals.' },
  { icon: '📖', title: 'Customized Curriculum', desc: 'We offer personalized learning plans tailored to each student\'s level, goals, and learning style. Our curriculum is regularly updated to reflect the latest teaching methodologies.' },
  { icon: '🏫', title: 'Modern Facilities', desc: 'Our campus features modern classrooms, comfortable dormitories, a cafeteria, swimming pool, and recreational areas to ensure a comfortable learning environment.' },
  { icon: '🌴', title: 'Prime Location in Cebu', desc: 'Located in the heart of Cebu, students enjoy a safe and vibrant environment with easy access to beaches, shopping, and cultural attractions.' },
  { icon: '🤝', title: 'Small Class Sizes', desc: 'We maintain small class sizes to ensure personalized attention and maximize interaction between students and teachers.' },
  { icon: '🎯', title: 'Proven Track Record', desc: 'Our students consistently achieve significant improvements in their English proficiency, with many going on to succeed in international exams and careers.' },
];

export default function WhyChooseCIJ() {
  return (
    <Layout title="Why Choose CIJ">
      <PageHeader
        title="Why Choose CIJ"
        description="Discover what makes us different"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Why Choose CIJ' },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>The CIJ Advantage</h2>
            <p>Here are the reasons why students from around the world choose CIJ Academy.</p>
            <span className="accent-line"></span>
          </div>
          <div className="feature-grid">
            {reasons.map((r) => (
              <div className="feature-item" key={r.title}>
                <div className="feature-icon">{r.icon}</div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 32,
            textAlign: 'center',
          }}>
            {[
              { num: '10+', label: 'Years of Experience' },
              { num: '5,000+', label: 'Graduates' },
              { num: '20+', label: 'Nationalities' },
              { num: '50+', label: 'Expert Teachers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{stat.num}</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.95rem', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
