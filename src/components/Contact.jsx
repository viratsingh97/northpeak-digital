import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message Sent Successfully!");
      setErrors({});
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Let's Work Together</h2>

      <p className="subtitle">
        Have a project in mind? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />

        {errors.name && (
          <small id="name-error" aria-live="polite">
            {errors.name}
          </small>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />

        {errors.email && (
          <small id="email-error" aria-live="polite">
            {errors.email}
          </small>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />

        {errors.message && (
          <small id="message-error" aria-live="polite">
            {errors.message}
          </small>
        )}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;