import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();
    const navigate = useNavigate();

    // ✅ GET USER FROM LOCAL STORAGE
    const user = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem("role");

    // ✅ OUTSIDE CLICK CLOSE
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // ✅ LOGOUT FUNCTION
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="nav-inner">

                {/* LOGO */}
                <Link to="/" className="nav-logo">
                    <img src="/logo.png" alt="logo" className="logo-img" />
                </Link>

                {/* DESKTOP LINKS */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/approval">Approval</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    <li><Link to="/account">Account</Link></li>
                </ul>

                {/* RIGHT SIDE */}
                <div className="nav-right">

                    {/* ✅ IF NOT LOGGED IN */}
                    {!user ? (
                        <button
                            className="nav-login"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    ) : (
                        <>
                            {/* ✅ USER INFO */}
                            <span className="nav-user">
                                {role === "admin" ? "Admin" : user.email}
                            </span>

                            {/* ✅ LOGOUT */}
                            <button
                                className="nav-login"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    )}

                    {/* ENROLL BUTTON */}
                    <button
                        className="nav-enroll"
                        onClick={() => navigate("/courses")}
                    >
                        Enroll Now →
                    </button>

                    {/* HAMBURGER */}
                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                ref={menuRef}
                className={`mobile-menu ${menuOpen ? "open" : ""}`}
            >
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
                <Link to="/approval" onClick={() => setMenuOpen(false)}>Approval</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

                {/* ✅ MOBILE LOGIN / LOGOUT */}
                {!user ? (
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                        Login
                    </Link>
                ) : (
                    <button
                        className="nav-login"
                        onClick={() => {
                            handleLogout();
                            setMenuOpen(false);
                        }}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;