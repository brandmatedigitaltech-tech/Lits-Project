import "./about.css";

function About() {
  return (
    <section className="about-page">

      {/* ===== TOP SECTION ===== */}
      <div className="about-top container">

        <div className="about-left">
          <h1><b>Join Lakshya IT</b></h1>

          <h3>
            Welcome to Lakshya IT Solutions – Your Gateway to IT Excellence!
          </h3>

          <p>
            At Lakshya IT Solutions, we are dedicated to empowering students and professionals with the latest skills in Information Technology. Established with a vision to bridge the gap between academic learning and industry demands, we offer cutting-edge courses in programming, web development, software engineering, data analytics, digital marketing, and more.
          </p>

          <p>
            We believe in <b>quality education, practical learning, and real-world results.</b> Our courses are designed by industry experts and delivered by experienced instructors who focus on hands-on training, live projects, and career guidance.
          </p>

          <h4>🌐 <b>Why Choose Lakshya IT Solutions?</b></h4>

          <ul className="about-list">
            <li>✅ Industry-Relevant IT Courses</li>
            <li>✅ Certified & Experienced Trainers</li>
            <li>✅ Practical Learning with Live Projects</li>
            <li>✅ Internship & Placement Support</li>
            <li>✅ Affordable Fee Structure</li>
            <li>✅ Government-Recognized Certifications</li>
          </ul>
        </div>

        <div className="about-right">
          <img src="/poster.png" alt="about" />
        </div>

      </div>

      {/* ===== VISION + MISSION (FIXED FULL WIDTH) ===== */}
      <div className="vision-section">  {/* ❌ container removed */}

        <div className="vision-card">
          <div className="vision-icon">👁️ Vision</div>
          
          <p>
            To be a leading and trusted IT education provider that empowers individuals with future-ready skills, fosters innovation, and transforms careers by bridging the gap between learning and industry needs.
          </p>
        </div>

        <div className="vision-card">
          <div className="vision-icon">🎯 Mission</div>
          
          <p>
            To equip learners with practical IT skills, build confidence through quality education, and contribute to the digital growth of India.
          </p>
        </div>

      </div>

      {/* ===== WHY CHOOSE ===== */}
<div className="why-section">

  <div className="why-container">

    <p className="why-tag">WHY CHOOSE US</p>
    <h1 className="why-title">BE PART OF LITS</h1>
    <div className="why-wave"></div>

    <div className="why-grid">

      <div className="why-card">
        <div className="why-icon">🌐</div>
        <h2>Premier Institute</h2>
        <p>
          Leading the way in computer education and innovation for future tech leaders.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">⚙️</div>
        <h2>Integrity</h2>
        <p>
          Committed to upholding integrity in all aspects of our education and services.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">📜</div>
        <h2>Community</h2>
        <p>
          Fostering a supportive community of learners passionate about technology.
        </p>
      </div>

    </div>

  </div>

</div>

    </section>
  );
}

export default About;