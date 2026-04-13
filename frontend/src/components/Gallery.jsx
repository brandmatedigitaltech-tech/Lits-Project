import "./gallery.css";
import { useEffect, useState } from "react";

function Gallery() {

  const images = Array.from({ length: 86 }, (_, i) =>
    `/images/gallery/img${i + 1}.jpeg`
  );

  const [index, setIndex] = useState(0);

  // 🔥 SLOW SLIDE (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 >= images.length - 2 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="gallery">

      <h2 className="gallery-title">IMAGES GALLERY</h2>

      <div className="carousel">

        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {images.map((img, i) => (
            <div className="carousel-item" key={i}>
              <img src={img} alt={`img-${i}`} />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Gallery;