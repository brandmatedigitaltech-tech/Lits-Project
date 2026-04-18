import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./floating.css";

function FloatingButtons() {

  const openWhatsApp = () => {
    const phone = "917991344901"; // 👉 अपना नंबर
    const message = "Hello, I want to talk to counsellor";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="floating-container">

      {/* WhatsApp */}
      <div className="float-btn whatsapp" onClick={openWhatsApp}>
        <FaWhatsapp />
      </div>

      {/* Scroll Top */}
      <div
        className="float-btn scroll"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </div>

    </div>
  );
}

export default FloatingButtons;