import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
