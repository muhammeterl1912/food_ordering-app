"use client";

import React, { useState } from "react";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";
import Logo from "../UiComps/Logo";
import Search from "../UiComps/Search";
import Link from "next/link";

const Header = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  const toggleMenuModal = () => {
    setMenuModal((prev) => !prev);
  };

  return (
    <div className="h-[5.4rem] bg-secondary relative z-50">
      <div className="container mx-auto flex justify-between items-center h-full text-white">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:flex sm:static absolute top-0 left-0 grid place-content-center sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black ${
            menuModal ? "block bg-white sm:bg-transparent" : "hidden"
          } sm:block`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
          {menuModal && (
            <button
              className="hover:text-primary transition-all absolute top-4 right-4 z-50 text-xl sm:hidden inline-block"
              onClick={() => setMenuModal(false)}
            >
              <FaRegWindowClose />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/login">
            <CiUser className="hover:text-primary transition" />
          </Link>
          <Link href="/card">
            <CiShoppingCart className="hover:text-primary transition" />
          </Link>
          <button onClick={() => setSearchModal(true)}>
            <CiSearch className="hover:text-primary transition" />
          </button>
          <Link href="" className="hidden md:inline-block">
            <button className="btn-primary">Order Online</button>
          </Link>
          <button
            className="hover:text-primary transition text-xl sm:hidden inline-block"
            onClick={toggleMenuModal}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
      {searchModal && <Search setSearchModal={setSearchModal} />}
    </div>
  );
};

export default Header;
