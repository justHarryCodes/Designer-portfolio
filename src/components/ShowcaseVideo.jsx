import './ShowcaseVideo.css';

/** A single video reel with a title/caption, used on the Motion Graphics page. */
export default function ShowcaseVideo({ src, title, caption }) {
  return (
    <div className="showcase-video">
      <video src={src} controls preload="metadata" />
      <div className="showcase-video__caption">
        <h3>{title}</h3>
        {caption && <p>{caption}</p>}
      </div>
    </div>
  );
}
