import { CheckCircle2 } from "lucide-react";

const FeatureList = ({ features }) => {
  return (
    <div className="mt-8">
      <h4 className="mb-4 text-lg font-semibold text-white">
        Key Features
      </h4>

      <div className="grid gap-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-blue-400"
            />

            <span className="text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;