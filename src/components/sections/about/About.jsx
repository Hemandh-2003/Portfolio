import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import Timeline from "./Timeline";
import Stats from "./Stats";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#030712]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Building Secure, Scalable &
            <span className="text-blue-400">
              {" "}AI-Powered{" "}
            </span>
            Digital Products
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Passionate about creating modern applications
            that combine beautiful user experiences,
            scalable backend systems,
            and AI integration.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          <AboutContent />

          <Timeline />

        </div>

        <Stats />

      </div>
    </section>
  );
};

export default About;