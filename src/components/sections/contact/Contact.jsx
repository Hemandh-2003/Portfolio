import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something
            <span className="text-blue-400"> Amazing Together</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm currently open to MERN Stack Developer roles,
            freelance opportunities and AI-powered web projects.
            Let's create something impactful.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default Contact;