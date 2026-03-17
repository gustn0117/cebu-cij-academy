import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const levelData = {
  kinder: {
    id: 'kinder',
    titleKey: 'kinderTitle',
    ageKey: 'kinderAge',
    descKey: 'kinderDesc',
    description: 'Our Kinder program is specially designed for young learners aged 4-7. We create a safe, fun, and stimulating environment where children naturally develop their English language skills through play-based learning.',
    sections: [
      {
        title: 'Program Overview',
        content: 'The Kinder program focuses on building English awareness and basic communication skills through songs, stories, games, and creative activities. Each class is designed to be engaging and age-appropriate, ensuring that young learners develop a love for the English language.',
      },
      {
        title: 'Learning Approach',
        content: 'We use a Total Physical Response (TPR) approach combined with multisensory activities. Children learn through movement, music, art, and interactive play, making the learning process natural and enjoyable.',
      },
      {
        title: 'Daily Schedule',
        content: 'Classes are structured in short, focused sessions to match young learners\' attention spans. The day includes 1:1 classes with dedicated teachers, group activities, art time, and outdoor activities.',
      },
      {
        title: 'What Students Will Learn',
        content: 'Basic greetings and self-introduction, alphabet and phonics, numbers, colors, and shapes, simple sentences and everyday vocabulary, songs and rhymes in English, basic reading readiness skills.',
      },
    ],
    schedule: [
      { time: '09:00 - 09:40', class: '1:1 Class (Phonics & Alphabet)' },
      { time: '09:50 - 10:30', class: '1:1 Class (Speaking & Vocabulary)' },
      { time: '10:40 - 11:20', class: 'Group Activity (Songs & Games)' },
      { time: '11:30 - 12:00', class: 'Art & Creative Time' },
      { time: '12:00 - 13:00', class: 'Lunch & Rest' },
      { time: '13:00 - 13:40', class: '1:1 Class (Story Time)' },
      { time: '13:50 - 14:30', class: 'Group Activity (Outdoor Play)' },
    ],
  },
  'junior-a': {
    id: 'junior-a',
    titleKey: 'jaTitle',
    ageKey: 'jaAge',
    descKey: 'jaDesc',
    description: 'The Junior A program is designed for children aged 8-11 who are building their English foundations. Students develop core language skills through interactive and engaging lessons.',
    sections: [
      {
        title: 'Program Overview',
        content: 'Junior A students work on developing all four language skills: speaking, listening, reading, and writing. The program uses a balanced approach that combines structured learning with creative projects.',
      },
      {
        title: 'Learning Approach',
        content: 'Our communicative approach emphasizes practical English use. Students engage in real-life scenarios, role-plays, and project-based learning to develop their English skills naturally.',
      },
      {
        title: 'Curriculum Focus',
        content: 'The curriculum covers essential grammar structures, expanding vocabulary, reading comprehension, basic writing skills, and oral presentation practice. Students also participate in fun activities like show-and-tell and group projects.',
      },
      {
        title: 'What Students Will Learn',
        content: 'Expanded vocabulary for daily communication, basic grammar structures and sentence patterns, reading comprehension strategies, simple paragraph writing, confident speaking and listening skills.',
      },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Class (Speaking)' },
      { time: '09:00 - 09:50', class: '1:1 Class (Reading)' },
      { time: '10:00 - 10:50', class: '1:1 Class (Writing)' },
      { time: '11:00 - 11:50', class: 'Group Class (Activities)' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: '1:1 Class (Grammar)' },
      { time: '14:00 - 14:50', class: 'Group Class (Projects)' },
      { time: '15:00 - 15:50', class: 'Self Study / Homework' },
    ],
  },
  'junior-b': {
    id: 'junior-b',
    titleKey: 'jbTitle',
    ageKey: 'jbAge',
    descKey: 'jbDesc',
    description: 'Junior B is an intermediate program for students aged 11-14 who are ready to develop more advanced English communication skills and academic language proficiency.',
    sections: [
      {
        title: 'Program Overview',
        content: 'This program bridges the gap between basic English and advanced academic English. Students develop critical thinking skills while improving their language proficiency across all skill areas.',
      },
      {
        title: 'Learning Approach',
        content: 'Task-based learning and content-integrated language instruction help students use English as a tool for learning about the world. Discussion-based classes develop higher-order thinking skills.',
      },
      {
        title: 'Curriculum Focus',
        content: 'Advanced grammar and complex sentence structures, essay writing and structured paragraphs, debate and discussion skills, reading analysis and comprehension, presentation and public speaking.',
      },
      {
        title: 'What Students Will Learn',
        content: 'Intermediate to advanced grammar structures, essay writing for various purposes, analytical reading skills, fluent conversational English, academic vocabulary and expressions.',
      },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Class (Speaking & Discussion)' },
      { time: '09:00 - 09:50', class: '1:1 Class (Reading & Analysis)' },
      { time: '10:00 - 10:50', class: '1:1 Class (Writing & Essay)' },
      { time: '11:00 - 11:50', class: '1:1 Class (Grammar)' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Class (Debate)' },
      { time: '14:00 - 14:50', class: 'Group Class (Presentation)' },
      { time: '15:00 - 16:50', class: 'Self Study / Optional Class' },
    ],
  },
  'junior-c': {
    id: 'junior-c',
    titleKey: 'jcTitle',
    ageKey: 'jcAge',
    descKey: 'jcDesc',
    description: 'Junior C is our advanced program for older teenagers aged 14 and above. This program prepares students for academic success and international exam readiness.',
    sections: [
      {
        title: 'Program Overview',
        content: 'Designed for mature junior students, this program focuses on advanced academic English, test preparation skills, and university readiness. Students develop the language skills needed for academic excellence.',
      },
      {
        title: 'Learning Approach',
        content: 'Academic rigor meets practical application. Students engage in university-style discussions, research projects, and formal writing tasks while receiving personalized attention from experienced instructors.',
      },
      {
        title: 'Curriculum Focus',
        content: 'Advanced academic writing (essays, reports, research), critical reading and textual analysis, formal presentation skills, exam preparation strategies (IELTS/TOEFL basics), academic vocabulary development.',
      },
      {
        title: 'What Students Will Learn',
        content: 'Advanced grammar and academic writing, research and analytical skills, exam preparation strategies, professional presentation skills, university-level discussion participation.',
      },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Class (Academic Speaking)' },
      { time: '09:00 - 09:50', class: '1:1 Class (Academic Writing)' },
      { time: '10:00 - 10:50', class: '1:1 Class (Reading & Analysis)' },
      { time: '11:00 - 11:50', class: '1:1 Class (Grammar & Vocabulary)' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Class (Discussion)' },
      { time: '14:00 - 14:50', class: 'Group Class (Exam Prep)' },
      { time: '15:00 - 16:50', class: 'Self Study / Research Project' },
    ],
  },
  adult: {
    id: 'adult',
    titleKey: 'adultTitle',
    ageKey: 'adultAge',
    descKey: 'adultDesc',
    description: 'Our Adult program offers flexible English courses for adults of all proficiency levels. Choose from ESL, IELTS, TOEIC, or Business English based on your goals.',
    sections: [
      {
        title: 'Program Overview',
        content: 'The Adult program is designed for university students, working professionals, and anyone looking to improve their English skills. We offer multiple program tracks to match your specific goals.',
      },
      {
        title: 'Available Tracks',
        content: 'General ESL for overall English improvement, IELTS preparation for university admission, TOEIC preparation for career advancement, Business English for professionals. Students can switch tracks during their stay.',
      },
      {
        title: 'Learning Approach',
        content: 'Adult learners benefit from a communicative approach with real-world applications. Classes focus on practical English that students can immediately apply in their studies, careers, and daily life.',
      },
      {
        title: 'What Students Will Learn',
        content: 'Fluent English communication for various contexts, academic or professional writing skills, exam strategies and techniques, business communication and etiquette, cultural awareness and global English.',
      },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Class (Core Skill 1)' },
      { time: '09:00 - 09:50', class: '1:1 Class (Core Skill 2)' },
      { time: '10:00 - 10:50', class: '1:1 Class (Core Skill 3)' },
      { time: '11:00 - 11:50', class: '1:1 Class (Core Skill 4)' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Class' },
      { time: '14:00 - 14:50', class: 'Group Class' },
      { time: '15:00 - 16:50', class: 'Self Study / Optional Class' },
    ],
  },
};

const levels = ['kinder', 'junior-a', 'junior-b', 'junior-c', 'adult'];

export default function Levels() {
  const { t } = useLanguage();

  const getTitleForLevel = (key) => t.lvl[levelData[key].titleKey];
  const getAgeForLevel = (key) => t.lvl[levelData[key].ageKey];
  const getDescForLevel = (key) => t.lvl[levelData[key].descKey];

  return (
    <Layout title={t.lvl.title}>
      <PageHeader
        title={t.lvl.title}
        description={t.lvl.subtitle}
        breadcrumbs={[{ label: t.nav.levels }]}
      />

      {/* Quick Navigation */}
      <section className="section" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {levels.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                style={{
                  padding: '10px 24px',
                  background: 'var(--neutral-100)',
                  borderRadius: 8,
                  textDecoration: 'none',
                  color: 'var(--neutral-800)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'background 0.2s',
                }}
              >
                {getTitleForLevel(key)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Level Sections */}
      {levels.map((key, levelIndex) => {
        const level = levelData[key];
        return (
          <section key={key} id={key} className={`section ${levelIndex % 2 === 1 ? 'section-alt' : ''}`}>
            <div className="container">
              <div className="content-block">
                <div style={{
                  display: 'inline-block',
                  padding: '6px 20px',
                  background: 'var(--secondary-light)',
                  color: '#8B6914',
                  borderRadius: 20,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: 20,
                }}>
                  {getAgeForLevel(key)}
                </div>
                <h2>{getTitleForLevel(key)}</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 40 }}>
                  {level.description}
                </p>

                {/* Sub-sections */}
                {level.sections.map((section, i) => (
                  <div key={i} style={{
                    marginBottom: 32,
                    padding: '24px 28px',
                    background: levelIndex % 2 === 1 ? '#fff' : 'var(--neutral-50)',
                    borderRadius: 12,
                    borderLeft: '4px solid var(--neutral-300)',
                  }}>
                    <h3 style={{ marginBottom: 12 }}>{section.title}</h3>
                    <p style={{ margin: 0, lineHeight: 1.7 }}>{section.content}</p>
                  </div>
                ))}

                {/* Schedule Table */}
                <div style={{ marginTop: 40 }}>
                  <h3 style={{ marginBottom: 16 }}>{t.prog.schedule}</h3>
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th>{t.prog.time}</th>
                        <th>{t.prog.class}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {level.schedule.map((s, i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>{s.time}</td>
                          <td>{s.class}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
}
