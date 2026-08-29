import Anchors from './Anchors.jsx';
import './PageDivider.css';

const BOX_POSITIONS = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

/**
 * The full-viewport "section title card" motif: a bounding box with yellow
 * anchor nodes, a huge center title, and a yellow cursor pointer. Used for
 * the Motion Graphics divider (and reused for the Video Editing / Contact
 * placeholder pages).
 */
export default function PageDivider({
  id,
  title,
  wrapperClass = 'placeholder-center-wrapper',
  boxClass = 'placeholder-bounding-box',
  nodeClass = 'placeholder-node',
  textClass = 'placeholder-text',
  cursorClass = 'placeholder-cursor',
  children,
}) {
  return (
    <div className="page-container" id={id}>
      <div className={wrapperClass}>
        <div className={boxClass}>
          <Anchors baseClass={nodeClass} positions={BOX_POSITIONS} />
          <h1 className={textClass}>{title}</h1>
          <svg className={cursorClass} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 2L19.5 10.5L12.5 12.5L15.5 20.5L11.5 22L8.5 14L3.5 18V2Z" fill="#FFC800" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
}
