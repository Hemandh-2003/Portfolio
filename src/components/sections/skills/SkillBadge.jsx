const SkillBadge = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/30
        hover:bg-blue-500/10
      "
    >
      <Icon className="text-blue-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />

      <span className="text-sm font-medium text-slate-200">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillBadge;