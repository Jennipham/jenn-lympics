import "./Hero.css";
import racing from "../../assets/racing.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <img
        className="hero-image"
        src={racing}
        alt="Sports day"
      />

      <div className="hero-overlay" />

      <div className="hero-content">

        <span className="hero-tag">
          23RD AUGUST 2026
        </span>

        <h1>
          Jenn-Lympics <br />
         <span>2026</span>
        </h1>
       

        <p>
          A day of fun and games!
        </p>

        <div className="hero-buttons">
            <Link to="/agenda" className="primary">
            View Agenda
            </Link>
            
            <Link to="/teams" className="secondary">
            The Teams
            </Link>
        </div>

      </div>

      <div className="hero-curve" />

    </section>
  );
}