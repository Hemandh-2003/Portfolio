import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        space-y-6
      "
    >
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
      />

      <input
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
      />

      <input
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Message"
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
      />

      <button
        className="
          w-full
          rounded-xl
          bg-blue-600
          py-4
          font-semibold
          text-white
          transition
          hover:bg-blue-500
        "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;