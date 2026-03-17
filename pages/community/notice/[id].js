import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function NoticeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch('/api/notices')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === Number(id));
        setPost(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  return (
    <Layout title={post?.title || 'Notice'}>
      <PageHeader
        title={t.comm?.noticeTitle || 'Notice'}
        description={t.comm?.noticeSub}
        breadcrumbs={[
          { label: t.nav.community, href: '/community' },
          { label: t.comm?.noticeTitle || 'Notice', href: '/community/notice' },
          { label: post?.title || '' },
        ]}
      />
      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : !post ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ color: '#6c757d', marginBottom: 20 }}>Post not found.</p>
              <Link href="/community/notice" className="btn-primary">Back to list</Link>
            </div>
          ) : (
            <div className="content-block">
              <h2>{post.title}</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)', marginBottom: 32 }}>
                {new Date(post.created_at).toLocaleDateString('ko-KR')}
              </p>
              <div style={{ lineHeight: 1.9 }}>
                {post.content.split('\n').map((line, i) => (
                  <p key={i} style={{ marginBottom: 8 }}>{line || '\u00A0'}</p>
                ))}
              </div>
              <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--gray-300)' }}>
                <Link href="/community/notice" className="btn-primary">
                  ← Back to list
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
