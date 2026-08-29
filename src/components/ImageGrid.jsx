import Footer from './Footer.jsx';

/** A simple grid of post images (used for the Dinamico and Tercescrow social grids). */
export default function ImageGrid({ num, images, imgClass }) {
  return (
    <section className={`page-${num}-section`}>
      <div className={`page-${num}-container`}>
        {images.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} className={imgClass} />
        ))}
      </div>
      <Footer />
    </section>
  );
}
