import Footer from '../components/Footer.jsx';
import PageDivider from '../components/PageDivider.jsx';
import VideoGallery from '../components/VideoGallery.jsx';
import { motionGraphicsReels } from '../data/videos.js';

export default function MotionGraphics() {
  return (
    <>
      <PageDivider
        id="page-27-motion"
        title={
          <>
            MOTION
            <br />
            GRAPHICS
          </>
        }
        wrapperClass="p27-center-wrapper"
        boxClass="p27-bounding-box"
        nodeClass="p27-node"
        textClass="p27-text"
        cursorClass="p27-cursor"
      />

      <div className="page-container" id="motion-reel">
        <h3 className="accent-title" style={{ textAlign: 'center', marginBottom: 30 }}>
          FEATURED REEL
        </h3>
        <VideoGallery videos={motionGraphicsReels} />
        <Footer />
      </div>
    </>
  );
}
