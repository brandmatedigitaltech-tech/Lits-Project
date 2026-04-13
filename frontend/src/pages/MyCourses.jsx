import { useNavigate } from "react-router-dom";

function MyCourses() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: "Full Stack Development" },
    { id: 2, name: "Python & Data Science" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>📚 My Courses</h2>

      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.name}</h3>

          <button onClick={() => navigate(`/course/${course.id}`)}>
            ▶ Start Learning
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyCourses;