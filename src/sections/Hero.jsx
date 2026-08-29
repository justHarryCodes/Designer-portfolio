import { useEffect, useRef } from 'react';
import Anchors from '../components/Anchors.jsx';
import Tag from '../components/Tag.jsx';
import Footer from '../components/Footer.jsx';

const BOX_POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle-left', 'middle-right'];

export default function Hero() {
  const textRef = useRef(null);

  // Recreates the original scroll-parallax effect on the giant background text.
  useEffect(() => {
    function onScroll() {
      const scrolled = window.pageYOffset;
      if (textRef.current) {
        textRef.current.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.5}px))`;
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="spotlight" />

      <div className="bg-text" ref={textRef}>
        <div>PORT</div>
        <div>FOLIO</div>
      </div>

      <div className="foreground-container">
        <div className="bounding-box">
          <Anchors baseClass="anchor" positions={BOX_POSITIONS} />
        </div>

        <img src="/look up@3x.png" alt="Jerry Awaghor" className="profile-img" />

        <Tag className="art-director">Art Director</Tag>
        <Tag className="experience">8+ years</Tag>
      </div>

      <Footer />
    </section>
  );
}
