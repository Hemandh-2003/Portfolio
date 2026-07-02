import { motion } from "framer-motion";

const ContactCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition
        hover:border-blue-500/30
      "
    >
      <h3 className="text-lg font-semibold text-blue-400">
        {title}
      </h3>

      <p className="mt-2 text-slate-300">
        {value}
      </p>
    </motion.div>
  );
};

export default ContactCard;