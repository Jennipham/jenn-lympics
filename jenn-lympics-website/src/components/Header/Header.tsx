import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Logo from "../../assets/Logo.png";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () =>
      document.removeEventListener("mousedown", clickOutside);
  }, []);

  // Close with Escape
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", escape);

    return () =>
      document.removeEventListener("keydown", escape);
  }, []);

  return (
    <header className={`header ${scrolled ? "shadow" : ""}`}>
      <div className="header-container">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img src={Logo} alt="Sports Day Logo" />
        </Link>

        <button
          className="menu-button"
          aria-label="Toggle navigation"

          aria-expanded={menuOpen}
          aria-controls="primary-navigation"

          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>

        <nav
          ref={navRef}
          id="primary-navigation"
          className={`nav ${menuOpen ? "open" : ""}`}
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/agenda" onClick={closeMenu}>
            Agenda
          </NavLink>

          <NavLink to="/teams" onClick={closeMenu}>
            Teams
          </NavLink>

          <NavLink to="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>
        </nav>

      </div>
    </header>
  );
}