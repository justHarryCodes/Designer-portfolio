import Anchors from '../components/Anchors.jsx';
import Footer from '../components/Footer.jsx';
import PackagingShowcase from '../components/PackagingShowcase.jsx';
import FullBleedImage from '../components/FullBleedImage.jsx';

const BOX_POSITIONS = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

const chidelPackaging = {
  num: 21,
  logo: '/Logo page 22.png',
  logoAlt: 'Chidel Logo',
  title: "Chidel Food 'N' Pastries Packaging Design",
  description:
    "Crafting a visual experience as delightful as the menu. This project focuses on premium hexagonal packaging for a boutique pastry brand. By combining traditional geometric patterns with a modern, warm color palette, the design bridges the gap between artisanal heritage and contemporary food delivery. The central branding utilizes a clean circular focal point to ensure high shelf visibility and immediate brand recognition.",
  softwares: ['Ai', 'Ps'],
  mockupLeft: '/Food page L.png',
  mockupLeftAlt: 'Packaging Mockup Left Angle',
  mockupRight: '/Food page r.png',
  mockupRightAlt: 'Packaging Mockup Top View',
};

const richiePackaging = {
  num: 24,
  logo: '/Page 24 Logo.png',
  logoAlt: 'Richie Edibles Logo',
  title: 'Richie Edibles Packaging Design',
  description:
    'Welcome to a higher standard of sweetness. Richie Edibles crafts a curated visual experience as delightful and luxurious as our signature creations. Our signature gold and deep-brown palette is a mark of exquisite quality. This project focuses on premium, uniquely-patterned hexagonal packaging, where traditional geometric elegance meets a modern, warm gold stand. Each box, with its signature embossed detailing, is a centerpiece. The central branding utilizes a gold foil seal to ensure high shelf visibility and immediate, high-end brand recognition. Your taste buds are ready for Richie Edibles.',
  softwares: ['Ai', 'Ps'],
  mockupLeft: '/Page 24 1st.png',
  mockupLeftAlt: 'Richie Edibles Packaging Left Angle',
  mockupRight: '/Page 24 2nd.png',
  mockupRightAlt: 'Richie Edibles Packaging Open View',
  wrapMockupLeft: true,
};

const chidelGalleryImages = [
  { src: '/Page 23 Round Sticker.png', alt: 'Round Sticker' },
  { src: '/Page 23 Sticker 2.png', alt: 'Sticker 2' },
  { src: '/Page 23 Sticker 3.png', alt: 'Sticker 3' },
  { src: '/Page 23 Sticker 4.png', alt: 'Sticker 4' },
  { src: '/Page 23 Sticker 5.png', alt: 'Sticker 5' },
  { src: '/Logo page 22.png', alt: 'Logo', frameClass: 'logo-frame' },
];

const richieGalleryImages = [
  { src: '/Page 26 1st L.png', alt: 'Richie Coasters Display' },
  { src: '/Page 26 1st r.png', alt: 'Richie Hex Packaging Stack' },
  { src: '/Page 26 2nd L.png', alt: 'Richie Coasters Stack' },
  { src: '/Page 26 2nd r.png', alt: 'Richie Shopping Bag' },
  { src: '/Page 26 3rd l.png', alt: 'Richie Kraft Hex Box' },
  { src: '/Richie Logo.png', alt: 'Richie Edibles Logo', imgClass: 'p26-logo-img' },
];

export default function Printing() {
  return (
    <>
      <div className="page-container" id="page-printing-header">
        <div className="print-center-wrapper">
          <div className="print-bounding-box">
            <Anchors baseClass="print-node" positions={BOX_POSITIONS} />
            <h1 className="print-text">PRINTING</h1>
            <svg className="print-cursor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 2L19.5 10.5L12.5 12.5L15.5 20.5L11.5 22L8.5 14L3.5 18V2Z" fill="#FFC800" />
            </svg>
          </div>
        </div>
        <Footer />
      </div>

      <div className="page-container" id="page-21-design">
        <PackagingShowcase item={chidelPackaging} />
        <Footer light />
      </div>

      <div className="page-container" id="page-22-full">
        <FullBleedImage num={22} src="/Page 23@3x.png" alt="Chidel Brand Identity Full Mockup" />
        <Footer light />
      </div>

      <div className="page-container" id="page-23-gallery">
        <div className="p23-content-wrapper">
          <div className="p23-left-grid">
            {chidelGalleryImages.map((img) => (
              <div key={img.src} className={`p23-image-frame ${img.frameClass || ''}`.trim()}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className="p23-right-image-container">
            <img src="/Page 23 Hand serving food.png" alt="Hand serving food" className="p23-main-food-img" />
          </div>
        </div>
        <Footer />
      </div>

      <div className="page-container" id="page-24-design">
        <PackagingShowcase item={richiePackaging} />
        <Footer light />
      </div>

      <div className="page-container" id="page-25-full">
        <FullBleedImage num={25} src="/Page 25.png" alt="Richie Edibles Full Packaging Presentation" />
        <Footer light />
      </div>

      <div className="page-container" id="page-26-gallery">
        <div className="p26-content-wrapper">
          <div className="p26-left-section">
            <div className="p26-image-grid">
              {richieGalleryImages.map((img) => (
                <div key={img.src} className="p26-image-box">
                  <img src={img.src} alt={img.alt} className={img.imgClass} />
                </div>
              ))}
            </div>
          </div>
          <div className="p26-right-section">
            <img src="/Cake background.png" alt="Richie Cupcake Artwork" className="p26-main-cake-img" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
