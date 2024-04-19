import React, {useEffect, useRef, useState} from "react";
import video from  "./Comp-1.webm"
function HomeMainVideo (){
  const videoRef = useRef()
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  
  const handleVideoEnded = (event) => {
    event.target.play(); // Перезапускаем видео при окончании
  };
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Threshold visibility
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) { // Add a null check for videoRef.current
          videoRef.current.play();
        } else if (videoRef.current) { // Add a null check for videoRef.current
          videoRef.current.pause();
        }
      });
    }, options);
    
    observer.observe(videoRef.current);
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  return(
     <div className="HomeMainVideo">
       <video
          ref={videoRef}
          preload="auto"
          style={{ display: videoLoaded ? 'block' : 'none' }}
          controls={false}
          onLoadedData={handleVideoLoad}
          autoPlay
          muted
          onEnded={handleVideoEnded}
       >
       <source src={video} type="video/webm"/>
       </video>
     </div>
  )
}

export default HomeMainVideo