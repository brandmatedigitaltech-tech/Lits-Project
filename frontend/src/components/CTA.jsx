import "./cta.css";
import { useNavigate } from "react-router-dom";

function CTA() {

  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta-inner">

        {/* TOP BADGE */}
        <div className="cta-badge">
          ⚡ Early Bird Offer — 10% OFF — Ends April 5
        </div>

        {/* TITLE */}
        <h2 className="cta-title">
          Start Your IT <br />
          Journey <span>Today</span>
        </h2>

        {/* SUB TEXT */}
        <p className="cta-sub">
          Don’t wait for the right moment — create it. Join 1000+ students who trusted Lakshay IT Solution and built careers they’re proud of.
        </p>

        {/* BUTTONS */}
        <div className="cta-buttons">

          {/* ✅ ENROLL BUTTON (FIXED) */}
          <button
            className="btn-primary"
            onClick={() => navigate("/courses")}
          >
            🚀 Enroll Now & Save 10%
          </button>

          {/* ✅ COUNSELLOR BUTTON (2 OPTIONS) */}

          {/* OPTION 2 (better): WhatsApp direct */}
          {
         <button
            className="btn-secondary"
            onClick={() => window.location.href = "/contact?counsellor=true"}
            >
            Talk to a Counsellor
        </button>
          }

        </div>

        {/* BOTTOM NOTE */}
        <div className="cta-note">
          ⏱ Offer valid till April 5, 2026 • Limited seats available
        </div>

      </div>
    </section>
  );
}

export default CTA;