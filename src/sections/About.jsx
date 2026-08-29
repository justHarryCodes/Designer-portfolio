import GlassCard from '../components/GlassCard.jsx';
import Footer from '../components/Footer.jsx';

const JOURNEY = [
  { role: 'Creative Designer', place: 'Joe-D-Best Business Center' },
  { role: 'Creative Designer/Lead Designer', place: 'Hesotech Printing Services' },
  { role: 'Freelance Graphic Designer', place: 'Jermer Graphic Enterprise' },
  { role: 'Senior Graphic Designer & Video Editor', place: 'Dinamico Consulting' },
  { role: 'Freelance Graphic Designer & Video Editor', place: 'D_Master_Craft' },
  { role: 'Team Lead - Graphic Designer & Multimedia', place: 'Tercescrow' },
  { role: 'Team Lead - Graphic Designer & Multimedia', place: 'House on the Rock Church' },
];

const SKILLS = [
  'Art Direction',
  'Photoshop',
  'Illustrator',
  'Creative Idea',
  'Social Media Design',
  'Project Completion/Finishing',
  'Logo Design',
  'Character Vector Drawing',
  'Brand & Identity',
  'Creative Design Marketing',
  'Image Manipulation & Retouching',
  'Motion Graphics & Videos',
  'Using AI for design ideas',
];

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-column left-col">
          <GlassCard title="CREATIVE JOURNEY" className="journey-card">
            <ul className="timeline">
              {JOURNEY.map((item) => (
                <li key={item.role + item.place}>
                  <strong>{item.role}</strong>
                  <br />
                  <span>{item.place}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="bottom-creative" style={{ position: 'relative', marginTop: 40 }}>
            <h1 className="creative-huge">CREATIVE</h1>

            <svg
              style={{ position: 'absolute', left: 40, top: 50, zIndex: 10 }}
              width="80"
              height="50"
              viewBox="0 0 80 50"
              fill="none"
              stroke="#ffcb05"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 5 5 C 30 45, 60 45, 75 25" />
              <path d="M 60 15 L 75 25 L 65 35" />
            </svg>

            <p className="portfolio-small">PORTFOLIO</p>
          </div>
        </div>

        <div className="about-column center-col">
          <h3 className="jerry-small">JERRY</h3>
          <h1 className="awaghor-huge">AWAGHOR</h1>
          <div style={{ position: 'relative', alignSelf: 'flex-end', marginRight: 20 }}>
            <p className="art-director-label" style={{ marginRight: 0 }}>
              ART DIRECTOR
            </p>
            <svg
              style={{ position: 'absolute', right: -20, top: 25 }}
              viewBox="0 0 24 24"
              width="50"
              height="50"
              stroke="#ffcb05"
              strokeWidth="2"
              fill="none"
            >
              <path d="M18 5 Q 8 10 5 20 M 5 15 L 5 20 L 10 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <img src="/look side@3x page 2.png" alt="Jerry Side Profile" className="profile-img-2" />
        </div>

        <div className="about-column right-col">
          <div className="skills-section">
            <h3 className="accent-title">SKILL LEVEL</h3>
            <ul className="skills-list">
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <GlassCard title="CREATIVE DNA" className="dna-card">
            <h4 className="dna-stats">
              100+ CLIENTS
              <br />
              8+ YEARS
            </h4>
            <p className="dna-text">
              Brand identity & logo design. Social media branding & creatives. Marketing & promotional
              materials. Digital & print design. Brand guideline & visual system. AI-assisted design for
              faster concept generation and refinement.
            </p>
          </GlassCard>

          <Footer />
        </div>
      </div>
    </section>
  );
}
