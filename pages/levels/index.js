import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Levels() {
  const { t } = useLanguage();

  const levels = [
    { slug: 'kinder', title: t.lvl.kinderTitle, age: t.lvl.kinderAge, color: '#FF6B6B', desc: t.lvl.kinderDesc },
    { slug: 'junior-a', title: t.lvl.jaTitle, age: t.lvl.jaAge, color: '#4ECDC4', desc: t.lvl.jaDesc },
    { slug: 'junior-b', title: t.lvl.jbTitle, age: t.lvl.jbAge, color: '#45B7D1', desc: t.lvl.jbDesc },
    { slug: 'junior-c', title: t.lvl.jcTitle, age: t.lvl.jcAge, color: '#96CEB4', desc: t.lvl.jcDesc },
    { slug: 'adult', title: t.lvl.adultTitle, age: t.lvl.adultAge, color: '#0057B8', desc: t.lvl.adultDesc },
  ];

  return (
    <Layout title={t.lvl.title}>
      <PageHeader
        title={t.lvl.title}
        description={t.lvl.subtitle}
        breadcrumbs={[{ label: t.nav.levels }]}
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
