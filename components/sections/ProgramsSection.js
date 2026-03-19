import { useLanguage } from '@/lib/LanguageContext';

/* ───────────────────────────────────────────────────────
   SEMI SPARTA
   ─────────────────────────────────────────────────────── */
function SemiSpartaProgram() {
  return (
    <section id="semi-sparta" className="section">
      <div className="container">
        <div className="section-divider" style={{ marginBottom: 48 }}>
          <h2>Semi Sparta</h2>
        </div>

        {/* Introduction */}
        <div className="content-block">
          <p>
            During your study period in the Philippines, you don&rsquo;t just study English—you also experience a variety of activities.
            You can visit different places such as shopping malls, restaurants, and massage shops, meet people outside CIJ, and communicate using the English you&rsquo;ve learned in class.
            These real-life experiences will help improve your English communication skills.
            The CIJ Semi-Sparta Course Program allows students to go out until 21:00 after classes, giving them the opportunity to enjoy these experiences.
          </p>
        </div>

        {/* Class Type */}
        <div className="content-block">
          <h3>Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 1 to 24 weeks</li>
              <li><strong>Class Structure:</strong> 45-minute classes with a 5-minute break in between</li>
              <li><strong>Course Start:</strong> Every Monday (weekly start available)</li>
              <li><strong>Level:</strong> Open to students of all levels</li>
            </ul>
          </div>
        </div>

        {/* Courses */}
        <div className="content-block">
          <h3>Courses</h3>

          <div className="program-course-card">
            <h4 className="program-course-name">ESL4 Course (ESL4)</h4>
            <p>1:1 Classes – 4 times every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">General ESL Course (GE)</h4>
            <p>1:1 Classes – 4 times + Small Group Classes – 2 times every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Basic Speaking Course (BS)</h4>
            <p>1:1 Classes – 4 times + Small Group Classes – 3 times + Big Group Classes – 1 time + Self-Study – 1 time every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Power Speaking Course (PS)</h4>
            <p>1:1 Classes – 5 times + Small Group Classes – 2 times + Big Group Classes – 1 time + Self-Study – 1 time every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">ESL + Golf Course</h4>
            <p>A Course – 1:1 Classes – 4 times every weekday + Golf Rounding – 1 time per week</p>
            <p>B Course – 1:1 Classes – 4 times every weekday + Golf Rounding – 2 times per week</p>
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="content-block">
          <h3>Program Curriculum</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Lesson Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Classes</td>
                <td>Speaking, Listening, Reading, Writing, Grammar</td>
              </tr>
              <tr>
                <td>Small Group Classes</td>
                <td>Debate, Presentation</td>
              </tr>
              <tr>
                <td>Big Group Classes</td>
                <td>Native Conversation Class, Presentation Class, Movie Class, Mythology Class, Public Speaking Class, Situational Class, World History Class, Intensive English Grammar Class</td>
              </tr>
              <tr>
                <td>Self Study</td>
                <td>Mandatory Self Study</td>
              </tr>
              <tr>
                <td>Golf Rounding</td>
                <td>Club Filipino</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          <div className="program-timetable-wrapper">
            <div className="program-timetable-main">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Class</th>
                    <th>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>07:20 ~ 08:00</td><td>Meal Time</td><td>07:20 ~ 08:00</td></tr>
                  <tr><td>08:00 ~ 08:45</td><td>1st Class</td><td>08:00 ~ 08:40</td></tr>
                  <tr><td>08:50 ~ 09:35</td><td>2nd Class</td><td>08:45 ~ 09:25</td></tr>
                  <tr><td>09:40 ~ 10:25</td><td>3rd Class</td><td>09:30 ~ 10:10</td></tr>
                  <tr><td>10:30 ~ 11:15</td><td>4th Class</td><td>10:15 ~ 10:55</td></tr>
                  <tr><td>11:20 ~ 12:05</td><td>5th Class</td><td>11:00 ~ 11:40</td></tr>
                  <tr><td>12:05 ~ 13:00</td><td>Meal time</td><td>12:00 ~ 13:00</td></tr>
                  <tr><td>13:00 ~ 13:45</td><td>6th Class</td><td>13:00 ~ 13:40</td></tr>
                  <tr><td>13:50 ~ 14:35</td><td>7th Class</td><td>13:45 ~ 14:25</td></tr>
                  <tr><td>14:40 ~ 15:25</td><td>8th Class</td><td>14:30 ~ 15:10</td></tr>
                  <tr><td>15:30 ~ 16:15</td><td>9th Class</td><td>15:15 ~ 15:55</td></tr>
                  <tr><td>16:20 ~ 17:05</td><td>10th Class</td><td>16:00 ~ 16:40</td></tr>
                  <tr><td>17:10 ~ 17:55</td><td>11th Class</td><td>16:45 ~ 17:25</td></tr>
                  <tr><td>18:00 ~ 18:50</td><td>Meal time</td><td>18:00 ~ 18:50</td></tr>
                </tbody>
              </table>
            </div>

            <div className="program-timetable-notice">
              <div className="program-notice-block">
                <p><strong>※ Regular Class</strong></p>
                <p>■ Each class lasts 45 minutes, with a 5-minute break in between.</p>
                <p>■ Students can choose their classes from 1 to 10 according to their curriculum.</p>
                <p>■ Mandatory self study</p>
              </div>
              <div className="program-notice-block">
                <p><strong>※ Self-Study</strong></p>
                <p>■ Students are required to attend self-study every day, excluding weekends and holidays.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="content-block">
          <div className="program-notes">
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ A level test will be given on the last Friday of every month. Regular classes will be suspended for the test.</p>
            <p>※ There are no lessons on holidays however, to ensure class guarantees, special classes may also be provided.</p>
            <p>※ On Fridays, each 45-minute class is shortened to 40 minutes.</p>
            <p>※ Small Group Classes are held for 3 to 5 students.</p>
            <p>※ Big Group Classes are held for 8 to 10 students.</p>
            <p>※ Semi-Sparta and Family students are allowed to go out after class, but must return by 21:00.</p>
          </div>
        </div>

        {/* Golf Rounding */}
        <div className="content-block">
          <h3>Golf Rounding</h3>
          <div className="program-notes">
            <p>※ Golf rounds are scheduled on weekdays only, excluding weekends and Philippine public holidays. Detailed schedules will be announced weekly.</p>
            <p>※ The golf round schedule may change due to local circumstances, such as weather conditions.</p>
            <p>※ No classes will be held during golf rounds. However, for those who register for make-up classes, up to two classes will be offered each Saturday.</p>
            <p>※ Students are responsible for preparing their own golf equipment, such as golf clubs, golf shoes, and gloves.</p>
            <p>※ The tuition fee is based on 18 holes. An additional fee will be charged for 27 holes.</p>
            <p>※ An additional fee will be charged for selecting golf courses other than Club Filipino.</p>
            <p>※ Pickup and drop-off costs for the golf course are included in the tuition fee.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SPARTA
   ─────────────────────────────────────────────────────── */
function SpartaProgram() {
  return (
    <section id="sparta" className="section section-alt">
      <div className="container">
        <div className="section-divider" style={{ marginBottom: 48 }}>
          <h2>Sparta</h2>
        </div>

        {/* Introduction */}
        <div className="content-block">
          <p>
            Are you wondering how much your English can improve in a short language study period? With CIJ&rsquo;s Sparta Course Program, you can significantly enhance your English skills. Enjoy over 11 hours of intensive Spartan classes each day, along with daily word and sentence tests conducted twice a day. Join the CIJ Sparta Program, which focuses on studying during weekdays and allows weekends off.
          </p>
        </div>

        {/* Class Type */}
        <div className="content-block">
          <h3>Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 1 to 24 weeks</li>
              <li><strong>Class Structure:</strong> 45-minute classes with a 5-minute break in between</li>
              <li><strong>Course Start:</strong> Every Monday</li>
              <li><strong>Level:</strong> Students of any level can join this course.</li>
            </ul>
          </div>
        </div>

        {/* Courses */}
        <div className="content-block">
          <h3>Courses</h3>

          <div className="program-course-card">
            <h4 className="program-course-name">Sparta 5 Course (S5)</h4>
            <p>1:1 Classes – 5 times + Small Group Classes – 2 times + Big Group Classes – 1 time + Voca &amp; Sentence Test – 1 time + Self-Study – 1 time every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Sparta 6 Course (S6)</h4>
            <p>1:1 Classes – 6 times + Small Group Classes – 2 times + Big Group Classes – 1 time + Voca &amp; Sentence Test – 1 time + Self-Study – 1 time every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">IELTS Basic</h4>
            <p>1:1 Classes – 5 times (2 times IELTS + 3 times ESL) + Small Group Classes – 3 times (1 time IELTS + 2 times ESL) + Big Group Classes – 1 time + Voca &amp; Sentence Test – 1 time + Self-Study – 1 time every weekday</p>
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="content-block">
          <h3>Program Curriculum</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Lesson Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Classes</td>
                <td>Speaking, Listening, Reading, Writing, Grammar</td>
              </tr>
              <tr>
                <td>1:1 IELTS Classes-2 Sessions</td>
                <td>IELTS Speaking, IELTS Reading, IELTS listening, IELTS Grammar &amp; Writing</td>
              </tr>
              <tr>
                <td>Small Group Classes</td>
                <td>Debate, Presentation</td>
              </tr>
              <tr>
                <td>Small Group IELTS Class-1time</td>
                <td>IELTS Speaking, IELTS Reading, IELTS listening, IELTS Grammar &amp; Writing</td>
              </tr>
              <tr>
                <td>Big Group Classes</td>
                <td>Native Conversation, Presentation, Movie Class, Mythology Class, Public Speaking Class, Situational Class, World History, Intensive English Grammar</td>
              </tr>
              <tr>
                <td>Self-Study</td>
                <td>Mandatory self-study</td>
              </tr>
              <tr>
                <td>Voca &amp; Sentence Test</td>
                <td>Vocabulary Test : 1time before breakfast / Sentence Test : 1time after dinner</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          <div className="program-timetable-wrapper">
            <div className="program-timetable-main">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Class</th>
                    <th>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>06:30 ~ 07:20</td><td>Vocabulary Test</td><td>06:30 ~ 07:20</td></tr>
                  <tr><td>07:20 ~ 08:00</td><td>Meal Time</td><td>07:20 ~ 08:00</td></tr>
                  <tr><td>08:00 ~ 08:45</td><td>1st Class</td><td>08:00 ~ 08:40</td></tr>
                  <tr><td>08:50 ~ 09:35</td><td>2nd Class</td><td>08:45 ~ 09:25</td></tr>
                  <tr><td>09:40 ~ 10:25</td><td>3rd Class</td><td>09:30 ~ 10:10</td></tr>
                  <tr><td>10:30 ~ 11:15</td><td>4th Class</td><td>10:15 ~ 10:55</td></tr>
                  <tr><td>11:20 ~ 12:05</td><td>5th Class</td><td>11:00 ~ 11:40</td></tr>
                  <tr><td>12:05 ~ 13:00</td><td>Meal time</td><td>12:00 ~ 13:00</td></tr>
                  <tr><td>13:00 ~ 13:45</td><td>6th Class</td><td>13:00 ~ 13:40</td></tr>
                  <tr><td>13:50 ~ 14:35</td><td>7th Class</td><td>13:45 ~ 14:25</td></tr>
                  <tr><td>14:40 ~ 15:25</td><td>8th Class</td><td>14:30 ~ 15:10</td></tr>
                  <tr><td>15:30 ~ 16:15</td><td>9th Class</td><td>15:15 ~ 15:55</td></tr>
                  <tr><td>16:20 ~ 17:05</td><td>10th Class</td><td>16:00 ~ 16:40</td></tr>
                  <tr><td>17:10 ~ 17:55</td><td>11th Class</td><td>16:45 ~ 17:25</td></tr>
                  <tr><td>18:00 ~ 18:50</td><td>Meal time</td><td>18:00 ~ 18:50</td></tr>
                  <tr><td>19:00 ~ 19:50</td><td>Self Study</td><td></td></tr>
                  <tr><td>20:00 ~ 20:50</td><td>Sentence Test</td><td></td></tr>
                </tbody>
              </table>
            </div>

            <div className="program-timetable-notice">
              <div className="program-notice-block">
                <p><strong>※ Regular Class</strong></p>
                <p>■ Each class lasts 45 minutes, with a 5-minute break in between.</p>
                <p>■ Students can choose their classes from 1 to 10 according to their curriculum.</p>
                <p>■ Mandatory self study</p>
              </div>
              <div className="program-notice-block">
                <p><strong>※ Self-Study</strong></p>
                <p>■ Students are required to attend 1 session every day, excluding weekends and holidays.</p>
              </div>
              <div className="program-notice-block">
                <p><strong>※ Vocabulary Test &amp; Sentence Test</strong></p>
                <p>■ Sparta Course students are required to join these tests.</p>
                <p>■ Penalties will apply if students fail the test.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="content-block">
          <div className="program-notes">
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ A level test will be given on the last Friday of every month. Regular classes will be suspended for the test.</p>
            <p>※ There are no lessons on holidays however, to ensure class guarantees, special classes may also be provided.</p>
            <p>※ On Fridays, each 45-minute class is shortened to 40 minutes.</p>
            <p>※ Small Group Classes are held for 3 to 5 students.</p>
            <p>※ Big Group Classes are held for 8 to 10 students.</p>
            <p>※ Semi-Sparta and Family students are allowed to go out after class, but must return by 21:00.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   JUNIOR
   ─────────────────────────────────────────────────────── */
function JuniorProgram() {
  return (
    <section id="junior-program" className="section">
      <div className="container">
        <div className="section-divider" style={{ marginBottom: 48 }}>
          <h2>Junior</h2>
        </div>

        {/* Introduction */}
        <div className="content-block">
          <p>
            CIJ started its Junior Program in 2003 and has since gained extensive experience in student management and smooth communication with guardians. From the beginning, CIJ has always put students first. That is why we have developed systems such as the Mentoring System, Weakness Cure System, Safety System, Health Care System, and the Everyone Care System to ensure a better stay and more effective learning experience.
          </p>
        </div>

        {/* Junior ESL Class Type */}
        <div className="content-block">
          <h3>Junior ESL Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 1 to 24 weeks</li>
              <li><strong>Class Duration:</strong> 45 minutes per class with 5-minute breaks in between</li>
              <li><strong>Course Start:</strong> Every Monday</li>
              <li><strong>Training Target:</strong> Ages 8 to 17</li>
            </ul>
          </div>
        </div>

        {/* Overseas Schooling Class Type */}
        <div className="content-block">
          <h3>Overseas Schooling Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 6 months or more</li>
              <li>Cebu Local School Admissions Guide</li>
              <li><strong>Course Start:</strong> Every Monday</li>
              <li><strong>Eligibility:</strong> Ages 7 to 17</li>
              <li>Philippine Holiday &amp; Weekend Schedule Management</li>
            </ul>
          </div>
        </div>

        {/* Courses */}
        <div className="content-block">
          <h3>Courses</h3>

          <div className="program-course-card">
            <h4 className="program-course-name">Junior ESL Course</h4>
            <p>1:1 Classes – 5 times + Small Group Classes – 2 times + Big Group Classes – 1 time + Physical Activity – 2 times + Vocabulary &amp; Idiom Class – 1 time + Vocabulary &amp; Idiom Test – 1 time + Essay Writing – 1 time + Self-Study – 1 time every weekday</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Overseas Schooling</h4>
            <p>1:1 Class – 2 times</p>
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="content-block">
          <h3>Program Curriculum</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Lesson Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Classes</td>
                <td>Speaking, Listening, Reading, Writing, Grammar</td>
              </tr>
              <tr>
                <td>Small Group Classes</td>
                <td>Debate, Presentation, Reading</td>
              </tr>
              <tr>
                <td>Big Group Classes</td>
                <td>Big Group Classes – Native Conversation, Presentation, Movie Class, Mythology Class, Public Speaking Class, Situational Class, World History, Intensive English Grammar</td>
              </tr>
              <tr>
                <td>Physical Activity</td>
                <td>Self-directed Physical Activity</td>
              </tr>
              <tr>
                <td>Self-Study</td>
                <td>Mandatory self-study</td>
              </tr>
              <tr>
                <td>Vocabulary &amp; Idiom</td>
                <td>Vocabulary &amp; Sentence Pattern Class</td>
              </tr>
              <tr>
                <td>Vocabulary Test &amp; Snack time</td>
                <td>Daily Vocabulary &amp; Sentence Test &amp; Snack Time</td>
              </tr>
              <tr>
                <td>Essay Writing</td>
                <td>Essay writing by topic</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>06:50 ~ 07:00</td><td>Roll Call</td><td>06:50 ~ 07:00</td><td></td><td></td></tr>
                <tr><td>07:00 ~ 08:00</td><td>Breakfast</td><td>07:00 ~ 08:00</td><td>07:00 ~ 08:00</td><td>07:00 ~ 08:00</td></tr>
                <tr><td>08:00 ~ 08:45</td><td>1st Class</td><td>08:00 ~ 08:40</td><td rowSpan={8}>Plantation-bay Resort<br/>Safari Adventure Park<br/>City Tour<br/>J-Park Resort<br/>Westown Lagoon<br/>El-Salvador Resort<br/>Maribago Bluewater<br/>Ocean Park Cebu<br/>+ Lunch</td><td>Level Test</td></tr>
                <tr><td>08:50 ~ 09:35</td><td>2nd Class</td><td>08:45 ~ 09:25</td><td rowSpan={3}>Humanism Education &amp; Indoor Activity</td></tr>
                <tr><td>09:40 ~ 10:25</td><td>3rd Class</td><td>09:30 ~ 10:10</td></tr>
                <tr><td>10:30 ~ 11:15</td><td>4th Class</td><td>10:15 ~ 10:55</td></tr>
                <tr><td>11:20 ~ 12:05</td><td>5th Class</td><td>11:00 ~ 11:40</td><td rowSpan={4}>Study Check-up</td></tr>
                <tr><td>12:05 ~ 13:00</td><td>Meal time</td><td>12:00 ~ 13:00</td></tr>
                <tr><td>13:00 ~ 13:45</td><td>6th Class</td><td>13:00 ~ 13:40</td></tr>
                <tr><td>13:50 ~ 14:35</td><td>7th Class</td><td>13:45 ~ 14:25</td></tr>
                <tr><td>14:40 ~ 15:25</td><td>8th Class</td><td>14:30 ~ 15:10</td><td></td><td></td></tr>
                <tr><td>15:30 ~ 16:15</td><td>9th Class</td><td>15:15 ~ 15:55</td><td></td><td></td></tr>
                <tr><td>16:20 ~ 17:05</td><td>10th Class</td><td>16:00 ~ 16:40</td><td></td><td></td></tr>
                <tr><td>17:10 ~ 17:55</td><td>11th Class</td><td>16:45 ~ 17:25</td><td></td><td></td></tr>
                <tr><td>18:00 ~ 18:50</td><td>Meal time</td><td>18:00 ~ 18:50</td><td>18:00 ~ 18:50</td><td>18:00 ~ 18:50</td></tr>
                <tr><td>19:00 ~ 19:50</td><td>Self Study</td><td></td><td></td><td></td></tr>
                <tr><td>20:00 ~ 20:50</td><td>Vocabulary Test</td><td></td><td></td><td></td></tr>
                <tr><td>21:30</td><td>Roll Call</td><td>21:30</td><td>21:30</td><td>21:30</td></tr>
                <tr><td>22:00 ~ 23:00</td><td>Learning Support</td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="content-block">
          <div className="program-notes">
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ A level test will be given on the last Friday of every month. Regular classes will be suspended for the test.</p>
            <p>※ There are no lessons on holidays however, to ensure class guarantees, special classes may also be provided.</p>
            <p>※ On Fridays, each 45-minute class is shortened to 40 minutes.</p>
            <p>※ Small Group Classes are held for 3 to 5 students.</p>
            <p>※ Big Group Classes are held for 8 to 10 students.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   JUNIOR CAMP
   ─────────────────────────────────────────────────────── */
function JuniorCampProgram() {
  return (
    <section id="junior-camp" className="section section-alt">
      <div className="container">
        <div className="section-divider" style={{ marginBottom: 48 }}>
          <h2>Junior Camp</h2>
        </div>

        {/* Introduction */}
        <div className="content-block">
          <p>
            This is an intensive program designed for elementary and middle school students, offering a tightly structured daily schedule to promote rapid improvement in English skills through both learning and daily routines..
          </p>
        </div>

        {/* Class Type */}
        <div className="content-block">
          <h3>Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 4weeks ~ 12weeks</li>
              <li><strong>Class Structure:</strong> 40 minute classes with a 5 minute rest in between</li>
              <li><strong>Course Start:</strong> Summer vacation and winter vacation</li>
              <li><strong>Training Target:</strong> From 8 to 17 years old</li>
            </ul>
          </div>
        </div>

        {/* Courses */}
        <div className="content-block">
          <h3>Courses</h3>

          <div className="program-course-card">
            <h4 className="program-course-name">Junior IELTS Course</h4>
            <p>1:1 Class – 6 times (4 times IELTS + 2 times ESL) + Big Group Class – 1 time + Physical Activity – 2 times + Club Activity Class – 2 times + Vocabulary &amp; Sentence Class – 1 time + Vocabulary &amp; Sentence Test – 1 time + Essay Writing – 1 time</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Power Intensive Course</h4>
            <p>1:1 Class – 6 times + Big Group Class – 1 time + Physical Activity – 2 times + Club Activity Class – 2 times + Vocabulary &amp; Sentence Class – 1 time + Vocabulary &amp; Sentence Test – 1 time + Essay Writing – 1 time</p>
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="content-block">
          <h3>Program Curriculum</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Lesson Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Classes</td>
                <td>Speaking, Listening, Reading, Writing, Grammar</td>
              </tr>
              <tr>
                <td>1:1 IELTS Classes</td>
                <td>IELTS Speaking, IELTS Reading, IELTS listening, IELTS Grammar &amp; Writing</td>
              </tr>
              <tr>
                <td>Big Group Classes</td>
                <td>Pronunciation Correction &amp; Debate</td>
              </tr>
              <tr>
                <td>Physical Activity</td>
                <td>Sports Activity, Swimming or Vocabulary Memorization</td>
              </tr>
              <tr>
                <td>Club Activity</td>
                <td>Guitar, Pop song, etc. Student wanted activity</td>
              </tr>
              <tr>
                <td>Vocabulary &amp; Idiom</td>
                <td>Vocabulary and sentence pattern class</td>
              </tr>
              <tr>
                <td>Vocabulary Test &amp; Snack time</td>
                <td>Daily vocabulary and sentence test &amp; snack time</td>
              </tr>
              <tr>
                <td>Essay Writing</td>
                <td>Essay writing by topic</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>06:50 ~ 07:00</td><td>Roll Call</td><td></td><td></td></tr>
                <tr><td>07:00 ~ 08:00</td><td>Breakfast</td><td>07:00 ~ 08:00</td><td>07:00 ~ 08:00</td></tr>
                <tr><td>08:00 ~ 08:40</td><td>1st Class</td><td rowSpan={8}>Plantation-bay Resort<br/>Safari Adventure Park<br/>City Tour<br/>J-Park Resort<br/>Westown Lagoon<br/>El-Salvador Resort<br/>Maribago Bluewater<br/>Ocean Park Cebu<br/>+ Lunch</td><td>Level Test</td></tr>
                <tr><td>08:45 ~ 09:25</td><td>2nd Class</td><td rowSpan={3}>Humanism Education &amp; Indoor Activity</td></tr>
                <tr><td>09:30 ~ 10:10</td><td>3rd Class</td></tr>
                <tr><td>10:10 ~ 10:30</td><td>Snack Break</td></tr>
                <tr><td>10:30 ~ 11:10</td><td>4th Class</td><td rowSpan={4}>Study Check-up</td></tr>
                <tr><td>11:15 ~ 11:55</td><td>5th Class</td></tr>
                <tr><td>12:00 ~ 13:00</td><td>Meal time</td></tr>
                <tr><td>13:00 ~ 13:40</td><td>6th Class</td></tr>
                <tr><td>13:45 ~ 14:25</td><td>7th Class</td><td></td><td></td></tr>
                <tr><td>14:30 ~ 15:10</td><td>8th Class</td><td></td><td></td></tr>
                <tr><td>15:15 ~ 15:35</td><td>Snack Break</td><td></td><td></td></tr>
                <tr><td>15:35 ~ 16:15</td><td>9th Class</td><td></td><td></td></tr>
                <tr><td>16:20 ~ 17:00</td><td>10th Class</td><td></td><td></td></tr>
                <tr><td>17:05 ~ 17:45</td><td>11th Class</td><td></td><td></td></tr>
                <tr><td>18:00 ~ 18:50</td><td>Meal time</td><td>18:00 ~ 18:50</td><td>18:00 ~ 18:50</td></tr>
                <tr><td>19:00 ~ 19:50</td><td>Self Study</td><td></td><td></td></tr>
                <tr><td>20:00 ~ 20:50</td><td>Vocabulary Test</td><td></td><td></td></tr>
                <tr><td>21:30</td><td>Roll Call</td><td>21:30</td><td>21:30</td></tr>
                <tr><td>22:00 ~ 23:00</td><td>Learning Support</td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="content-block">
          <h3>Weekly Schedule</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
              </thead>
              <tbody>
                <tr><td></td><td></td><td>7/2<br/>Arrival</td><td>7/3<br/>Level Test &amp; Orientation</td><td>7/4<br/>Class Start</td><td>7/5<br/>Activity</td><td>7/6<br/>Study Check-up</td></tr>
                <tr><td>7/7<br/>Regular Class</td><td>7/8<br/>Regular Class</td><td>7/9<br/>Regular Class</td><td>7/10<br/>Regular Class</td><td>7/11<br/>Regular Class</td><td>7/12<br/>Activity</td><td>7/13<br/>Study Check-up</td></tr>
                <tr><td>7/14<br/>Regular Class</td><td>7/15<br/>Regular Class</td><td>7/16<br/>Regular Class</td><td>7/17<br/>Regular Class</td><td>7/18<br/>Regular Class</td><td>7/19<br/>Activity</td><td>7/20<br/>Study Check-up</td></tr>
                <tr><td>7/21<br/>Regular Class</td><td>7/22<br/>Regular Class</td><td>7/23<br/>Regular Class</td><td>7/24<br/>Regular Class</td><td>7/25<br/>Level Test</td><td>7/26<br/>Activity</td><td>7/27<br/>Study Check-up</td></tr>
                <tr><td>7/28<br/>Regular Class</td><td>7/29<br/>Regular Class</td><td>7/30<br/>Regular Class</td><td>7/31<br/>Regular Class</td><td>8/1<br/>Regular Class</td><td>8/2<br/>Activity</td><td>8/3<br/>Study Check-up</td></tr>
                <tr><td>8/4<br/>Regular Class</td><td>8/5<br/>Regular Class</td><td>8/6<br/>Regular Class</td><td>8/7<br/>Regular Class</td><td>8/8<br/>Regular Class</td><td>8/9<br/>Activity</td><td>8/10<br/>Study Check-up</td></tr>
                <tr><td>8/11<br/>Regular Class</td><td>8/12<br/>Regular Class</td><td>8/13<br/>Regular Class</td><td>8/14<br/>Regular Class</td><td>8/15<br/>Regular Class</td><td>8/16<br/>Activity</td><td>8/17<br/>Study Check-up</td></tr>
                <tr><td>8/18<br/>Regular Class</td><td>8/19<br/>Regular Class</td><td>8/20<br/>Regular Class</td><td>8/21<br/>Regular Class</td><td>8/22<br/>Level Test</td><td>8/23<br/>Activity</td><td>8/24<br/>Study Check-up</td></tr>
                <tr><td>8/25<br/>Regular Class</td><td>8/26<br/>Departure</td><td></td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="content-block">
          <div className="program-notes">
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ Small Group Classes are held for 3 to 5 students.</p>
            <p>※ Big Group Classes are held for 8 to 10 students.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   FAMILY
   ─────────────────────────────────────────────────────── */
function FamilyProgram() {
  return (
    <section id="family" className="section">
      <div className="container">
        <div className="section-divider" style={{ marginBottom: 48 }}>
          <h2>Family</h2>
        </div>

        {/* ============ OFF SEASON ============ */}
        <div className="content-block">
          <h2 style={{ textAlign: 'center', marginBottom: 32 }}>OFF SEASON</h2>
        </div>

        {/* Introduction */}
        <div className="content-block">
          <p>
            Have you thought about the best place for you and your child to study English? Try CIJ! You can study English on a resort-style campus while living safely and peacefully with your child. Enjoy two spacious, clean swimming pools and relax in a garden filled with beautiful tropical plants.
          </p>
        </div>

        {/* Class Type */}
        <div className="content-block">
          <h3>Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 1 to 24 weeks</li>
              <li><strong>Class Structure:</strong> 45-minute classes with a 5-minute break in between</li>
              <li><strong>Course Start:</strong> Every Monday (weekly start available)</li>
              <li><strong>Level:</strong> Open to students of all levels</li>
            </ul>
          </div>
        </div>

        {/* Courses */}
        <div className="content-block">
          <h3>Courses</h3>

          <div className="program-course-card">
            <h4 className="program-course-name">Guardian Course</h4>
            <p>1:1 Classes – 4 Times</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Junior ESL Course</h4>
            <p>1:1 Classes – 5 Times + Small Group Classes – 2 Times + Big Group Class – 1 Time + Physical Activity – 2 Times + Self Study – 1 Time</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Kinder Course</h4>
            <p>Morning Class – 1:1 Classes – 4 Times + Group Classes – 4 Times</p>
            <p>All-day Class – 1:1 Classes – 7 Times + Group Classes – 6 Times</p>
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="content-block">
          <h3>Program Curriculum</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Lesson Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Classes</td>
                <td>Speaking, Listening, Reading, Writing, Grammar</td>
              </tr>
              <tr>
                <td>Small Group Classes</td>
                <td>Debate, Presentation, Reading</td>
              </tr>
              <tr>
                <td>Big Group Classes</td>
                <td>Native Conversation, Presentation, Movie Class, Mythology Class, Public Speaking Class, Situational Class, World History, Intensive English Grammar</td>
              </tr>
              <tr>
                <td>Physical Activity</td>
                <td>Self-Directed Physical Activity</td>
              </tr>
              <tr>
                <td>Self-Study</td>
                <td>Mandatory Self-Study</td>
              </tr>
              <tr>
                <td>Vocabulary &amp; Idiom</td>
                <td>Vocabulary and Sentence Pattern Class</td>
              </tr>
              <tr>
                <td>Vocabulary Test &amp; Snack time</td>
                <td>Daily Vocabulary and Sentence Test &amp; Snack Time</td>
              </tr>
              <tr>
                <td>Essay Writing</td>
                <td>Essay Writing by Topic</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Junior ESL Course Time Table */}
        <div className="content-block">
          <h3>Junior ESL Course – Time Table</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Class</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>07:20 ~ 08:00</td><td>Meal Time</td><td>07:20 ~ 08:00</td></tr>
              <tr><td>08:00 ~ 08:45</td><td>1st Class</td><td>08:00 ~ 08:40</td></tr>
              <tr><td>08:50 ~ 09:35</td><td>2nd Class</td><td>08:45 ~ 09:25</td></tr>
              <tr><td>09:40 ~ 10:25</td><td>3rd Class</td><td>09:30 ~ 10:10</td></tr>
              <tr><td>10:30 ~ 11:15</td><td>4th Class</td><td>10:15 ~ 10:55</td></tr>
              <tr><td>11:20 ~ 12:05</td><td>5th Class</td><td>11:00 ~ 11:40</td></tr>
              <tr><td>12:05 ~ 13:00</td><td>Meal time</td><td>12:00 ~ 13:00</td></tr>
              <tr><td>13:00 ~ 13:45</td><td>6th Class</td><td>13:00 ~ 13:40</td></tr>
              <tr><td>13:50 ~ 14:35</td><td>7th Class</td><td>13:45 ~ 14:25</td></tr>
              <tr><td>14:40 ~ 15:25</td><td>8th Class</td><td>14:30 ~ 15:10</td></tr>
              <tr><td>15:30 ~ 16:15</td><td>9th Class</td><td>15:15 ~ 15:55</td></tr>
              <tr><td>16:20 ~ 17:05</td><td>10th Class</td><td>16:00 ~ 16:40</td></tr>
              <tr><td>17:10 ~ 17:55</td><td>11th Class</td><td>16:45 ~ 17:25</td></tr>
              <tr><td>18:00 ~ 18:50</td><td>Meal time</td><td>18:00 ~ 18:50</td></tr>
            </tbody>
          </table>

          <div className="program-notes" style={{ marginTop: 16 }}>
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ There are no lessons on holidays however, to ensure class guarantees, special classes may also be provided.</p>
            <p>※ On Fridays, each 45-minute class is shortened to 40 minutes.</p>
            <p>※ Small Group Classes are held for 3 to 5 students.</p>
            <p>※ Big Group Classes are held for 8 to 10 students.</p>
          </div>
        </div>

        {/* Kinder Course Time Table (Off Season) */}
        <div className="content-block">
          <h3>Kinder Course – Time Table</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Notice</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>07:20 ~ 08:00</td><td>Meal Time</td><td></td></tr>
                <tr><td>08:00 ~ 08:45</td><td>Meeting Time</td><td rowSpan={9}>Morning Class</td></tr>
                <tr><td>08:50 ~ 09:35</td><td>1:1 Math</td></tr>
                <tr><td>09:40 ~ 10:25</td><td>Warm up Activity</td></tr>
                <tr><td>10:30 ~ 11:15</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>11:20 ~ 12:05</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>12:05 ~ 13:00</td><td>Meal time</td></tr>
                <tr><td>13:00 ~ 13:45</td><td>Story Book</td></tr>
                <tr><td>13:50 ~ 14:35</td><td>Art</td></tr>
                <tr><td>14:40 ~ 15:25</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>15:30 ~ 16:15</td><td>Social Communication</td><td rowSpan={6}>All-Day Class</td></tr>
                <tr><td>16:20 ~ 17:05</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>17:10 ~ 17:55</td><td>Physical Activity</td></tr>
                <tr><td>18:00 ~ 18:50</td><td>Meal time</td></tr>
                <tr><td>19:00 ~ 19:45</td><td>Froebel Game / LEGO Block</td></tr>
                <tr><td>19:50 ~ 20:35</td><td>1:1 Class (Elephant / Whale)</td></tr>
              </tbody>
            </table>
          </div>

          {/* Elephant & Whale descriptions */}
          <div className="program-info-box" style={{ marginTop: 24 }}>
            <h4 className="program-course-name">Class Elephant (4~5 years)</h4>
            <p>For children who are new to English and do not yet know the basic alphabet, the CS-TEC system is applied to help develop basic English communication skills and social skills, while providing fun and diverse learning activities essential for early childhood.</p>
          </div>
          <div className="program-info-box" style={{ marginTop: 16 }}>
            <h4 className="program-course-name">Class Whale (5~6 years)</h4>
            <p>For young students who can read, write, and recognize basic English alphabets and numbers, we provide fun and diverse learning activities essential for engaging children, applying the CS-TEC system to support basic English learning and group life.</p>
          </div>
        </div>

        {/* ============ PEAK SEASON ============ */}
        <div className="content-block" style={{ marginTop: 80 }}>
          <h2 style={{ textAlign: 'center', marginBottom: 32 }}>PEAK SEASON</h2>
        </div>

        {/* Introduction */}
        <div className="content-block">
          <p>
            Have you thought about the best place for you and your child to study English? Try CIJ! You can study English on a resort-style campus while living safely and peacefully with your child. Enjoy two spacious, clean swimming pools and relax in a garden filled with beautiful tropical plants.
          </p>
        </div>

        {/* Class Type */}
        <div className="content-block">
          <h3>Class Type</h3>
          <div className="program-info-box">
            <ul>
              <li><strong>Duration:</strong> 4 ~ 8weeks</li>
              <li><strong>Class Structure:</strong> 40 minute classes with a 5 minute rest in between</li>
              <li><strong>Course Start:</strong> Every Monday</li>
              <li><strong>Level:</strong> Family group student can join this course</li>
            </ul>
          </div>
        </div>

        {/* Courses */}
        <div className="content-block">
          <h3>Courses</h3>

          <div className="program-course-card">
            <h4 className="program-course-name">Guardian Course</h4>
            <p>1:1 Classes – 4 Times</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Junior ESL Course</h4>
            <p>1:1 Classes – 6 Times + Big Group Class – 1 Time + Physical Activity – 2 Times + Club Activity Class – 2 Times</p>
          </div>

          <div className="program-course-card">
            <h4 className="program-course-name">Kinder Course</h4>
            <p>Morning Class – 1:1 Classes – 4 Times + Group Classes – 4 Times</p>
            <p>All-Day Class – 1:1 Classes – 7 Times + Group Classes – 8 Times</p>
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="content-block">
          <h3>Program Curriculum</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Lesson Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Classes</td>
                <td>Speaking, Listening, Reading, Writing, Grammar</td>
              </tr>
              <tr>
                <td>Small Group Classes</td>
                <td>Debate, Presentation, Reading</td>
              </tr>
              <tr>
                <td>Big Group Classes</td>
                <td>Native Conversation, Presentation, Movie Class, Mythology Class, Public Speaking Class, Situational Class, World History, Intensive English Grammar</td>
              </tr>
              <tr>
                <td>Physical Activity</td>
                <td>Self-Directed Physical Activity</td>
              </tr>
              <tr>
                <td>Club Activity</td>
                <td>Guitar, Pop Song, etc. – Student-Requested Activities</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Junior ESL Course Time Table (Peak) */}
        <div className="content-block">
          <h3>Junior ESL Course – Time Table (Peak Season)</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>07:00 ~ 08:00</td><td>Breakfast</td></tr>
              <tr><td>08:00 ~ 08:40</td><td>1st Class</td></tr>
              <tr><td>08:45 ~ 09:25</td><td>2nd Class</td></tr>
              <tr><td>09:30 ~ 10:10</td><td>3rd Class</td></tr>
              <tr><td>10:15 ~ 10:55</td><td>4th Class</td></tr>
              <tr><td>11:00 ~ 11:40</td><td>5th Class</td></tr>
              <tr><td>11:45 ~ 12:25</td><td>6th Class</td></tr>
              <tr><td>12:25 ~ 13:25</td><td>Meal time</td></tr>
              <tr><td>13:25 ~ 14:05</td><td>7th Class</td></tr>
              <tr><td>14:10 ~ 14:50</td><td>8th Class</td></tr>
              <tr><td>14:55 ~ 15:35</td><td>9th Class</td></tr>
              <tr><td>15:40 ~ 16:20</td><td>10th Class</td></tr>
              <tr><td>16:25 ~ 17:05</td><td>11th Class</td></tr>
              <tr><td>17:10 ~ 17:50</td><td>12th Class</td></tr>
              <tr><td>18:00 ~ 19:00</td><td>Meal time</td></tr>
            </tbody>
          </table>

          <div className="program-notes" style={{ marginTop: 16 }}>
            <p>※ There is an additional $100 for snacks per 4 weeks.</p>
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ Small Group Classes are held for 3 to 5 students.</p>
            <p>※ Big Group Classes are held for 8 to 10 students.</p>
            <p>※ Family program students stay in premium dormitories during peak season.</p>
          </div>
        </div>

        {/* Kinder Course Time Table (Peak Season) */}
        <div className="content-block">
          <h3>Kinder Course – Time Table (Peak Season)</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Notice</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>07:20 ~ 08:00</td><td>Meal Time</td><td></td></tr>
                <tr><td>08:00 ~ 08:40</td><td>Meeting Time</td><td rowSpan={9}>Morning Class</td></tr>
                <tr><td>08:45 ~ 09:25</td><td>1:1 Math</td></tr>
                <tr><td>09:30 ~ 10:10</td><td>Warm up Activity</td></tr>
                <tr><td>10:15 ~ 10:55</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>11:00 ~ 11:40</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>11:45 ~ 12:25</td><td>Meal time</td></tr>
                <tr><td>12:25 ~ 13:05</td><td>Story Book</td></tr>
                <tr><td>13:10 ~ 13:50</td><td>Art</td></tr>
                <tr><td>13:55 ~ 14:35</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>14:40 ~ 15:20</td><td>Social Communication</td><td rowSpan={6}>All-Day Class</td></tr>
                <tr><td>15:25 ~ 16:05</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>16:10 ~ 16:50</td><td>Physical Activity</td></tr>
                <tr><td>16:55 ~ 17:35</td><td>Froebel Game / LEGO Block</td></tr>
                <tr><td>17:40 ~ 18:20</td><td>1:1 Class (Elephant / Whale)</td></tr>
                <tr><td>15:40 ~ 16:20</td><td>15th Class</td></tr>
              </tbody>
            </table>
          </div>

          {/* Elephant & Whale descriptions (Peak) */}
          <div className="program-info-box" style={{ marginTop: 24 }}>
            <h4 className="program-course-name">Class Elephant (4~5 years)</h4>
            <p>For children who are new to English and do not yet know the basic alphabet, the CS-TEC system is applied to help develop basic English communication skills and social skills, while providing fun and diverse learning activities essential for early childhood.</p>
          </div>
          <div className="program-info-box" style={{ marginTop: 16 }}>
            <h4 className="program-course-name">Class Whale (5~6 years)</h4>
            <p>For young students who can read, write, and recognize basic English alphabets and numbers, we provide fun and diverse learning activities essential for engaging children, applying the CS-TEC system to support basic English learning and group life.</p>
          </div>

          <div className="program-notes" style={{ marginTop: 16 }}>
            <p>※ There is an additional $100 for snacks per 4 weeks.</p>
            <p>※ Classes are subject to change due to unforeseen circumstances.</p>
            <p>※ Kinder program students stay in premium dormitories during peak season.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   MAIN EXPORT
   ─────────────────────────────────────────────────────── */
export default function ProgramsSection() {
  const { t } = useLanguage();

  return (
    <>
      <div id="programs" className="section-divider">
        <div className="container">
          <h2>{t.nav.programs}</h2>
        </div>
      </div>

      <SemiSpartaProgram />
      <SpartaProgram />
      <JuniorProgram />
      <JuniorCampProgram />
      <FamilyProgram />
    </>
  );
}
