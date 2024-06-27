import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Customers from "@/components/customers/Customers";
import Reservation from "@/components/Resarvation";
import Carousel from "@/components/UiComps/Carousel";
import MenuWrapper from "@/components/products/MenuWrapper";

export default function Home() {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </>
  );
}
