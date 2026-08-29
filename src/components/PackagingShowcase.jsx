/**
 * The two-column "packaging design" layout (logo, title, description,
 * softwares, two mockup shots) reused for both the Chidel and Richie
 * Edibles packaging pages. `num` drives the `.pN-*` class family.
 */
export default function PackagingShowcase({ item }) {
  const { num, logo, logoAlt, title, description, softwares, mockupLeft, mockupLeftAlt, mockupRight, mockupRightAlt, wrapMockupLeft } = item;
  const p = `p${num}`;

  const mockup = <img src={mockupLeft} alt={mockupLeftAlt} className={`${p}-mockup-left`} />;

  return (
    <div className={`${p}-content-wrapper`}>
      <div className={`${p}-left-column`}>
        <img src={logo} alt={logoAlt} className={`${p}-logo`} />

        <h2 className={`${p}-title`}>{title}</h2>

        <p className={`${p}-description`}>{description}</p>

        <h3 className={`${p}-subtitle`}>Softwares</h3>
        <div className={`${p}-software-badges`}>
          {softwares.map((sw) => (
            <span key={sw} className={`${p}-badge`}>
              {sw}
            </span>
          ))}
        </div>

        {wrapMockupLeft ? <div className={`${p}-mockup-left-container`}>{mockup}</div> : mockup}
      </div>

      <div className={`${p}-right-column`}>
        <img src={mockupRight} alt={mockupRightAlt} className={`${p}-mockup-right`} />
      </div>
    </div>
  );
}
