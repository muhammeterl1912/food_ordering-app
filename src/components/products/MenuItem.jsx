import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <div className="relative w-36 h-36 hover:scale-110 transition-all">
          <Image
            src="/images/burger-sunum-yemekcom.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold">Delicious Burger</h4>
        <p className="text-[15px]">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span>$25</span>
          <button className="btn-primary w-10 h-10 rounded-full p-0 grid place-content-center">
            <CiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
