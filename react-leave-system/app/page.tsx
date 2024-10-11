import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import SideBar from "../Components/SideBar";
import { HomeInfo } from "../Components/HomeInfo";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-3">
        Welcome to STFC
      </h1>
      <div className="participantContainer">
        <HomeInfo/>
      </div>
    </div>
  );
}
