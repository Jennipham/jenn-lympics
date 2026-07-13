import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">
            <Link
                to="/"
                className="footer-logo"
                >
          <img src={Logo} alt="Sports Day Logo" />
          </Link>

                <p>
                    Built for a day of fun, competition and memories!
                </p>

                <nav className="footer-nav">
                    <Link to="/">Home</Link>
                    <Link to="/agenda">Agenda</Link>
                    <Link to="/teams">Teams</Link>
                    <Link to="/faq">FAQ</Link>
                </nav>

                <p className="footer-copy">
                    © 2026 Jenn-Lympics • Made by Jennifer Pham
                </p>

            </div>

        </footer>
    );
}