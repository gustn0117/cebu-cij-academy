import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const programs = [
  {
    title: 'ESL Program',
    href: '/programs/esl',
    tag: 'Most Popular',
    desc: 'Our comprehensive English as a Second Language program covers all four skills: speaking, listening, reading, and writing.',
  },
  {
    title: 'IELTS Program',
    href: '/programs/ielts',
    tag: 'Exam Prep',
    desc: 'Intensive IELTS preparation course designed to help students achieve their target band score.',
  },
  {
    title: 'TOEIC Program',
    href: '/programs/toeic',
    tag: 'Exam Prep',
    desc: 'Specialized TOEIC preparation program focusing on business communication and test strategies.',
  },
  {
    title: 'Business English',
    href: '/programs/business',
    tag: 'Professional',
    desc: 'Professional English course tailored for business professionals and corporate communications.',
  },
];

export default function Programs() {
  return (
    <Layout title="Programs">
      <PageHeader
        title="Programs"
        description="Explore our diverse English learning programs"
        breadcrumbs={[{ label: 'Programs' }]}
      />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Programs</h2>
            <p>Choose the program that best fits your learning goals and schedule.</p>
            <span className="accent-line"></span>
          </div>
          <div className="card-grid">
            {programs.map((p) => (
              <Link href={p.href} key={p.title} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-image">
                    {/* 이미지 나중에 교체 */}
                    <span>Image Placeholder</span>
                  </div>
                  <div className="card-body">
                    <span className="card-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
