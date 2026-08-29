/** Yellow pill callout with a little arrow, used on the hero photo. */
export default function Tag({ className = '', children }) {
  return (
    <div className={`tag ${className}`.trim()}>
      {children}
      <div className="arrow-down" />
    </div>
  );
}
