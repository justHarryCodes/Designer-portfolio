/** A single full-page presentation image (used by pages 22 and 25). */
export default function FullBleedImage({ num, src, alt }) {
  return <img src={src} alt={alt} className={`p${num}-full-image`} />;
}
