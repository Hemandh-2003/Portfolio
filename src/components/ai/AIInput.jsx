const AIInput = ({
  value,
  onChange,
  onSend,
}) => {
  return (
    <div className="flex gap-3 border-t border-white/10 p-4">

      <input
        value={value}
        onChange={onChange}
        placeholder="Ask me anything..."
        className="
          flex-1
          rounded-xl
          bg-slate-800
          p-3
          text-white
          outline-none
        "
      />

      <button
        onClick={onSend}
        className="
          rounded-xl
          bg-blue-600
          px-5
          text-white
        "
      >
        Send
      </button>

    </div>
  );
};

export default AIInput;