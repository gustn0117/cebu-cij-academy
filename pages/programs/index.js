import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      title: t.nav.eslProgram,
      href: '/programs/esl',
      tag: t.prog.mostPopular,
      desc: t.prog.eslDesc,
    },
    {
      title: t.nav.ieltsProgram,
      href: '/programs/ielts',
      tag: t.prog.examPrep,
      desc: t.prog.ieltsDesc,
    },
    {
      title: t.nav.toeicProgram,
      href: '/programs/toeic',
      tag: t.prog.examPrep,
      desc: t.prog.toeicDesc,
    },
    {
      title: t.nav.businessEnglish,
      href: '/programs/business',
      tag: t.prog.professional,
      desc: t.prog.bizDesc,
    },
  ];

  return (
    <Layout title={t.prog.title}>
      <PageHeader
        title={t.prog.title}
        description={t.prog.subtitle}
        breadcrumbs={[{ label: t.nav.programs }]}
      />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.prog.heading}</h2>
            <p>{t.prog.desc}</p>
            <span className="accent-line"></span>
          </div>
          <div className="card-grid">
            {programs.map((p) => (
              <Link href={p.href} key={p.href} style={{ textDecoration: 'none' }}>
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
