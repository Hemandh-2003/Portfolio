import { motion } from "framer-motion";
import { stats } from "../../../data/stats";

const Stats = () => {
  return (
    <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -8,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all"
        >
          <h3 className="text-4xl font-bold text-blue-400">
            {stat.value}
          </h3>

          <p className="mt-3 text-slate-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;