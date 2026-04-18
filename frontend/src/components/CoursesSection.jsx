import "./courses.css";
import { useNavigate } from "react-router-dom";

function CoursesSection() {

    const navigate = useNavigate();

    const courses = [
        {
            title: "Full Stack Web Development",
            desc: "Master HTML, CSS, JavaScript, React, Node.js and MongoDB.",
            duration: "5 Months",
            level: "Intermediate",
            price: "₹3,000",
            oldPrice: "₹5,555",
            image: "/full-stack-development.png"
        },
        {
            title: "Tally Prime with GST",
            desc: "GST + accounting",
            duration: "4 Months",
            level: "Beginner",
            price: "₹1250 per month",
            oldPrice: "₹1,375",
            image: "/images/tally.jpg"
        },
        {
            title: "Programming in C & C++",
            desc: "C & C++.",
            duration: "4 Months",
            level: "Beginner",
            price: "₹5,000",
            oldPrice: "₹5,500",
            image: "/images/c&c++.jpeg"
        },
        {
            title: "Complete Developer Program",
            desc: "All-in-one",
            duration: "12 Months",
            level: "Advanced",
            price: "₹2500 per month",
            oldPrice: "₹2750",
            image: "/images/developer.jpeg",
        },
        {
            title: "Data Interpretation",
            desc: "Excel + BI",
            duration: "4 Months",
            level: "Intermediate",
            price: "₹2000 per month",
            oldPrice: "₹2,200",
            image: "/images/data-interpretation.jpg"
        }
    ];

    return (
        <section className="courses">
            <div className="courses-inner">

                <h2 className="courses-title">
                    Our <span>Popular Courses</span>
                </h2>

                <div className="courses-grid">

                    {courses.map((course, i) => (
                        <div className="course-card" key={i}>
                            <div className="card-image">
                                <img src={course.image} alt={course.title} />
                                <span className="badge">10% OFF</span>
                            </div>

                            <div className="card-body">
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>

                                <div className="meta">
                                    <span>⏱ {course.duration}</span>
                                    <span>📊 {course.level}</span>
                                    <span>✔ Certified</span>
                                </div>
                            </div>

                            <div className="card-bottom">
                                <div>
                                    <h4>{course.price}</h4>
                                    <span>{course.oldPrice}</span>
                                </div>

                                <button
                                    className="enroll-btn"
                                    onClick={() =>
                                        navigate("/enroll", {
                                            state: { course: course.title }
                                        })
                                    }
                                >
                                    Enroll →
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* MORE CARD */}
                    <div 
                        className="course-card more"
                        onClick={() => navigate("/courses")}
                    >
                        <div className="more-content">
                            <div className="plus-icon">+</div>
                            <h3>20+ More Courses</h3>
                            <p>Explore NIELIT,Programming,Designing,Marketing </p>
                            <button className="explore-btn">
                                Explore Now →
                            </button>
                        </div>
                    </div>

                </div>

            </div> {/* ✅ FIXED */}
        </section>
    );
}

export default CoursesSection;