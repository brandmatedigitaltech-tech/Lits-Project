import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FloatingButtons from "./components/FloatingButtons";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Approval from "./pages/Approval";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";

import StudentDashboard from "./pages/StudentDashboard";
import MyCourses from "./pages/MyCourses";
import CoursePlayer from "./pages/CoursePlayer";
import Certificate from "./pages/Certificate";

function App() {
  const location = useLocation();

  // 🔥 AUTO SCROLL TO TOP ON ROUTE CHANGE
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smoother experience
    });
  }, [location.pathname]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* MAIN PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Admin />} />

        {/* STUDENT */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/course/:id" element={<CoursePlayer />} />
        <Route path="/certificate" element={<Certificate />} />

        {/* 🔥 404 PAGE (NEW - IMPORTANT) */}
        <Route
          path="*"
          element={
            <div style={{ padding: "100px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>

      {/* FOOTER */}
      <Footer />
      <FloatingButtons/>
    </>
  );
}

export default App;