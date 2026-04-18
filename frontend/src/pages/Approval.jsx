import { useState } from "react";
import "./approval.css";

function Approval() {

  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    "/certificates/cert1.jpg",
    "/certificates/cert2.jpg",
    "/certificates/cert3.jpg",
    "/certificates/cert4.jpg",
  ];

  return (
    <section className="approval-section">

      <h1 className="approval-title">Our Certifications</h1>

      <div className="approval-grid">
        {certificates.map((img, index) => (
          <div className="approval-card" key={index}>
            <img
              src={img}
              alt="certificate"
              onClick={() => setSelectedImage(img)} // ✅ CLICK
            />
          </div>
        ))}
      </div>

      {/* ✅ FULL SCREEN PREVIEW */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)} // close on click
        >
          <img src={selectedImage} alt="preview" />
        </div>
      )}

    </section>
  );
}

export default Approval;