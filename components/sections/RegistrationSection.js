import { useLanguage } from '@/lib/LanguageContext';

const stepHeadingStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: 'var(--dark)',
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: '2px solid var(--primary-light)',
};

const categoryStyle = {
  marginBottom: 40,
};

const categoryHeadingStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: 'var(--dark)',
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: '2px solid var(--primary-light)',
};

const ruleItemStyle = {
  marginBottom: 8,
  lineHeight: 1.7,
};

export default function RegistrationSection() {
  const { t } = useLanguage();
  const r = t.reg || {};

  return (
    <>
      <div id="registration" className="section-divider">
        <div className="container">
          <h2>{t.nav?.registration || 'Registration'}</h2>
        </div>
      </div>

      {/* ============================== */}
      {/* HOW TO REGISTER                */}
      {/* ============================== */}
      <section id="how-to-register" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{r.howToRegTitle || 'How to Register'}</h2>
            <p>{r.howToRegSub || 'CIJ Academy&School Enrollment Process'}</p>
            <span className="accent-line"></span>
          </div>

          {/* STEP 1 */}
          <div className="content-block" style={{ marginTop: 48 }}>
            <h3 style={stepHeadingStyle}>{r.step1Title}</h3>
            <p>{r.step1Intro}</p>
            <p>{r.step1Consider}</p>
            <ul>
              {(r.step1List || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{r.step1Sparta}</p>
            <p style={{ marginTop: 16, fontWeight: 600 }}>{r.step1ImportantNotes}</p>
            <ul>
              {(r.step1Notes || []).map((note, i) => (
                <li key={i}>
                  {note.text}
                  {note.sub && (
                    <ul style={{ marginTop: 4 }}>
                      {note.sub.map((s, j) => (
                        <li key={j}>{s}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{r.step1AgentInfo}</p>
            <p>{r.step1Recommend}</p>
          </div>

          {/* STEP 2 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>{r.step2Title}</h3>
            <ol>
              {(r.step2Steps || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p>{r.step2Forward}</p>
            <p style={{ marginTop: 16, fontWeight: 600 }}>{r.step2ImportantNotes}</p>
            <ul>
              {(r.step2Notes || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{r.step2After}</p>
            <ul>
              {(r.step2Docs || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{r.step2Sent}</p>
          </div>

          {/* STEP 3 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>{r.step3Title}</h3>
            <p>{r.step3Passport}</p>

            <p style={{ marginTop: 16, fontWeight: 600 }}>{r.step3MinorTitle}</p>
            <p>{r.step3MinorDesc}</p>

            <p style={{ marginTop: 16, fontWeight: 600 }}>{r.step3VisaTitle}</p>
            <ul>
              {(r.step3Visa || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{r.step3VisaNote}</p>
          </div>

          {/* STEP 4 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>{r.step4Title}</h3>
            <p>{r.step4Intro}</p>
            <p>{r.step4Direct}</p>
            <p>{r.step4Fee}</p>
          </div>

          {/* STEP 5 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>{r.step5Title}</h3>
            <p>{r.step5Desc}</p>
          </div>

          {/* STEP 6 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>{r.step6Title}</h3>
            <ul>
              {(r.step6List || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{r.step6RecommendTitle}</p>
            <ul>
              {(r.step6Recommend || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16, fontWeight: 600 }}>{r.step6PickupTitle}</p>
            <p>{r.step6PickupDesc}</p>
            <ul>
              {(r.step6Pickup || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* STEP 7 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>{r.step7Title}</h3>
            <p>{r.step7Meet}</p>
            <p>{r.step7Follow}</p>
            <p style={{ marginTop: 16, fontWeight: 600 }}>{r.step7ScheduleTitle}</p>
            <p>{r.step7Monday}</p>
            <ul>
              {(r.step7Schedule || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{r.step7Tuesday}</p>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SCHOOL RULES                   */}
      {/* ============================== */}
      <section id="school-rules" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{r.rulesTitle}</h2>
            <span className="accent-line"></span>
          </div>

          <div className="content-block">
            <p style={{ marginBottom: 32 }}>{r.rulesIntro1}</p>
            <p style={{ marginBottom: 40 }}>{r.rulesIntro2}</p>

            {/* Registration Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.registrationPolicy?.title}</h3>
              <ol>
                {(r.registrationPolicy?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ol>
            </div>

            {/* General Compliance */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.generalCompliance?.title}</h3>
              <ol>
                {(r.generalCompliance?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>
                    {item.text}
                    {item.sub && (
                      <ul style={{ marginTop: 8 }}>
                        {item.sub.map((s, j) => (
                          <li key={j}>{s}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Notification Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.notificationPolicy?.title}</h3>
              <p>{r.notificationPolicy?.text}</p>
            </div>

            {/* Authority & Limitation of Liability */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.authorityLiability?.title}</h3>
              <ol>
                {(r.authorityLiability?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>
                    {item.text}
                    {item.sub && (
                      <ul style={{ marginTop: 8 }}>
                        {item.sub.map((s, j) => (
                          <li key={j}>{s}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Safety & Insurance Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.safetyInsurance?.title}</h3>
              <ol>
                {(r.safetyInsurance?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Immigration & Airport Services */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.immigrationAirport?.title}</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.immigrationAirport?.airportPickup?.subtitle}</p>
              <ul>
                {(r.immigrationAirport?.airportPickup?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.immigrationAirport?.courseChanges?.subtitle}</p>
              <ul>
                {(r.immigrationAirport?.courseChanges?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.immigrationAirport?.flightBooking?.subtitle}</p>
              <ul>
                {(r.immigrationAirport?.flightBooking?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Public Holidays */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.publicHolidays?.title}</h3>
              <p>{r.publicHolidays?.text}</p>
            </div>

            {/* Security Deposit */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.securityDeposit?.title}</h3>
              <p>{r.securityDeposit?.text}</p>
              <ul>
                {(r.securityDeposit?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Academic Regulations */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.academicRegulations?.title}</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.academicRegulations?.programChanges?.subtitle}</p>
              <p>{r.academicRegulations?.programChanges?.text}</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.academicRegulations?.courseExtension?.subtitle}</p>
              <p>{r.academicRegulations?.courseExtension?.text}</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.academicRegulations?.classStructure?.subtitle}</p>
              <p>{r.academicRegulations?.classStructure?.text}</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.academicRegulations?.attendancePolicy?.subtitle}</p>
              <ul>
                {(r.academicRegulations?.attendancePolicy?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.academicRegulations?.classChanges?.subtitle}</p>
              <p>{r.academicRegulations?.classChanges?.text}</p>
            </div>

            {/* Dormitory Regulations */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.dormitoryRegulations?.title}</h3>
              <ol>
                {(r.dormitoryRegulations?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Curfew Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.curfewPolicy?.title}</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.curfewPolicy?.semiSparta?.subtitle}</p>
              <ul>
                {(r.curfewPolicy?.semiSparta?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.curfewPolicy?.sparta?.subtitle}</p>
              <ul>
                {(r.curfewPolicy?.sparta?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Outing & Travel Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.outingTravel?.title}</h3>
              <ol>
                {(r.outingTravel?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Warning & Dismissal Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.warningDismissal?.title}</h3>
              <p>{r.warningDismissal?.intro}</p>
              <ul>
                {(r.warningDismissal?.progressive || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: 16, fontWeight: 600 }}>{r.warningDismissal?.immediateTitle}</p>
              <ul>
                {(r.warningDismissal?.immediate || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Refund Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.refundPolicy?.title}</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.refundPolicy?.beforeTitle}</p>
              <ul>
                {(r.refundPolicy?.before || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>{r.refundPolicy?.afterTitle}</p>
              <ul>
                {(r.refundPolicy?.after || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: 8 }}>{r.refundPolicy?.note}</p>
            </div>

            {/* Check-In & Check-Out */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>{r.checkInOut?.title}</h3>
              <ul>
                {(r.checkInOut?.items || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: 16, fontWeight: 600 }}>{r.checkInOut?.overstayTitle}</p>
              <ul>
                {(r.checkInOut?.overstay || []).map((item, i) => (
                  <li key={i} style={ruleItemStyle}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
