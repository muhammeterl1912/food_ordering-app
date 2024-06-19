import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import { FaRegWindowClose } from "react-icons/fa";

const Search = ({ setSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 grid place-content-center bg-black bg-opacity-60">
      <OutsideClickHandler onOutsideClick={() => setSearchModal(false)}>
        <div className="relative z-50 bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[600px]">
          <button
            onClick={() => setSearchModal(false)}
            className="absolute top-4 right-4 text-secondary hover:text-primary transition-all"
          >
            <FaRegWindowClose size={24} />
          </button>
          <h2 className="text-2xl mb-6 font-bold">Search</h2>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 p-3 rounded mb-6"
          />
          <ul>
            <li className="flex items-center justify-between p-2 hover:bg-gray-100 transition-all rounded">
              <div className="relative w-16 h-16 mr-4">
                <Image
                  src="/path/to/image.jpg"
                  alt="Pizza"
                  layout="fill"
                  className="object-cover rounded"
                />
              </div>
              <span className="flex-grow text-lg">Pizza</span>
              <span className="text-lg font-semibold">$10</span>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
