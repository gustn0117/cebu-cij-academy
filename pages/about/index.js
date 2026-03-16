import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const aboutPages = [
  {
    title: 'Greeting',
    href: '/about/greeting',
    desc: 'A warm welcome message from the CIJ Academy director and our vision for English education.',
  },
  {
    title: 'History',
    href: '/about/history',
    desc: 'Learn about the journey and milestones of CIJ Academy since its establishment.',
  },
  {
    title: 'Why Choose CIJ',
    href: '/about/why-choose-cij',
    desc: 'Discover the unique advantages and strengths that set CIJ Academy apart.',
  },
];

export default function About() {
  return (
    <Layout title="About Us">
      <PageHeader
        title="About Us"
        description="Learn more about CIJ Academy and our mission"
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {aboutPages.map((page) => (
              <Link href={page.href} key={page.title} style={{ textDecoration: 'none' }}>
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
