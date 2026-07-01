import { HiArrowRight } from "react-icons/hi2";
import Button from "../../common/Button";

const HeroButtons = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button
        onClick={() => scrollToSection("projects")}
        className="group"
      >
        <span className="flex items-center gap-2">
          Explore Projects

          <HiArrowRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </span>
      </Button>

      <Button
        variant="outline"
        onClick={() => scrollToSection("contact")}
      >
        Let's Build Together
      </Button>
    </div>
  );
};

export default HeroButtons;