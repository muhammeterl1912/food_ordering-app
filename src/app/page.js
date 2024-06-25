import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Reservation from "@/components/Resarvation";
import Carousel from "@/components/UiComps/Carousel";
import MenuWrapper from "@/components/products/MenuWrapper";


export default function Home() {
  return (
    <main >
    <Carousel/>
    <Campaigns/>
    <MenuWrapper/>
    <About/>
    <Reservation/>
    </main>
  );
}

