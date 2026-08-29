import SocialDivider from '../sections/SocialDivider.jsx';
import SocialCampaign from '../components/SocialCampaign.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import OtherSocial from '../sections/OtherSocial.jsx';
import CollagePage from '../components/CollagePage.jsx';

const dinamico = {
  num: 16,
  prefix: 'dinamico',
  logo: '/Dinamico logo.png',
  logoAlt: 'Dinamico Consulting Logo',
  wrapLogo: false,
  title: (
    <>
      Social Media
      <br />
      Designs
    </>
  ),
  brief: [
    'Dinamico Consulting is built on a foundation of excellence, innovation, and client-centered service. In a rapidly evolving business landscape, we have established a strong and trusted presence by redefining how organizations approach growth, strategy, and execution. With a unique blend of insight, precision, and adaptability, we take pride in delivering tailored solutions that drive measurable results and sustainable success.',
    'Dinamico Consulting is more than just a consulting firm, it is a strategic partner. We have created a dynamic ecosystem that empowers businesses, strengthens relationships, and unlocks new opportunities. Through innovative strategies and impeccable execution, we deliver value at every stage, ensuring our clients experience a level of excellence that sets us apart.',
  ],
  softwares: ['Ai', 'Ps', 'Ae', 'Pr'],
  flyer1: '/Dinamico flyer 1.png',
  flyer1Alt: 'Dinamico Social Flyer 1',
  flyer2: '/Dinamico flyer 2.png',
  flyer2Alt: 'Dinamico Social Flyer 2',
  phone: '/Dinamico phone.png',
  phoneAlt: 'Dinamico Instagram Phone',
};

const tercescrow = {
  num: 18,
  prefix: 'tercescrow',
  logo: '/18 logo.png',
  logoAlt: 'Tercescrow Logo',
  wrapLogo: true,
  title: (
    <>
      Social Media
      <br />
      Designs
    </>
  ),
  brief: [
    "Tercescrow is built on a foundation of absolute integrity, speed, and digital innovation. In a financial landscape that demands both agility and ironclad security, we have established ourselves as a premier gateway for seamless asset liquidation and digital commerce. By bridging the gap between alternative digital assets and liquidity, we provide a sophisticated platform where transparency isn't just a feature, it is our primary mandate.",
    'Tercescrow is more than just a digital exchange; it is an architect of financial freedom. We have engineered a high-performance ecosystem that transforms how individuals interact with digital value, offering a secure environment for converting gift cards to cash and managing essential obligations with a single touch. Through cutting-edge encryption and a relentless commitment to user-centered execution, we ensure every transaction is handled with the precision and excellence that defines the modern digital economy.',
  ],
  softwares: ['Ai', 'Ps', 'Ae', 'Pr'],
  flyer1: '/18 top.png',
  flyer1Alt: 'Tercescrow Social Flyer 1',
  flyer2: '/18 down.png',
  flyer2Alt: 'Tercescrow Social Flyer 2',
  phone: '/18 phone.png',
  phoneAlt: 'Tercescrow Instagram Phone',
};

const dinamicoPosts = Array.from({ length: 8 }, (_, i) => ({
  src: `/${171 + i}.png`,
  alt: `Dinamico Social Post ${i + 1}`,
}));

const tercescrowPosts = Array.from({ length: 8 }, (_, i) => ({
  src: `/${191 + i}.png`,
  alt: `Tercescrow Social Post ${i + 1}`,
}));

export default function SocialMedia() {
  return (
    <>
      <SocialDivider />

      <SocialCampaign campaign={dinamico} />
      <ImageGrid num={17} images={dinamicoPosts} imgClass="p17-img" />

      <SocialCampaign campaign={tercescrow} />
      <ImageGrid num={19} images={tercescrowPosts} imgClass="p19-img" />

      <OtherSocial />

      <CollagePage num={21} src="/caps.png" alt="Creative Design Mockup Collage" imgClass="caps-full-img" />
      <CollagePage num={22} src="/Page 20.png" alt="Mixed Design Mockup Collage" imgClass="p22-full-img" />
    </>
  );
}
