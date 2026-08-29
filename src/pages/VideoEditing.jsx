import Footer from '../components/Footer.jsx';
import PageDivider from '../components/PageDivider.jsx';
import VideoGallery from '../components/VideoGallery.jsx';
import { videoEditingReels } from '../data/videos.js';

export default function VideoEditing() {
  return (
    <PageDivider
      id="page-video-editing"
      title={
        <>
          VIDEO
          <br />
          EDITING
        </>
      }
    >
      <div style={{ marginTop: 40, width: '100%' }}>
        <h3 className="accent-title" style={{ textAlign: 'center', marginBottom: 30 }}>
          EDIT SAMPLES
        </h3>
        <VideoGallery videos={videoEditingReels} />
      </div>
      <Footer />
    </PageDivider>
  );
}
