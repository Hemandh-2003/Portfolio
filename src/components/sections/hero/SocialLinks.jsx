import { socials } from "../../../data/socials";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-slate-800
              bg-slate-900/50
              text-slate-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-white
            "
          >
            <Icon
              className="
                text-xl
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;