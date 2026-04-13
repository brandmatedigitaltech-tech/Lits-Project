import { useEffect, useRef, useState } from "react";
import "./stats.css";

function Counter({ target }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!ref.current) return; // ✅ safety check

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current); // ✅ better cleanup
        };
    }, []);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const increment = target / 50;

        const interval = setInterval(() => {
            current += increment;

            if (current >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, 30);

        return () => clearInterval(interval);
    }, [start, target]);

    return <span ref={ref}>{count}</span>;
}

function Stats() {
    return (
        <section className="stats">
            <div className="stats-inner">

                <div className="stat-box">
                    <h2><Counter target={7000} />+</h2>
                    <p>Students Trained</p>
                </div>

                <div className="stat-box">
                    <h2><Counter target={1500} />+</h2>
                    <p>Placement</p>
                </div>

                <div className="stat-box">
                    <h2><Counter target={26} /></h2>
                    <p>Courses Available</p>
                </div>

                <div className="stat-box">
                    <h2><Counter target={25} />+</h2>
                    <p>Expert faculty</p>
                </div>

            </div>
        </section>
    );
}

export default Stats;