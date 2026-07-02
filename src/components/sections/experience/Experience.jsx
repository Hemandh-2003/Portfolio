import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import CompetencyGrid from "./CompetencyGrid";
import TechnologyCloud from "./TechnologyCloud";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Professional Experience
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Learning Through
            <span className="text-blue-400"> Real Development</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Two years of intensive training at Brototype, building
            production-ready MERN applications and strengthening
            backend engineering, AI integration, and problem-solving skills.
          </p>
        </motion.div>

        {/* Experience Card */}
        <div className="mt-20">
          <ExperienceCard />
        </div>

        {/* Competencies */}
        <div className="mt-20">
          <CompetencyGrid />
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <TechnologyCloud />
        </div>

      </div>
    </section>
  );
};

export default Experience;