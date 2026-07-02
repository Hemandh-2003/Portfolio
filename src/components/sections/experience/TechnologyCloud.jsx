import { experience } from "../../../data/experience";

const TechnologyCloud = () => {
  const technologies = [
    ...new Set(
      experience.competencies.flatMap((item) => item.skills)
    ),
  ];

  return (
    <>
      <h3 className="mb-8 text-3xl font-bold text-white">
        Technologies Practiced
      </h3>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-slate-300
              transition
              hover:border-blue-500/30
              hover:text-white
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

export default TechnologyCloud;