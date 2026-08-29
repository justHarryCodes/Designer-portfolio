import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'About me', end: true },
  { to: '/branding', label: 'Branding' },
  { to: '/social-media', label: 'Social Media' },
  { to: '/printing', label: 'Printing' },
  { to: '/motion-graphics', label: 'Motion Graphics' },
  { to: '/video-editing', label: 'Video Editing' },
  { to: '/contact', label: 'Contact me', dot: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport grows back to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="site-navbar">
      <NavLink to="/" className="site-navbar__brand" onClick={() => setOpen(false)}>
        Jerry Awaghor
      </NavLink>

      <button
        type="button"
        className={`nav-toggle ${open ? 'is-open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav ${open ? 'is-open' : ''}`}>
        {NAV_LINKS.map(({ to, label, end, dot }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {label}
            {dot && <span className="nav-dot" />}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
