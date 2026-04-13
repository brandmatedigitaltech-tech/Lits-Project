import "./contact.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();

  // ✅ FORM STATE (FIXED)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",        // ✅ USER KA NUMBER
    course: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ SAVE IN DATABASE
      const res = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName,
          email: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {

        /* ============================
           🔥 WHATSAPP MESSAGE
        ============================ */

        const text = `Hello, I want counselling 👇

Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}
Course: ${form.course}
Message: ${form.message}`;

        // ✅ 👉 CHANGE THIS NUMBER (COUNSELLOR NUMBER)
        const counsellorNumber = "917991344901";

        const whatsappURL = `https://wa.me/${counsellorNumber}?text=${encodeURIComponent(text)}`;

        // ✅ OPEN WHATSAPP
        window.open(whatsappURL, "_blank");

        // ✅ POPUP
        setShowPopup(true);

        // RESET FORM
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });

        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 4000);
      }

    } catch (err) {
      alert("Error submitting form ❌");
    }
  };

  return (
    <div className="page">

      {/* HERO */}
      <div className="page-hero">
        <div className="container">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>Talk to our counsellor for course guidance</p>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT INFO */}
            <div className="contact-info">

              <div className="contact-card">
                <h4>📍 Address:</h4>
                <p>E - 438,Daheli Sujanpur,Shyam Nagar,Kanpur,UP - 208013</p>
              </div>

              <div className="contact-card">
                <h4>📞 Call / WhatsApp:</h4>
                <p>+919453655579,+918303647303,+917991344901</p>
              </div>

              <div className="contact-card">
                <h4>✉ Email:</h4>
                <p>info@lakshyaitsolution.com</p>
              </div>
              <div className="contact-card">
                <h4>💼Job / Placement Email:</h4>
                <p>Litsplacement@gmail.com</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="form-block">

              <h4>Send Message</h4>

              <form onSubmit={handleSubmit}>

                <div className="form-row">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                {/* ✅ USER PHONE INPUT */}
                <input
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option>NIELIT Courses</option>
                  <option>Computer Courses</option>
                  <option>Accounting Courses</option>
                  <option>Programming Courses</option>
                  <option>Designing Courses</option>
                  <option>Data Analysis Courses</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>

                <button className="btn-primary">
                  🚀 Send Message
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Message Sent ✅</h3>
            <p>Opening WhatsApp...</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;