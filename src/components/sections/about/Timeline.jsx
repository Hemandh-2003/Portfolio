import { motion } from "framer-motion";
import { timeline } from "../../../data/timeline";

const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="absolute left-3 top-0 h-full w-px bg-slate-700" />

      <div className="space-y-10">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-[#030712] bg-blue-500 shadow-lg shadow-blue-500/40" />

            <p className="text-sm font-semibold text-blue-400">
              {item.year}
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              {item.title}
            </h3>

            {item.description && (
              <p className="mt-2 text-slate-400">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;