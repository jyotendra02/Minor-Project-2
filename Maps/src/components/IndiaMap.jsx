import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
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
    <>
      <p>{stateName}</p>
      <p>{stateCode}</p>
      <SVGMap map={India} onLocationClick={onLocationClick} />
    </>
  );
}

export default App;
