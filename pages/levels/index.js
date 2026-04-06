import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const stageHeaderStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  marginTop: 48,
  marginBottom: 16,
  paddingBottom: 12,
  borderBottom: '3px solid var(--neutral-800)',
};

const levelHeaderStyle = {
  fontSize: '1.15rem',
  fontWeight: 700,
  marginTop: 32,
  marginBottom: 12,
};

const categoryStyle = {
  fontWeight: 600,
  fontSize: '1rem',
  marginTop: 20,
  marginBottom: 8,
};

const bulletListStyle = {
  margin: '0 0 12px 0',
  paddingLeft: 24,
  lineHeight: 1.8,
};

const levels = ['kinder', 'junior-a', 'junior-b', 'junior-c', 'adult'];

const levelLabels = {
  kinder: { title: 'KINDER', age: '4 to 7 Years Old' },
  'junior-a': { title: 'JUNIOR A', age: '8 to 11 Years Old' },
  'junior-b': { title: 'JUNIOR B', age: '11 to 14 Years Old' },
  'junior-c': { title: 'JUNIOR C', age: '14 & Above Years Old' },
  adult: { title: 'ADULT', age: '18 Years Old and Above' },
};

export default function Levels() {
  const { t } = useLanguage();

  return (
    <Layout title={t.lvl.title}>
      <PageHeader
        title={t.lvl.title}
        description={t.lvl.subtitle}
        breadcrumbs={[{ label: t.nav.levels }]}
        backgroundImage="/images/headers/level.svg"
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
                {levelLabels[key].title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KINDER ===================== */}
      <section id="kinder" className="section">
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
              4 to 7 Years Old
            </div>
            <h2>KINDER Program</h2>

            {/* Level Scale Table */}
            <h3 style={{ marginTop: 32, marginBottom: 16 }}>Level Scale</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Internal Score</th>
                    <th>CEFR Alignment</th>
                    <th>Cambridge YLE</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K1 &ndash; Early Explorer</td>
                    <td>0&ndash;25</td>
                    <td>Not Measurable</td>
                    <td>Not Measurable</td>
                    <td>Pre-literacy stage (alphabet not established)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K2 &ndash; Growing Communicator</td>
                    <td>26&ndash;50</td>
                    <td>Below Pre-A1</td>
                    <td>Not Measurable</td>
                    <td>Oral exposure stage, limited word production</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K3 &ndash; Confident Speaker</td>
                    <td>51&ndash;75</td>
                    <td>Pre-A1 (Partial)</td>
                    <td>Pre A1 Starters (Preparation)</td>
                    <td>Can respond orally, limited reading ability</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K4 &ndash; Junior Ready curriculum</td>
                    <td>76&ndash;100</td>
                    <td>Pre-A1 (Complete) / A1 Entry</td>
                    <td>Pre A1 Starters</td>
                    <td>Ready to enter structured Junior curriculum</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Evaluation Index */}
            <h3 style={{ marginTop: 48, marginBottom: 16 }}>Evaluation Index by Level</h3>

            {/* CLASS ELEPHANT */}
            <div style={stageHeaderStyle}>CLASS ELEPHANT &ndash; Beginner Foundation Stage</div>

            {/* K1 */}
            <h4 style={levelHeaderStyle}>LEVEL K1 &ndash; Early Explorer (Score 0&ndash;25)</h4>

            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Responds to simple gestures, single words, or short phrases</li>
              <li>Can follow very basic instructions with teacher support</li>
            </ul>

            <p style={categoryStyle}>Creativity Development</p>
            <ul style={bulletListStyle}>
              <li>Participates in sensory play, music, and movement activities.</li>
              <li>Shows curiosity and interest in creative tasks</li>
            </ul>

            <p style={categoryStyle}>Social Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Follows simple classroom rules with guidance</li>
              <li>Engages in group activities with teacher assistance</li>
            </ul>

            <p style={categoryStyle}>Thinking Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Recognizes colors, basic shapes, and simple numbers (1&ndash;10)</li>
              <li>Explores cause-and-effect relationships through play</li>
            </ul>

            <p style={categoryStyle}>Expression Development</p>
            <ul style={bulletListStyle}>
              <li>Uses single words or short phrases to express needs (&ldquo;water,&rdquo; &ldquo;help&rdquo;)</li>
              <li>Responds to songs, chants, and simple role-play</li>
            </ul>

            <p style={categoryStyle}>Cognitive Development</p>
            <ul style={bulletListStyle}>
              <li>Engages actively in sensory experiences</li>
              <li>Demonstrates emerging ability to match, sort, and identify objects</li>
            </ul>

            {/* K2 */}
            <h4 style={levelHeaderStyle}>LEVEL K2 &ndash; Growing Communicator (Score 26&ndash;50)</h4>

            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~100&ndash;300 words</li>
              <li>Can answer simple questions (&ldquo;What is this?&rdquo;) with 2&ndash;3 word phrases</li>
              <li>Begins to initiate basic interactions</li>
            </ul>

            <p style={categoryStyle}>Creativity Development</p>
            <ul style={bulletListStyle}>
              <li>Expresses ideas through drawing and guided storytelling</li>
              <li>Participates actively in music, rhythm, and movement activities</li>
            </ul>

            <p style={categoryStyle}>Social Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Takes turns in activities</li>
              <li>Interacts with peers using simple English phrases</li>
            </ul>

            <p style={categoryStyle}>Thinking Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Counts 1&ndash;20 with guidance</li>
              <li>Follows simple story sequences</li>
              <li>Demonstrates early problem-solving skills</li>
            </ul>

            <p style={categoryStyle}>Expression Development</p>
            <ul style={bulletListStyle}>
              <li>Uses short sentences to describe familiar objects or routines</li>
              <li>Participates in guided role-play (&ldquo;I like red,&rdquo; &ldquo;This is my bag&rdquo;)</li>
            </ul>

            <p style={categoryStyle}>Cognitive Development</p>
            <ul style={bulletListStyle}>
              <li>Improves attention span and memory of words</li>
              <li>Begins to recognize patterns and categories</li>
            </ul>

            {/* CLASS WHALE */}
            <div style={stageHeaderStyle}>CLASS WHALE &ndash; Pre-Junior Preparation Stage</div>

            {/* K3 */}
            <h4 style={levelHeaderStyle}>LEVEL K3 &ndash; Confident Speaker (Score 51&ndash;75)</h4>

            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~300&ndash;600 words</li>
              <li>Speaks in short complete sentences</li>
              <li>Understands basic classroom conversations and instructions</li>
            </ul>

            <p style={categoryStyle}>Creativity Development</p>
            <ul style={bulletListStyle}>
              <li>Creates simple stories with teacher support</li>
              <li>Engages in drama and role-play activities</li>
            </ul>

            <p style={categoryStyle}>Social Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Demonstrates cooperation in group projects</li>
              <li>Interacts Shows empathy and emotional awareness</li>
              <li>Responds appropriately to social cues</li>
            </ul>

            <p style={categoryStyle}>Thinking Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Solves simple addition/subtraction problems</li>
              <li>Retells short stories in sequence</li>
              <li>Demonstrates basic logical reasoning</li>
            </ul>

            <p style={categoryStyle}>Expression Development</p>
            <ul style={bulletListStyle}>
              <li>Expresses feelings, preferences, and experiences in short sentences</li>
              <li>Participates confidently in structured activities</li>
            </ul>

            <p style={categoryStyle}>Cognitive Development</p>
            <ul style={bulletListStyle}>
              <li>Understands cause-and-effect relationships in simple contexts</li>
              <li>Recognizes and recalls learned vocabulary accurately</li>
            </ul>

            {/* K4 */}
            <h4 style={levelHeaderStyle}>LEVEL K4 &ndash; Junior Ready (Score 76&ndash;100)</h4>

            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~600&ndash;1,000 words</li>
              <li>Can ask and answer WH-questions</li>
              <li>Describes daily routines, simple experiences, and preferences</li>
            </ul>

            <p style={categoryStyle}>Creativity Development</p>
            <ul style={bulletListStyle}>
              <li>Independently creates stories, drawings, or short performances</li>
              <li>Expresses ideas clearly through multiple media (art, music, drama)</li>
            </ul>

            <p style={categoryStyle}>Social Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Follows classroom rules independently</li>
              <li>Participates in peer discussions using English</li>
              <li>Demonstrates cooperative problem-solving</li>
            </ul>

            <p style={categoryStyle}>Thinking Skills Development</p>
            <ul style={bulletListStyle}>
              <li>Performs basic addition/subtraction confidently</li>
              <li>Identifies main ideas in short stories</li>
              <li>Begins to organize thoughts in logical sequences</li>
            </ul>

            <p style={categoryStyle}>Expression Development</p>
            <ul style={bulletListStyle}>
              <li>Uses full sentences with basic grammar to convey ideas</li>
              <li>Can present short &ldquo;Show &amp; Tell&rdquo; or narratives</li>
            </ul>

            <p style={categoryStyle}>Cognitive Development</p>
            <ul style={bulletListStyle}>
              <li>Retains and recalls vocabulary and concepts accurately</li>
              <li>Demonstrates readiness for structured Junior curriculum</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== JUNIOR A ===================== */}
      <div id="junior-level"></div>
      <section id="junior-a" className="section section-alt">
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
              8 to 11 Years Old
            </div>
            <h2>JUNIOR Program Level A</h2>

            {/* Level Scale Table */}
            <h3 style={{ marginTop: 32, marginBottom: 16 }}>Level Scale</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th></th>
                    <th>Score</th>
                    <th>TOEFL iBT</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>Cambridge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Low Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Middle Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>0~3</td>
                    <td>-</td>
                    <td>0~80</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>High Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>0~6</td>
                    <td>-</td>
                    <td>80~150</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>Low Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>7~18</td>
                    <td>1.0~2.0</td>
                    <td>155~300</td>
                    <td>Starter or Movers (CEFR A1 or A2)</td>
                  </tr>
                  <tr>
                    <td>Middle Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>19~30</td>
                    <td>2.0~3.0</td>
                    <td>305~360</td>
                    <td>Movers or Flyers (CEFR A2 or B1)</td>
                  </tr>
                  <tr>
                    <td>High Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>31~45</td>
                    <td>3.0~4.0</td>
                    <td>365~450</td>
                    <td>Flyers or KET (CEFR B1)</td>
                  </tr>
                  <tr>
                    <td>Low Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>46~59</td>
                    <td>4.0~5.0</td>
                    <td>455~550</td>
                    <td>KET or PET (CEFR B1 or B2)</td>
                  </tr>
                  <tr>
                    <td>High Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.08</td>
                    <td>96~100</td>
                    <td>60~78</td>
                    <td>5.0~6.0</td>
                    <td>555~780</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Evaluation Index */}
            <h3 style={{ marginTop: 48, marginBottom: 16 }}>Evaluation Index by Level</h3>

            {/* BEGINNER STAGE */}
            <div style={stageHeaderStyle}>BEGINNER STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; Low Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~100&ndash;200 words</li>
              <li>Can say simple greetings and introduce themselves</li>
              <li>Recognizes common classroom words</li>
              <li>Responds to yes/no or choice questions with help from teacher or visuals</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; Middle Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~200&ndash;400 words</li>
              <li>Can describe familiar objects and basic needs</li>
              <li>Participates in short dialogues (greetings, routines, preferences)</li>
              <li>Listening comprehension improves with repetition and support</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; High Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~400&ndash;700 words</li>
              <li>Can construct short sentences using simple grammar (e.g., &ldquo;and&rdquo;, &ldquo;but&rdquo;)</li>
              <li>Engages in brief conversations on familiar topics</li>
              <li>Can describe past experiences and immediate needs in simple terms</li>
            </ul>

            {/* INTERMEDIATE STAGE */}
            <div style={stageHeaderStyle}>INTERMEDIATE STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; Low Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~700&ndash;1,200 words</li>
              <li>Can ask and answer questions with more detail</li>
              <li>Can narrate short personal experiences</li>
              <li>Uses adjectives and simple verb tenses, minor mistakes acceptable</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; Middle Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~1,200&ndash;2,000 words</li>
              <li>Can read short stories and summarize key points</li>
              <li>Can write simple paragraphs</li>
              <li>Can explain familiar topics in more structured sentences</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; High Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~2,000&ndash;3,500 words</li>
              <li>Can discuss everyday topics with improved fluency</li>
              <li>Can write short essays with logical sequencing</li>
              <li>Can express opinions with supporting details</li>
            </ul>

            {/* ADVANCED STAGE */}
            <div style={stageHeaderStyle}>ADVANCED STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; Low Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~3,500&ndash;5,000 words</li>
              <li>Communicates clearly in conversation and simple academic tasks</li>
              <li>Can present arguments and participate in structured discussions</li>
              <li>Begins to understand idiomatic expressions</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; High Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~3,500&ndash;5,000 words</li>
              <li>Communicates confidently in conversation and academic tasks</li>
              <li>Can write coherent essays</li>
              <li>Understands idiomatic expressions and nuanced meanings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== JUNIOR B ===================== */}
      <section id="junior-b" className="section">
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
              11 to 14 Years Old
            </div>
            <h2>JUNIOR Program Level B</h2>

            {/* Level Scale Table */}
            <h3 style={{ marginTop: 32, marginBottom: 16 }}>Level Scale</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th></th>
                    <th>Score</th>
                    <th>TOEFL iBT</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>Cambridge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Low Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td>0~9</td>
                    <td>-</td>
                    <td>~120</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>Middle Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>10~19</td>
                    <td>~ 2.0</td>
                    <td>120~150</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>High Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>20~29</td>
                    <td>2.0~2.5</td>
                    <td>155~300</td>
                    <td>Starter or Movers (CEFR A1 or A2)</td>
                  </tr>
                  <tr>
                    <td>Low Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>30~39</td>
                    <td>2.5~3.0</td>
                    <td>305~360</td>
                    <td>Movers or Flyers (CEFR A2 or B1)</td>
                  </tr>
                  <tr>
                    <td>Middle Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>40~45</td>
                    <td>3.0~4.0</td>
                    <td>365~450</td>
                    <td>Flyers or KET (CEFR B1)</td>
                  </tr>
                  <tr>
                    <td>High Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>45~59</td>
                    <td>4.0~5.0</td>
                    <td>455~550</td>
                    <td>KET or PET (CEFR B1 or B2)</td>
                  </tr>
                  <tr>
                    <td>Low Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>60~75</td>
                    <td>5.0~5.5</td>
                    <td>555~780</td>
                    <td>PET or FCE (CEFR B2 or C1)</td>
                  </tr>
                  <tr>
                    <td>High Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.08</td>
                    <td>96~100</td>
                    <td>75~90</td>
                    <td>6.0~6.5</td>
                    <td>785~945</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Evaluation Index */}
            <h3 style={{ marginTop: 48, marginBottom: 16 }}>Evaluation Index by Level</h3>

            {/* BEGINNER STAGE */}
            <div style={stageHeaderStyle}>BEGINNER STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; Low Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~300&ndash;500 words</li>
              <li>Can introduce themselves with short sentences (name, age, school, interests)</li>
              <li>Can ask and answer simple WH-questions (who, what, where)</li>
              <li>Understands basic classroom instructions without visual support</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; Middle Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~500&ndash;800 words</li>
              <li>Can describe daily routines and school life in short sentences</li>
              <li>Can participate in short role-plays (shopping, ordering food, asking directions)</li>
              <li>Can understand short conversations with reduced teacher support</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; High Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~800&ndash;1,200 words</li>
              <li>Can combine sentences using basic connectors (and, but, because, so)</li>
              <li>Can describe past events and future plans using simple tenses</li>
              <li>Can write short paragraphs about familiar topics</li>
            </ul>

            {/* INTERMEDIATE STAGE */}
            <div style={stageHeaderStyle}>INTERMEDIATE STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; Low Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~1,200&ndash;1,800 words</li>
              <li>Can express opinions with simple reasons</li>
              <li>Can narrate personal experiences with logical sequence</li>
              <li>Can read short articles and identify main ideas</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; Middle Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~1,800&ndash;2,500 words</li>
              <li>Can participate in group discussions on familiar academic topics</li>
              <li>Can write multi-paragraph compositions</li>
              <li>Can compare and contrast ideas using structured sentences</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; High Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~2,500&ndash;4,000 words</li>
              <li>Can explain abstract topics (friendship, success, environment, technology)</li>
              <li>Can support opinions with examples and evidence</li>
              <li>Can understand longer texts and summarize key arguments</li>
              <li>Can write structured essays with introduction, body, and conclusion</li>
            </ul>

            {/* ADVANCED STAGE */}
            <div style={stageHeaderStyle}>ADVANCED STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; Low Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~4,000&ndash;6,000 words</li>
              <li>Can engage in debates and structured discussions</li>
              <li>Can analyze problems and suggest solutions</li>
              <li>Understands figurative language and common idioms</li>
              <li>Can write persuasive and argumentative essays</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; High Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~5,000&ndash;8,000 words</li>
              <li>Communicates fluently and confidently in academic settings</li>
              <li>Can synthesize information from multiple sources</li>
              <li>Can critically evaluate ideas and present logical arguments</li>
              <li>Demonstrates advanced grammar accuracy and stylistic flexibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== JUNIOR C ===================== */}
      <section id="junior-c" className="section section-alt">
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
              14 &amp; Above Years Old
            </div>
            <h2>JUNIOR Program Level C</h2>

            {/* Level Scale Table */}
            <h3 style={{ marginTop: 32, marginBottom: 16 }}>Level Scale</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th></th>
                    <th>Score</th>
                    <th>TOEFL iBT</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>Cambridge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Low Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td>0~6</td>
                    <td>1.0</td>
                    <td>0~150</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>Middle Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>7~18</td>
                    <td>1.0~2.0</td>
                    <td>155~300</td>
                    <td>Starter or Movers (CEFR A1 or A2)</td>
                  </tr>
                  <tr>
                    <td>High Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>19~30</td>
                    <td>2.0~3.0</td>
                    <td>305~360</td>
                    <td>Movers or Flyers (CEFR A2 or B1)</td>
                  </tr>
                  <tr>
                    <td>Low Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>31~45</td>
                    <td>3.0~4.0</td>
                    <td>365~450</td>
                    <td>Flyers or KET (CEFR B1)</td>
                  </tr>
                  <tr>
                    <td>Middle Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>46~59</td>
                    <td>4.0~5.0</td>
                    <td>455~550</td>
                    <td>KET or PET (CEFR B1 or B2)</td>
                  </tr>
                  <tr>
                    <td>High Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>60~78</td>
                    <td>5.0~6.0</td>
                    <td>555~780</td>
                    <td>PET or FCE (CEFR B2 or C1)</td>
                  </tr>
                  <tr>
                    <td>Low Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>79~93</td>
                    <td>6.0~7.0</td>
                    <td>785~945</td>
                    <td>FCE or CAE (CEFR C1)</td>
                  </tr>
                  <tr>
                    <td>High Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.08</td>
                    <td>96~100</td>
                    <td>94~101</td>
                    <td>7.0 and Above</td>
                    <td>950~990</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Evaluation Index */}
            <h3 style={{ marginTop: 48, marginBottom: 16 }}>Evaluation Index by Level</h3>

            {/* BEGINNER STAGE */}
            <div style={stageHeaderStyle}>BEGINNER STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; Low Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~400&ndash;500 words</li>
              <li>Understands the alphabet and basic phonics</li>
              <li>Can use simple greetings and basic everyday expressions</li>
              <li>Can answer very simple questions using short phrases</li>
              <li>Can construct basic sentences with support</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; Middle Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~500&ndash;1,000 words</li>
              <li>Can participate in simple daily conversations</li>
              <li>Can express basic opinions using short sentences</li>
              <li>Is developing understanding of fundamental grammar structures</li>
              <li>Can handle predictable real-life situations (introductions, shopping, school topics)</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; High Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~1,000&ndash;1,500 words</li>
              <li>Can participate in conversations on familiar topics with growing confidence</li>
              <li>Can use slightly more complex sentence structures</li>
              <li>Can describe experiences, routines, and preferences</li>
              <li>May still make noticeable grammar and expression errors</li>
            </ul>

            {/* INTERMEDIATE STAGE */}
            <div style={stageHeaderStyle}>INTERMEDIATE STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; Low Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~1,500&ndash;2,500 words</li>
              <li>Can understand moderately complex texts</li>
              <li>Can express opinions on a variety of topics</li>
              <li>Can write short essays or personal narratives</li>
              <li>Demonstrates functional skills in reading, writing, listening, and speaking</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; Middle Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~2,500&ndash;4,000 words</li>
              <li>Communicates comfortably in everyday and academic contexts</li>
              <li>Can discuss more complex topics with logical reasoning</li>
              <li>Can present structured opinions and explanations</li>
              <li>Continues developing advanced grammar and vocabulary usage</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; High Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~4,000&ndash;6,000 words</li>
              <li>Understands nuances in American and British English</li>
              <li>Can read and write longer, more detailed texts</li>
              <li>Can engage in extended conversations across various topics</li>
              <li>Demonstrates increasing fluency and comprehension accuracy</li>
            </ul>

            {/* ADVANCED STAGE */}
            <div style={stageHeaderStyle}>ADVANCED STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; Low Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: ~6,000&ndash;8,000 words</li>
              <li>Uses advanced vocabulary and complex grammar structures</li>
              <li>Can participate in higher-level discussions and structured debates</li>
              <li>Can analyze, critique, and defend opinions</li>
              <li>Can comprehend and compose extended academic texts</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; High Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Vocabulary: 8,000+ words</li>
              <li>Demonstrates advanced accuracy and linguistic sophistication</li>
              <li>Can communicate effectively in specialized or academic fields</li>
              <li>Understands subtle nuances in American and British English</li>
              <li>Can engage in complex discussions, argumentation, and critical analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== ADULT ===================== */}
      <section id="adult" className="section">
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
              18 Years Old and Above
            </div>
            <h2>ADULT Program</h2>

            {/* Level Scale Table */}
            <h3 style={{ marginTop: 32, marginBottom: 16 }}>Level Scale</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th></th>
                    <th>Score</th>
                    <th>Aptis</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>Cambridge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Low Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Middle Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>A1</td>
                    <td>2.0</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>High Beginner</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>A2</td>
                    <td>3.0</td>
                    <td></td>
                    <td>KET</td>
                  </tr>
                  <tr>
                    <td>Low Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>B1</td>
                    <td>4.0 / 4.5</td>
                    <td>500~550 / 550~667</td>
                    <td>PET</td>
                  </tr>
                  <tr>
                    <td>Middle Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>B1/B2</td>
                    <td>5.0 / 5.5</td>
                    <td>668~785 / 786~866</td>
                    <td>PET / FCE</td>
                  </tr>
                  <tr>
                    <td>High Intermediate</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>B2</td>
                    <td>5.5 / 6.0 / 6.5</td>
                    <td>786~866 / 867~944 / 950~970</td>
                    <td>FCE</td>
                  </tr>
                  <tr>
                    <td>Low Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>C1</td>
                    <td>7.0 / 7.5 / 8.0</td>
                    <td>950~990</td>
                    <td>CAE</td>
                  </tr>
                  <tr>
                    <td>High Advance</td>
                    <td style={{ fontWeight: 600 }}>Level.08</td>
                    <td>96~100</td>
                    <td>C2</td>
                    <td>8.0 / 8.5 / 9.0</td>
                    <td>Can Not Measure</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Evaluation Index */}
            <h3 style={{ marginTop: 48, marginBottom: 16 }}>Evaluation Index by Level</h3>

            {/* BEGINNER STAGE */}
            <div style={stageHeaderStyle}>BEGINNER STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; Low Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Limited communication using very basic expressions</li>
              <li>Communicates mainly through single words or short phrases rather than full sentences</li>
              <li>Requires patient and cooperative conversation partners</li>
              <li>Interaction is possible only in very familiar situations</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; Middle Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Understands and uses frequently used everyday expressions</li>
              <li>Can introduce oneself and others</li>
              <li>Can ask and answer simple personal questions (residence, belongings, acquaintances)</li>
              <li>Can interact when speech is slow, clear, and supportive</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; High Beginner</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Understands common expressions related to daily life (family, shopping, interests, work)</li>
              <li>Can handle simple routine tasks requiring direct information exchange</li>
              <li>Can describe past experiences and immediate needs in simple terms</li>
              <li>Communicates in short but structured sentences</li>
            </ul>

            {/* INTERMEDIATE STAGE */}
            <div style={stageHeaderStyle}>INTERMEDIATE STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; Low Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Understands and discusses familiar topics using connected sentences</li>
              <li>Can express opinions and provide basic explanations</li>
              <li>Can describe experiences, events, and plans</li>
              <li>Maintains conversations on topics of personal interest</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; Middle Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Understands the main ideas of clear standard speech on work, study, or leisure topics</li>
              <li>Can handle most travel-related situations in English-speaking environments</li>
              <li>Can explain unfamiliar topics clearly and logically</li>
              <li>Can present advantages and disadvantages of different options</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; High Intermediate</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Speaks clearly, fluently, and naturally</li>
              <li>Understands complex discussions, including some technical topics</li>
              <li>Can communicate comfortably with native speakers</li>
              <li>Maintains detailed and structured discussions on abstract topics</li>
            </ul>

            {/* ADVANCED STAGE */}
            <div style={stageHeaderStyle}>ADVANCED STAGE</div>

            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; Low Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Expresses ideas fluently and spontaneously with minimal hesitation</li>
              <li>Uses English flexibly and effectively for social, academic, and professional purposes</li>
              <li>Understands demanding and extended texts and implied meanings</li>
              <li>Produces clear, well-organized, and detailed communication on complex subjects</li>
            </ul>

            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; High Advanced</h4>
            <p style={categoryStyle}>Communication Ability</p>
            <ul style={bulletListStyle}>
              <li>Understands virtually all spoken and written English</li>
              <li>Synthesizes information from multiple sources and presents it logically</li>
              <li>Speaks fluently with precise nuance, even in complex situations</li>
              <li>Demonstrates near-native level accuracy and sophistication</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
