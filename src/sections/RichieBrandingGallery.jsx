import Footer from '../components/Footer.jsx';

export default function RichieBrandingGallery() {
  return (
    <section className="page-13-section">
      <div className="page-13-container">
        <div className="p13-col left-col">
          <img src="/Pg 13 leftup.png" alt="3D Donut Render" className="p13-img" />
          <img src="/Pg 13 leftup middle.png" alt="Merchandise and Packaging" className="p13-img" />
          <img src="/Pg 13 leftdown.png" alt="Brand Business Card" className="p13-img" />
        </div>

        <div className="p13-col center-col">
          <img src="/Pg 13 middle.png" alt="Pastry Box Presentation" className="p13-img-large" />
        </div>

        <div className="p13-col right-col">
          <img src="/Pg 13 rightup.png" alt="Social Media Flyer" className="p13-img" />
          <img src="/Pg 13 rightdown.png" alt="Physical Menu Mockup" className="p13-img" />
        </div>
      </div>

      <Footer />
    </section>
  );
}
