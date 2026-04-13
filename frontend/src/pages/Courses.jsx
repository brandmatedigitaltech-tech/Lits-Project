import { FaClock, FaChartBar, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./courses.css";

// DATA
import { courses } from "../data/courses";

function Courses() {

  const navigate = useNavigate();

  // 🔥 GET CATEGORY FROM URL
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  // STATE
  const [filter, setFilter] = useState("All");

  // 🔥 MAP URL → REAL CATEGORY NAME
  const categoryMap = {
    computer: "Computer Courses",
    programming: "Programming Courses",
    nielit: "NIELIT Courses",
    accounting: "Accounting Courses",
    data: "Data Analysis Courses",
    design: "Designing & Editing",
    digital: "Digital Marketing",
    others: "Others"
  };

  // 🔥 SET FILTER FROM URL
  useEffect(() => {
    if (categoryFromURL && categoryMap[categoryFromURL]) {
      setFilter(categoryMap[categoryFromURL]);
    }
  }, [categoryFromURL]);

  // FILTER OPTIONS
  const categories = [
    "All",
    "Computer Courses",
    "Programming Courses",
    "NIELIT Courses",
    "Accounting Courses",
    "Data Analysis Courses",
    "Designing & Editing",
    "Digital Marketing",
    "Others"
  ];

  // FILTER LOGIC
  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((c) => c.category === filter);

  return (
    <div className="page">

      {/* HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="badge">⚡ 10% Early Bird Discount</div>
          <h1>All <span className="highlight">Courses</span></h1>
          <p>Industry-aligned programs designed to launch your IT career.</p>
        </div>
      </div>

      <div className="container">

        {/* FILTER */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="courses-grid">

          {filteredCourses.map((c, i) => (
            <div className="course-card" key={i}>

              {/* IMAGE */}
              <div className="course-image">
                <img src={c.image} alt={c.name} />
                <span className="course-discount-badge">10% OFF</span>
              </div>

              {/* BODY */}
              <div className="course-card-body">

                <div className="course-name">{c.name}</div>
                <div className="course-desc">{c.desc}</div>

                <div className="course-meta-row">
                  <div className="course-meta-item">
                    <FaClock /> {c.duration}
                  </div>
                  <div className="course-meta-item">
                    <FaChartBar /> {c.level}
                  </div>
                  <div className="course-meta-item">
                    <FaCheckCircle /> Certified
                  </div>
                </div>

                {/* PRICE */}
                <div className="course-price-row">
                  <div className="price-wrap">
                    <span className="price-current">
                      {c.price.includes("/") ? (
                        <>
                          {c.price.split("/")[0]}
                          <small>{c.price.split("/")[1]}</small>
                        </>
                      ) : (
                        c.price
                      )}
                    </span>
                  </div>

                  {/* ENROLL BUTTON */}
                  <button
                    className="enroll-btn"
                    onClick={() =>
                      navigate("/enroll", { state: { course: c.name } })
                    }
                  >
                    Enroll →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Courses;