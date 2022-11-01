import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ person }) => {
  const { title, expert, image } = person;

  return (
    <div className="card card-compact border mb-[50px]  w-96 bg-base-100 shadow-xl p-[20px]">
      <figure>
        <img
          className="w-[332px] bg-[#F3F3F3] h-[215px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center items-center flex-col">
          <h2 className="card-title font-bold mb-2">{title}</h2>
          <p className="text-lg text-orange-600  text-left font-semibold ">
            {expert}{" "}
          </p>
          <div className="flex mt-4">
            <FaFacebook className="w-[40px] mr-3 text-primary h-[40px]" />
            <FaTwitter className="w-[40px] mr-3 text-sky-400 h-[40px]" />
            <FaLinkedin className="w-[40px] mr-3 text-orange-600 h-[40px]" />
            <FaInstagram className="w-[40px] mr-3 text-blue-500 h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
