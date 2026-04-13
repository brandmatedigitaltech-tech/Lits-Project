import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./enroll.css";

function Enroll() {

  const location = useLocation();
  const navigate = useNavigate();

  const courseName = location.state?.course || "General Inquiry";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    course: courseName,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        // ⏳ Auto close after 1 minute
        setTimeout(() => {
          setSuccess(false);
          navigate("/");
        }, 60000);
      }

    } catch (error) {
      console.log(error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="enroll-page">

      <h2>Enroll Now</h2>

      <form onSubmit={handleSubmit} className="enroll-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* COURSE FIELD */}
        <input
          type="text"
          name="course"
          value={form.course}
          readOnly
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enroll Now 🚀</button>

      </form>

      {/* ✅ POPUP */}
      {success && (
        <div className="popup-overlay">
          <div className="popup-box">

            <h3>Enrollment Successful ✅</h3>
            <p>Your form has been submitted successfully.</p>

            <button
              onClick={() => {
                setSuccess(false);
                navigate("/");
              }}
            >
              OK
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Enroll;