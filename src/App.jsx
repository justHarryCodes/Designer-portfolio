import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Branding from './pages/Branding.jsx';
import SocialMedia from './pages/SocialMedia.jsx';
import Printing from './pages/Printing.jsx';
import MotionGraphics from './pages/MotionGraphics.jsx';
import VideoEditing from './pages/VideoEditing.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/printing" element={<Printing />} />
        <Route path="/motion-graphics" element={<MotionGraphics />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
