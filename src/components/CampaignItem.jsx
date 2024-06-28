import Image from "next/image";
import Burger from "../../public/images/burger-sunum-yemekcom.jpg";
import { CiShoppingCart } from "react-icons/ci";
const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src={Burger}
          alt="Burger"
          layout="fill"
          className="hover:scale-105 transition-all"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <div className="text-2xl">Tasty Friday</div>
        <div className="font-dancing my-1">
          <span className="text-[40px]">25%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <CiShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default CampaignItem;
