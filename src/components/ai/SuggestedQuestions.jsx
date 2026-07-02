const questions = [
  "Tell me about SecureTrade",
  "Explain your MERN experience",
  "Tell me about Brototype",
  "What technologies do you know?",
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="space-y-3">

      <p className="text-sm text-slate-400">
        Suggested Questions
      </p>

      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-3
            text-left
            text-sm
            text-slate-300
            transition
            hover:border-blue-500
          "
        >
          {q}
        </button>
      ))}

    </div>
  );
};

export default SuggestedQuestions;