import React, { useEffect, useRef, useState } from "react";

import video from "./Comp-1.webm";
import videoThumbnail from "./Comp-1-Thumbnail.png";

function HomeMainVideo() {
  const videoRef = useRef();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoEnded = (event) => {
    event.target.play();
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) videoRef.current.play();
        else if (videoRef.current) videoRef.current.pause();
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="HomeMainVideo">
      <video
        ref={videoRef}
        src={video}
        loop
        onLoadedData={handleVideoLoad}
        autoPlay
        muted={true}
        playsInline={true}
        onEnded={handleVideoEnded}
      />
      {!videoLoaded && <img src={videoThumbnail} alt="Thumbnail" />}
    </div>
  );
}

export default HomeMainVideo;
