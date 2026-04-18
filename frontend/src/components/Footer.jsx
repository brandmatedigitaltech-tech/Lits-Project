import "./footer.css";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="logo" />
            <div>
              <h3>Lakshya IT Solution</h3>
            </div>
          </div>

          <p>
            Kanpur's premier IT training institute — shaping careers
            with practical, industry-aligned education since 2016.
          </p>

          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=100003988419400&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/lakshya_it_solutions?igsh=MTk4MXJ4aGI1aXhzOA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@lakshyaitsolutions?si=B4GJncX3Hzs_xmXk" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.me/917991344901" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/ankit-gupta-182132236" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">→ Home</Link></li>
            <li><Link to="/about">→ About Us</Link></li>
            <li><Link to="/courses">→ All Courses</Link></li>
            <li><Link to="/contact">→ Contact</Link></li>
          </ul>
        </div>

        {/* 🔥 TOP COURSES (FIXED WORKING) */}
        <div className="footer-col">
          <h4>TOP COURSES</h4>
          <ul>
            <li>
              <Link to="/courses?category=computer">
                → Computer Courses
              </Link>
            </li>
            <li>
              <Link to="/courses?category=programming">
                → Programming Courses
              </Link>
            </li>
            <li>
              <Link to="/courses?category=nielit">
                → NIELIT Courses
              </Link>
            </li>
            <li>
              <Link to="/courses?category=accounting">
                → Accounting Courses
              </Link>
            </li>
            <li>
              <Link to="/courses?category=data">
                → Data Analysis Courses
              </Link>
            </li>
            <li>
              <Link to="/courses?category=design">
                → Designing & Editing
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>CONTACT US</h4>

          <ul className="contact">
            <li>
              <a href="https://maps.app.goo.gl/g6cXFcy6wpVxvvax9" target="_blank" rel="noopener noreferrer">
                📍 Civil Lines, Kanpur
              </a>
            </li>

            <li>
              <a href="tel:+917991344901">
                📞 +91 7991344901
              </a>
            </li>

            <li>
              <a href="mailto:info@lakshyaitsolution.com">
                ✉ info@lakshyaitsolution.com
              </a>
            </li>

            <li>
              ⏰ Mon–Sat: 9:00 AM – 7:00 PM
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Lakshya IT Solution. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Refund Policy</span>
        </div>
      </div>

      <div className="footer-dev">
        Developed by <span>Brandmate Digital</span>
      </div>

    </footer>
  );
}

export default Footer;