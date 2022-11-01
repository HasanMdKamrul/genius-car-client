import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laodData = async () => {
      try {
        const response = await fetch("products.json");
        response.ok ? console.log("Ok") : console.log("failed");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    laodData();
  }, []);

  return (
    <div className="text-center mt-32">
      <div>
        <h2 className="text-xl my-5 text-red-600 font-bold">
          Popular Products
        </h2>
        <h1 className="text-5xl my-5 font-bold">Browse Our Products</h1>
        <p className="w-1/2 my-5 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center my-12">
        <button className="btn btn-outline btn-success">More Products</button>
      </div>
    </div>
  );
};

export default Products;
