const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 text-cyan-400 uppercase tracking-[0.3em]">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold lg:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;