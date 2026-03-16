import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const steps = [
  {
    num: 1,
    title: 'Choose Your Program',
    desc: 'Browse our programs and select the one that best matches your learning goals. You can choose from ESL, IELTS, TOEIC, or Business English for adults, or age-appropriate programs for junior students.',
  },
  {
    num: 2,
    title: 'Submit Application',
    desc: 'Complete the online application form with your personal information, preferred program, dates, and accommodation preferences. You will receive a confirmation email within 24 hours.',
  },
  {
    num: 3,
    title: 'Receive Quotation',
    desc: 'Our admissions team will send you a detailed quotation including tuition fees, accommodation costs, and any additional services you have requested.',
  },
  {
    num: 4,
    title: 'Make Payment',
    desc: 'Once you accept the quotation, proceed with the payment. We accept bank transfers and other major payment methods. A deposit is required to secure your spot.',
  },
  {
    num: 5,
    title: 'Receive Confirmation',
    desc: 'After payment is confirmed, you will receive an official acceptance letter and pre-arrival guide with important information about visas, packing, and airport pickup.',
  },
  {
    num: 6,
    title: 'Arrive at CIJ',
    desc: 'On your arrival date, our airport pickup service will bring you to the campus. You will undergo orientation and a placement test on your first day.',
  },
];

const documents = [
  'Valid passport (with at least 6 months validity)',
  'Passport-sized photos (2 copies)',
  'Completed application form',
  'Flight itinerary',
  'Payment receipt',
  'Medical certificate (for stays longer than 12 weeks)',
];

export default function HowToRegister() {
  return (
    <Layout title="How to Register">
      <PageHeader
        title="How to Register"
        description="Your step-by-step guide to enrollment"
        breadcrumbs={[
          { label: 'Registration', href: '/registration' },
          { label: 'How to Register' },
        ]}
      />

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Registration Steps</h2>
            <p>Follow these simple steps to begin your journey at CIJ Academy.</p>
            <span className="accent-line"></span>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.num}>
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-block">
            <h2>Required Documents</h2>
            <p>Please prepare the following documents before your arrival:</p>
            <ul>
              {documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Important Notes</h2>
            <div style={{
              padding: '24px 32px',
              background: 'var(--secondary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--secondary)',
              marginBottom: 20,
            }}>
              <p style={{ fontWeight: 600, color: '#8B6914', marginBottom: 8 }}>Visa Information</p>
              <p style={{ color: 'var(--gray-700)' }}>
                Most nationalities can enter the Philippines with a 30-day visa on arrival.
                CIJ Academy will assist with visa extension for longer stays. Please check
                the Philippine embassy website for specific visa requirements for your country.
              </p>
            </div>
            <div style={{
              padding: '24px 32px',
              background: 'var(--primary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--primary)',
            }}>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 8 }}>Airport Pickup</p>
              <p style={{ color: 'var(--gray-700)' }}>
                Free airport pickup service is available at Mactan-Cebu International Airport.
                Please provide your flight details at least 3 days before arrival so we can
                arrange the pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 16, fontSize: '1.8rem' }}>Ready to Apply?</h2>
          <p style={{ color: 'var(--gray-500)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Contact us to start your registration process. Our admissions team is ready to help you.
          </p>
          <a
            href="mailto:info@cijacademy.com"
            className="hero-btn"
            style={{ background: 'var(--primary)', color: '#fff' }}
          >
            Contact Admissions
          </a>
        </div>
      </section>
    </Layout>
  );
}
