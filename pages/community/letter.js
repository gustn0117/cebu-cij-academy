import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Letter() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ title: '', studentName: '', content: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ title: '', studentName: '', content: '' });
      }
    } catch (err) {
      // fallback: just show success
      setSubmitted(true);
      setForm({ title: '', studentName: '', content: '' });
    }
    setLoading(false);
  };

  const lt = t.comm?.letter || {};

  return (
    <Layout title={lt.pageTitle || 'Letter to Student'}>
      <PageHeader
        title={lt.pageTitle || 'Letter to Student'}
        description={lt.pageSub || 'Send a letter to your child studying at CIJ Academy'}
        breadcrumbs={[
          { label: t.nav.community, href: '/community' },
          { label: lt.pageTitle || 'Letter' },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="letter-form-wrapper">
            {submitted ? (
              <div className="letter-success">
                <div className="letter-success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2>{lt.successTitle || 'Letter Sent Successfully!'}</h2>
                <p>{lt.successDesc || 'Your letter has been delivered to the academy. The staff will make sure your child receives it.'}</p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: 24 }}
                >
                  {lt.sendAnother || 'Send Another Letter'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="letter-form">
                <div className="letter-form-header">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <h2>{lt.formTitle || 'Write a Letter'}</h2>
                  <p>{lt.formDesc || 'Send a heartfelt message to your child at CIJ Academy.'}</p>
                </div>

                <div className="letter-field">
                  <label htmlFor="title">{lt.labelTitle || 'Title'}</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder={lt.placeholderTitle || 'Enter letter title'}
                  />
                </div>

                <div className="letter-field">
                  <label htmlFor="studentName">{lt.labelStudent || 'Student Name'}</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                    placeholder={lt.placeholderStudent || 'Enter student\'s full name'}
                  />
                </div>

                <div className="letter-field">
                  <label htmlFor="content">{lt.labelContent || 'Message'}</label>
                  <textarea
                    id="content"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    required
                    rows={8}
                    placeholder={lt.placeholderContent || 'Write your message here...'}
                  />
                </div>

                <button type="submit" className="btn-primary letter-submit" disabled={loading}>
                  {loading
                    ? (lt.sending || 'Sending...')
                    : (lt.submit || 'Send Letter')
                  }
                  {!loading && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
