import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const programData = {
  esl: {
    title: 'ESL Program',
    fullTitle: 'English as a Second Language',
    desc: 'Our most popular program designed for students who want to improve their overall English proficiency.',
    features: [
      { title: 'One-on-One Classes', desc: '4 hours of personalized instruction with a dedicated teacher tailored to your specific needs and goals.' },
      { title: 'Group Classes', desc: '2 hours of interactive group sessions to practice communication skills with fellow students.' },
      { title: 'Self-Study', desc: '2 hours of guided self-study time with access to our learning resources and library.' },
      { title: 'Optional Classes', desc: 'Additional elective classes including pronunciation, vocabulary building, and grammar workshops.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Class (Speaking)' },
      { time: '09:00 - 09:50', class: '1:1 Class (Listening)' },
      { time: '10:00 - 10:50', class: '1:1 Class (Reading)' },
      { time: '11:00 - 11:50', class: '1:1 Class (Writing)' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Class' },
      { time: '14:00 - 14:50', class: 'Group Class' },
      { time: '15:00 - 16:50', class: 'Self Study / Optional Class' },
    ],
  },
  ielts: {
    title: 'IELTS Program',
    fullTitle: 'IELTS Preparation Course',
    desc: 'An intensive program designed for students preparing for the IELTS examination.',
    features: [
      { title: 'IELTS Speaking', desc: 'Practice with mock interviews and feedback to improve your speaking band score.' },
      { title: 'IELTS Writing', desc: 'Task 1 and Task 2 intensive training with detailed feedback on every essay.' },
      { title: 'IELTS Reading', desc: 'Strategies and techniques to handle various reading passage types efficiently.' },
      { title: 'IELTS Listening', desc: 'Focused listening practice with real exam materials and timed exercises.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 IELTS Speaking' },
      { time: '09:00 - 09:50', class: '1:1 IELTS Writing' },
      { time: '10:00 - 10:50', class: '1:1 IELTS Reading' },
      { time: '11:00 - 11:50', class: '1:1 IELTS Listening' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group IELTS Practice' },
      { time: '14:00 - 14:50', class: 'Mock Test / Review' },
      { time: '15:00 - 16:50', class: 'Self Study' },
    ],
  },
  toeic: {
    title: 'TOEIC Program',
    fullTitle: 'TOEIC Preparation Course',
    desc: 'Specialized program for students aiming to achieve high TOEIC scores for career advancement.',
    features: [
      { title: 'Listening Comprehension', desc: 'Master all parts of the TOEIC listening section with targeted practice materials.' },
      { title: 'Reading Comprehension', desc: 'Improve speed and accuracy for the TOEIC reading section through strategy-based training.' },
      { title: 'Business Vocabulary', desc: 'Build essential business English vocabulary commonly tested in TOEIC examinations.' },
      { title: 'Practice Tests', desc: 'Regular full-length practice tests with detailed score analysis and improvement plans.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 TOEIC Listening' },
      { time: '09:00 - 09:50', class: '1:1 TOEIC Reading' },
      { time: '10:00 - 10:50', class: '1:1 TOEIC Grammar' },
      { time: '11:00 - 11:50', class: '1:1 TOEIC Vocabulary' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Practice' },
      { time: '14:00 - 14:50', class: 'Mock Test' },
      { time: '15:00 - 16:50', class: 'Self Study / Review' },
    ],
  },
  business: {
    title: 'Business English',
    fullTitle: 'Business English Program',
    desc: 'A professional English course designed for working professionals and business executives.',
    features: [
      { title: 'Business Communication', desc: 'Develop professional communication skills for meetings, emails, and presentations.' },
      { title: 'Negotiation Skills', desc: 'Learn the language and strategies of effective business negotiation in English.' },
      { title: 'Presentation Skills', desc: 'Master the art of delivering clear and impactful business presentations.' },
      { title: 'Industry-Specific English', desc: 'Customized vocabulary and scenarios for your specific industry and role.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Business Communication' },
      { time: '09:00 - 09:50', class: '1:1 Business Writing' },
      { time: '10:00 - 10:50', class: '1:1 Presentation Skills' },
      { time: '11:00 - 11:50', class: '1:1 Negotiation English' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Discussion' },
      { time: '14:00 - 14:50', class: 'Case Study Workshop' },
      { time: '15:00 - 16:50', class: 'Self Study / Networking' },
    ],
  },
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(programData).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

export default function ProgramDetail({ slug }) {
  const { t } = useLanguage();
  const program = programData[slug];
  if (!program) return null;

  return (
    <Layout title={program.title}>
      <PageHeader
        title={program.title}
        description={program.fullTitle}
        breadcrumbs={[
          { label: t.nav.programs, href: '/programs' },
          { label: program.title },
        ]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{program.fullTitle}</h2>
            <p>{program.desc}</p>
            <p>
              {/* 임의 텍스트 - 클라이언트가 나중에 직접 수정 예정 */}
              {t.prog.scheduleNote}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.prog.features}</h2>
            <span className="accent-line"></span>
          </div>
          <div className="card-grid">
            {program.features.map((f) => (
              <div className="card" key={f.title}>
                <div className="card-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.prog.schedule}</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>{t.prog.time}</th>
                  <th>{t.prog.class}</th>
                </tr>
              </thead>
              <tbody>
                {program.schedule.map((s, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>{s.time}</td>
                    <td>{s.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
