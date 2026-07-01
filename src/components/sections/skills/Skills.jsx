import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillCategories } from "../../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Technical Expertise
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Technologies I Use To Build
            <span className="text-blue-400">
              {" "}Modern Applications
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My expertise spans frontend, backend, databases,
            AI integration, and modern development tools used
            to create scalable production-ready applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;