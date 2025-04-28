import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo_Electronics} className="w-36" alt="Logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 text-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 text-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 text-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 text-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <Search className="cursor-pointer text-gray-700" />

        <div className="group relative ">
          <CircleUserRound className="cursor-pointer text-gray-700 " />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-3">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative text-gray-700">
          <ShoppingCart />
          <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center leading-5 bg-gray-700 text-white aspect-square rounded-full text-xs">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="w-[18px] cursor-pointer sm:hidden"
          alt="Menu"
          onClick={() => setIsVisible(true)}
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 cursor-pointer">
          <div
            className="flex items-center gap-4 p-3"
            onClick={() => setIsVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className="h-4 rotate-180 "
            />
            <p className="text-gray-600 ">Back </p>
          </div>
          <NavLink
            to="/"
            className="border-y py-2 pl-6 hover:bg-gray-100"
            onClick={() => setIsVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="border-b py-2 pl-6 hover:bg-gray-100"
            onClick={() => setIsVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className="border-b py-2 pl-6 hover:bg-gray-100"
            onClick={() => setIsVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="border-b py-2 pl-6 hover:bg-gray-100"
            onClick={() => setIsVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
