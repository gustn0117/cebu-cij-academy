import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  {
    label: 'About Us',
    href: '/about',
    sub: [
      { label: 'Greeting', href: '/about/greeting' },
      { label: 'History', href: '/about/history' },
      { label: 'Why Choose CIJ', href: '/about/why-choose-cij' },
      { label: 'Address', href: '/about/address' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    sub: [
      { label: 'ESL Program', href: '/programs/esl' },
      { label: 'IELTS Program', href: '/programs/ielts' },
      { label: 'TOEIC Program', href: '/programs/toeic' },
      { label: 'Business English', href: '/programs/business' },
    ],
  },
  {
    label: 'Levels',
    href: '/levels',
    sub: [
      { label: 'Kinder (4-7)', href: '/levels/kinder' },
      { label: 'Junior A (8-11)', href: '/levels/junior-a' },
      { label: 'Junior B (11-14)', href: '/levels/junior-b' },
      { label: 'Junior C (14+)', href: '/levels/junior-c' },
      { label: 'Adult', href: '/levels/adult' },
    ],
  },
  {
    label: 'Registration',
    href: '/registration',
    sub: [
      { label: 'How to Register', href: '/registration/how-to-register' },
      { label: 'School Rules', href: '/registration/school-rules' },
    ],
  },
  {
    label: 'Facilities',
    href: '/facilities',
    sub: [
      { label: 'Campus', href: '/facilities/campus' },
      { label: 'Dormitory', href: '/facilities/dormitory' },
      { label: 'Cafeteria', href: '/facilities/cafeteria' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    sub: [
      { label: 'Notice', href: '/community/notice' },
      { label: 'Gallery', href: '/community/gallery' },
      { label: 'FAQ', href: '/community/faq' },
    ],
  },
];

const languages = [
  { code: 'en', label: 'English', flag: '\u{1F1FA}\u{1F1F8}' },
  { code: 'ja', label: 'Japan', flag: '\u{1F1EF}\u{1F1F5}' },
  { code: 'zh-TW', label: 'Taiwan', flag: '\u{1F1F9}\u{1F1FC}' },
  { code: 'zh-CN', label: 'China', flag: '\u{1F1E8}\u{1F1F3}' },
  { code: 'vi', label: 'Vietnam', flag: '\u{1F1FB}\u{1F1F3}' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const langRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-main">CIJ</span>
          <span className="navbar-logo-sub">ACADEMY</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="navbar-menu-item"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`navbar-menu-link ${router.pathname.startsWith(item.href) ? 'active' : ''}`}
              >
                {item.label}
                {item.sub && <span className="navbar-arrow">&#9662;</span>}
              </Link>
              {item.sub && openDropdown === item.label && (
                <div className="navbar-dropdown">
                  {item.sub.map((sub) => (
                    <Link key={sub.label} href={sub.href} className="navbar-dropdown-link">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Language Selector */}
        <div className="navbar-lang" ref={langRef}>
          <button
            className="navbar-lang-btn"
            onClick={() => setLangOpen(!langOpen)}
          >
            <span className="navbar-lang-flag">{currentLang.flag}</span>
            <span className="navbar-lang-label">{currentLang.label}</span>
            <span className="navbar-arrow">&#9662;</span>
          </button>
          {langOpen && (
            <div className="navbar-lang-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`navbar-lang-option ${lang.code === currentLang.code ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentLang(lang);
                    setLangOpen(false);
                  }}
                >
                  <span className="navbar-lang-flag">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}>
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar-mobile-menu">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="navbar-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.sub && (
                <div className="navbar-mobile-sub">
                  {item.sub.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="navbar-mobile-sub-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Mobile Language */}
          <div className="navbar-mobile-lang">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`navbar-lang-option ${lang.code === currentLang.code ? 'active' : ''}`}
                onClick={() => {
                  setCurrentLang(lang);
                }}
              >
                <span className="navbar-lang-flag">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
