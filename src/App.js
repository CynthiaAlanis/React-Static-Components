import React from "react";
import SideBar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";

import "./index.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <SideBar />
        <Reviews />
        <Rating />
        <Analysis />
        <Visitors />
      </div>
    </>
  );
}

export default Dashboard;
