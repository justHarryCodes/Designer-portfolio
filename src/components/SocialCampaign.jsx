import SoftwareIcons from './SoftwareIcons.jsx';
import Footer from './Footer.jsx';

/**
 * The recurring "brand social media campaign" layout: logo + huge title +
 * brief on the left, a stacked pair of flyers in the center, a phone
 * mockup on the right. Used for both Dinamico and Tercescrow.
 */
export default function SocialCampaign({ campaign }) {
  const {
    num,
    prefix,
    logo,
    logoAlt,
    wrapLogo,
    title,
    brief,
    softwares,
    flyer1,
    flyer1Alt,
    flyer2,
    flyer2Alt,
    phone,
    phoneAlt,
  } = campaign;

  const p = `p${num}`;
  const logoImg = <img src={logo} alt={logoAlt} className={`${prefix}-logo`} />;

  return (
    <section className={`page-${num}-section`}>
      <div className={`page-${num}-container`}>
        <div className={`${p}-col left-col`}>
          {wrapLogo ? <div className={`${prefix}-logo-box`}>{logoImg}</div> : logoImg}

          <h1 className={`${prefix}-huge-title`}>{title}</h1>

          <h3 className={`${prefix}-heading`}>Brief:</h3>
          {brief.map((para) => (
            <p key={para} className={`${p}-text`}>
              {para}
            </p>
          ))}

          <h3 className={`${prefix}-heading`}>Softwares</h3>
          <SoftwareIcons items={softwares} className={`${p}-icons`} />
        </div>

        <div className={`${p}-col center-col flyer-stack`}>
          <img src={flyer1} alt={flyer1Alt} className={`${prefix}-flyer-1`} />
          <img src={flyer2} alt={flyer2Alt} className={`${prefix}-flyer-2`} />
        </div>

        <div className={`${p}-col right-col`}>
          <img src={phone} alt={phoneAlt} className={`${prefix}-phone`} />
        </div>
      </div>

      <Footer />
    </section>
  );
}
