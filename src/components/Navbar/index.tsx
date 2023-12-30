import { useState } from "react";
import { navLinks } from "../../constants";
import { close, menu } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 navbar justify-between items-center">
      <ul className="w-1/2 list-none sm:flex hidden items-center justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-menu font-normal cursor-pointer text-[24px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain z-10 ${
            toggle ? "z-10" : "z-0"
          }`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } w-full p-2 absolute top-0 right-0 min-w-[140px] bg-white sidebar box-shadow`}
        >
          <ul className="list-none flex flex-col items-center justify-end flex-1 pt-20">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-menu font-normal p-2 bg-white text-center cursor-pointe text-[20px]`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
