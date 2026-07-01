import { about } from "../../../data/about";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      <p className="text-lg leading-8 text-slate-300">
        {about.intro}
      </p>

      <p className="leading-8 text-slate-400">
        {about.description}
      </p>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white">
          Current Focus
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {about.focus}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutContent;