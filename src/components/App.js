import React from "react";
import cardComponents from "../card-component";
import Card from "./Card";
import Attribution from "./Attribution.js";

function App() {

  return (
    <div className="app">

    <div className = "card">

    {cardComponents.map(component => {
      return ( <Card 
    key = {component.id}
    id = {component.id}
    brand = {component.brand}
    logo = {component.logo}
    desc = {component.desc}
    color = {component.color}
    /> )
    })}

    </div>
    
    <Attribution />
    
    </div>
  );
}

export default App;
