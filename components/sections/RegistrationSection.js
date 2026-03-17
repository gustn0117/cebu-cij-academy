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
            <h2>How to Register</h2>
            <p>CIJ Academy&amp;School Enrollment Process</p>
            <span className="accent-line"></span>
          </div>

          {/* STEP 1 */}
          <div className="content-block" style={{ marginTop: 48 }}>
            <h3 style={stepHeadingStyle}>STEP 1: Consultation with Official Agent</h3>
            <p>Before registration, please consult with an authorized CIJ agent.</p>
            <p>During consultation, consider:</p>
            <ul>
              <li>Your study purpose</li>
              <li>Duration of study</li>
              <li>Budget</li>
              <li>Target score (if applicable)</li>
            </ul>
            <p style={{ marginTop: 16 }}>Students who wish to improve quickly may consider our Sparta Program.</p>
            <p style={{ marginTop: 16, fontWeight: 600 }}>Important Notes:</p>
            <ul>
              <li>Please check if any promotions are available.</li>
              <li>The IELTS Basic Course requires a minimum entry-level score.
                <ul style={{ marginTop: 4 }}>
                  <li>If your placement test score does not meet the requirement, you will be transferred to another suitable course and the price difference will be refunded.</li>
                </ul>
              </li>
              <li>For accurate information, please consult your assigned manager.</li>
            </ul>
            <p style={{ marginTop: 16 }}>CIJ Academy&amp;School operates primarily through official agents.</p>
            <p>We strongly recommend registering via an authorized CIJ partner.</p>
          </div>

          {/* STEP 2 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>STEP 2: Registration via Official Agent</h3>
            <ol>
              <li>Choose your course, dormitory type, and study period.</li>
              <li>Submit the application form through your official agent.</li>
            </ol>
            <p>Your agent will forward your application to CIJ Academy&amp;School.</p>
            <p style={{ marginTop: 16, fontWeight: 600 }}>Important Notes:</p>
            <ul>
              <li>All personal information is strictly protected.</li>
              <li>Students with medical conditions or regular medication must inform the school in advance.</li>
              <li>Special requests (room allocation, class preferences, etc.) must be confirmed before registration.</li>
              <li>Please carefully review the school&apos;s refund policy before payment.</li>
            </ul>
            <p style={{ marginTop: 16 }}>After submission, the school will issue:</p>
            <ul>
              <li>Official Invoice</li>
              <li>Letter of Admission (LOA)</li>
            </ul>
            <p>These documents will be sent to your agent (or directly to you if individually registered).</p>
          </div>

          {/* STEP 3 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>STEP 3: Passport &amp; Travel Preparation</h3>
            <p>Your passport must be valid for at least 6 months from your date of entry into the Philippines.</p>

            <p style={{ marginTop: 16, fontWeight: 600 }}>Minor Policy (Important)</p>
            <p>Students under 15 years old entering without their parents must obtain a WEG (Waiver of Exclusion Ground) prior to entry.</p>

            <p style={{ marginTop: 16, fontWeight: 600 }}>Visa Information by Nationality:</p>
            <ul>
              <li>Chinese nationals – Must apply for a 30-day visa at the Philippine Embassy.</li>
              <li>Taiwanese nationals – May apply for a 30-day or 59-day visa. Students studying longer than 12 weeks may extend their visa in the Philippines.</li>
              <li>Korean, Japanese, Vietnamese and others – Visa-free entry permitted.</li>
            </ul>
            <p style={{ marginTop: 16 }}>Visa regulations may change. Please confirm with your agent before departure.</p>
          </div>

          {/* STEP 4 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>STEP 4: Tuition Payment</h3>
            <p>Tuition payments made through official agents are securely transferred to CIJ Academy&amp;School.</p>
            <p>For direct registration (without an agent):</p>
            <p>An enrollment fee of USD 150 must be paid in advance to the designated school account.</p>
          </div>

          {/* STEP 5 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>STEP 5: Letter of Admission (LOA)</h3>
            <p>After tuition payment is completed, the school will issue your official Letter of Admission (LOA).</p>
          </div>

          {/* STEP 6 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>STEP 6: Flight Ticket &amp; Travel Insurance</h3>
            <ul>
              <li>Entry regulations may vary depending on your departure country.</li>
              <li>Please confirm details with your agent before booking flights.</li>
              <li>Overseas travel insurance is mandatory.</li>
            </ul>
            <p style={{ marginTop: 16 }}>We strongly recommend checking:</p>
            <ul>
              <li>Coverage for theft or loss of valuables</li>
              <li>Medical reimbursement conditions</li>
            </ul>
            <p style={{ marginTop: 16, fontWeight: 600 }}>Airport Pick-up:</p>
            <p>After sending your flight details, CIJ will issue a Pick-up Letter indicating:</p>
            <ul>
              <li>Meeting point</li>
              <li>Pick-up time at Cebu-Mactan International Airport</li>
            </ul>
          </div>

          {/* STEP 7 */}
          <div className="content-block" style={{ marginTop: 40 }}>
            <h3 style={stepHeadingStyle}>STEP 7: Arrival in the Philippines</h3>
            <p>CIJ staff will meet you at Cebu-Mactan International Airport.</p>
            <p>Please carefully follow the meeting instructions provided in your Pick-up Letter.</p>
            <p style={{ marginTop: 16, fontWeight: 600 }}>First Day Schedule (Regular Students):</p>
            <p>Monday</p>
            <ul>
              <li>Morning: Placement Test</li>
              <li>Afternoon: Orientation &amp; Academic Counseling</li>
              <li>Shopping mall visit &amp; currency exchange</li>
            </ul>
            <p style={{ marginTop: 16 }}>Regular classes begin on Tuesday morning.</p>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SCHOOL RULES                   */}
      {/* ============================== */}
      <section id="school-rules" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>CIJ Academy &amp; School - School Regulations</h2>
            <span className="accent-line"></span>
          </div>

          <div className="content-block">
            <p style={{ marginBottom: 32 }}>
              LILOAN CIJ EDUCATION INC., operating as CIJ Academy &amp; School (hereinafter referred to as &quot;CIJ&quot;), establishes the following policies to maintain a proper academic environment, ensure student safety, and promote a successful study experience.
            </p>
            <p style={{ marginBottom: 40 }}>
              All students are required to comply with these regulations throughout their enrollment period.
            </p>

            {/* Registration Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Registration Policy</h3>
              <ol>
                <li style={ruleItemStyle}>All registrations must be completed through an official CIJ agent or directly via the school&apos;s designated process.</li>
                <li style={ruleItemStyle}>Students must submit accurate personal information at the time of registration. Any falsification may result in enrollment cancellation.</li>
                <li style={ruleItemStyle}>Registration is confirmed only after full tuition payment has been received and the Letter of Admission (LOA) has been issued.</li>
              </ol>
            </div>

            {/* General Compliance */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>General Compliance</h3>
              <ol>
                <li style={ruleItemStyle}>
                  Students must comply with all Philippine laws and local regulations during their stay.
                  <ul style={{ marginTop: 8 }}>
                    <li>Any student found violating local laws may face immediate dismissal from the academy.</li>
                    <li>CIJ is not responsible for any legal issues arising from a student&apos;s personal conduct outside the campus.</li>
                  </ul>
                </li>
                <li style={ruleItemStyle}>
                  Possession, use, or distribution of illegal drugs is strictly prohibited.
                  <ul style={{ marginTop: 8 }}>
                    <li>This includes but is not limited to marijuana, methamphetamine, cocaine, and other controlled substances.</li>
                    <li>Violation will result in immediate dismissal and reporting to local authorities.</li>
                  </ul>
                </li>
                <li style={ruleItemStyle}>
                  Any form of violence, harassment, bullying, or discrimination against fellow students, staff, or faculty is strictly prohibited.
                  <ul style={{ marginTop: 8 }}>
                    <li>This includes verbal, physical, and online harassment.</li>
                    <li>Violations will be subject to disciplinary action, up to and including dismissal.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Notification Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Notification Policy</h3>
              <p>All official school notifications, schedule changes, and policy updates will be communicated through the school&apos;s official channels (bulletin board, group chat, or email). Students are responsible for regularly checking these channels. Failure to read or acknowledge notifications does not exempt a student from compliance.</p>
            </div>

            {/* Authority & Limitation of Liability */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Authority &amp; Limitation of Liability</h3>
              <ol>
                <li style={ruleItemStyle}>
                  CIJ reserves the right to modify school rules, class schedules, and campus policies at any time without prior notice if deemed necessary for safety or operational reasons.
                  <ul style={{ marginTop: 8 }}>
                    <li>Students will be informed of significant changes through official channels.</li>
                  </ul>
                </li>
                <li style={ruleItemStyle}>
                  CIJ is not liable for any personal loss, theft, or damage to personal property.
                  <ul style={{ marginTop: 8 }}>
                    <li>Students are strongly advised to use the provided safety deposit boxes and to purchase travel insurance that covers personal belongings.</li>
                  </ul>
                </li>
                <li style={ruleItemStyle}>
                  CIJ is not responsible for any injury, illness, or accident occurring outside the campus or during personal travel.
                  <ul style={{ marginTop: 8 }}>
                    <li>Students participating in off-campus activities do so at their own risk.</li>
                  </ul>
                </li>
                <li style={ruleItemStyle}>
                  CIJ is not responsible for changes in Philippine immigration policy, visa regulations, or travel restrictions imposed by external authorities.
                  <ul style={{ marginTop: 8 }}>
                    <li>Students are responsible for maintaining valid immigration status throughout their stay.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Safety & Insurance Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Safety &amp; Insurance Policy</h3>
              <ol>
                <li style={ruleItemStyle}>All students are required to have valid overseas travel insurance for the entire duration of their stay.</li>
                <li style={ruleItemStyle}>Students must inform the school of any pre-existing medical conditions, allergies, or medications during registration.</li>
                <li style={ruleItemStyle}>In case of a medical emergency, CIJ staff will assist in arranging hospital transport, but all medical expenses are the student&apos;s responsibility.</li>
                <li style={ruleItemStyle}>Students are advised not to bring excessive amounts of cash or expensive items. CIJ is not liable for any loss or theft.</li>
              </ol>
            </div>

            {/* Immigration & Airport Services */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Immigration &amp; Airport Services</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Airport Pickup</p>
              <ul>
                <li style={ruleItemStyle}>CIJ provides airport pickup service at Cebu-Mactan International Airport on designated arrival days.</li>
                <li style={ruleItemStyle}>Students must submit their flight details at least 5 business days before arrival.</li>
                <li style={ruleItemStyle}>Late submission of flight details may result in unavailability of pickup service.</li>
                <li style={ruleItemStyle}>If a student arrives outside the designated pickup schedule, they must arrange their own transportation to the school.</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Course Changes</p>
              <ul>
                <li style={ruleItemStyle}>Course changes after arrival are subject to availability and may incur additional fees or price adjustments.</li>
                <li style={ruleItemStyle}>Requests for course changes must be submitted to the academic office at least one week before the desired change date.</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Flight Booking</p>
              <ul>
                <li style={ruleItemStyle}>Students are responsible for booking their own flights. CIJ does not provide flight booking services.</li>
                <li style={ruleItemStyle}>Students should book a return or onward ticket as required by Philippine immigration for entry.</li>
              </ul>
            </div>

            {/* Public Holidays */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Public Holidays</h3>
              <p>CIJ follows the official Philippine public holiday calendar. No classes will be held on public holidays, and no make-up classes will be provided. If a public holiday falls on a weekday, the school may arrange optional group activities or self-study sessions, but regular one-on-one and group classes will not be conducted.</p>
            </div>

            {/* Security Deposit */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Security Deposit</h3>
              <p>A security deposit is collected upon check-in. This deposit covers potential damages to dormitory facilities, lost keys, or rule violations requiring financial penalties. The deposit (minus any deductions) will be refunded at check-out. Deductions may include:</p>
              <ul>
                <li style={ruleItemStyle}>Damage to room furniture, fixtures, or appliances</li>
                <li style={ruleItemStyle}>Lost room key or access card</li>
                <li style={ruleItemStyle}>Unpaid local fees (electricity, water overuse, etc.)</li>
                <li style={ruleItemStyle}>Outstanding fines from rule violations</li>
              </ul>
            </div>

            {/* Academic Regulations */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Academic Regulations</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Program Changes</p>
              <p>Students may request a program change after arrival, subject to availability and approval by the academic office. Price differences will be adjusted accordingly. Downgrading to a lower-priced course may result in a partial refund based on the remaining weeks.</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Course Extension</p>
              <p>Students who wish to extend their study period must submit a request at least 2 weeks before their current course ends. Extensions are subject to room and class availability. Extended tuition must be paid before the new term begins.</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Class Structure</p>
              <p>Classes consist of one-on-one sessions, small group classes, and optional group classes depending on the enrolled program. The school reserves the right to adjust class composition and teacher assignments based on operational needs.</p>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Attendance Policy</p>
              <ul>
                <li style={ruleItemStyle}>Students must attend all scheduled classes. Unexcused absences will be recorded.</li>
                <li style={ruleItemStyle}>Absence from 3 or more consecutive classes without notice may result in a warning.</li>
                <li style={ruleItemStyle}>Excessive absences (more than 20% of total classes) may result in a certificate not being issued at graduation.</li>
                <li style={ruleItemStyle}>Sick leave requires notification to the office before 8:00 AM. A medical certificate may be required for absences of 2 or more consecutive days.</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Class Changes</p>
              <p>Requests for teacher or schedule changes can be submitted to the academic office. Changes are processed weekly (effective the following Monday). Repeated or excessive change requests may be denied at the school&apos;s discretion.</p>
            </div>

            {/* Dormitory Regulations */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Dormitory Regulations</h3>
              <ol>
                <li style={ruleItemStyle}>Students must keep their rooms clean and in good condition. Room inspections may be conducted periodically.</li>
                <li style={ruleItemStyle}>Cooking inside dormitory rooms is strictly prohibited due to fire safety regulations.</li>
                <li style={ruleItemStyle}>Guests and visitors are not allowed inside the dormitory building without prior approval from the school office.</li>
                <li style={ruleItemStyle}>Quiet hours are from 10:00 PM to 7:00 AM. Students must keep noise levels to a minimum during this time.</li>
                <li style={ruleItemStyle}>Use of high-wattage electrical appliances (e.g., electric stoves, heaters) is prohibited in dormitory rooms.</li>
                <li style={ruleItemStyle}>Students must not tamper with or damage room fixtures, including air conditioning units, furniture, and plumbing.</li>
                <li style={ruleItemStyle}>Room key/card loss must be reported immediately. A replacement fee will be charged.</li>
                <li style={ruleItemStyle}>Room changes are only permitted with approval from the dormitory manager and are subject to availability.</li>
              </ol>
            </div>

            {/* Curfew Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Curfew Policy</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>SEMI-SPARTA</p>
              <ul>
                <li style={ruleItemStyle}>Sunday to Thursday: Must return by 10:00 PM</li>
                <li style={ruleItemStyle}>Friday and Saturday: Must return by 12:00 AM (midnight)</li>
                <li style={ruleItemStyle}>Students may go out after classes on weekdays and freely on weekends.</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>SPARTA</p>
              <ul>
                <li style={ruleItemStyle}>Monday to Thursday: No outings allowed (students must remain on campus)</li>
                <li style={ruleItemStyle}>Friday: May go out after classes, must return by 12:00 AM</li>
                <li style={ruleItemStyle}>Saturday: Free day, must return by 12:00 AM</li>
                <li style={ruleItemStyle}>Sunday: Must return by 10:00 PM (mandatory self-study in the evening)</li>
              </ul>
            </div>

            {/* Outing & Travel Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Outing &amp; Travel Policy</h3>
              <ol>
                <li style={ruleItemStyle}>Overnight trips (outside of curfew hours) require advance written approval from the school office. Approval must be requested at least 2 business days in advance.</li>
                <li style={ruleItemStyle}>Students traveling to other islands or provinces must submit a travel request form, including destination, travel dates, and emergency contact information.</li>
                <li style={ruleItemStyle}>CIJ is not responsible for any incidents, accidents, or losses that occur during personal travel outside the campus.</li>
              </ol>
            </div>

            {/* Warning & Dismissal Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Warning &amp; Dismissal Policy</h3>
              <p>Violations of school rules will result in the following progressive disciplinary actions:</p>
              <ul>
                <li style={ruleItemStyle}>1st violation: Verbal warning</li>
                <li style={ruleItemStyle}>2nd violation: Written warning</li>
                <li style={ruleItemStyle}>3rd violation: Final warning with possible suspension of privileges</li>
                <li style={ruleItemStyle}>4th violation: Dismissal from the academy (no refund)</li>
              </ul>
              <p style={{ marginTop: 16, fontWeight: 600 }}>The following offenses result in immediate dismissal without warning:</p>
              <ul>
                <li style={ruleItemStyle}>Use, possession, or distribution of illegal drugs</li>
                <li style={ruleItemStyle}>Physical violence or assault</li>
                <li style={ruleItemStyle}>Sexual harassment or misconduct</li>
                <li style={ruleItemStyle}>Theft or fraud</li>
                <li style={ruleItemStyle}>Serious damage to school property</li>
                <li style={ruleItemStyle}>Any conduct that endangers the safety of others</li>
              </ul>
            </div>

            {/* Refund Policy */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Refund Policy</h3>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Before Departure (Before Course Start)</p>
              <ul>
                <li style={ruleItemStyle}>Cancellation 4 weeks or more before course start: Full refund minus administrative fees.</li>
                <li style={ruleItemStyle}>Cancellation 2–4 weeks before course start: 70% refund.</li>
                <li style={ruleItemStyle}>Cancellation less than 2 weeks before course start: 50% refund.</li>
                <li style={ruleItemStyle}>No-show (failure to arrive without notice): No refund.</li>
              </ul>

              <p style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>After Course Start</p>
              <ul>
                <li style={ruleItemStyle}>Within the first week: 70% refund of remaining weeks.</li>
                <li style={ruleItemStyle}>After the first week but within 50% of the course: 50% refund of remaining weeks.</li>
                <li style={ruleItemStyle}>After 50% of the course has been completed: No refund.</li>
                <li style={ruleItemStyle}>Dismissal due to rule violations: No refund.</li>
              </ul>
              <p style={{ marginTop: 8 }}>All refunds are processed within 4–6 weeks after the refund request is approved. Refunds are made via the original payment method or bank transfer. Local fees already paid (SSP, visa extension, utilities, etc.) are non-refundable.</p>
            </div>

            {/* Check-In & Check-Out */}
            <div style={categoryStyle}>
              <h3 style={categoryHeadingStyle}>Check-In &amp; Check-Out</h3>
              <ul>
                <li style={ruleItemStyle}>Check-in: Sunday before the course start date.</li>
                <li style={ruleItemStyle}>Check-out: Saturday after the course end date (by 12:00 PM noon).</li>
                <li style={ruleItemStyle}>Early check-in or late check-out may be arranged subject to availability and may incur additional charges.</li>
              </ul>
              <p style={{ marginTop: 16, fontWeight: 600 }}>Overstay Fees:</p>
              <ul>
                <li style={ruleItemStyle}>Students who remain beyond their scheduled check-out date without prior arrangement will be charged a daily overstay fee.</li>
                <li style={ruleItemStyle}>Overstay fees are based on the current dormitory rate and must be settled before departure.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
