import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineMapPin,
} from "react-icons/hi2";

const DeveloperCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Status */}
      <div className="mb-8 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-400"></span>

        <p className="text-sm text-emerald-400">
          Open to Work
        </p>
      </div>

      {/* Name */}
      <h2 className="text-3xl font-bold">
        Hemandh
      </h2>

      <p className="mt-2 text-slate-400">
        MERN Stack Developer
      </p>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Featured Projects */}
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 font-semibold">
          <HiOutlineRocketLaunch />

          Featured Projects
        </h3>

        <p>✔ SecureTrade</p>

        <p>✔ TripGen AI</p>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Stack */}

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 font-semibold">
          <HiOutlineCodeBracket />

          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JavaScript",
          ].map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Footer */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiOutlineMapPin />

          <span>India</span>
        </div>

        <HiOutlineCpuChip className="text-2xl text-blue-400" />
      </div>
    </motion.div>
  );
};

export default DeveloperCard;