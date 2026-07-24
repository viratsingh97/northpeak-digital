import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Empowering Businesses with
          <span> Modern Digital Solutions</span>
        </h1>

        <p>
          NorthPeak Digital helps startups grow through
          innovative web development, AI solutions.
        </p>

        <div className="hero-buttons">
          <button type="button" className="primary-btn">
            Get Started <FaArrowRight aria-hidden="true" />
          </button>

          <button type="button" className="secondary-btn">
            Explore Services
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
          alt="Team collaborating on web development and digital solutions"
        />
      </div>
    </section>
  );
}

export default Hero;