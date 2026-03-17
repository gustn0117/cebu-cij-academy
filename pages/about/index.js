import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const historyData = [
    {
      year: '2025',
      events: [
        {
          title: 'July 2025 – 44th Junior and Family Camp',
          details: [
            'Welcomed international juniors from Japan, China, Taiwan, and other countries.',
            'Junior IELTS course introduced, offering targeted exam preparation.',
            'Focus on 1:1 speaking-focused classes and cultural exchange activities.',
            'Introduced new student progress evaluation system for personalized feedback.',
          ],
        },
        {
          title: 'December 2025 – 45th Winter Program',
          details: [
            'Combined intensive language classes and creative team projects.',
            'Emphasis on building confidence and practical communication skills.',
          ],
        },
      ],
    },
    {
      year: '2024',
      events: [
        {
          title: 'January 2024 – PREMIUM Campus Opened at Weber Hotel (External Dormitory Only)',
          details: [
            'Operated as an external dormitory, providing modern, safe, and comfortable accommodations.',
            'Designed to enhance the residential learning environment for students.',
          ],
        },
        {
          title: '2024 Academic Year Highlights',
          details: [
            'Introduced interactive workshops and cultural exchange programs across all courses.',
            'Continued expansion of speaking-focused 1:1 and small group classes.',
            'Winter programs included creative workshops, team-building activities, and practical English projects.',
          ],
        },
      ],
    },
    {
      year: '2023',
      events: [
        {
          title: 'January 2023 – Liloan Campus Reopening',
          details: [
            'Former SPARTA Campus renamed as Liloan Campus.',
            'Facilities fully renovated post-pandemic to modernize classrooms, dormitories, and learning spaces.',
          ],
        },
        {
          title: 'July 2023 – 41st Junior and Family Camp',
          details: [
            'Focus on speaking fluency and project-based learning.',
            'Introduced new cultural exchange programs with international students.',
          ],
        },
        {
          title: 'September 2023 – Early Childhood Program Launched',
          details: [
            'Preschool and young learner program officially started, expanding CIJ\'s offerings to younger students.',
            'Focus on fun, interactive English learning for ages 3–6.',
          ],
        },
        {
          title: 'December 2023 – 42nd Junior and Family Camp',
          details: [
            'Winter edition with creative workshops, English drama, and confidence-building activities.',
          ],
        },
      ],
    },
    {
      year: '2019',
      events: [
        {
          title: 'Campus & Program Growth',
          details: [
            'Expanded international student participation from Japan, China, and Taiwan.',
            'Introduced English drama, music workshops, and collaborative learning projects.',
          ],
        },
        {
          title: '32nd & 33rd Junior and Family Camps',
          details: [
            'Maintained 1:1 speaking-focused classes.',
            'Supported language skills development and cultural exchange.',
          ],
        },
      ],
    },
    {
      year: '2018',
      events: [
        {
          title: 'July 2018 – 30th Junior and Family Camp',
          details: [
            'Taiwanese juniors began joining the academy programs.',
          ],
        },
        {
          title: 'September 2018 – PREMIUM Campus Expansion',
          details: [
            'Expanded facilities with larger classrooms, updated dormitories, and recreational areas.',
          ],
        },
      ],
    },
    {
      year: '2017–2016',
      events: [
        {
          title: 'Campus Expansion & International Programs',
          details: [
            'SPARTA Campus programs expanded with Japanese and Chinese juniors joining.',
            'Focus on speaking skills and interactive learning.',
          ],
        },
      ],
    },
    {
      year: '2014',
      events: [
        {
          title: 'December 2014 – SPARTA Campus Opened in Liloan, Cebu',
          details: [
            'Established an intensive English learning environment with residential facilities.',
          ],
        },
      ],
    },
    {
      year: '2013–2012',
      events: [
        {
          title: null,
          details: [
            'January 2013 – Featured in a Korean newspaper for supporting underprivileged Kopinos.',
            'December 2013 – 21st Junior and Family Camp',
            'December 2012 – 20th Junior and Family Camp',
          ],
        },
        {
          title: 'September 2012 – CIJ Academy Opened',
          details: [
            'Laid foundation for speaking-focused English programs.',
          ],
        },
      ],
    },
    {
      year: '2010–2008',
      events: [
        {
          title: 'December 2010 – 18th Junior and Family Camp & Online Learning Launch',
          details: [
            'Introduced E-learning platform for flexible home study.',
          ],
        },
        {
          title: null,
          details: [
            'December 2008 – 12th Junior and Family Camp',
          ],
        },
        {
          title: 'January 2008 – Business contract with Jo Seon Seng Private School',
          details: [
            'Strengthened international partnerships and program expansion.',
          ],
        },
      ],
    },
    {
      year: '2003',
      events: [
        {
          title: null,
          details: [
            'July 2003 – Junior School Opened',
          ],
        },
        {
          title: 'December 2003 – First Junior and Family Camp',
          details: [
            'Marked the beginning of CIJ\'s residential and international student programs.',
          ],
        },
      ],
    },
  ];

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Stunning Campuses with Ocean Views',
      content: (
        <>
          <ul>
            <li><strong>Main Campus</strong> – resort-style environment right by the sea, with luxurious dormitories, professional management, and a swimming pool.</li>
            <li><strong>Premium Campus</strong> – modern hotel facilities with breathtaking ocean views, providing the ultimate comfort for your study-abroad experience.</li>
          </ul>
          <p style={{ marginTop: 12, fontStyle: 'italic', color: 'var(--gray-600)' }}>
            Both campuses let students focus fully on learning English while enjoying a safe, relaxing, and inspiring environment.
          </p>
        </>
      ),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: 'Speaking-Focused Curriculum',
      content: (
        <ul>
          <li>Personalized 1:1 lessons tailored to each student's level.</li>
          <li>Intensive support ensures real progress in English speaking skills, even during short-term programs.</li>
        </ul>
      ),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: 'Engaging Academic Activities',
      content: (
        <ul>
          <li>Participate in English speech contests, presentations, quizzes, and interactive learning challenges.</li>
          <li>Learning is practical, fun, and confidence-boosting.</li>
        </ul>
      ),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Active & Cultural Experiences',
      content: (
        <>
          <ul>
            <li><strong>Saturday outdoor activities:</strong> explore Cebu's culture, local life, and famous landmarks.</li>
            <li><strong>Indoor activities:</strong> Movie Nights, evening Zumba classes, and group challenges.</li>
          </ul>
          <p style={{ marginTop: 12, fontStyle: 'italic', color: 'var(--gray-600)' }}>
            A perfect balance of learning, fun, and fitness while practicing English naturally.
          </p>
        </>
      ),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'A Truly International Community',
      content: (
        <ul>
          <li>Live and study with students from Japan, China, Taiwan and beyond.</li>
          <li>Immerse yourself in English every day and gain real cross-cultural experiences.</li>
        </ul>
      ),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Excellence in Teaching',
      content: (
        <ul>
          <li>Our instructors undergo rigorous, systematic training.</li>
          <li>Continuous evaluation ensures every teacher delivers high-quality, personalized English education.</li>
        </ul>
      ),
    },
  ];

  return (
    <Layout title={t.about.title}>
      <PageHeader
        title={t.about.title}
        description={t.about.subtitle}
        breadcrumbs={[{ label: t.nav.aboutUs }]}
      />

      {/* Greeting Section */}
      <section id="greeting" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.greet.title}</h2>
            <span className="accent-line"></span>
          </div>
          <div className="content-block">
            <h2>Welcome to CIJ Academy&amp;School</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--gray-500)', marginBottom: 32 }}>
              Where English Becomes Your Power
            </p>

            <p>
              English is more than a language.<br />
              It is a bridge to the world, a key to new opportunities.
            </p>

            <p>
              At CIJ Academy&amp;School, we turn English into an <strong>experience of confidence and growth</strong>, not just a subject to study.
            </p>

            <p>
              We focus on what truly matters:<br />
              <strong>Real Speaking.</strong><br />
              <strong>Visible Progress.</strong><br />
              <strong>Tangible Results.</strong>
            </p>

            <p>
              Through intensive 1:1 classes,<br />
              each student receives personalized instruction tailored to their goals and level.<br />
              Here, students don't just memorize sentences—they learn to express their thoughts clearly in English.
            </p>

            <p>
              In a vibrant international environment, students from different countries study and live together.<br />
              English goes beyond the classroom and becomes part of everyday life,<br />
              while diverse cultures and experiences naturally expand global awareness.
            </p>

            <p>
              With warm guidance, a structured system, and a safe, comfortable living environment,<br />
              we believe in the potential of every student.
            </p>

            <p>
              A place where English is no longer intimidating,<br />
              where challenges lead to growth.
            </p>

            <p>
              <strong>Start your journey of transformation at CIJ Academy&amp;School.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.hist.title}</h2>
            <span className="accent-line"></span>
          </div>

          <div style={{ maxWidth: 800, margin: '40px auto' }}>
            {historyData.map((item, i) => (
              <div key={item.year} style={{
                display: 'flex',
                gap: 24,
                marginBottom: 40,
                position: 'relative',
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 100,
                  textAlign: 'right',
                  paddingTop: 4,
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}>{item.year}</span>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid var(--primary-light)',
                    flexShrink: 0,
                    marginTop: 6,
                  }}></div>
                  {i < historyData.length - 1 && (
                    <div style={{
                      width: 2,
                      flex: 1,
                      background: 'var(--gray-300)',
                      marginTop: 4,
                    }}></div>
                  )}
                </div>
                <div style={{
                  background: 'var(--white)',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)',
                  flex: 1,
                }}>
                  {item.events.map((event, j) => (
                    <div key={j} style={{ marginBottom: j < item.events.length - 1 ? 20 : 0 }}>
                      {event.title && (
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 8 }}>{event.title}</h4>
                      )}
                      <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                        {event.details.map((detail, k) => (
                          <li key={k} style={{ marginBottom: 4 }}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CIJ Section */}
      <section id="why-choose-cij" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.why.title}</h2>
            <span className="accent-line"></span>
          </div>

          <div className="content-block" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p>
              At CIJ, it's not just about studying English—it's about growing, exploring, and transforming into a confident global communicator.
            </p>
            <p>
              From breathtaking seaside campuses to speaking-focused lessons, academic challenges, and cultural experiences, every element is designed to maximize your learning and personal growth.
            </p>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', marginTop: 16 }}>
              Learn. Speak. Live English—The CIJ Way
            </p>
          </div>

          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-item" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <div>{f.content}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 60,
            padding: '32px',
            background: 'var(--primary-light)',
            borderRadius: 'var(--radius)',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary)' }}>
              Join CIJ Academy&amp;School and turn English from a barrier into your superpower for global success.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
