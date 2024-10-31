import React from "react";
import { HomeInfo } from "../../components/HomeInfo";

export default function Home() {
  
  return (
    <div>
      <h1 className="text-center mt-3 ">
        Welcome to STFC
      </h1>
      <div className="participantContainer">
        <HomeInfo/>
      </div>
    </div>
  );
}
