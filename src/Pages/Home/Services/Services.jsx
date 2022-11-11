import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState("");

  const searchRef = useRef();

  useEffect(() => {
    const laodData = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/services?order=${
            isAsc ? "asc" : "dsc"
          }&search=${search}`
        );
        response.ok ? console.log("Ok") : console.log("failed");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    laodData();
  }, [isAsc, search]);

  const searchHandle = () => {
    const searchText = searchRef.current.value;

    setSearch(searchText);
  };

  return (
    <div className="text-center mt-32">
      <div>
        <h2 className="text-xl my-5 text-red-600 font-bold">Service</h2>
        <h1 className="text-5xl my-5 font-bold">Our Service Area</h1>
        <p className="w-1/2 my-5 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <input
          ref={searchRef}
          type="text"
          className="input"
          placeholder="Search..."
        />
        <button onClick={searchHandle} className="btn btn-ghost">
          Search
        </button>
        <button className="btn btn-ghost" onClick={() => setIsAsc(!isAsc)}>
          {isAsc ? "DSC" : "ASC"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
