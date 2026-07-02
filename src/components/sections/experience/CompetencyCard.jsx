import { motion } from "framer-motion";

const CompetencyCard = ({ competency }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/30
      "
    >
      <h4 className="text-xl font-bold text-white">
        {competency.title}
      </h4>

      <div className="mt-6 flex flex-wrap gap-3">
        {competency.skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-3
              py-2
              text-sm
              text-blue-300
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default CompetencyCard;