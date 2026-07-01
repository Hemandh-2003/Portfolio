import { motion } from "framer-motion";

const ProjectImage = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(59,130,246,0.15)]
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
      />
    </motion.div>
  );
};

export default ProjectImage;