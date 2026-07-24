import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "$299",
    features: [
      "Responsive Website",
      "Basic SEO",
      "Email Support",
      "1 Month Maintenance",
    ],
  },
  {
    title: "Professional",
    price: "$699",
    featured: true,
    features: [
      "Everything in Starter",
      "Custom UI/UX",
      "Advanced SEO",
      "3 Months Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Cloud Deployment",
      "AI Integration",
      "Dedicated Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Pricing Plans</h2>
      <p className="subtitle">
        Choose the plan that best fits your business needs.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
          >
            <h3>{plan.title}</h3>

            <h1>{plan.price}</h1>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck /> {feature}
                </li>
              ))}
            </ul>

            <button>Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;