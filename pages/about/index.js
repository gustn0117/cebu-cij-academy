import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const aboutPages = [
    {
      title: t.nav.greeting,
      href: '/about/greeting',
      desc: t.about.greetingDesc,
    },
    {
      title: t.nav.history,
      href: '/about/history',
      desc: t.about.historyDesc,
    },
    {
      title: t.nav.whyChooseCij,
      href: '/about/why-choose-cij',
      desc: t.about.whyDesc,
    },
  ];

  return (
    <Layout title={t.about.title}>
      <PageHeader
        title={t.about.title}
        description={t.about.subtitle}
        breadcrumbs={[{ label: t.about.title }]}
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {aboutPages.map((page) => (
              <Link href={page.href} key={page.href} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-image">
                    {/* 이미지 나중에 교체 */}
                    <span>Image Placeholder</span>
                  </div>
                  <div className="card-body">
                    <h3>{page.title}</h3>
                    <p>{page.desc}</p>
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
