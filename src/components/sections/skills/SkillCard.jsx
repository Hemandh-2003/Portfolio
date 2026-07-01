import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const SkillCard = ({ category, index }) => {
  const CategoryIcon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-blue-500/10 p-4">
          <CategoryIcon className="text-3xl text-blue-400" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            {category.title}
          </h3>

          <p className="text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;