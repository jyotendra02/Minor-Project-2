import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
<<<<<<< HEAD
import ReactDatamaps from "react-india-states-map";
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
=======
import data from "./data.json";
import StateDetails from "./StateDetails";

function IndiaMap() {
  const [selectedState, setSelectedState] = useState();

  function onLocationClick(event) {
    const clickedState = event.target.getAttribute("name");
    const newStateData = data[clickedState] || null;
    setSelectedState(newStateData);
  }

  return (
    <div className="flex h-200">
      <div className="w-1/3 bg-blue-300 px-4 py-4 rounded-lg mt-2 ml-2 text-center">
        <div className="text-xl mt-4 mb-5">
          <h3>Maps Details</h3>
        </div>
        <div>
          <SVGMap map={India} onLocationClick={onLocationClick} />
        </div>
        <div className="text-xl mt-4 mb-5">
          <h3>Selected State: {selectedState ? selectedState.name : ""}</h3>
        </div>
      </div>
      <div className="flex-1 bg-white">
        {selectedState && <StateDetails stateData={selectedState} />}
>>>>>>> ae45d3d23705700e272ac2d449835b23eecad49c
      </div>
    </div>
  );
}
export default IndiaMap;
