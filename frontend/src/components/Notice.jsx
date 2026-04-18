import "./notice.css";
import { useNavigate } from "react-router-dom";

function Notice() {
  const navigate = useNavigate();

  const notices = [
    {
      title: "🔥 New Batch Starting",
      desc: "Full Stack Development batch starts from April 10",
      course: "Full Stack Web Development"
    },
    {
      title: "🎯 Offer Ending Soon",
      desc: "10% Early Bird Discount valid till April 5",
      course: "Cloud Computing (AWS)"
    },
    {
      title: "🚀 New Course Launch",
      desc: "Python & Data Science now available",
      course: "Python & Data Science"
    },
    { title: "🔥 Digital marketing ",
      desc: "Start from the core",
      course: "Digital marketing core"}
  ];

  return (
    <section className="notice-section">
      <div className="container">

        <h2 className="notice-title">
          📢 Latest <span>Updates</span>
        </h2>

        <div className="notice-grid">

          {notices.map((n, i) => (
            <div
              key={i}
              className="notice-card"
              onClick={() =>
                navigate("/enroll", { state: { course: n.course } })
              }
            >
              <h4>{n.title}</h4>
              <p>{n.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Notice;