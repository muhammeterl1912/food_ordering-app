import React from "react";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import Logo from "../UiComps/Logo";
const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto flex justify-between items-center h-full text-white">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-3">
            <li className="px-[5x] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5x] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5x] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5x] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center ">
          <a href="">
            <CiUser />
          </a>
          <a href="">
            <CiShoppingCart />
          </a>
          <a href="">
            <CiSearch />
          </a>
          <a href="">
            <button className="btn-primary ">Order Online</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
