/**
 * Renders the little corner/edge marker squares used on every "bounding box"
 * design motif throughout the site. `baseClass` is the marker's own class
 * (e.g. "anchor", "print-node"); `positions` are the modifier classes.
 */
export default function Anchors({ baseClass, positions }) {
  return (
    <>
      {positions.map((pos) => (
        <div key={pos} className={`${baseClass} ${pos}`} />
      ))}
    </>
  );
}
