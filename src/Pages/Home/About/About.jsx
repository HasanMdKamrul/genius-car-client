import React from "react";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            alt=""
            src={person}
            className=" rounded-lg shadow-2xl w-[460px] h-[473] "
          />
          <img
            alt=""
            src={parts}
            className=" border-4 top-44 h-[332px] absolute right-0 rounded-lg shadow-2xl w-[327px]"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg text-orange-600 font-bold">About us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br />& of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-red-600">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
