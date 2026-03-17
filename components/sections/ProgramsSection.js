import { useLanguage } from '@/lib/LanguageContext';
import { programTranslations } from '@/lib/translations/programs';

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
  const { t, lang } = useLanguage();
  const pd = programTranslations[lang] || programTranslations.en;

  const programs = [
    {
      id: 'esl',
      features: pd.esl.features,
      schedule: pd.esl.schedule,
      title: t.nav.eslProgram,
      tag: t.prog.mostPopular,
      description: t.prog.eslDesc,
      alt: false,
    },
    {
      id: 'ielts',
      features: pd.ielts.features,
      schedule: pd.ielts.schedule,
      title: t.nav.ieltsProgram,
      tag: t.prog.examPrep,
      description: t.prog.ieltsDesc,
      alt: true,
    },
    {
      id: 'toeic',
      features: pd.toeic.features,
      schedule: pd.toeic.schedule,
      title: t.nav.toeicProgram,
      tag: t.prog.examPrep,
      description: t.prog.toeicDesc,
      alt: false,
    },
    {
      id: 'business',
      features: pd.business.features,
      schedule: pd.business.schedule,
      title: t.nav.businessEnglish,
      tag: t.prog.professional,
      description: t.prog.bizDesc,
      alt: true,
    },
  ];

  return (
    <>
      <div id="programs" className="section-divider">
        <div className="container">
          <h2>{t.nav.programs}</h2>
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
