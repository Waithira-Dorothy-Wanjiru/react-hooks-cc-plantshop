import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePrice }) {
  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDeletePlant={onDeletePlant}
            onUpdatePrice={onUpdatePrice}
          />
        ))
      ) : (
        <p>No plants found.</p>  // Display message if plant list is empty
      )}
    </ul>
  );
}

export default PlantList;
