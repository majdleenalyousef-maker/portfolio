
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("currentMode") ?? "light"
  );
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">MA</span>
          <span className="brand-copy">
            <strong>Majdleen Alyousef</strong>
            <span>UI/UX & Front-End Portfolio</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span
              className={
                theme === "dark" ? "icon-moon-o" : "icon-sun"
              }
            />
          </button>

          <Link to="/contact" className="header-cta">
            Let's Talk
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={menuOpen ? "icon-close" : "icon-menu"} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {links.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="mobile-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's Work Together
          </Link>
        </nav>
      )}
    </header>
  );
}
