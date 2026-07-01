import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import Button from "../../common/Button";

const Navbar = () => {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/20
        backdrop-blur-xl
      "
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4">
          <Button className="hidden lg:block">
            Hire Me
          </Button>

          <MobileMenuButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;