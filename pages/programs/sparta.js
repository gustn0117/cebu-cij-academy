import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { SpartaProgram } from '@/components/sections/ProgramsSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function SpartaPage() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.sparta || 'Sparta'}>
      <PageHeader
        title={t.nav.sparta || 'Sparta'}
        description={t.prog?.subtitle || 'Explore our English programs'}
        breadcrumbs={[
          { label: t.nav.programs, href: '/programs/semi-sparta' },
          { label: t.nav.sparta || 'Sparta' },
        ]}
        backgroundImage="/images/headers/sparta.svg"
      />
      <SpartaProgram />
    </Layout>
  );
}
