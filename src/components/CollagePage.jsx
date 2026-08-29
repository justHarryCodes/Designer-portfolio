import Footer from './Footer.jsx';

/** A full-bleed single-image "collage" section (used to close out Social Media). */
export default function CollagePage({ num, src, alt, imgClass }) {
  return (
    <section className={`page-${num}-section`}>
      <div className={`page-${num}-container`}>
        <img src={src} alt={alt} className={imgClass} />
      </div>
      <Footer />
    </section>
  );
}
