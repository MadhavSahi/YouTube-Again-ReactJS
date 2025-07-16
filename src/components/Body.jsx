import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <>
      <div className="flex flex-row bg-green-600">
        <SideBar/>
        <MainContainer/>
      </div>
    </>
  );
};

export default Body;
