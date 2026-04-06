import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function Facilities() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav.facilities}>
      <PageHeader
        title={t.nav.facilities}
        description={t.fac?.subtitle || 'Our campus facilities'}
        breadcrumbs={[{ label: t.nav.facilities }]}
        backgroundImage="/images/headers/facility.svg"
      />
      <FacilitiesSection />
    </Layout>
  );
}
