import "./hero.css";
import {
  FaBolt,
  FaRocket,
  FaArrowRight,
  FaGraduationCap,
  FaCalendarAlt,
  FaBookOpen,
  FaCode
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-discount">
            <FaBolt className="icon yellow" />
            <span>🎉 10% Early Bird Discount — Valid till April 5, 2026</span>
          </div>

          <h1 className="hero-title">
            Build a <br />
            <span>Successful</span><br />
            Career in IT
          </h1>

          <p className="hero-sub">
            <span className="highlight">8+ years of excellence</span> in IT education.
            Join Kanpur's most trusted training institute and master in-demand tech skills.
          </p>

          <div className="hero-btns">

            <button
              className="btn-primary"
              onClick={() => navigate("/courses")}
            >
              <FaRocket /> Enroll Now
            </button>

            <button
              className="btn-outline"
              onClick={() => navigate("/courses")}
            >
              Explore Courses <FaArrowRight />
            </button>

          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div className="stat-item">
              <div className="stat-icon">
                <FaGraduationCap />
              </div>
              <div>
                <h4>1000+ Students</h4>
                <p>Successfully trained</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaCalendarAlt />
              </div>
              <div>
                <h4>8+ Years</h4>
                <p>Industry experience</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaBookOpen />
              </div>
              <div>
                <h4>26 Courses</h4>
                <p>Across all domains</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <div className="hero-card">

            {/* FLOATING CHIPS */}
            <div className="floating-chip chip-1">
              <span className="chip-dot"></span> Live Classes Available
            </div>

            <div className="floating-chip chip-2">
              <span className="chip-dot blue"></span> Certificate Provided
            </div>

            {/* 🔥 FLOATING IMAGE WRAPPER */}
            <div className="image-box floating-animation">
              <div className="image-gradient"></div>
              <img src="/heroimg.png" alt="course" />

              <div className="progress-bars">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="course-info">
              <div className="course-icon">
                <FaCode />
              </div>

              <div>
                <h4>Full Stack Development</h4>
                <p>Most Popular • 5 Months</p>
              </div>

              <span className="price">₹3,000</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero; 