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
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && <small>{errors.name}</small>}

        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && <small>{errors.email}</small>}

        <textarea
          rows="6"
          placeholder="Your Message"
          name="message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        {errors.message && <small>{errors.message}</small>}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;