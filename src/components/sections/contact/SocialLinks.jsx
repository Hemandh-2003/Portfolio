import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">

      <a
        href="https://github.com/Hemandh-2003"
        target="_blank"
        rel="noreferrer"
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          text-2xl
          text-white
          transition
          hover:border-blue-500
        "
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/hemandh-ts-06627a312/"
        target="_blank"
        rel="noreferrer"
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          text-2xl
          text-white
          transition
          hover:border-blue-500
        "
      >
        <FaLinkedin />
      </a>

    </div>
  );
};

export default SocialLinks;