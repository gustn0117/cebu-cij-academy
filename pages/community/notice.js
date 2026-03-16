import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const allPosts = [];

const PER_PAGE = 14;

export default function Notice() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Layout title="Notice">
      <PageHeader title="Notice" subtitle="Important announcements" breadcrumb={[{ label: 'Community', href: '/community' }, { label: 'Notice' }]} />
      <section className="section">
        <div className="container">
          <div className="board">
            <table className="board-table">
              <thead>
                <tr>
                  <th className="board-col-no">No</th>
                  <th className="board-col-title">제목</th>
                  <th className="board-col-date">날짜</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, i) => (
                  <tr key={post.id}>
                    <td className="board-no">{allPosts.length - ((page - 1) * PER_PAGE + i)}</td>
                    <td className="board-title">
                      <Link href={`/community/notice/${post.id}`}>{post.title}</Link>
                    </td>
                    <td className="board-date">{post.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="board-pagination">
              <button
                className="board-page-btn"
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`board-page-num ${p === page ? 'active' : ''}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                className="board-page-btn"
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
