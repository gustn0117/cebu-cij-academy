import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { FamilyProgram } from '@/components/sections/ProgramsSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function FamilyPage() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.family || 'Family'}>
      <PageHeader
        title={t.nav.family || 'Family'}
        description={t.prog?.subtitle || 'Explore our English programs'}
        breadcrumbs={[
          { label: t.nav.programs, href: '/programs/semi-sparta' },
          { label: t.nav.family || 'Family' },
        ]}
        backgroundImage="/images/headers/family.svg"
      />
      <FamilyProgram />
    </Layout>
  );
}
