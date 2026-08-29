import GlassCard from './GlassCard.jsx';
import SoftwareIcons from './SoftwareIcons.jsx';
import ColorPalette from './ColorPalette.jsx';

/**
 * The recurring 3-column "brand deep-dive" layout: logo + overview + concept
 * on the left, symbol breakdown + mockup + palette in the center, a full
 * lifestyle shot on the right. Used for every branding case study.
 *
 * `num` is the original page number (6, 8, 10, 12, 14 ...) the site's CSS
 * was written against — it drives both the `.page-N-*` and `.pN-*` class
 * families so the existing stylesheet applies unchanged.
 */
export default function BrandCaseStudy({ brand }) {
  const {
    id,
    num,
    headingClass,
    logo,
    logoAlt,
    overview,
    concept,
    softwares,
    symbolIntro,
    symbolList,
    symbolOutro,
    mockupImg,
    mockupAlt,
    colorRows,
    rightImg,
    rightImgAlt,
    rightImgClass,
  } = brand;

  const col = `p${num}`;

  return (
    <section id={id} className={`page-${num}-section`}>
      <div className={`page-${num}-container`}>
        <div className={`${col}-col left-col`}>
          <GlassCard className="logo-card">
            <img src={logo} alt={logoAlt} />
          </GlassCard>

          <h3 className={headingClass}>Brand Overview:</h3>
          <p className={`${col}-text`}>{overview}</p>

          <h3 className={headingClass}>Logo Concept:</h3>
          {(Array.isArray(concept) ? concept : [concept]).map((para) => (
            <p key={para} className={`${col}-text`}>
              {para}
            </p>
          ))}

          <h3 className={headingClass}>Softwares</h3>
          <SoftwareIcons items={softwares} />
        </div>

        <div className={`${col}-col center-col`}>
          <h3 className={headingClass}>Symbol / Icon Concept:</h3>
          <p className={`${col}-text ${col}-bold`}>
            {(Array.isArray(symbolIntro) ? symbolIntro : [symbolIntro]).map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <ul className={`${col}-list`}>
            {symbolList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {symbolOutro && <p className={`${col}-text`}>{symbolOutro}</p>}

          <img src={mockupImg} alt={mockupAlt} className="mockup-img" />

          <ColorPalette rows={colorRows} />
        </div>

        <div className={`${col}-col right-col`}>
          <img src={rightImg} alt={rightImgAlt} className={rightImgClass} />
        </div>
      </div>
    </section>
  );
}
