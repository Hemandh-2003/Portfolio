const Badge = ({ children }) => {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-500/40
        bg-cyan-500/10
        px-4
        py-1
        text-sm
        text-cyan-300
      "
    >
      {children}
    </span>
  );
};

export default Badge;