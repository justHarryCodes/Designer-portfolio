import { Link } from 'react-router-dom';
import Anchors from '../components/Anchors.jsx';
import Footer from '../components/Footer.jsx';

const ITEMS = [
  { number: 1, label: 'Branding', to: '/branding' },
  { number: 2, label: 'Social Media', to: '/social-media' },
  { number: 3, label: 'Digital Printing', to: '/printing' },
  { number: 4, label: 'Motion Graphics', to: '/motion-graphics' },
  { number: 5, label: 'Video Editing', to: '/video-editing' },
  { number: 6, label: 'Contact me', to: '/contact' },
];

export default function Toc() {
  return (
    <section className="page-4-section">
      <div className="spotlight" />

      <div className="toc-title-wrapper">
        <div className="p4-bounding-box">
          <Anchors
            baseClass="anchor"
            positions={['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']}
          />
          <svg className="p4-box-arrow" viewBox="0 0 24 24" width="30" height="30" fill="#ffcb05">
            <path d="M2 2 L22 22 L10 22 L22 22 L22 10 Z" />
          </svg>
        </div>
        <h1 className="toc-huge-title">TABLE OF CONTENT</h1>
      </div>

      <div className="toc-items-grid">
        {ITEMS.map((item) => (
          <Link key={item.number} to={item.to} className="toc-item">
            <span className="toc-number">{item.number}</span>
            <span className="toc-label">{item.label}</span>
          </Link>
        ))}
      </div>

      <Footer />
    </section>
  );
}
