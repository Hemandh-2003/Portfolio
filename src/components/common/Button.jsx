const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-xl hover:shadow-blue-500/20",

    outline:
      "border border-slate-700 text-white hover:border-blue-500 hover:bg-blue-500/10",

    ghost:
      "text-slate-300 hover:bg-white/5",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
        active:scale-[0.98]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;