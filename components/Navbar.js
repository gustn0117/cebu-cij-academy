import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage } from '@/lib/LanguageContext';

const languages = [
  { code: 'en', label: 'English', flag: '\u{1F1FA}\u{1F1F8}' },
  { code: 'ja', label: 'Japan', flag: '\u{1F1EF}\u{1F1F5}' },
  { code: 'zh-TW', label: 'Taiwan', flag: '\u{1F1F9}\u{1F1FC}' },
  { code: 'zh-CN', label: 'China', flag: '\u{1F1E8}\u{1F1F3}' },
  { code: 'vi', label: 'Vietnam', flag: '\u{1F1FB}\u{1F1F3}' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const router = useRouter();

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const navItems = [
    {
      label: t.nav.aboutUs,
      href: '/#about',
      sub: [
        { label: t.nav.greeting, href: '/#greeting' },
        { label: t.nav.history, href: '/#history' },
        { label: t.nav.whyChooseCij, href: '/#why-choose-cij' },
      ],
    },
{
      label: t.nav.levels,
      href: '/#levels',
      sub: [
        { label: t.nav.kinder, href: '/#kinder' },
        { label: t.nav.juniorA, href: '/#junior-a' },
        { label: t.nav.juniorB, href: '/#junior-b' },
        { label: t.nav.juniorC, href: '/#junior-c' },
        { label: t.nav.adult, href: '/#adult' },
      ],
    },
    {
      label: t.nav.registration,
      href: '/#registration',
      sub: [
        { label: t.nav.howToRegister, href: '/#how-to-register' },
        { label: t.nav.schoolRules, href: '/#school-rules' },
      ],
    },
    {
      label: t.nav.facilities,
      href: '/#facilities',
      sub: [
        { label: t.nav.campus, href: '/#campus' },
        { label: t.nav.dormitory, href: '/#dormitory' },
        { label: t.nav.cafeteria, href: '/#cafeteria' },
      ],
    },
    {
      label: t.nav.community,
      href: '/community',
      sub: [
        { label: t.nav.notice, href: '/community/notice' },
        { label: t.nav.gallery, href: '/community/gallery' },
        { label: t.nav.faq, href: '/community/faq' },
      ],
    },
  ];

  const handleHashClick = (e, hashHref, closeMobile) => {
    const hash = hashHref.replace('/', '');
    const el = document.querySelector(hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpenDropdown(null);
      if (closeMobile) {
        setMobileOpen(false);
      }
    }
  };

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
          <Image
            src="/images/logo.png"
            alt="CIJ Academy"
            width={44}
            height={50}
            className="navbar-logo-img"
            priority
          />
          <div className="navbar-logo-text">
            <span className="navbar-logo-main">CIJ</span>
            <span className="navbar-logo-sub">ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="navbar-menu-item"
              onMouseEnter={() => setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`navbar-menu-link ${!item.href.startsWith('/#') && router.pathname.startsWith(item.href) ? 'active' : ''}`}
                onClick={item.href.startsWith('/#') ? (e) => handleHashClick(e, item.href, false) : undefined}
              >
                {item.label}
                {item.sub && <span className="navbar-arrow">&#9662;</span>}
              </Link>
              {item.sub && openDropdown === item.href && (
                <div className="navbar-dropdown">
                  {item.sub.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="navbar-dropdown-link"
                      onClick={sub.href.startsWith('/#') ? (e) => handleHashClick(e, sub.href, false) : undefined}
                    >
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
              {languages.map((l) => (
                <button
                  key={l.code}
                  className={`navbar-lang-option ${l.code === lang ? 'active' : ''}`}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                >
                  <span className="navbar-lang-flag">{l.flag}</span>
                  <span>{l.label}</span>
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
            <div key={item.href}>
              <Link
                href={item.href}
                className="navbar-mobile-link"
                onClick={item.href.startsWith('/#')
                  ? (e) => handleHashClick(e, item.href, true)
                  : () => setMobileOpen(false)
                }
              >
                {item.label}
              </Link>
              {item.sub && (
                <div className="navbar-mobile-sub">
                  {item.sub.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="navbar-mobile-sub-link"
                      onClick={sub.href.startsWith('/#')
                        ? (e) => handleHashClick(e, sub.href, true)
                        : () => setMobileOpen(false)
                      }
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
            {languages.map((l) => (
              <button
                key={l.code}
                className={`navbar-lang-option ${l.code === lang ? 'active' : ''}`}
                onClick={() => {
                  setLang(l.code);
                }}
              >
                <span className="navbar-lang-flag">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
