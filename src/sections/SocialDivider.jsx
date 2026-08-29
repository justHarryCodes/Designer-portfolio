import Footer from '../components/Footer.jsx';

const POSITIONS = ['p15-tl', 'p15-tc', 'p15-tr', 'p15-bl', 'p15-bc', 'p15-br'];

export default function SocialDivider() {
  return (
    <section className="page-15-section">
      <div className="page-15-container">
        <div className="p15-bounding-box">
          <h1 className="social-huge-title">SOCIAL MEDIA</h1>

          {POSITIONS.map((pos) => (
            <div key={pos} className={`p15-anchor ${pos}`} />
          ))}

          <div className="p15-cursor">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.93179 2.05263C4.24641 1.63756 3.33333 2.13098 3.33333 2.93297V20.2529C3.33333 21.0827 4.31032 21.5273 4.93226 20.9806L10.021 16.5057C10.2241 16.327 10.4851 16.227 10.756 16.227H20.0833C20.8938 16.227 21.3853 15.2974 20.9538 14.5828L4.93179 2.05263Z"
                fill="#FFC107"
                stroke="#FFC107"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
