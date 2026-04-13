import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.role);

        setUserRole(data.role);
        setPopup(true);

        setTimeout(() => {
          if (data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/student");
          }
        }, 1500);

      } else {
        setError(data.message || "Login Failed ❌");
      }

    } catch (err) {
      setError("Server Error ❌");
    }
  };

  return (
    <div className="login-page">

      {/* ✅ CENTER CARD */}
      <div className="login-card">

           <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin} className="login-form">

          {/* ROLE */}
          <select name="role" onChange={handleChange}>
            <option value="student">Student Login</option>
            <option value="admin">Admin Login</option>
          </select>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />

          {/* ERROR */}
          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>

        </form>

        {/* SIGNUP LINK */}
        <p className="login-link">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Signup</span>
        </p>

      </div>

      {/* POPUP */}
      {popup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Login Successful ✅</h3>
            <p>Welcome back!</p>

            <button
              onClick={() => {
                if (userRole === "admin") {
                  navigate("/admin");
                } else {
                  navigate("/student");
                }
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Login;