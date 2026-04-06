import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { SemiSpartaProgram } from '@/components/sections/ProgramsSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function SemiSpartaPage() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.semiSparta || 'Semi Sparta'}>
      <PageHeader
        title={t.nav.semiSparta || 'Semi Sparta'}
        description={t.prog?.subtitle || 'Explore our English programs'}
        breadcrumbs={[
          { label: t.nav.programs, href: '/programs/semi-sparta' },
          { label: t.nav.semiSparta || 'Semi Sparta' },
        ]}
        backgroundImage="/images/headers/semisparta.svg"
      />
      <SemiSpartaProgram />
    </Layout>
  );
}
