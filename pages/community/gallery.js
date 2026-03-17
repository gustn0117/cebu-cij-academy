import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout title={t.comm.galleryTitle}>
      <PageHeader title={t.comm.galleryTitle} subtitle={t.comm.gallerySub} breadcrumb={[{ label: t.nav.community, href: '/community' }, { label: t.comm.galleryTitle }]} />
      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : items.length === 0 ? (
            <div className="content-block">
              <h2>{t.comm.galleryHeading}</h2>
              <p>{t.comm.galleryDesc}</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {items.map((item) => (
                <div key={item.id} className="gallery-item">
                  <img className="gallery-img" src={item.image_url} alt={item.title || ''} />
                  {item.title && <div className="gallery-title">{item.title}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
