import React from "react";
import "./App.css";
import Header from "./Header";
import SwipedButtons from "./SwipedButtons";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* cards */}
      <TinderCards />
      {/* swipe buttons */}
      <SwipedButtons />
    </div>
  );
}

export default App;
