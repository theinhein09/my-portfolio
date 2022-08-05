import { useState } from "react";
import LazyLoad from "react-lazyload";

export function Video({ url }) {
  const [controls, setControls] = useState(false);
  function handleMouseOver(event) {
    setControls(true);
    event.target.play();
  }

  function handleMouseOut(event) {
    setControls(false);
    event.target.pause();
  }

  return (
    <LazyLoad height={384}>
      <video
        width="384"
        height="384"
        muted
        playsInline
        preload="metadata"
        controls={controls}
        controlsList="nodownload noremoteplayback"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="rounded transition-all"
      >
        <source src={`${url}.webm`} type="video/webm" />
        <source src={`${url}.mp4`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </LazyLoad>
  );
}
