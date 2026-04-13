import "./features.css";

function Features() {
    const data = [
        {
            icon: "fas fa-chalkboard-teacher",
            title: "Expert Industry Trainers",
            desc: "Learn from trainers with years of real-world project experience, not just textbook knowledge."
        },
        {
            icon: "fas fa-laptop",
            title: "Hands-On Project Work",
            desc: "Every course includes live industry projects that strengthen your portfolio and skills."
        },
        {
            icon: "fas fa-certificate",
            title: "Recognized Certification",
            desc: "Our certificates are trusted by top employers across India and internationally."
        },
        {
            icon: "fas fa-briefcase",
            title: "Placement Assistance",
            desc: "Dedicated career support including mock interviews, resume reviews, and job referrals."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Affordable Fees",
            desc: "Premium quality education at prices accessible to everyone — plus EMI options available."
        },
        {
            icon: "fas fa-headset",
            title: "24/7 Doubt Support",
            desc: "Never get stuck — get query resolution anytime via WhatsApp, chat, and office hours."
        }
    ];

    return (
        <section className="features">
            <div className="features-inner">

                <span className="tag">WHY LAKSHYA IT</span>

                <h2 className="features-title">
                    What Makes Us <span>Different</span>
                </h2>

                <p className="features-sub">
                    We go beyond just teaching — we build careers, confidence, and futures.
                </p>

                <div className="features-grid">

                    {data.map((item, i) => (
                        <div className="feature-card" key={i}>
                            
                            {/* ICON */}
                            <div className="icon-box">
                                <i className={item.icon}></i>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Features;