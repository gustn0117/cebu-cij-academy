import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const ruleCategories = [
  {
    title: 'General Rules',
    rules: [
      'Students must attend all scheduled classes. Absence without prior approval may result in warnings.',
      'Students must be punctual. Classes start on time and latecomers may not be admitted.',
      'English-only policy applies in all classrooms and common areas during school hours.',
      'Respectful behavior towards all teachers, staff, and fellow students is required at all times.',
      'Students must carry their student ID at all times while on campus.',
    ],
  },
  {
    title: 'Dormitory Rules',
    rules: [
      'Curfew time is 10:00 PM on weekdays (Sunday - Thursday). Students must be in the dormitory by this time.',
      'Weekend curfew is 12:00 AM (Friday - Saturday).',
      'Overnight stays outside the dormitory require advance written approval from the academy.',
      'Visitors are not allowed inside the dormitory rooms.',
      'Students are responsible for keeping their rooms clean and tidy.',
      'Quiet hours are from 10:00 PM to 7:00 AM. Please be considerate of other students.',
    ],
  },
  {
    title: 'Attendance Policy',
    rules: [
      'Students must maintain a minimum attendance rate of 90%.',
      'Absence due to illness must be reported to the office before 8:00 AM.',
      'Medical certificates are required for absences of 2 or more consecutive days.',
      'Excessive absences may result in program suspension or dismissal.',
      'Make-up classes may be arranged for excused absences, subject to teacher availability.',
    ],
  },
  {
    title: 'Campus Rules',
    rules: [
      'Smoking is only permitted in designated smoking areas.',
      'Alcohol consumption is prohibited on campus premises.',
      'Swimming pool hours are from 6:00 AM to 9:00 PM. No swimming alone.',
      'Gym and recreational facilities are available from 6:00 AM to 10:00 PM.',
      'Students must not damage or deface any school property. Repair costs will be charged.',
      'Loud music or noise that disturbs other students is not allowed.',
    ],
  },
  {
    title: 'Safety & Security',
    rules: [
      'All students must attend the safety orientation on their first day.',
      'Emergency contact information must be provided during registration.',
      'Valuable items should be stored in the provided safety deposit boxes.',
      'Report any safety concerns or incidents to the academy office immediately.',
      'Fire exit routes are posted on every floor. Familiarize yourself with them.',
    ],
  },
];

export default function SchoolRules() {
  return (
    <Layout title="School Rules">
      <PageHeader
        title="School Rules & Regulations"
        description="Important guidelines for all students"
        breadcrumbs={[
          { label: 'Registration', href: '/registration' },
          { label: 'School Rules' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-block">
            <p style={{ marginBottom: 32 }}>
              CIJ Academy is committed to providing a safe, comfortable, and productive learning
              environment for all students. The following rules and regulations are designed to
              ensure the well-being of every member of our community. All students are expected
              to read, understand, and comply with these rules.
            </p>

            {ruleCategories.map((cat, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                <h2 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: '2px solid var(--primary-light)',
                }}>
                  {cat.title}
                </h2>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {cat.rules.map((rule, j) => (
                    <li key={j} style={{
                      padding: '12px 16px',
                      background: j % 2 === 0 ? 'var(--gray-100)' : 'transparent',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--gray-700)',
                      fontSize: '0.95rem',
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                    }}>
                      <span style={{
                        color: 'var(--primary)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 2,
                      }}>•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{
              marginTop: 40,
              padding: '24px 32px',
              background: '#FFF3D0',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--secondary)',
            }}>
              <p style={{ fontWeight: 600, color: '#8B6914', marginBottom: 8 }}>Important Notice</p>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                Violation of school rules may result in warnings, penalties, or dismissal from the
                academy depending on the severity of the offense. CIJ Academy reserves the right
                to modify these rules as necessary to maintain a safe and productive learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
