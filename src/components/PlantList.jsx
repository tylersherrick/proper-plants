import PLANTS from "../data";
import PlantCard from "./PlantCard";

export default function PlantList({ addToCart }) {
  return (
    <div className="plant-list">
      {PLANTS.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}