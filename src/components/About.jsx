import Image from "next/image";


const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm-h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/burger-sunum-yemekcom.jpg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="text-[40px]">We Are Feane</div>
          <p className="my-5 flex flex-col items-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`t look even slightly
            believable.lorem*ss
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;