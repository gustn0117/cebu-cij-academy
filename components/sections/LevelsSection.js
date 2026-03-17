import { useLanguage } from '@/lib/LanguageContext';
import { en, ja, zhTW, zhCN, vi } from '@/lib/translations/levels';

const levelsI18n = { en, ja, 'zh-TW': zhTW, 'zh-CN': zhCN, vi };

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

const levelKeys = ['kinder', 'junior-a', 'junior-b', 'junior-c', 'adult'];

const levelLabels = {
  kinder: 'KINDER',
  'junior-a': 'JUNIOR A',
  'junior-b': 'JUNIOR B',
  'junior-c': 'JUNIOR C',
  adult: 'ADULT',
};

const badgeStyle = {
  display: 'inline-block',
  padding: '6px 20px',
  background: 'var(--secondary-light)',
  color: '#8B6914',
  borderRadius: 20,
  fontWeight: 600,
  fontSize: '0.9rem',
  marginBottom: 20,
};

function BulletList({ items }) {
  return (
    <ul style={bulletListStyle}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function EvalBlock({ label, items }) {
  return (
    <>
      <p style={categoryStyle}>{label}</p>
      <BulletList items={items} />
    </>
  );
}

export default function LevelsSection() {
  const { lang, t } = useLanguage();
  const lt = (levelsI18n[lang] || levelsI18n.en).levels;

  return (
    <>
      <div id="levels" className="section-divider">
        <div className="container">
          <h2>{t.nav.levels}</h2>
        </div>
      </div>

      {/* Quick Navigation */}
      <section className="section" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {levelKeys.map((key) => (
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
                {levelLabels[key]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KINDER ===================== */}
      <section id="kinder" className="section">
        <div className="container">
          <div className="content-block">
            <div style={badgeStyle}>{lt.kinderAge}</div>
            <h2>{lt.kinderProgram}</h2>

            <h3 style={{ marginTop: 32, marginBottom: 16 }}>{lt.levelScale}</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>{lt.level}</th>
                    <th>{lt.internalScore}</th>
                    <th>{lt.cefrAlignment}</th>
                    <th>{lt.cambridgeYLE}</th>
                    <th>{lt.notes}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K1 &ndash; {lt.k1Name}</td>
                    <td>0&ndash;25</td>
                    <td>{lt.notMeasurable}</td>
                    <td>{lt.notMeasurable}</td>
                    <td>{lt.k1Note}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K2 &ndash; {lt.k2Name}</td>
                    <td>26&ndash;50</td>
                    <td>Below Pre-A1</td>
                    <td>{lt.notMeasurable}</td>
                    <td>{lt.k2Note}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K3 &ndash; {lt.k3Name}</td>
                    <td>51&ndash;75</td>
                    <td>Pre-A1 (Partial)</td>
                    <td>Pre A1 Starters (Preparation)</td>
                    <td>{lt.k3Note}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>K4 &ndash; {lt.k4Name}</td>
                    <td>76&ndash;100</td>
                    <td>Pre-A1 (Complete) / A1 Entry</td>
                    <td>Pre A1 Starters</td>
                    <td>{lt.k4Note}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: 48, marginBottom: 16 }}>{lt.evaluationIndex}</h3>

            <div style={stageHeaderStyle}>{lt.classElephant} &ndash; {lt.beginnerFoundation}</div>

            <h4 style={levelHeaderStyle}>LEVEL K1 &ndash; {lt.k1Name} (Score 0&ndash;25)</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.k1Comm} />
            <EvalBlock label={lt.creativityDev} items={lt.k1Creat} />
            <EvalBlock label={lt.socialSkillsDev} items={lt.k1Social} />
            <EvalBlock label={lt.thinkingSkillsDev} items={lt.k1Think} />
            <EvalBlock label={lt.expressionDev} items={lt.k1Express} />
            <EvalBlock label={lt.cognitiveDev} items={lt.k1Cog} />

            <h4 style={levelHeaderStyle}>LEVEL K2 &ndash; {lt.k2Name} (Score 26&ndash;50)</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.k2Comm} />
            <EvalBlock label={lt.creativityDev} items={lt.k2Creat} />
            <EvalBlock label={lt.socialSkillsDev} items={lt.k2Social} />
            <EvalBlock label={lt.thinkingSkillsDev} items={lt.k2Think} />
            <EvalBlock label={lt.expressionDev} items={lt.k2Express} />
            <EvalBlock label={lt.cognitiveDev} items={lt.k2Cog} />

            <div style={stageHeaderStyle}>{lt.classWhale} &ndash; {lt.preJuniorPrep}</div>

            <h4 style={levelHeaderStyle}>LEVEL K3 &ndash; {lt.k3Name} (Score 51&ndash;75)</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.k3Comm} />
            <EvalBlock label={lt.creativityDev} items={lt.k3Creat} />
            <EvalBlock label={lt.socialSkillsDev} items={lt.k3Social} />
            <EvalBlock label={lt.thinkingSkillsDev} items={lt.k3Think} />
            <EvalBlock label={lt.expressionDev} items={lt.k3Express} />
            <EvalBlock label={lt.cognitiveDev} items={lt.k3Cog} />

            <h4 style={levelHeaderStyle}>LEVEL K4 &ndash; {lt.k4Name} (Score 76&ndash;100)</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.k4Comm} />
            <EvalBlock label={lt.creativityDev} items={lt.k4Creat} />
            <EvalBlock label={lt.socialSkillsDev} items={lt.k4Social} />
            <EvalBlock label={lt.thinkingSkillsDev} items={lt.k4Think} />
            <EvalBlock label={lt.expressionDev} items={lt.k4Express} />
            <EvalBlock label={lt.cognitiveDev} items={lt.k4Cog} />
          </div>
        </div>
      </section>

      {/* ===================== JUNIOR A ===================== */}
      <section id="junior-a" className="section section-alt">
        <div className="container">
          <div className="content-block">
            <div style={badgeStyle}>{lt.juniorAAge}</div>
            <h2>{lt.juniorProgramA}</h2>

            <h3 style={{ marginTop: 32, marginBottom: 16 }}>{lt.levelScale}</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>{lt.level}</th>
                    <th></th>
                    <th>{lt.score}</th>
                    <th>TOEFL iBT</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>{lt.cambridge}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lt.lowBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>{lt.middleBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>0~3</td>
                    <td>-</td>
                    <td>0~80</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>{lt.highBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>0~6</td>
                    <td>-</td>
                    <td>80~150</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>{lt.lowIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>7~18</td>
                    <td>1.0~2.0</td>
                    <td>155~300</td>
                    <td>Starter or Movers (CEFR A1 or A2)</td>
                  </tr>
                  <tr>
                    <td>{lt.middleIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>19~30</td>
                    <td>2.0~3.0</td>
                    <td>305~360</td>
                    <td>Movers or Flyers (CEFR A2 or B1)</td>
                  </tr>
                  <tr>
                    <td>{lt.highIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>31~45</td>
                    <td>3.0~4.0</td>
                    <td>365~450</td>
                    <td>Flyers or KET (CEFR B1)</td>
                  </tr>
                  <tr>
                    <td>{lt.lowAdvance}</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>46~59</td>
                    <td>4.0~5.0</td>
                    <td>455~550</td>
                    <td>KET or PET (CEFR B1 or B2)</td>
                  </tr>
                  <tr>
                    <td>{lt.highAdvance}</td>
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

            <h3 style={{ marginTop: 48, marginBottom: 16 }}>{lt.evaluationIndex}</h3>

            <div style={stageHeaderStyle}>{lt.beginnerStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; {lt.lowBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL01} />
            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; {lt.middleBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL02} />
            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; {lt.highBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL03} />

            <div style={stageHeaderStyle}>{lt.intermediateStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; {lt.lowIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL04} />
            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; {lt.middleIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL05} />
            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; {lt.highIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL06} />

            <div style={stageHeaderStyle}>{lt.advancedStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; {lt.lowAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL07} />
            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; {lt.highAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jaL08} />
          </div>
        </div>
      </section>

      {/* ===================== JUNIOR B ===================== */}
      <section id="junior-b" className="section">
        <div className="container">
          <div className="content-block">
            <div style={badgeStyle}>{lt.juniorBAge}</div>
            <h2>{lt.juniorProgramB}</h2>

            <h3 style={{ marginTop: 32, marginBottom: 16 }}>{lt.levelScale}</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>{lt.level}</th>
                    <th></th>
                    <th>{lt.score}</th>
                    <th>TOEFL iBT</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>{lt.cambridge}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lt.lowBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td>0~9</td>
                    <td>-</td>
                    <td>~120</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>{lt.middleBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>10~19</td>
                    <td>~ 2.0</td>
                    <td>120~150</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>{lt.highBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>20~29</td>
                    <td>2.0~2.5</td>
                    <td>155~300</td>
                    <td>Starter or Movers (CEFR A1 or A2)</td>
                  </tr>
                  <tr>
                    <td>{lt.lowIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>30~39</td>
                    <td>2.5~3.0</td>
                    <td>305~360</td>
                    <td>Movers or Flyers (CEFR A2 or B1)</td>
                  </tr>
                  <tr>
                    <td>{lt.middleIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>40~45</td>
                    <td>3.0~4.0</td>
                    <td>365~450</td>
                    <td>Flyers or KET (CEFR B1)</td>
                  </tr>
                  <tr>
                    <td>{lt.highIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>45~59</td>
                    <td>4.0~5.0</td>
                    <td>455~550</td>
                    <td>KET or PET (CEFR B1 or B2)</td>
                  </tr>
                  <tr>
                    <td>{lt.lowAdvance}</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>60~75</td>
                    <td>5.0~5.5</td>
                    <td>555~780</td>
                    <td>PET or FCE (CEFR B2 or C1)</td>
                  </tr>
                  <tr>
                    <td>{lt.highAdvance}</td>
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

            <h3 style={{ marginTop: 48, marginBottom: 16 }}>{lt.evaluationIndex}</h3>

            <div style={stageHeaderStyle}>{lt.beginnerStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; {lt.lowBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL01} />
            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; {lt.middleBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL02} />
            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; {lt.highBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL03} />

            <div style={stageHeaderStyle}>{lt.intermediateStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; {lt.lowIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL04} />
            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; {lt.middleIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL05} />
            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; {lt.highIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL06} />

            <div style={stageHeaderStyle}>{lt.advancedStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; {lt.lowAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL07} />
            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; {lt.highAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jbL08} />
          </div>
        </div>
      </section>

      {/* ===================== JUNIOR C ===================== */}
      <section id="junior-c" className="section section-alt">
        <div className="container">
          <div className="content-block">
            <div style={badgeStyle}>{lt.juniorCAge}</div>
            <h2>{lt.juniorProgramC}</h2>

            <h3 style={{ marginTop: 32, marginBottom: 16 }}>{lt.levelScale}</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>{lt.level}</th>
                    <th></th>
                    <th>{lt.score}</th>
                    <th>TOEFL iBT</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>{lt.cambridge}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lt.lowBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td>0~6</td>
                    <td>1.0</td>
                    <td>0~150</td>
                    <td>Starter (CEFR A1)</td>
                  </tr>
                  <tr>
                    <td>{lt.middleBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>7~18</td>
                    <td>1.0~2.0</td>
                    <td>155~300</td>
                    <td>Starter or Movers (CEFR A1 or A2)</td>
                  </tr>
                  <tr>
                    <td>{lt.highBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>19~30</td>
                    <td>2.0~3.0</td>
                    <td>305~360</td>
                    <td>Movers or Flyers (CEFR A2 or B1)</td>
                  </tr>
                  <tr>
                    <td>{lt.lowIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>31~45</td>
                    <td>3.0~4.0</td>
                    <td>365~450</td>
                    <td>Flyers or KET (CEFR B1)</td>
                  </tr>
                  <tr>
                    <td>{lt.middleIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>46~59</td>
                    <td>4.0~5.0</td>
                    <td>455~550</td>
                    <td>KET or PET (CEFR B1 or B2)</td>
                  </tr>
                  <tr>
                    <td>{lt.highIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>60~78</td>
                    <td>5.0~6.0</td>
                    <td>555~780</td>
                    <td>PET or FCE (CEFR B2 or C1)</td>
                  </tr>
                  <tr>
                    <td>{lt.lowAdvance}</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>79~93</td>
                    <td>6.0~7.0</td>
                    <td>785~945</td>
                    <td>FCE or CAE (CEFR C1)</td>
                  </tr>
                  <tr>
                    <td>{lt.highAdvance}</td>
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

            <h3 style={{ marginTop: 48, marginBottom: 16 }}>{lt.evaluationIndex}</h3>

            <div style={stageHeaderStyle}>{lt.beginnerStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; {lt.lowBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL01} />
            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; {lt.middleBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL02} />
            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; {lt.highBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL03} />

            <div style={stageHeaderStyle}>{lt.intermediateStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; {lt.lowIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL04} />
            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; {lt.middleIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL05} />
            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; {lt.highIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL06} />

            <div style={stageHeaderStyle}>{lt.advancedStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; {lt.lowAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL07} />
            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; {lt.highAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.jcL08} />
          </div>
        </div>
      </section>

      {/* ===================== ADULT ===================== */}
      <section id="adult" className="section">
        <div className="container">
          <div className="content-block">
            <div style={badgeStyle}>{lt.adultAge}</div>
            <h2>{lt.adultProgram}</h2>

            <h3 style={{ marginTop: 32, marginBottom: 16 }}>{lt.levelScale}</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>{lt.level}</th>
                    <th></th>
                    <th>{lt.score}</th>
                    <th>Aptis</th>
                    <th>IELTS</th>
                    <th>TOEIC</th>
                    <th>{lt.cambridge}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lt.lowBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.01</td>
                    <td>0~15</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>{lt.middleBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.02</td>
                    <td>16~30</td>
                    <td>A1</td>
                    <td>2.0</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>{lt.highBeginner}</td>
                    <td style={{ fontWeight: 600 }}>Level.03</td>
                    <td>31~50</td>
                    <td>A2</td>
                    <td>3.0</td>
                    <td></td>
                    <td>KET</td>
                  </tr>
                  <tr>
                    <td>{lt.lowIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.04</td>
                    <td>51~70</td>
                    <td>B1</td>
                    <td>4.0 / 4.5</td>
                    <td>500~550 / 550~667</td>
                    <td>PET</td>
                  </tr>
                  <tr>
                    <td>{lt.middleIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.05</td>
                    <td>71~80</td>
                    <td>B1/B2</td>
                    <td>5.0 / 5.5</td>
                    <td>668~785 / 786~866</td>
                    <td>PET / FCE</td>
                  </tr>
                  <tr>
                    <td>{lt.highIntermediate}</td>
                    <td style={{ fontWeight: 600 }}>Level.06</td>
                    <td>81~90</td>
                    <td>B2</td>
                    <td>5.5 / 6.0 / 6.5</td>
                    <td>786~866 / 867~944 / 950~970</td>
                    <td>FCE</td>
                  </tr>
                  <tr>
                    <td>{lt.lowAdvance}</td>
                    <td style={{ fontWeight: 600 }}>Level.07</td>
                    <td>91~95</td>
                    <td>C1</td>
                    <td>7.0 / 7.5 / 8.0</td>
                    <td>950~990</td>
                    <td>CAE</td>
                  </tr>
                  <tr>
                    <td>{lt.highAdvance}</td>
                    <td style={{ fontWeight: 600 }}>Level.08</td>
                    <td>96~100</td>
                    <td>C2</td>
                    <td>8.0 / 8.5 / 9.0</td>
                    <td>{lt.canNotMeasure}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: 48, marginBottom: 16 }}>{lt.evaluationIndex}</h3>

            <div style={stageHeaderStyle}>{lt.beginnerStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 01 &ndash; {lt.lowBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL01} />
            <h4 style={levelHeaderStyle}>LEVEL 02 &ndash; {lt.middleBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL02} />
            <h4 style={levelHeaderStyle}>LEVEL 03 &ndash; {lt.highBeginner}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL03} />

            <div style={stageHeaderStyle}>{lt.intermediateStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 04 &ndash; {lt.lowIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL04} />
            <h4 style={levelHeaderStyle}>LEVEL 05 &ndash; {lt.middleIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL05} />
            <h4 style={levelHeaderStyle}>LEVEL 06 &ndash; {lt.highIntermediate}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL06} />

            <div style={stageHeaderStyle}>{lt.advancedStage}</div>
            <h4 style={levelHeaderStyle}>LEVEL 07 &ndash; {lt.lowAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL07} />
            <h4 style={levelHeaderStyle}>LEVEL 08 &ndash; {lt.highAdvance}</h4>
            <EvalBlock label={lt.communicationAbility} items={lt.adL08} />
          </div>
        </div>
      </section>
    </>
  );
}
