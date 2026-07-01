const Logo = () => {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 font-bold text-white shadow-lg shadow-blue-500/30">
        H
      </div>

      <div>
        <h2 className="text-xl font-bold tracking-wide">
          Hemandh TS
        </h2>

        <p className="text-xs text-slate-400">
          MERN Stack Developer
        </p>
      </div>
    </a>
  );
};

export default Logo;