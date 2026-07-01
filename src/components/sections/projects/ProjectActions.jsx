import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectActions = ({ github, demo }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          px-6
          py-3
          transition
          hover:border-blue-500
        "
      >
        <FaGithub size={18} />
        GitHub
      </a>

      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-blue-600
          px-6
          py-3
          text-white
          transition
          hover:bg-blue-500
        "
      >
       <FiExternalLink size={18} />
        Live Demo
      </a>
    </div>
  );
};

export default ProjectActions;