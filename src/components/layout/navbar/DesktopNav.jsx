import { navigation } from "../../../data/navigation";

const DesktopNav = () => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={item.path}
            className="
              relative
              text-slate-300
              transition
              duration-300
              hover:text-white
              after:absolute
              after:-bottom-1
              after:left-0
              after:h-[2px]
              after:w-0
              after:bg-cyan-400
              after:transition-all
              hover:after:w-full
            "
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;