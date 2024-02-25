import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
<<<<<<< HEAD
// import ReactDatamaps from "react-india-states-map";
=======
import ReactDatamaps from "react-india-states-map";
>>>>>>> 01544c9bee66044bb8448a98f956ff53c0a5581e
import data from "./data.json";

function App() {
  const [stateData, setStateData] = useState({
    code: "",
    name: "",
    value: "",
    content: "",
    area:""
  });

  function onLocationClick(event) {
    const clickedState = event.target.getAttribute("name");
    const newStateData = { ...stateData };

    newStateData.code = event.target.id;
    newStateData.name = clickedState;

    // Access the data for the clicked state from the JSON file
    if (data[clickedState]) {
      newStateData.value = data[clickedState].value;
      newStateData.area= data[clickedState].content.area;
      newStateData.content = data[clickedState].content.txt;
    } else {
      // Reset the values if the clicked state is not in the JSON file
      newStateData.value = "";
      newStateData.content = "";
      newStateData.area = "";
    }

    setStateData(newStateData);
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="m-4 flex-1">
          <p>Value: {stateData.value}</p>
          <p>Area: {stateData.area}</p>
          <p>Content: {stateData.content}</p>
          <p>State Name: {stateData.name}</p>
          <p>State Code: {stateData.code}</p>
        </div>

        <div className="map-container">
          <SVGMap map={India} onLocationClick={onLocationClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
