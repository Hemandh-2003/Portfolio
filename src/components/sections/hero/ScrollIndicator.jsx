import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="absolute bottom-18 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-3"
    >
      <span className="text-sm tracking-[0.em] uppercase text-slate-500">
        Scroll
      </span>

      <div className="flex h-12 w-7 justify-center rounded-full border border-slate-600">
        <motion.div
          animate={{
            y: [6, 20, 6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400"
        />
      </div>
    </motion.a>
  );
};

export default ScrollIndicator;