import { Bot } from "lucide-react";

const AIHeader = () => {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 p-5">

      <div className="rounded-full bg-blue-600 p-2">
        <Bot size={20} className="text-white" />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          Hemandh AI
        </h3>

        <p className="text-sm text-slate-400">
          Portfolio Assistant
        </p>
      </div>

    </div>
  );
};

export default AIHeader;