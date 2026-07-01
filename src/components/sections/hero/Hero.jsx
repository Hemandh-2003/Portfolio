import HeroContent from "./HeroContent";
import ProfileCard from "./DeveloperCard";
import TrustedTech from "./TrustedTech";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <HeroContent />

          <ProfileCard />
        </div>
      </div>

      <TrustedTech />
    </section>
  );
};

export default Hero;