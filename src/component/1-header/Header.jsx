import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const closeMenu = () => setShowModal(false);

  return (
    <header className="site-header flex">
      <Link to="/" className="brand">
        <span className="brand-mark">MA</span>
        <div className="brand-copy">
          <strong>Majdleen Alyousef</strong>
          <span>UI/UX & Front-End Portfolio</span>
        </div>
      </Link>

      <nav>
        <ul className="flex">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="header-actions flex">
        <button onClick={toggleTheme} className="mode flex" aria-label="Toggle theme">
          {theme === "dark" ? <span className="icon-moon-o"></span> : <span className="icon-sun"></span>}
        </button>
        <Link className="header-cta" to="/contact">Let&apos;s Talk</Link>
        <button className="menu icon-menu flex" onClick={() => setShowModal(true)} aria-label="Open menu"></button>
      </div>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button className="icon-close" onClick={closeMenu} aria-label="Close menu" />
            </li>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
