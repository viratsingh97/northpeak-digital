import "./Services.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRobot,
  FaSearch,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Modern, fast, and responsive websites tailored to your business."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Cross-platform Android and iOS applications with seamless performance."
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful and user-friendly interfaces that enhance customer experience."
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    desc: "AI-powered automation and smart solutions for modern businesses."
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve search rankings and drive more organic traffic."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    desc: "Secure cloud infrastructure and scalable deployment solutions."
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p className="subtitle">
        We deliver innovative digital solutions that help businesses grow.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
<p>{service.desc}</p>

<a href="#" className="learn-more">
  Learn More →
</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;