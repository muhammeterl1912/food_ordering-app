import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 flex-wrap ">
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image
          src="/images/burger-sunum-yemekcom.jpg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <div className="text-6xl">Delicious Pizza</div>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image
                src="/images/burger-sunum-yemekcom.jpg"
                alt=""
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image
                src="/images/burger-sunum-yemekcom.jpg"
                alt=""
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image
                src="/images/burger-sunum-yemekcom.jpg"
                alt=""
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">ketcap</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Mayones</span>
          </label>
        </div>
        <button className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
