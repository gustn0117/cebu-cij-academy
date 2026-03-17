import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const reviews = [
  {
    id: 1,
    name: 'Yuki T.',
    country: 'Japan',
    flag: '\u{1F1EF}\u{1F1F5}',
    program: 'Junior Camp',
    duration: '4 weeks',
    rating: 5,
    text: 'My daughter had an amazing experience at CIJ Academy. Her English improved dramatically in just 4 weeks. The teachers were patient and encouraging, and she made friends from many different countries.',
    date: '2025-01',
  },
  {
    id: 2,
    name: 'Chen Wei',
    country: 'Taiwan',
    flag: '\u{1F1F9}\u{1F1FC}',
    program: 'Semi Sparta',
    duration: '8 weeks',
    rating: 5,
    text: 'The 1:1 classes were incredibly effective. I came with basic English and left being able to hold conversations confidently. The campus is beautiful with ocean views, and the food was great.',
    date: '2024-12',
  },
  {
    id: 3,
    name: 'Nguyen Minh',
    country: 'Vietnam',
    flag: '\u{1F1FB}\u{1F1F3}',
    program: 'Sparta',
    duration: '12 weeks',
    rating: 4,
    text: 'Intensive but very rewarding program. The strict schedule helped me stay focused. I improved my IELTS score from 4.5 to 6.0. Highly recommend for serious learners.',
    date: '2024-11',
  },
  {
    id: 4,
    name: 'Tanaka Sora',
    country: 'Japan',
    flag: '\u{1F1EF}\u{1F1F5}',
    program: 'Family',
    duration: '3 weeks',
    rating: 5,
    text: 'We came as a family — my wife and two kids. It was a wonderful experience for everyone. The kids loved the activities, and we parents could study in a relaxed environment.',
    date: '2024-08',
  },
];

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
        </div>
      </section>
    </Layout>
  );
}
