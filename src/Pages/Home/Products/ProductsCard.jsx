import React from "react";
import { FaStar } from "react-icons/fa";
const ProductsCard = ({ product }) => {
  const { price, title, img } = product;
  return (
    <div className="card card-compact border mb-[50px]  w-96 bg-base-100 shadow-xl p-[20px]">
      <figure>
        <img
          className="w-[332px] bg-[#F3F3F3] h-[215px]"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center items-center flex-col">
          <h1 className="flex text-xl my-2">
            <FaStar className="text-[#FF912C] " />
            <FaStar className="text-[#FF912C] " />
            <FaStar className="text-[#FF912C] " />
            <FaStar className="text-[#FF912C] " />
            <FaStar className="text-[#FF912C] " />
          </h1>
          <h2 className="card-title font-bold mb-2">{title}</h2>
          <p className="text-lg text-orange-600  text-left "> $ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
