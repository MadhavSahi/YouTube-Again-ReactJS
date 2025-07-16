import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-red-400">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;

// Header
// Body
// - Sidebar
//  -- Side items
// - Main Container
//  -- Categories
//  -- Video Container
//    --- Video Card
