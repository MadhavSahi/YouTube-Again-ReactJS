import React from "react";
import VideoContainer from "./VideoContainer";
import Categories from "./Categories";

const MainContainer = () => {
  return (
    <>
      <div className="flex flex-col">
        <Categories/>
        <VideoContainer/>
      </div>
    </>
  );
};

export default MainContainer;
