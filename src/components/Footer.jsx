/**
 * The recurring "Jerry Awaghor Portfolio — 2026" rule that closes out each
 * section. Pass `light` on sections with a bright/light background so the
 * text stays legible.
 */
export default function Footer({ light = false }) {
  return (
    <div className={`bottom-bar ${light ? 'bottom-bar--light' : ''}`.trim()}>
      <span>Jerry Awaghor Portfolio</span>
      <div className="line" />
      <span>2026</span>
    </div>
  );
}
