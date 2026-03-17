import { useLanguage } from '@/lib/LanguageContext';

const programData = {
  esl: {
    id: 'esl',
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
    id: 'ielts',
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
    id: 'toeic',
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
    id: 'business',
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

function ProgramSubSection({ id, title, tag, description, features, schedule, alt, t }) {
  return (
    <section id={id} className={alt ? 'section section-alt' : 'section'}>
      <div className="container">
        {/* Program Title & Description */}
        <div className="section-title">
          <span className="card-tag">{tag}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <span className="accent-line"></span>
        </div>

        {/* Features Grid */}
        <div className="content-block">
          <h3>{t.prog.features}</h3>
          <div className="card-grid">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="card-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="content-block" style={{ marginTop: '2rem' }}>
          <h3>{t.prog.schedule}</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>{t.prog.time}</th>
                <th>{t.prog.class}</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>{s.time}</td>
                  <td>{s.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            {t.prog.scheduleNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    {
      ...programData.esl,
      title: t.nav.eslProgram,
      tag: t.prog.mostPopular,
      description: t.prog.eslDesc,
      alt: false,
    },
    {
      ...programData.ielts,
      title: t.nav.ieltsProgram,
      tag: t.prog.examPrep,
      description: t.prog.ieltsDesc,
      alt: true,
    },
    {
      ...programData.toeic,
      title: t.nav.toeicProgram,
      tag: t.prog.examPrep,
      description: t.prog.toeicDesc,
      alt: false,
    },
    {
      ...programData.business,
      title: t.nav.businessEnglish,
      tag: t.prog.professional,
      description: t.prog.bizDesc,
      alt: true,
    },
  ];

  return (
    <>
      <div id="programs" style={{ padding: '60px 0 20px', textAlign: 'center', background: 'var(--dark)', color: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>{t.nav.programs}</h2>
        </div>
      </div>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.prog.heading}</h2>
            <p>{t.prog.desc}</p>
            <span className="accent-line"></span>
          </div>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((p) => (
        <ProgramSubSection
          key={p.id}
          id={p.id}
          title={p.title}
          tag={p.tag}
          description={p.description}
          features={p.features}
          schedule={p.schedule}
          alt={p.alt}
          t={t}
        />
      ))}
    </>
  );
}
