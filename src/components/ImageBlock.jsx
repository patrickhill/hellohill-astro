import { roundedClassNames } from "./roundedClassNames";

export default ImageBlock = ({ ...props }) => (
  <div
    className={`${roundedClassNames} webkit-corner-fix object-fill ${
      props.className ? props.className : ""
    }`}
  >
    <img className={`lazy-load`} loading="lazy" data-src={props.src} />
  </div>
);
