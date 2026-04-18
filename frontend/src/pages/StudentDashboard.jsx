import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>🎓 Welcome Student</h2>

      {/* CARDS */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap"
      }}>

        {/* MY COURSES */}
        <div
          onClick={() => navigate("/my-courses")}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
            width: "200px"
          }}
        >
          📚 My Courses
        </div>

        {/* VIDEO */}
        <div
          onClick={() => navigate("/course/1")}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
            width: "200px"
          }}
        >
          🎥 Video Lectures
        </div>

        {/* CERTIFICATE */}
        <div
          onClick={() => navigate("/certificate")}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
            width: "200px"
          }}
        >
          🏆 Certificate
        </div>

      </div>

      {/* LOGOUT */}
      <button
        style={{ marginTop: "30px" }}
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default StudentDashboard;