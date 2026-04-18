import { useRef, useEffect } from "react";
import "./videos.css";

function Videos() {
  const sliderRef = useRef();

  const videoList = [
    {
      title: "Introduction of Java Part 2",
      url: "https://www.youtube.com/embed/0WGpwyvWTUc",
    },
    {
      title: "SQL (Structured Query Language)",
      url: "https://www.youtube.com/embed/UFKmqxziFTY",
    },
    {
      title: "Website Development",
      url: "https://www.youtube.com/embed/EGrvtMh6nqE",
    },
     {
      title:"Word Press",
      url:"https://www.youtube.com/embed/GNqLYSUwXUc",
     },
  ];

  // 🔥 duplicate for infinite loop
  const loopVideos = [...videoList, ...videoList];

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (slider) {
        slider.scrollLeft += 1; // 👈 continuous smooth move

        // 🔁 reset without visible jump
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    }, 20); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="videos-section">

      <h1 className="videos-title">VIDEOS</h1>
      <div className="videos-wave"></div>

      <div className="slider-container">
        <div className="videos-slider" ref={sliderRef}>
          {loopVideos.map((video, index) => (
            <div className="video-card" key={index}>
              <iframe
                src={video.url}
                title={video.title}
                allowFullScreen
              ></iframe>

              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Videos;