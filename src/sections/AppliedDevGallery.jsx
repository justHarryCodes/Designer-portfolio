import Footer from '../components/Footer.jsx';

const COLUMNS = [
  {
    labels: ['DIVISIONAL IDENTITIES', 'WEBSITE & APP ICONS'],
    images: [
      { src: '/Pg 11 left.png', alt: 'Divisional Identities' },
      { src: '/Pg 11 down left.png', alt: 'Billboard Mockup' },
    ],
  },
  {
    labels: ['CONSTRUCTION ICONS'],
    images: [
      { src: '/Pg 11 middle up.png', alt: 'Construction Icons' },
      { src: '/Pg 11 down middle.png', alt: 'Wall Logo Mockup' },
    ],
  },
  {
    labels: ['MOCKUPS'],
    images: [
      { src: '/Pg 11 right.png', alt: 'Mockups Top' },
      { src: '/Pg 11 down right.png', alt: 'Mockups Bottom' },
    ],
  },
];

export default function AppliedDevGallery() {
  return (
    <section className="page-11-section">
      <div className="page-11-container">
        {COLUMNS.map((col) => (
          <div key={col.labels[0]} className="p11-col">
            <div className="p11-label">
              {col.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            {col.images.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} className="p11-img" />
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
}
