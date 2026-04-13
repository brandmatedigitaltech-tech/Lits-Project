import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Certificate() {
  const navigate = useNavigate();

  const completed = localStorage.getItem("courseCompleted");

  useEffect(() => {
    if (completed !== "true") {
      alert("❌ Complete course first!");
      navigate("/my-courses");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🏆 Certificate</h1>
      <h2>Course Completed Successfully 🎉</h2>
    </div>
  );
}

export default Certificate;