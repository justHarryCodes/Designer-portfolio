import BrandingDivider from '../sections/BrandingDivider.jsx';
import BrandCaseStudy from '../components/BrandCaseStudy.jsx';
import TrinityGallery from '../sections/TrinityGallery.jsx';
import NexBizGallery from '../sections/NexBizGallery.jsx';
import AppliedDevGallery from '../sections/AppliedDevGallery.jsx';
import RichieBrandingGallery from '../sections/RichieBrandingGallery.jsx';
import { brandCaseStudies } from '../data/brandCaseStudies.js';

// Each case study is paired with its follow-up gallery page, where one exists.
const GALLERIES = {
  'trinity-apparel': TrinityGallery,
  'nexbiz-marketing': NexBizGallery,
  'applied-development': AppliedDevGallery,
  'richie-edibles-branding': RichieBrandingGallery,
  'agora-medical': null,
};

export default function Branding() {
  return (
    <>
      <BrandingDivider />
      {brandCaseStudies.map((brand) => {
        const Gallery = GALLERIES[brand.id];
        return (
          <div key={brand.id}>
            <BrandCaseStudy brand={brand} />
            {Gallery && <Gallery />}
          </div>
        );
      })}
    </>
  );
}
