import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const levels = [
  { slug: 'kinder', title: 'Kinder Level', age: '4-7 years', color: '#FF6B6B', desc: 'A fun and engaging program designed specifically for young learners. Through play-based activities, songs, and interactive games, children develop foundational English skills in a nurturing environment.' },
  { slug: 'junior-a', title: 'Junior A Level', age: '8-11 years', color: '#4ECDC4', desc: 'Building strong English foundations through structured lessons that balance academic learning with creative activities. Students develop reading, writing, speaking, and listening skills.' },
  { slug: 'junior-b', title: 'Junior B Level', age: '11-14 years', color: '#45B7D1', desc: 'An intermediate program focusing on developing academic English skills, critical thinking, and effective communication for pre-teens and young teenagers.' },
  { slug: 'junior-c', title: 'Junior C Level', age: '14+ years', color: '#96CEB4', desc: 'An advanced program preparing older teenagers for academic excellence with intensive English training, exam preparation, and university readiness skills.' },
  { slug: 'adult', title: 'Adult Level', age: '18+ years', color: '#0057B8', desc: 'Comprehensive English programs for adults including ESL, IELTS, TOEIC, and Business English. Flexible programs designed for working professionals and university students.' },
];

export default function Levels() {
  return (
    <Layout title="Levels">
      <PageHeader
        title="Levels"
        description="Age-appropriate programs for every learner"
        breadcrumbs={[{ label: 'Levels' }]}
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {levels.map((level) => (
              <Link href={`/levels/${level.slug}`} key={level.slug} style={{ textDecoration: 'none' }}>
                <div className="level-card" style={{ borderLeftColor: level.color }}>
                  <span className="age-badge">{level.age}</span>
                  <h3>{level.title}</h3>
                  <p>{level.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
