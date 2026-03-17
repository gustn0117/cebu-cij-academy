import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Evaluation() {
  const { t } = useLanguage();
  const ev = t.comm?.evaluation || {};

  return (
    <Layout title={ev.pageTitle || 'Evaluation Report'}>
      <PageHeader
        title={ev.pageTitle || 'Evaluation Report'}
        description={ev.pageSub || 'Student progress and evaluation reports'}
        breadcrumbs={[
          { label: t.nav.community, href: '/community' },
          { label: ev.pageTitle || 'Evaluation Report' },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="eval-wrapper">
            <div className="eval-info">
              <div className="eval-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h2>{ev.heading || 'Student Evaluation Reports'}</h2>
              <p>{ev.desc || 'Evaluation reports are provided to parents and students to track academic progress during their study at CIJ Academy. Reports include assessments of speaking, listening, reading, and writing skills.'}</p>
              <div className="eval-features">
                <div className="eval-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>{ev.feat1 || 'Weekly progress assessments'}</span>
                </div>
                <div className="eval-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>{ev.feat2 || 'Detailed skill-by-skill breakdown'}</span>
                </div>
                <div className="eval-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>{ev.feat3 || 'Teacher recommendations & feedback'}</span>
                </div>
                <div className="eval-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>{ev.feat4 || 'Sent to parents via email or agent'}</span>
                </div>
              </div>
              <p className="eval-contact">{ev.contact || 'For evaluation report inquiries, please contact your agent or the CIJ Academy office.'}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
