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
      {/* APPLY ONLINE                   */}
      {/* ============================== */}
      <section id="apply-online" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{r.applyOnlineTitle || t.nav?.applyOnline || 'Apply Online'}</h2>
            <span className="accent-line"></span>
          </div>
          <div className="content-block" style={{ textAlign: 'center' }}>
            <p>{r.applyOnlineDesc || 'Please contact us via email or through our agents to apply for enrollment.'}</p>
            <p style={{ marginTop: 16 }}>
              <strong>Email:</strong> cijacademy@naver.com
            </p>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SCHOOL RULES                   */}
      {/* ============================== */}
      <section id="school-rules" className="section">
        <div className="container">
          <div className="section-title">
            <h2>CIJ Academy &amp; School - School Regulations</h2>
            <span className="accent-line"></span>
          </div>

          <div className="content-block">
            <p style={{ marginBottom: 32 }}>
              LILOAN CIJ EDUCATION INC., operating as <strong>CIJ Academy &amp; School</strong> (hereinafter referred to as &ldquo;CIJ&rdquo;), establishes the following policies to maintain a proper academic environment, ensure student safety, and promote a successful study experience.
            </p>
            <p style={{ marginBottom: 40 }}>
              All students are required to comply with these regulations throughout their enrollment period.
            </p>

            {/* Registration Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Registration Policy</h3>
              <ol>
                <li style={ruleItemStyle}>Students must complete the official application form and pay a <strong>non-refundable registration fee of USD 150</strong>.</li>
                <li style={ruleItemStyle}>Full payment of tuition and related fees must be completed at least four (4) weeks prior to departure.</li>
                <li style={ruleItemStyle}>Enrollment is confirmed only after full payment has been received.</li>
              </ol>
            </div>

            {/* General Compliance */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>General Compliance</h3>
              <ol>
                <li style={ruleItemStyle}>CIJ and students shall fulfill their obligations in good faith and mutual respect.</li>
                <li style={ruleItemStyle}>CIJ shall provide proper academic supervision and administrative support until the completion of the program.</li>
                <li style={ruleItemStyle}>
                  Students must comply with:
                  <ul style={{ marginTop: 8 }}>
                    <li>CIJ regulations</li>
                    <li>Laws of the Philippines</li>
                    <li>Laws of their home country</li>
                    <li>Applicable international laws</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Notification Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Notification Policy</h3>
              <p>If CIJ determines that dismissal or early repatriation is necessary due to student misconduct, CIJ shall notify the student&apos;s parent/legal guardian and/or agency before implementing such measures.</p>
            </div>

            {/* Authority & Limitation of Liability */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Authority &amp; Limitation of Liability</h3>
              <ol>
                <li style={ruleItemStyle}>
                  CIJ shall not be held liable for failure to provide classes or dormitory services due to:
                  <ul style={{ marginTop: 8 }}>
                    <li>Natural disasters</li>
                    <li>Airline delays or cancellations</li>
                    <li>Government orders</li>
                    <li>Infectious diseases</li>
                    <li>Civil unrest, terrorism, or emergency situations</li>
                    <li>Force majeure or circumstances beyond CIJ&apos;s control</li>
                  </ul>
                  <p style={{ marginTop: 8 }}>No compensation shall be provided in such cases.</p>
                </li>
                <li style={ruleItemStyle}>CIJ is not responsible for incidents occurring outside campus or during unauthorized activities.</li>
                <li style={ruleItemStyle}>CIJ&apos;s liability is strictly limited to incidents occurring during official class hours and while using designated facilities (classrooms, dormitory, cafeteria).</li>
                <li style={ruleItemStyle}>
                  CIJ reserves the right to:
                  <ul style={{ marginTop: 8 }}>
                    <li>Adjust tuition due to exchange rate fluctuations or government policies</li>
                    <li>Modify course start dates, curriculum, and programs</li>
                    <li>Use student photos for administrative and communication purposes</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Safety & Insurance Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Safety &amp; Insurance Policy</h3>
              <ol>
                <li style={ruleItemStyle}>CIJ is not responsible for accidents caused by student negligence.</li>
                <li style={ruleItemStyle}>CIJ bears no responsibility for accidents during personal travel or outings.</li>
                <li style={ruleItemStyle}>Compensation is limited to the coverage provided by mandatory student/travel insurance.</li>
                <li style={ruleItemStyle}>Students are solely responsible for maintaining valid insurance coverage.</li>
              </ol>
            </div>

            {/* Immigration & Airport Services */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Immigration &amp; Airport Services</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Airport Pickup</p>
              <ul>
                <li style={ruleItemStyle}>Mandatory group pickup on designated dates</li>
                <li style={ruleItemStyle}>Fee: Php 1,500 per person</li>
                <li style={ruleItemStyle}>Family Program: Php 2,500 per family</li>
              </ul>
              <p style={{ marginTop: 8 }}>Airport sending is not provided except for unaccompanied junior students.</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Course Changes</p>
              <ul>
                <li style={ruleItemStyle}>Written request required</li>
                <li style={ruleItemStyle}>Allowed every two (2) weeks</li>
                <li style={ruleItemStyle}>Fee: Php 2,000</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Flight Booking</p>
              <p>Students are responsible for accurate return ticket booking. CIJ assumes no liability for airline-related issues.</p>
            </div>

            {/* Public Holidays */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Public Holidays</h3>
              <p>No classes are held on Philippine national or special holidays.</p>
              <p>No make-up classes or refunds will be provided.</p>
            </div>

            {/* Security Deposit */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Security Deposit</h3>
              <p>All students must pay a <strong>Php 3,000 deposit</strong> upon check-in.</p>
              <p>The deposit may be deducted for:</p>
              <ul>
                <li style={ruleItemStyle}>Damages</li>
                <li style={ruleItemStyle}>Unpaid fees</li>
                <li style={ruleItemStyle}>Excess utility charges</li>
              </ul>
              <p style={{ marginTop: 8 }}>Refund will be processed upon check-out after room inspection (by 11:00 AM).</p>
            </div>

            {/* Academic Regulations */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Academic Regulations</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Program Changes</p>
              <p>CIJ reserves the right to modify programs due to unavoidable circumstances.</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Course Extension</p>
              <ul>
                <li style={ruleItemStyle}>Application required at least 4 weeks prior</li>
                <li style={ruleItemStyle}>Extensions allowed in 2-week increments</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Class Structure</p>
              <p>Classes consist of 1:1 and group sessions.</p>
              <p>Group classes may be adjusted depending on enrollment conditions.</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Attendance Policy</p>
              <ul>
                <li style={ruleItemStyle}>5–10 minutes late → Tardy</li>
                <li style={ruleItemStyle}>Over 10 minutes → Absent</li>
                <li style={ruleItemStyle}>Two unexcused absences within two weeks may result in instructor suspension</li>
                <li style={ruleItemStyle}>Medical absences require documentation</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Class Changes</p>
              <p>Conducted weekly every Friday through a designated procedure.</p>
              <p>New students may request changes within their first two (2) days.</p>
            </div>

            {/* Dormitory Regulations */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Dormitory Regulations</h3>
              <ol>
                <li style={ruleItemStyle}>CIJ is not responsible for personal belongings.</li>
                <li style={ruleItemStyle}>Personal hygiene items are not provided.</li>
                <li style={ruleItemStyle}>Room changes allowed every two weeks (subject to availability).</li>
                <li style={ruleItemStyle}>Unauthorized guests and overnight visitors are strictly prohibited.</li>
                <li style={ruleItemStyle}>Cleaning and laundry services are provided twice weekly.</li>
                <li style={ruleItemStyle}>Smoking, alcohol consumption, and mixed-gender room sharing are strictly prohibited.</li>
                <li style={ruleItemStyle}>Quiet hours: 9:00 PM – 7:00 AM.</li>
                <li style={ruleItemStyle}>CIJ reserves the right to inspect rooms when necessary.</li>
              </ol>
            </div>

            {/* Curfew Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Curfew Policy</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>SEMI-SPARTA Course</p>
              <ul>
                <li style={ruleItemStyle}>Weekdays: 9:00 PM</li>
                <li style={ruleItemStyle}>Weekends/Public Holidays (no class next day): 12:00 AM</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>SPARTA Course</p>
              <ul>
                <li style={ruleItemStyle}>Weekdays: No outings permitted</li>
                <li style={ruleItemStyle}>Weekends: 12:00 AM</li>
              </ul>
              <p style={{ marginTop: 8 }}>Violation results in warning issuance.</p>
            </div>

            {/* Outing & Travel Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Outing &amp; Travel Policy</h3>
              <ol>
                <li style={ruleItemStyle}>Written approval is required for overnight stays or travel.</li>
                <li style={ruleItemStyle}>Failure to obtain prior approval results in a warning.</li>
                <li style={ruleItemStyle}>Proof of travel (receipt/photos) must be submitted after return.</li>
              </ol>
            </div>

            {/* Warning & Dismissal Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Warning &amp; Dismissal Policy</h3>
              <p>Warnings are issued for violations.</p>
              <p>Accumulated warnings may result in dismissal without refund.</p>
              <p style={{ marginTop: 16 }}>Immediate dismissal (no refund) includes but is not limited to:</p>
              <ul>
                <li style={ruleItemStyle}>Opposite-gender room sharing</li>
                <li style={ruleItemStyle}>Alcohol, gambling, casino/KTV visits</li>
                <li style={ruleItemStyle}>Police involvement</li>
                <li style={ruleItemStyle}>Property damage</li>
                <li style={ruleItemStyle}>Unauthorized guests</li>
                <li style={ruleItemStyle}>Repeated unexcused absences</li>
                <li style={ruleItemStyle}>Unauthorized overnight stay</li>
              </ul>
              <p style={{ marginTop: 8 }}>Warning stages vary according to enrollment duration.</p>
            </div>

            {/* Refund Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Refund Policy</h3>
              <p><strong>General Rule:</strong> Refunds are calculated in four (4) week increments only.</p>

              <p style={{ fontWeight: 600, marginTop: 24, marginBottom: 8 }}>1. Before Departure</p>
              <div className="styled-table-wrap">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Refund Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Registration fee</td>
                      <td>Non-refundable</td>
                    </tr>
                    <tr>
                      <td>21+ days before departure</td>
                      <td>Full refund (excluding registration fee)</td>
                    </tr>
                    <tr>
                      <td>7&ndash;21 days before departure</td>
                      <td>Deduct 2 weeks dormitory cost</td>
                    </tr>
                    <tr>
                      <td>Within 7 days of departure</td>
                      <td>Deduct 4 weeks dormitory + 1 week tuition</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{ fontWeight: 600, marginTop: 24, marginBottom: 8 }}>2. After Course Start</p>
              <div className="styled-table-wrap">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>Elapsed Period</th>
                      <th>Refund Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Within 25% of course period</td>
                      <td>50% refund of remaining balance</td>
                    </tr>
                    <tr>
                      <td>25% &ndash; 50% of course period</td>
                      <td>30% refund of remaining balance</td>
                    </tr>
                    <tr>
                      <td>After 50% of course period</td>
                      <td>No refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{ fontWeight: 600, marginTop: 24, marginBottom: 8 }}>Additional Terms</p>
              <ul>
                <li style={ruleItemStyle}>No refund applies in cases of dismissal or misconduct.</li>
                <li style={ruleItemStyle}>Force majeure cases are non-refundable.</li>
              </ul>
            </div>

            {/* Check-In & Check-Out */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Check-In &amp; Check-Out</h3>
              <ul>
                <li style={ruleItemStyle}>Check-in: Saturday 3:00 PM – Sunday</li>
                <li style={ruleItemStyle}>Check-out: Saturday by 11:00 AM</li>
              </ul>
              <p style={{ marginTop: 16 }}>Overstay fees (per night, including meals):</p>
              <ul>
                <li style={ruleItemStyle}>Single: Php 2,200</li>
                <li style={ruleItemStyle}>Twin: Php 1,800</li>
                <li style={ruleItemStyle}>Triple/Quad: Php 1,600</li>
              </ul>
              <p style={{ marginTop: 8 }}>Guest visit (with prior approval): Php 2,000 per day.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
