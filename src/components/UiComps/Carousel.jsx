import React from "react";
import Burger from "../../../public/images/burger-sunum-yemekcom.jpg";
import Image from "next/image";
const Carousel = () => {
  return (
    <div className="h-screen w-full container mx-auto -mt-[86px] ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image src={Burger} alt="burger"layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
        <div addClass="text-6xl">F-F Restaurant</div>
        <p className="text-sm sm:w-2/5 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam
          veniam, fugit maiores a qui rem quos ad provident architecto quibusdam
          sed nesciunt corrupti sunt, ipsa nobis, fuga dolorum earum! Cupiditate
          assumenda ea asperiores voluptatem rerum veniam minima expedita
          temporibus magni, amet aperiam vel perferendis quibusdam alias, culpa
          dolore voluptates natus quo modi eligendi! Asperiores ab illo ipsum
          totam ipsa?
        </p>
        <button className="btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
