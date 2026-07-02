import { Bot } from "lucide-react";

const AIButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-xl
        transition
        hover:scale-110
        hover:bg-blue-500
      "
    >
      <Bot size={28} />
    </button>
  );
};

export default AIButton;