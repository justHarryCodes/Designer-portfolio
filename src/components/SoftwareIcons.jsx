/** Row of "Ai / Ps / Ae / Pr" style software badges. */
export default function SoftwareIcons({ items, className = '' }) {
  return (
    <div className={`software-icons ${className}`.trim()}>
      {items.map((item) => (
        <span key={item} className="icon-box">
          {item}
        </span>
      ))}
    </div>
  );
}
