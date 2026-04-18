import "./about.css";

function About() {
    return (
        <section className="about">
            <div className="about-inner">

                {/* LEFT IMAGE */}
                <div className="about-left">
                    <div className="about-img-box">
                        <img src="/about.png" alt="about" />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="about-right">

                    <h2 className="about-title">
                        About <span>Lakshya IT Solutions</span>
                    </h2>

                    <p className="about-sub">
                        With <span>8+ years of excellence</span>, Lakshya IT Solutions has been transforming students into industry-ready professionals. We provide hands-on training, real-world projects, and expert mentorship.
                    </p>

                    {/* FEATURES */}
                    <div className="about-features">

                        <div className="feature">
                            <span>✔</span>
                            <p>Industry-Oriented Courses</p>
                        </div>

                        <div className="feature">
                            <span>✔</span>
                            <p>Experienced Trainers</p>
                        </div>

                        <div className="feature">
                            <span>✔</span>
                            <p>Live Projects & Practical Learning</p>
                        </div>

                        <div className="feature">
                            <span>✔</span>
                            <p>NIELIT Certified Courses</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;