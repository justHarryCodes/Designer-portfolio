import Anchors from '../components/Anchors.jsx';
import Footer from '../components/Footer.jsx';

export default function BrandingDivider() {
  return (
    <section className="page-5-section">
      <div className="page-5-container">
        <div className="branding-title-wrapper">
          <div className="p5-bounding-box">
            <Anchors
              baseClass="anchor"
              positions={['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']}
            />
            <svg className="p5-box-arrow" viewBox="0 0 24 24" width="35" height="35" fill="#ffcb05">
              <path d="M2 2 L22 22 L10 22 L22 22 L22 10 Z" />
            </svg>
          </div>

          <h1 className="branding-huge-title">BRANDING</h1>
        </div>
      </div>

      <Footer />
    </section>
  );
}
