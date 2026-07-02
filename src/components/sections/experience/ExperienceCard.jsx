import { motion } from "framer-motion";
import { experience } from "../../../data/experience";
import { Briefcase, Calendar, Clock } from "lucide-react";

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

        <div>
          <p className="text-blue-400 text-sm font-semibold">
            {experience.company}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {experience.role}
          </h3>

          <p className="mt-6 leading-8 text-slate-400">
            {experience.description}
          </p>
        </div>

        <div className="space-y-4 lg:text-right">

          <div className="flex items-center gap-2 lg:justify-end">
            <Calendar size={18} className="text-blue-400" />
            <span className="text-slate-300">
              {experience.period}
            </span>
          </div>

          <div className="flex items-center gap-2 lg:justify-end">
            <Clock size={18} className="text-blue-400" />
            <span className="text-slate-300">
              {experience.duration}
            </span>
          </div>

          <div className="flex items-center gap-2 lg:justify-end">
            <Briefcase size={18} className="text-blue-400" />
            <span className="text-green-400">
              Completed
            </span>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default ExperienceCard;