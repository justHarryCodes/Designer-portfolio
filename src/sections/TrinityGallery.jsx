import Footer from '../components/Footer.jsx';

export default function TrinityGallery() {
  return (
    <section className="page-7-section">
      <div className="page-7-container">
        <div className="p7-top-row">
          <div className="p7-col">
            <div className="p7-section-header">
              <h3 className="orange-heading">GARMENT EMBLEMS & ICONS (GRID)</h3>
              <div className="header-line" />
            </div>
            <img src="/Pg7leftup.png" alt="Garment Emblems Grid" className="p7-img" />
          </div>

          <div className="p7-vertical-divider" />

          <div className="p7-col">
            <div className="p7-section-header">
              <h3 className="orange-heading">PHYSICAL BRANDING PROTOTYPES (MOCKUPS)</h3>
              <div className="header-line" />
            </div>
            <img src="/Pg7rightup.png" alt="Physical Branding Prototypes" className="p7-img" />
          </div>
        </div>

        <div className="p7-bottom-row">
          <div className="p7-section-header">
            <h3 className="orange-heading">IDENTITY ASSETS & APPLICATION (ROW)</h3>
            <div className="header-line" />
          </div>
          <img src="/Pg7down.png" alt="Identity Assets and Application" className="p7-img-full" />
        </div>
      </div>

      <Footer />
    </section>
  );
}
