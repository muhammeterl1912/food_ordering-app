import React from "react";
import Input from "./form/Input";

const Reservation = () => {
    const inputs = [
        {
          id: 1,
          name: "fullName",
          type: "text",
          placeholder: "Your Full Name",
        },
        {
          id: 2,
          name: "phoneNumber",
          type: "number",
          placeholder: "Your Phone Number",
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
        },
        {
          id: 4,
          name: "persons",
          type: "number",
          placeholder: "How Many Persons?",
        },
        {
          id: 5,
          name: "persons",
          type: "datetime-local",
          placeholder: "How Many Persons?",
        },
      ];
  return (
    <div className="container mx-auto py-12">
      <div className="text-[40px] mb-10">Book A Table</div>
      <div className="flex justify-between flex-wrap gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
          {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">BOOK NOW</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.6800424330195!2d27.1398515!3d38.47194739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd788f42544e9%3A0x71be613556798ee6!2zNzA0Mi4gU2suLCBCYXlyYWtsxLEvxLB6bWlyLCBUw7xya2l5ZQ!5e0!3m2!1str!2spl!4v1719274849059!5m2!1str!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
