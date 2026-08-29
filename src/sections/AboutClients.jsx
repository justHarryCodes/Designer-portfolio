import GlassCard from '../components/GlassCard.jsx';
import Anchors from '../components/Anchors.jsx';
import Footer from '../components/Footer.jsx';

const SOFTWARES = ['Ai', 'Ps', 'Lr', 'Id', 'Ae', 'Pr', 'An'];

export default function AboutClients() {
  return (
    <section className="page-3-section">
      <div className="page-3-container">
        <div className="p3-left-col">
          <GlassCard title="ABOUT ME">
            <p className="about-text">
              I am Jerry Awaghor, a Senior Designer and Video Editor dedicated to the art of visual
              storytelling. Over the past eight years, I have refined a multidisciplinary skill set that
              blends branding, motion graphics, and strategic design to solve modern communication
              challenges. My background in agency and printing environments has instilled a deep
              understanding of both digital engagement and technical precision. I thrive on the challenge
              of fast-paced production, focusing on creating impactful, visually stunning content that
              resonates with audiences and drives brand success.
            </p>
          </GlassCard>

          <GlassCard title="MEGA CLIENTS" className="clients-card">
            <img src="/Logos@3x.png" alt="Mega Clients Logos" className="logos-img" />
          </GlassCard>
        </div>

        <div className="p3-right-col">
          <div className="p3-image-wrapper">
            <div className="p3-bounding-box">
              <Anchors baseClass="anchor" positions={['top-left', 'top-right', 'bottom-left', 'bottom-right']} />
              <svg className="p3-box-arrow" viewBox="0 0 24 24" width="30" height="30" fill="#ffcb05">
                <path d="M2 2 L22 22 L10 22 L22 22 L22 10 Z" />
              </svg>
            </div>

            <img src="/look side@3@3x.png" alt="Jerry Profile" className="p3-profile-img" />

            <div className="softwares-section">
              <h4 className="softwares-title">SOFTWARES</h4>
              <ul className="softwares-list">
                {SOFTWARES.map((sw) => (
                  <li key={sw}>{sw}</li>
                ))}
              </ul>
              <svg
                className="software-arrow"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                stroke="#ffcb05"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 25 5 Q 25 20 10 25 M 10 25 L 15 20 M 10 25 L 15 30" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
