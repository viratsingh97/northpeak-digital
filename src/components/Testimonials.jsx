import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    review:
      "NorthPeak Digital transformed our online presence. Their team delivered beyond our expectations.",
  },
  {
    name: "David Smith",
    role: "Founder, Pixel Labs",
    review:
      "Professional, reliable, and highly skilled. The website they built significantly improved our customer engagement.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Director",
    review:
      "Excellent communication and outstanding design quality. We would definitely work with them again.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <p className="subtitle">
        Trusted by startups and businesses worldwide.
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="stars">
              ★★★★★
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="client">
              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;