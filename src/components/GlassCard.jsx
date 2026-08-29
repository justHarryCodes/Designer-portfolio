/** The frosted card used across About, Branding overview blocks, etc. */
export default function GlassCard({ title, className = '', children }) {
  return (
    <div className={`glass-card ${className}`.trim()}>
      {title && <h3 className="accent-title">{title}</h3>}
      {children}
    </div>
  );
}
