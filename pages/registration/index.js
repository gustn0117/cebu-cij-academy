import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import RegistrationSection from '@/components/sections/RegistrationSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function Registration() {
  const { t } = useLanguage();

  return (
    <Layout title={t.nav?.registration || 'Registration'}>
      <PageHeader
        title={t.nav?.registration || 'Registration'}
        description={t.reg?.howToRegSub || 'How to Register & School Regulations'}
        breadcrumbs={[{ label: t.nav?.registration || 'Registration' }]}
        backgroundImage="/images/headers/registration.svg"
      />
      <RegistrationSection />
    </Layout>
  );
}
