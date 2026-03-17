import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="16" height="16" viewBox="0 0 24 24"
          fill={star <= rating ? '#F59E0B' : '#E5E7EB'}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Review() {
  const { t } = useLanguage();
  const rv = t.comm?.review || {};
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout title={rv.pageTitle || 'Reviews'}>
      <PageHeader
        title={rv.pageTitle || 'Student Reviews'}
        description={rv.pageSub || 'Hear from our students and parents'}
        breadcrumbs={[
          { label: t.nav.community, href: '/community' },
          { label: rv.pageTitle || 'Reviews' },
        ]}
      />
      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : reviews.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>No reviews yet.</p>
          ) : (
          <div className="review-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-avatar">
                    <span style={{ fontSize: '1.6rem' }}>{review.flag}</span>
                  </div>
                  <div>
                    <strong className="review-name">{review.name}</strong>
                    <span className="review-meta">{review.country} · {review.program} · {review.duration}</span>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="review-text">{review.text}</p>
                <span className="review-date">{review.date}</span>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
