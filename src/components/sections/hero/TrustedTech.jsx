import { technologies } from "../../../data/technologies";

const TrustedTech = () => {
  return (
    <div className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl overflow-hidden py-6">
        <div className="flex min-w-max animate-marquee gap-10">
          {[...technologies, ...technologies].map((tech, index) => (
            <span
              key={index}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedTech;