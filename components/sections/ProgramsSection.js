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
          <div className="styled-table-wrap"><table className="styled-table curriculum">
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
          </table></div>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:800}}>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Class</th>
                    <th>Friday</th>
                    <th>Notice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>07:20 ~ 08:00</td><td>Meal Time</td><td>07:20 ~ 08:00</td><td rowSpan={14} style={{verticalAlign:'middle',lineHeight:1.8,fontSize:'0.88rem'}}><strong>※ Regular Class</strong><br/>■ Each class lasts 45 minutes, with a 5-minute break in between.<br/>■ Students can choose their classes from 1 to 10 according to their curriculum.<br/>■ Mandatory self study<br/><br/><strong>※ Self-Study</strong><br/>■ Students are required to attend self-study every day, excluding weekends and holidays.</td></tr>
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
              </table></div>
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
          <div className="styled-table-wrap"><table className="styled-table curriculum">
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
          </table></div>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:800}}>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Class</th>
                    <th>Friday</th>
                    <th>Notice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>06:30 ~ 07:20</td><td>Vocabulary Test</td><td>06:30 ~ 07:20</td><td rowSpan={18} style={{verticalAlign:'middle',lineHeight:1.8,fontSize:'0.88rem'}}><strong>※ Regular Class</strong><br/>■ Each class lasts 45 minutes, with a 5-minute break in between.<br/>■ Students can choose their classes from 1 to 10 according to their curriculum.<br/>■ Mandatory self-study<br/><br/><strong>※ Self-Study</strong><br/>■ Students are required to attend 1 session every day, excluding weekends and holidays.<br/><br/><strong>※ Vocabulary Test &amp; Sentence Test</strong><br/>■ Sparta Course students are required to join these tests.<br/>■ Penalties will apply if students fail the test.</td></tr>
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
                  <tr><td>19:00 ~ 19:50</td><td>Self Study</td><td>None</td></tr>
                  <tr><td>20:00 ~ 20:50</td><td>Sentence Test</td><td>None</td></tr>
                </tbody>
              </table></div>
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
          <div className="styled-table-wrap"><table className="styled-table curriculum">
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
          </table></div>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>
          
            <div className="styled-table-wrap"><table className="styled-table junior-timetable" style={{minWidth:800}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Friday</th>
                  <th>Weekday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>06:50 ~ 07:00</td><td></td><td>06:50 ~ 07:00</td><td></td><td></td><td></td></tr>
                <tr><td>07:00 ~ 08:00</td><td></td><td>07:00 ~ 08:00</td><td>Breakfast</td><td></td><td></td></tr>
                <tr><td>08:00 ~ 08:45</td><td>1st</td><td>08:00 ~ 08:40</td><td>1:1 Class(Speaking)</td><td>Breakfast</td><td>Breakfast</td></tr>
                <tr><td>08:50 ~ 09:35</td><td>2nd</td><td>08:45 ~ 09:25</td><td>1:1 Class(Reading)</td><td>Activity Orientation</td><td>Level Test</td></tr>
                <tr><td>09:40 ~ 10:25</td><td>3rd</td><td>09:30 ~ 10:10</td><td>1:1 Class(Grammar)</td><td rowSpan={9} style={{verticalAlign:'top',lineHeight:1.8,fontSize:'0.88rem'}}><strong>Outdoor activity &amp; Lunch</strong><br/>● Plantation-bay Resort +Resort Buffet<br/>● Safari Adventure Park + Lunch<br/>● City Tour + Lunch Dine Out<br/>● J-Park Resort+Resort Buffet<br/>● Westown Lagoon +Lunch Dine Out<br/>● El-Salvador Resort + Resort Buffet<br/>● Maribago Bluewater + Resort Buffet<br/>● Ocean Park Cebu + Lunch dine out<br/><span style={{fontSize:'0.82rem',color:'#888'}}>※ Can be adjusted</span></td><td rowSpan={3}></td></tr>
                <tr><td>10:30 ~ 11:15</td><td>4th</td><td>10:15 ~ 10:55</td><td>1:1 Class(Writing)</td></tr>
                <tr><td>11:20 ~ 12:05</td><td>5th</td><td>11:00 ~ 11:40</td><td>1:1 Class(Reading)</td></tr>
                <tr><td>12:05 ~ 13:00</td><td></td><td>12:00 ~ 13:00</td><td>Lunch</td><td>Lunch</td></tr>
                <tr><td>13:00 ~ 13:45</td><td>6th</td><td>13:00 ~ 13:40</td><td>Small Group Class</td><td rowSpan={2} style={{verticalAlign:'top',lineHeight:1.8,fontSize:'0.88rem'}}>Humanism Education &amp;<br/>Indoor Activity</td></tr>
                <tr><td>13:50 ~ 14:35</td><td>7th</td><td>13:45 ~ 14:25</td><td>Small Group Class</td></tr>
                <tr><td>14:40 ~ 15:25</td><td>8th</td><td>14:30 ~ 15:10</td><td>Big Group Class</td><td rowSpan={4} style={{verticalAlign:'top',lineHeight:1.8,fontSize:'0.88rem'}}>Study Check-up –<br/>Check what you studied for a week<br/>(Vocabulary, Sentence, English Essay, Books)</td></tr>
                <tr><td>15:30 ~ 16:15</td><td>9th</td><td>15:15 ~ 15:55</td><td>Physical Activity</td></tr>
                <tr><td>16:20 ~ 17:05</td><td>10th</td><td>16:00 ~ 16:40</td><td>Physical Activity</td></tr>
                <tr><td>17:10 ~ 17:55</td><td>11th</td><td>16:45 ~ 17:25</td><td>Self-Study</td><td>Personal Maintenance &amp; Rest</td></tr>
                <tr><td>18:00 ~ 18:50</td><td></td><td>18:00 ~ 18:50</td><td>Dinner</td><td>Dinner</td><td>Dinner</td></tr>
                <tr><td>19:00 ~ 19:45</td><td>12th</td><td>19:00 ~ 19:50</td><td>Vocabulary &amp; Idiom</td><td rowSpan={2}>Calling Students&apos; Parents &amp;<br/>Watching Movie</td><td>Watching Movie</td></tr>
                <tr><td>19:50 ~ 20:30</td><td>13th</td><td>19:50 ~ 20:30</td><td>Vocabulary Test &amp; Snack time</td><td></td></tr>
                <tr><td>20:30 ~ 21:30</td><td>14th</td><td>20:30 ~ 21:30</td><td>Essay Writing</td><td>Essay Writing</td><td>Essay Writing</td></tr>
                <tr><td>21:30</td><td></td><td>21:30</td><td>Roll Call &amp; Go to bed</td><td>Roll Call &amp; Go to bed</td><td>Roll Call &amp; Go to Bed</td></tr>
                <tr><td>22:00 ~ 23:00</td><td></td><td>22:00 ~ 23:00</td><td>Learning Support – For Students Missing Essay Submissions or Failing Vocabulary Tests</td><td>Learning Support – For Students Missing Essay Submissions</td><td>Learning Support – For Students Missing Essay Submissions</td></tr>
              </tbody>
            </table></div>

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
          <div className="styled-table-wrap"><table className="styled-table curriculum">
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
          </table></div>
        </div>

        {/* Time Table */}
        <div className="content-block">
          <h3>Time Table</h3>

            {/* Table 1: Weekday */}
            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:600}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Weekday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>06:50 ~ 07:00</td><td></td><td></td></tr>
                <tr><td>07:00 ~ 08:00</td><td></td><td>Breakfast</td></tr>
                <tr><td>08:00 ~ 08:40</td><td>1st</td><td>1:1 Class(Speaking) or IELTS Class</td></tr>
                <tr><td>08:45 ~ 09:25</td><td>2nd</td><td>1:1 Class(Reading) or IELTS Class</td></tr>
                <tr><td>09:30 ~ 10:10</td><td>3rd</td><td>1:1 Class(Grammar) or IELTS Class</td></tr>
                <tr><td>10:10 ~ 10:30</td><td></td><td>Snack</td></tr>
                <tr><td>10:35 ~ 11:15</td><td>4th</td><td>1:1 Class(Writing) or IELTS Class</td></tr>
                <tr><td>11:20 ~ 12:00</td><td>5th</td><td>1:1 Class(Reading)</td></tr>
                <tr><td>12:00 ~ 13:00</td><td></td><td>Lunch</td></tr>
                <tr><td>13:00 ~ 13:40</td><td>6th</td><td>1:1 Class(Speaking)</td></tr>
                <tr><td>13:45 ~ 14:25</td><td>7th</td><td>Big Group Class</td></tr>
                <tr><td>14:30 ~ 15:10</td><td>8th</td><td>Club Activity (guitar,popsong,reading,speech)</td></tr>
                <tr><td>15:15 ~ 15:35</td><td></td><td>Snack</td></tr>
                <tr><td>15:40 ~ 16:20</td><td>9th</td><td>Club Activity (guitar,popsong,reading,speech)</td></tr>
                <tr><td>16:25 ~ 17:05</td><td>10th</td><td>Physical Activity</td></tr>
                <tr><td>17:10 ~ 17:50</td><td>11th</td><td>Physical Activity</td></tr>
                <tr><td>18:00 ~ 19:00</td><td></td><td>Dinner</td></tr>
                <tr><td>19:00 ~ 19:40</td><td>12th</td><td>Vocabulary &amp; Sentence</td></tr>
                <tr><td>19:40 ~ 20:20</td><td>13th</td><td>Vocabulary Test &amp; Snack time</td></tr>
                <tr><td>20:30 ~ 21:30</td><td>14th</td><td>Essay Writing</td></tr>
                <tr><td>21:30</td><td></td><td>Roll Call &amp; Go to bed</td></tr>
                <tr><td>22:00 ~ 23:00</td><td></td><td>Learning support for students missing essay submissions or failing vocabulary tests</td></tr>
              </tbody>
            </table></div>

            <div style={{textAlign:'center',margin:'24px 0',fontSize:'0.9rem',color:'#888'}}>─ ─ ─</div>

            {/* Table 2: Saturday & Sunday */}
            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:600}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>06:50 ~ 07:00</td><td></td><td></td></tr>
                <tr><td>07:00 ~ 08:00</td><td></td><td></td></tr>
                <tr><td>08:00 ~ 08:40</td><td>Breakfast</td><td>Breakfast</td></tr>
                <tr><td>08:45 ~ 09:25</td><td>Activity Orientation</td><td>Level Test</td></tr>
                <tr><td>09:30 ~ 10:10</td><td rowSpan={9} style={{verticalAlign:'top',lineHeight:1.8,fontSize:'0.88rem'}}><strong>Outdoor activity &amp; Lunch</strong><br/>● Plantation-bay Resort +Resort Buffet<br/>● Safari Adventure Park + Lunch Dine Out<br/>● City Tour + Lunch Dine Out<br/>● J-Park Resort+Resort Buffet<br/>● Westown Lagoon +Lunch Dine Out<br/>● El-Salvador Resort + Resort Buffet<br/>● Maribago Bluewater + Resort Buffet<br/>● Ocean Park Cebu + Lunch dine out<br/><span style={{fontSize:'0.82rem',color:'#888'}}>※ Can be adjusted</span></td><td rowSpan={3}></td></tr>
                <tr><td>10:10 ~ 10:30</td></tr>
                <tr><td>10:35 ~ 11:15</td></tr>
                <tr><td>11:20 ~ 12:00</td><td></td></tr>
                <tr><td>12:00 ~ 13:00</td><td>Lunch</td></tr>
                <tr><td>13:00 ~ 13:40</td><td rowSpan={2} style={{verticalAlign:'top',lineHeight:1.7,fontSize:'0.85rem'}}>Humanism<br/>Education &amp;<br/>Indoor Activity</td></tr>
                <tr><td>13:45 ~ 14:25</td></tr>
                <tr><td>14:30 ~ 15:10</td><td rowSpan={5} style={{verticalAlign:'top',lineHeight:1.7,fontSize:'0.85rem'}}>Study Check-up –<br/>Check What You<br/>Studied for a Week<br/>(Vocabulary, Sentence,<br/>English Essay, Books)</td></tr>
                <tr><td>15:15 ~ 15:35</td></tr>
                <tr><td>15:40 ~ 16:20</td><td rowSpan={3}>Personal maintenance &amp; Rest</td></tr>
                <tr><td>16:25 ~ 17:05</td></tr>
                <tr><td>17:10 ~ 17:50</td></tr>
                <tr><td>18:00 ~ 19:00</td><td>Dinner</td><td>Dinner</td></tr>
                <tr><td>19:00 ~ 19:40</td><td>Calling student&apos;s parents</td><td>Watching Movie</td></tr>
                <tr><td>19:40 ~ 20:20</td><td>Watching Movie</td><td>Watching Movie</td></tr>
                <tr><td>20:30 ~ 21:30</td><td>Essay Writing</td><td>Essay Writing</td></tr>
                <tr><td>21:30</td><td>Roll Call &amp; Go to bed</td><td>Roll Call &amp; Go to Bed</td></tr>
                <tr><td>22:00 ~ 23:00</td><td>Learning support for students missing essay submissions</td><td>Learning Support –<br/>For Students Missing<br/>Essay Submissions</td></tr>
              </tbody>
            </table></div>

        </div>

        {/* Weekly Schedule */}
        <div className="content-block">
          <h3>Weekly Schedule</h3>

            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:750}}>
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
                {/* Week 1 */}
                <tr style={{background:'#FFF8E1'}}><td></td><td></td><td></td><td><strong>July 2 2026</strong></td><td><strong>July 3</strong></td><td><strong>July 4</strong></td><td><strong>July 5</strong></td></tr>
                <tr><td></td><td></td><td></td><td><strong>Cebu Arrival</strong><br/>(4, 6, 8 weeks)</td><td>Placement Test<br/>&amp; Orientation</td><td><strong>Plantation Bay</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Level Test<br/>Indoor Activities</td></tr>
                {/* Week 2 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>July 6</strong></td><td><strong>July 7</strong></td><td><strong>July 8</strong></td><td><strong>July 9</strong></td><td><strong>July 10</strong></td><td><strong>July 11</strong></td><td><strong>July 12</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td><strong>Safari Adventure</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 3 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>July 13</strong></td><td><strong>July 14</strong></td><td><strong>July 15</strong></td><td><strong>July 16</strong></td><td><strong>July 17</strong></td><td><strong>July 18</strong></td><td><strong>July 19</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td><strong>Cebu Arrival</strong><br/>(4, 6 weeks)<br/>Regular Classes</td><td>Regular Classes</td><td><strong>Heritage Tour</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 4 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>July 20</strong></td><td><strong>July 21</strong></td><td><strong>July 22</strong></td><td><strong>July 23</strong></td><td><strong>July 24</strong></td><td><strong>July 25</strong></td><td><strong>July 26</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td><strong>El Salvador</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 5 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>July 27</strong></td><td><strong>July 28</strong></td><td><strong>July 29</strong></td><td><strong>July 30</strong></td><td><strong>July 31</strong></td><td><strong>August 1</strong></td><td><strong>August 2</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes<br/><strong>Cebu Departure</strong><br/>(4Weeks)</td><td><strong>J-PARK</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 6 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>August 3</strong></td><td><strong>August 4</strong></td><td><strong>August 5</strong></td><td><strong>August 6</strong></td><td><strong>August 7</strong></td><td><strong>August 8</strong></td><td><strong>August 9</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td><strong>City Tour</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 7 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>August 10</strong></td><td><strong>August 11</strong></td><td><strong>August 12</strong></td><td><strong>August 13</strong></td><td><strong>August 14</strong></td><td><strong>August 15</strong></td><td><strong>August 16</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td><strong>West Lagoon Cebu</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents<br/><strong>Cebu Departure</strong><br/>(4,6Weeks)</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 8 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>August 17</strong></td><td><strong>August 18</strong></td><td><strong>August 19</strong></td><td><strong>August 20</strong></td><td><strong>August 21</strong></td><td><strong>August 22</strong></td><td><strong>August 23</strong></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td><strong>Ocean Park Cebu</strong><br/>Lunch Out<br/>Shopping<br/>Call with Parents</td><td>Regular Classes</td><td>Regular Classes</td><td>Regular Classes</td><td>Level Test<br/>Weekly Check<br/>&amp; Review</td></tr>
                {/* Week 9 */}
                <tr style={{background:'#FFF8E1'}}><td><strong>August 24</strong></td><td><strong>August 25</strong></td><td><strong>August 26</strong></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>Regular Classes</td><td>Regular Classes</td><td><strong>Cebu Departure</strong><br/>(6,8Weeks)</td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table></div>

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
          <div className="styled-table-wrap"><table className="styled-table curriculum">
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
          </table></div>
        </div>

        {/* Junior ESL Course Time Table (Off Season) */}
        <div className="content-block">
          <h3>Junior ESL Course – Time Table</h3>
          
            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:800}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Friday</th>
                  <th>Weekday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>07:20 ~ 08:00</td><td></td><td>07:00 ~ 08:00</td><td>Breakfast</td></tr>
                <tr><td>08:00 ~ 08:45</td><td>1st</td><td>08:00 ~ 08:40</td><td>1:1 Class(Speaking)</td></tr>
                <tr><td>08:50 ~ 09:35</td><td>2nd</td><td>08:45 ~ 09:25</td><td>1:1 Class(Reading)</td></tr>
                <tr><td>09:40 ~ 10:25</td><td>3rd</td><td>09:30 ~ 10:10</td><td>1:1 Class(Grammar)</td></tr>
                <tr><td>09:10 ~ 09:35</td><td>4th</td><td>10:15 ~ 10:55</td><td>1:1 Class(Writing)</td></tr>
                <tr><td>11:20 ~ 12:05</td><td>5th</td><td>11:00 ~ 11:40</td><td>1:1 Class(Reading)</td></tr>
                <tr><td>12:05 ~ 13:00</td><td></td><td>12:00 ~ 13:00</td><td>Lunch</td></tr>
                <tr><td>13:00 ~ 13:45</td><td>6th</td><td>13:00 ~ 13:40</td><td>Small Group Class</td></tr>
                <tr><td>13:50 ~ 14:35</td><td>7th</td><td>13:45 ~ 14:25</td><td>Small Group Class</td></tr>
                <tr><td>14:40 ~ 15:25</td><td>8th</td><td>14:30 ~ 15:10</td><td>Big Group Class</td></tr>
                <tr><td>15:30 ~ 16:15</td><td>9th</td><td>15:15 ~ 15:55</td><td>Physical Activity</td></tr>
                <tr><td>16:20 ~ 17:05</td><td>10th</td><td>16:00 ~ 16:40</td><td>Physical Activity</td></tr>
                <tr><td>17:10 ~ 17:55</td><td>11th</td><td>16:45 ~ 17:25</td><td>Self Study</td></tr>
                <tr><td>18:00 ~ 18:50</td><td></td><td>18:00 ~ 18:50</td><td>Dinner</td></tr>
              </tbody>
            </table></div>


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
          
            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:800}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Friday</th>
                  <th>Weekday</th>
                  <th>Notice</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>07:20 ~ 08:00</td><td></td><td>07:00 ~ 08:00</td><td>Breakfast</td><td rowSpan={12} style={{verticalAlign:'middle',textAlign:'center',fontSize:'0.88rem'}}>End of the<br/>Morning Class</td></tr>
                <tr><td>08:00 ~ 08:20</td><td>1st</td><td>08:00 ~ 08:20</td><td>Meeting Time</td></tr>
                <tr><td>08:20 ~ 08:45</td><td>2nd</td><td>08:20 ~ 08:40</td><td>Warm up Activity (Music &amp; Dance class)</td></tr>
                <tr><td>08:50 ~ 09:10</td><td>3rd</td><td>08:45 ~ 09:05</td><td>1:1 Class(Math)</td></tr>
                <tr><td>09:10 ~ 09:35</td><td>4th</td><td>09:05 ~ 09:25</td><td>Elephant – 1:1 Alphabet &amp; Vocabulary<br/>Whale – 1:1 Phonics &amp; Vocabulary</td></tr>
                <tr><td>09:40 ~ 10:00</td><td>5th</td><td>09:30 ~ 09:50</td><td>1:1 Class (Story Book)</td></tr>
                <tr><td>10:00 ~ 10:25</td><td>6th</td><td>09:50 ~ 10:10</td><td>1:1 Class (Art: Drawing, Making, etc.)</td></tr>
                <tr><td>10:30 ~ 10:50</td><td>7th</td><td>10:15 ~ 10:35</td><td>Social Communication Class</td></tr>
                <tr><td>10:50 ~ 11:15</td><td>8th</td><td>10:35 ~ 10:55</td><td>Physical Activity (Gardening / Play game) &amp; Cleanup activities</td></tr>
                <tr><td>11:20 ~ 11:40</td><td></td><td>11:00 ~ 11:20</td><td>Free Time with Guardian</td></tr>
                <tr><td>11:40 ~ 12:05</td><td></td><td>11:20 ~ 11:40</td><td></td></tr>
                <tr><td>12:05 ~ 13:00</td><td></td><td>12:05 ~ 13:00</td><td>Lunch</td></tr>
                <tr><td>13:05 ~ 13:50</td><td>9th</td><td>13:00 ~ 13:20</td><td>Froebel Game / LEGO Block</td><td rowSpan={5} style={{verticalAlign:'middle',textAlign:'center',fontSize:'0.88rem'}}>End of the<br/>All-Day Class</td></tr>
                <tr><td>13:55 ~ 14:15</td><td>10th</td><td>13:20 ~ 13:40</td><td>Elephant – 1:1 Intensive Alphabet &amp; Vocabulary Class<br/>Whale – 1:1 Intensive Phonics &amp; Vocabulary Class</td></tr>
                <tr><td>14:15 ~ 14:40</td><td>11th</td><td>13:45 ~ 14:05</td><td>1:1 Class(Story book)</td></tr>
                <tr><td>14:45 ~ 15:30</td><td>12th</td><td>14:05 ~ 14:25</td><td>1:1 Class(Art : Drawing, Making, etc.)</td></tr>
                <tr><td>15:35 ~ 16:20</td><td>13th</td><td>14:30 ~ 14:50</td><td>Physical Activity (Gardening / Play game) &amp; Cleanup activities</td></tr>
              </tbody>
            </table></div>


          <div className="program-notes" style={{ marginTop: 16 }}>
            <p>※ Classes are subject to change due to unexpected circumstances.</p>
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
          <div className="styled-table-wrap"><table className="styled-table curriculum">
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
          </table></div>
        </div>

        {/* Junior ESL Course Time Table (Peak) */}
        <div className="content-block">
          <h3>Junior ESL Course – Time Table (Peak Season)</h3>
          
            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:800}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Weekday</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>07:00 ~ 08:00</td><td></td><td>Breakfast</td></tr>
                <tr><td>08:00 ~ 08:40</td><td>1st</td><td>1:1 Class(Speaking) Class</td></tr>
                <tr><td>08:45 ~ 09:25</td><td>2nd</td><td>1:1 Class(Reading) Class</td></tr>
                <tr><td>09:30 ~ 10:10</td><td>3rd</td><td>1:1 Class(Grammar) Class</td></tr>
                <tr><td>10:10 ~ 10:30</td><td></td><td>Snack(Optional)</td></tr>
                <tr><td>10:35 ~ 11:15</td><td>4th</td><td>1:1 Class(Writing) Class</td></tr>
                <tr><td>11:20 ~ 12:00</td><td>5th</td><td>1:1 Class(Reading)</td></tr>
                <tr><td>12:00 ~ 13:00</td><td></td><td>Lunch</td></tr>
                <tr><td>13:00 ~ 13:40</td><td>6th</td><td>1:1 Class(Speaking)</td></tr>
                <tr><td>13:45 ~ 14:25</td><td>7th</td><td>Big Group Class</td></tr>
                <tr><td>14:30 ~ 15:10</td><td>8th</td><td>Club Activity (Guitar, Pop Song, Reading, Speech)</td></tr>
                <tr><td>15:15 ~ 15:35</td><td></td><td>Snack(Optional)</td></tr>
                <tr><td>15:40 ~ 16:20</td><td>9th</td><td>Club Activity (Guitar, Pop Song, Reading, Speech)</td></tr>
                <tr><td>16:25 ~ 17:05</td><td>10th</td><td>Physical Activity</td></tr>
                <tr><td>17:10 ~ 17:50</td><td>11th</td><td>Physical Activity</td></tr>
                <tr><td>18:00 ~ 19:00</td><td></td><td>Dinner</td></tr>
              </tbody>
            </table></div>


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
          
            <div className="styled-table-wrap"><table className="styled-table" style={{minWidth:800}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Weekday</th>
                  <th>Notice</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>07:20 ~ 08:00</td><td></td><td>Breakfast</td><td rowSpan={13} style={{verticalAlign:'middle',textAlign:'center',fontSize:'0.88rem'}}>End of the<br/>Morning Class</td></tr>
                <tr><td>08:00 ~ 08:20</td><td>1st</td><td>Meeting Time</td></tr>
                <tr><td>08:20 ~ 08:40</td><td>2nd</td><td>Warm up Activity (Music &amp; Dance class)</td></tr>
                <tr><td>08:45 ~ 09:05</td><td>3rd</td><td>1:1 Class(Math)</td></tr>
                <tr><td>09:05 ~ 09:25</td><td>4th</td><td>Elephant – 1:1 Alphabet &amp; Vocabulary<br/>Whale – 1:1 Phonics &amp; Vocabulary</td></tr>
                <tr><td>09:30 ~ 09:50</td><td>5th</td><td>Social Communication Class</td></tr>
                <tr><td>09:50 ~ 10:10</td><td>6th</td><td>1:1 Class (Art: Drawing, Making, etc.)</td></tr>
                <tr><td>10:15 ~ 10:35</td><td></td><td>Snack(Optional)</td></tr>
                <tr><td>10:35 ~ 10:55</td><td>7th</td><td>1:1 Class(Story book)</td></tr>
                <tr><td>10:55 ~ 11:15</td><td>8th</td><td>Physical Activity (Gardening / Play game)</td></tr>
                <tr><td>11:20 ~ 11:40</td><td>9th</td><td>Physical Activity (Gardening / Play game)</td></tr>
                <tr><td>11:40 ~ 12:00</td><td>10th</td><td>Physical Activity &amp; Cleanup Activity</td></tr>
                <tr><td>12:00 ~ 13:00</td><td></td><td>Lunch</td></tr>
                <tr><td>13:00 ~ 13:40</td><td>11th</td><td>Froebel Game / LEGO Block</td><td rowSpan={6} style={{verticalAlign:'middle',textAlign:'center',fontSize:'0.88rem'}}>End of the<br/>All-Day Class</td></tr>
                <tr><td>13:45 ~ 14:05</td><td>12th</td><td>Elephant – 1:1 Intensive Alphabet &amp; Vocabulary Class<br/>Whale – 1:1 Intensive Phonics &amp; Vocabulary Class</td></tr>
                <tr><td>14:05 ~ 14:25</td><td>13th</td><td>1:1 Class(Story book)</td></tr>
                <tr><td>14:30 ~ 15:10</td><td>14th</td><td>1:1 Class (Art: Drawing, Making, etc.)</td></tr>
                <tr><td>15:15 ~ 15:35</td><td></td><td>Snack(Optional)</td></tr>
                <tr><td>15:40 ~ 16:20</td><td>15th</td><td>Physical Activity&amp; Cleanup activities</td></tr>
              </tbody>
            </table></div>


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
export { SemiSpartaProgram, SpartaProgram, JuniorProgram, JuniorCampProgram, FamilyProgram };

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
