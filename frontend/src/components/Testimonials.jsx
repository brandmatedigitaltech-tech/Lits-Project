import "./testimonials.css";

function Testimonials() {
    const data = [
        {
            text: "The Full Stack course was life-changing. Within 3 months of completing it, I landed a job at a Noida-based startup. The live project experience really set me apart in interviews.",
            name: "Ankit Kumar",
            role: "Full Stack Developer • Batch 2024",
            initials: "AK"
        },
        {
            text: "Best Python & Data Science training in Kanpur, period. Priya ma'am’s teaching style is exceptional. She explains concepts with real datasets — not dry theory.",
            name: "Neha Singh",
            role: "Data Analyst at TCS • Batch 2023",
            initials: "NS"
        },
        {
            text: "After completing the Cybersecurity course, I passed CEH on my first attempt. Amit sir’s depth of knowledge is amazing and the course material is always updated.",
            name: "Rohit Gupta",
            role: "Security Analyst • Batch 2024",
            initials: "RG"
        }
    ];

    return (
        <section className="testimonials">
            <div className="testimonials-inner">

                <span className="tag">STUDENT REVIEWS</span>

                <h2 className="title">
                    What Our <span>Students Say</span>
                </h2>

                <p className="sub">
                    Real stories from students who transformed their careers with Lakshay IT Solution.
                </p>

                <div className="testimonials-grid">

                    {data.map((item, i) => (
                        <div className="testimonial-card" key={i}>

                            {/* ⭐ Stars */}
                            <div className="stars">★★★★★</div>

                            {/* Text */}
                            <p className="review-text">{item.text}</p>

                            {/* USER */}
                            <div className="user">
                                <div className="avatar">{item.initials}</div>

                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;