import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CoursePlayer() {
  const navigate = useNavigate();

  const [completed, setCompleted] = useState(
    localStorage.getItem("courseCompleted") === "true"
  );

  const handleComplete = () => {
    setCompleted(true);
    localStorage.setItem("courseCompleted", "true"); // ✅ save
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>🎥 Course Video</h2>

      <iframe
        width="600"
        height="350"
        src="https://www.youtube.com/embed/dGcsHMXbSOA"
        title="Course Video"
      ></iframe>

      <br /><br />

      {!completed && (
        <button onClick={handleComplete}>
          ✅ Mark as Completed
        </button>
      )}

      {completed && (
        <button onClick={() => navigate("/certificate")}>
          🏆 Get Certificate
        </button>
      )}
    </div>
  );
}

export default CoursePlayer;