import "./Hero.css";
import racing from "../../assets/racing.jpg";

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

          <button className="primary">
            View Agenda
          </button>

          <button className="secondary">
            The Teams
          </button>

        </div>

      </div>

      <div className="hero-curve" />

    </section>
  );
}