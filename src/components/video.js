import { useState } from "react";

export function Video({ video }) {
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
    <video
      className="rounded-md"
      width="384"
      height="384"
      muted
      playsInline
      preload="metadata"
      controls={controls}
      controlsList="nodownload noremoteplayback"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <source src={`${video}.webm`} type="video/webm" />
      <source src={`${video}.mp4`} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
