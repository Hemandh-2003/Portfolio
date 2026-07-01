import ProjectImage from "./ProjectImage";
import FeatureList from "./FeatureList";
import TechStack from "./TechStack";
import ProjectActions from "./ProjectActions";

const ProjectShowcase = ({ project, reverse }) => {
  return (
    <div
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ProjectImage project={project} />

      <div>
        {project.featured && (
          <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
            ⭐ Flagship Project
          </span>
        )}

        <p className="mt-4 text-blue-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-4xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-300">
          {project.overview}
        </p>

        <FeatureList features={project.features} />

        <TechStack technologies={project.technologies} />

        <ProjectActions
          github={project.github}
          demo={project.demo}
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;