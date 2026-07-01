import { motion } from "framer-motion";
import { profile } from "../../../data/profile";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col"
    >
      {/* Badge */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Available for Freelance & Full-Time Opportunities
        </span>
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
        Building Modern
        <br />

        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
          AI-Powered
        </span>

        <br />

        Web Applications
      </h1>

      {/* Intro */}
      <div className="mt-8">
        <p className="text-lg text-slate-300">
          Hi, I'm
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          {profile.name}
        </h2>

        <p className="mt-2 text-xl text-blue-400">
          {profile.role}
        </p>
      </div>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        {profile.description}
      </p>

      {/* CTA */}
      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Social */}
      <div className="mt-10">
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default HeroContent;