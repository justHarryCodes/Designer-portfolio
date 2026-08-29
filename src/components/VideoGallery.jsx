import ShowcaseVideo from './ShowcaseVideo.jsx';
import './VideoGallery.css';

/** A responsive grid of video reels, one <ShowcaseVideo> per entry. */
export default function VideoGallery({ videos }) {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <ShowcaseVideo key={video.src} {...video} />
      ))}
    </div>
  );
}
