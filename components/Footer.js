'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>CIJ Academy</h4>
            <p>
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4>{t.nav.aboutUs}</h4>
            <ul className="footer-links">
              <li><Link href="/about#greeting">{t.nav.greeting}</Link></li>
              <li><Link href="/about#history">{t.nav.history}</Link></li>
              <li><Link href="/about#why-choose-cij">{t.nav.whyChooseCij}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.nav.programs}</h4>
            <ul className="footer-links">
              <li><Link href="/programs#esl">{t.nav.eslProgram}</Link></li>
              <li><Link href="/programs#ielts">{t.nav.ieltsProgram}</Link></li>
              <li><Link href="/programs#toeic">{t.nav.toeicProgram}</Link></li>
              <li><Link href="/programs#business">{t.nav.businessEnglish}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              <li><Link href="/levels">{t.nav.levels}</Link></li>
              <li><Link href="/registration#how-to-register">{t.nav.registration}</Link></li>
              <li><Link href="/registration#school-rules">{t.nav.schoolRules}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CIJ Academy. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
