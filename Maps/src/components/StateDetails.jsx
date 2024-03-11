import React from "react";

function StateDetails({ stateData }) {
  return (
    <>
      <div className="w-100 bg-blue-300 px-4 py-4 rounded-lg h-auto mx-3 my-1  text-xl font-bold">
        <p>State: {stateData.name}</p>
      </div>

      <div className="w-100 bg-blue-300 px-4 py-4 rounded-lg h-auto mx-3">
        <p className="px-2 py-4">
          <img src={stateData.image} alt={stateData.name} />
        </p>
      </div>

      <div className="w-100 bg-blue-300 px-4 py-4 rounded-lg h-auto mx-3 my-1 font-bold text-xl">
        <h2>Description</h2>
      </div>

      <div className="w-100 bg-blue-300 px-4 py-4 rounded-lg h-auto mx-3 ">
        <p>Population Density: {stateData.p_density}</p>
        <p>Area: {stateData.area}</p>
        {/* Add more details as needed */}
      </div>
    </>
  );
}
export default StateDetails;
