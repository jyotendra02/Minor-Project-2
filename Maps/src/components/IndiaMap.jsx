import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import data from "./data.json";
import StateDetails from "./StateDetails";

function App() {
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
        {/* Render StateDetails component if a state is selected */}
        {selectedState && <StateDetails stateData={selectedState} />}
      </div>
    </div>
  );
}
export default App;
