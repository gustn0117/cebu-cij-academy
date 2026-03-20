import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage } from '@/lib/LanguageContext';
import AuthModal from '@/components/AuthModal';

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
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);
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
        { label: t.nav.address || 'Address', href: '/#address' },
      ],
    },
    {
      label: t.nav.programs,
      href: '/#programs',
      sub: [
        { label: t.nav.sparta || 'Sparta', href: '/#sparta' },
        { label: t.nav.semiSparta || 'Semi Sparta', href: '/#semi-sparta' },
        { label: t.nav.junior || 'Junior', href: '/#junior-program' },
        { label: t.nav.juniorCamp || 'Junior Camp', href: '/#junior-camp' },
        { label: t.nav.family || 'Family', href: '/#family' },
      ],
    },
    {
      label: t.nav.levels,
      href: '/#levels',
      sub: [
        { label: t.nav.adult, href: '/#adult' },
        { label: t.nav.juniorLevel || 'Junior', href: '/#junior-level' },
        { label: t.nav.kinder, href: '/#kinder' },
      ],
    },
    {
      label: t.nav.registration,
      href: '/#registration',
      sub: [
        { label: t.nav.howToRegister, href: '/#how-to-register' },
        { label: t.nav.applyOnline || 'Apply Online', href: '/#apply-online' },
        { label: t.nav.schoolRules, href: '/#school-rules' },
      ],
    },
    {
      label: t.nav.facilities,
      href: '/#facilities',
      sub: [
        { label: t.nav.liloanCampus || 'Liloan Campus', href: '/#liloan-campus' },
        { label: t.nav.premiumCampus || 'Premium Campus', href: '/#premium-campus' },
      ],
    },
    {
      label: t.nav.community,
      href: '/community',
      sub: [
        { label: t.nav.notice, href: '/community/notice' },
        { label: t.nav.letter || 'Letter', href: '/community/letter' },
        { label: t.nav.evaluationReport || 'Evaluation Report', href: '/community/evaluation' },
        { label: t.nav.review || 'Review', href: '/community/review' },
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

  // Check auth on mount
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('cij_token');
      const savedUser = localStorage.getItem('cij_user');
      if (savedToken && savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch {}
  }, []);

  const handleAuth = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('cij_token');
    localStorage.removeItem('cij_user');
    setUser(null);
  };

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

        {/* Login / User Button (Desktop) */}
        <div className="navbar-auth" style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1A1A2E', whiteSpace: 'nowrap' }}>
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  background: 'none', border: '1px solid #B91C1C', color: '#B91C1C',
                  padding: '4px 12px', borderRadius: 6, fontSize: '0.8rem',
                  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              style={{
                background: '#B91C1C', color: '#fff', border: 'none',
                padding: '6px 16px', borderRadius: 6, fontSize: '0.85rem',
                fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
              }}
            >
              Login
            </button>
          )}
        </div>

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
          {/* Mobile Auth */}
          <div style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1A1A2E' }}>
                  {user.name}
                </span>
                <button
                  onClick={() => { handleLogout(); setMobileOpen(false); }}
                  style={{
                    background: 'none', border: '1px solid #B91C1C', color: '#B91C1C',
                    padding: '4px 14px', borderRadius: 6, fontSize: '0.82rem',
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setShowAuth(true); setMobileOpen(false); }}
                style={{
                  background: '#B91C1C', color: '#fff', border: 'none',
                  padding: '8px 20px', borderRadius: 6, fontSize: '0.88rem',
                  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', width: '100%',
                }}
              >
                Login
              </button>
            )}
          </div>

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
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuth={handleAuth}
      />
    </nav>
  );
}
