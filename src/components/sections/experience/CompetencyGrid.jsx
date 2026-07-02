import { experience } from "../../../data/experience";
import CompetencyCard from "./CompetencyCard";

const CompetencyGrid = () => {
  return (
    <>
      <h3 className="mb-8 text-3xl font-bold text-white">
        Core Competencies
      </h3>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {experience.competencies.map((item) => (
          <CompetencyCard
            key={item.title}
            competency={item}
          />
        ))}
      </div>
    </>
  );
};

export default CompetencyGrid;