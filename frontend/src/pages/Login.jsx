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
        // ✅ SAVE USER + ROLE
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.role);

        setUserRole(data.role);
        setPopup(true);

        // ✅ AUTO REDIRECT
        setTimeout(() => {
          if (data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/account"); // 🔥 CHANGED (better than /student)
          }
        }, 1500);

      } else {
        setError(data.message || "Login Failed ❌");
      }

    } catch (err) {
      setError("Server not running ❌");
    }
  };

  return (
    <div className="login-page">

      {/* ✅ LOGIN CARD */}
      <div className="login-card">

        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin} className="login-form">

          {/* ROLE */}
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student Login</option>
            <option value="admin">Admin Login</option>
          </select>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
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

      {/* ✅ SUCCESS POPUP */}
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
                  navigate("/account"); // 🔥 SAME FIX HERE
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