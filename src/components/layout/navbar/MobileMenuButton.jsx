import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MobileMenuButton = () => {
  return (
    <button
      className="rounded-lg p-2 text-3xl lg:hidden"
    >
      <HiOutlineMenuAlt3 />
    </button>
  );
};

export default MobileMenuButton;