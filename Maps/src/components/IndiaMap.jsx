// import React, { useState } from "react";
// import India from "@svg-maps/india";
// import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
// // import ReactDatamaps from "react-india-states-map";
// import data from "./data.json";

// function App() {
//   const [stateData, setStateData] = useState({
//     code: "",
//     name: "",
//     value: "",
//     content: "",
//     area: "",
//     image: " ",
//   });

//   function onLocationClick(event) {
//     const clickedState = event.target.getAttribute("name");
//     const newStateData = { ...stateData };

//     newStateData.code = event.target.id;
//     newStateData.name = clickedState;

//     // Access the data for the clicked state from the JSON file
//     if (data[clickedState]) {
//       newStateData.image = data[clickedState].image
//       newStateData.value = data[clickedState].value;
//       newStateData.area = data[clickedState].content.area;
//       newStateData.content = data[clickedState].content.txt;
//     }

//     else {
//       // Reset the values if the clicked state is not in the JSON file
//       newStateData.value = "";
//       newStateData.content = "";
//       newStateData.area = "";
//       newStateData.image = " ";
//     }

//     setStateData(newStateData);
//   }

//   return (
//     <div>
//       <div class="flex h-screen">
//         <div class="w-1/3 bg-blue-300 px-4 py-4 rounded-lg">
//           <div className="text-xl mt-4 mb-5">
//             <h3>Maps Details</h3>
//           </div>
//           <div className="map-container">
//             <SVGMap map={India} onLocationClick={onLocationClick} />
//           </div>
//           <div className="text-xl mt-4 mb-5">
//             <h3>Selected State: {stateData.name}</h3>
//           </div>
//         </div>
//         <div class="flex-1 bg-white">
//           {/* <!-- Content for the rest of the screen --> */}
//           <div style={{ display: "flex" }}>
//             <div className="m-4 flex-1">
//              <p>Image: <img src = {stateData.image}></img></p>
//               <p>Value: {stateData.value}</p>
//               <p>Area: {stateData.area}</p>
//               <p>Content: {stateData.content}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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
