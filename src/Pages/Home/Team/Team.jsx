import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const laodData = async () => {
      try {
        const response = await fetch("Team.json");
        response.ok ? console.log("Ok") : console.log("failed");
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.log(error);
      }
    };
    laodData();
  }, []);

  return (
    <div className="text-center mt-32">
      <div>
        <h2 className="text-xl my-5 text-red-600 font-bold">Team</h2>
        <h1 className="text-5xl my-5 font-bold">Meet Our Team</h1>
        <p className="w-1/2 my-5 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Team;
