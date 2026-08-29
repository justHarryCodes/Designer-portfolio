import Anchors from '../components/Anchors.jsx';
import SoftwareIcons from '../components/SoftwareIcons.jsx';
import Footer from '../components/Footer.jsx';

const POSITIONS = ['p20-tl', 'p20-tc', 'p20-tr', 'p20-bl', 'p20-bc', 'p20-br'];

export default function OtherSocial() {
  return (
    <section className="page-20-section">
      <div className="page-20-container">
        <div className="p20-header">
          <h1 className="p20-main-title">
            Social Media
            <br />
            Designs
          </h1>
        </div>

        <div className="p20-bounding-wrapper">
          <div className="p20-bounding-box">
            <h2 className="other-social-title">
              OTHER SOCIAL
              <br />
              MEDIA DESIGNS
            </h2>

            <Anchors baseClass="p20-anchor" positions={POSITIONS} />

            <div className="p20-cursor">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.93179 2.05263C4.24641 1.63756 3.33333 2.13098 3.33333 2.93297V20.2529C3.33333 21.0827 4.31032 21.5273 4.93226 20.9806L10.021 16.5057C10.2241 16.327 10.4851 16.227 10.756 16.227H20.0833C20.8938 16.227 21.3853 15.2974 20.9538 14.5828L4.93179 2.05263Z"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="p20-softwares">
          <h3 className="p20-software-heading">Softwares</h3>
          <SoftwareIcons items={['Ai', 'Ps', 'Ae', 'Pr']} className="p20-icons" />
        </div>
      </div>

      <Footer />
    </section>
  );
}
