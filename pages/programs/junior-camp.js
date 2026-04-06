import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { JuniorCampProgram } from '@/components/sections/ProgramsSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function JuniorCampPage() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.juniorCamp || 'Junior Camp'}>
      <PageHeader
        title={t.nav.juniorCamp || 'Junior Camp'}
        description={t.prog?.subtitle || 'Explore our English programs'}
        breadcrumbs={[
          { label: t.nav.programs, href: '/programs/semi-sparta' },
          { label: t.nav.juniorCamp || 'Junior Camp' },
        ]}
        backgroundImage="/images/headers/juniorcamp.svg"
      />
      <JuniorCampProgram />
    </Layout>
  );
}
