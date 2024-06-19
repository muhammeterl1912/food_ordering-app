"use client"
import React, { useState } from "react";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import Logo from "../UiComps/Logo";
import Search from "../UiComps/Search";
const Header = () => {

  const [searchModal,setSearchModal]  =useState(false)
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
            <CiUser className="hover:text-primary transition-all" />
          </a>
          <a href="">
            <CiShoppingCart className="hover:text-primary transition-all"/>
          </a>
          <a href="#">
          <button onClick={()=>setSearchModal(true)}><CiSearch className="hover:text-primary transition-all"/></button>   
          </a>
          <a href="">
            <button className="btn-primary ">Order Online</button>
          </a>
        </div>
      </div>
      {searchModal && <Search setSearchModal={setSearchModal}/>}
    </div>
  );
};

export default Header;
