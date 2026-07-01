import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import ProjectShowcase from "./ProjectShowcase";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Real Applications.
            <span className="text-blue-400">
              {" "}Real Impact.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Projects that demonstrate my ability to design,
            build and deploy production-ready full-stack
            applications.
          </p>
        </motion.div>

        <div className="mt-24 space-y-32">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;