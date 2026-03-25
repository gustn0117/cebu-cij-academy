import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ProgramsSection from '@/components/sections/ProgramsSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function Programs() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.programs}>
      <PageHeader
        title={t.nav.programs}
        description={t.prog?.subtitle || 'Explore our English programs'}
        breadcrumbs={[{ label: t.nav.programs }]}
      />
      <ProgramsSection />
    </Layout>
  );
}
