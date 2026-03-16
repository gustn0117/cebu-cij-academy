import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  const { t } = useLanguage();
  return (
    <div className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {breadcrumbs.length > 0 && (
          <div className="breadcrumb">
            <Link href="/">{t.common.home}</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                <span style={{ margin: '0 4px' }}>/</span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
