import React from "react";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto my-20">
      <div addClass="text-[40px] text-center">What Says Our Customers About Us</div>
      <div className="flex gap-x-10">
        <CustomerItem imgSrc="/images/burger-sunum-yemekcom.jpg"/>
        <CustomerItem imgSrc= "/images/burger-sunum-yemekcom.jpg" />
      </div>
    </div>
  );
};

export default Customers;