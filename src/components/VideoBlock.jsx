import { roundedClassNames } from "./roundedClassNames";

export default VideoBlock = ({ ...props }) => (
  <div className={`${props.className ? props.className : ""}`}>
    <div
      className={`${roundedClassNames} webkit-corner-fix h-full bg-white ${
        props.className ? props.className : ""
      }`}
    >
      <video
        className={`lazy-load mx-auto`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        loading="lazy"
        data-src={props.src}
      ></video>
    </div>
  </div>
);
