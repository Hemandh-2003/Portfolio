const TechStack = ({ technologies }) => {
  return (
    <div className="mt-8">
      <h4 className="mb-4 text-lg font-semibold text-white">
        Tech Stack
      </h4>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              text-blue-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;