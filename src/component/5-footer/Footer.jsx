import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer flex">
      <div>
        <strong>Majdleen Alyousef</strong>
        <p>UI/UX Designer & Front-End Developer</p>
      </div>

      <ul className="flex">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <span>© 2026 All rights reserved.</span>
    </footer>
  );
}
