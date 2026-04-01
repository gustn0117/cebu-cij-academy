import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { JuniorProgram } from '@/components/sections/ProgramsSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function JuniorPage() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.junior || 'Junior'}>
      <PageHeader
        title={t.nav.junior || 'Junior'}
        description={t.prog?.subtitle || 'Explore our English programs'}
        breadcrumbs={[
          { label: t.nav.programs, href: '/programs/semi-sparta' },
          { label: t.nav.junior || 'Junior' },
        ]}
      />
      <JuniorProgram />
    </Layout>
  );
}
