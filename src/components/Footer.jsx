import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>NorthPeak Digital</h2>
          <p>
            We build modern websites, AI-powered solutions.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        ©Copyright 2026 NorthPeak Digital 
      </p>
    </footer>
  );
}

export default Footer;