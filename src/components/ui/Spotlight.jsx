import { motion, useMotionValue, useSpring } from "framer-motion";

const Spotlight = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - 150);
    mouseY.set(e.clientY - rect.top - 150);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{
          x,
          y,
        }}
        className="
          pointer-events-none
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />
    </div>
  );
};

export default Spotlight;