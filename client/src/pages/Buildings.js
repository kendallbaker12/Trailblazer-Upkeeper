import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { useBuildingContext } from "../hooks/useBuildingsContext"

// components
import BldDetails from "../components/bldDetails";
import BuildingForm from "../components/BuildingForm";
import RoomForm from "../components/roomForm";

const Buildings = () => {
  // const { buildings, dispatch } = useBuildingContext()
  const [buildings, setBuildings] = useState(null);

  useEffect(() => {
    const fetchBuildings = async () => {
      const response = await fetch(
        "https://trailblazerupkeeper.onrender.com/buildings"
      );
      const bldjson = await response.json();

      if (response.ok) {
        // dispatchcadding comment({ type: 'SET_BUILDINGS', payload: json })
        setBuildings(bldjson);
      }
    };
    fetchBuildings();
  }, []);

  return (
    <div className="mt-16">
      <div className="py-8 bg-gray-900">
        <div className="container px-8 mx-auto">
          <img
            className="object-cover w-full h-64 lg:h-80"
            src="https://campus.utahtech.edu/wp-content/themes/dixie-state-university/assets/images/Open-Graph-copy.jpg"
          ></img>
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-2 ">
          {buildings &&
            buildings.map((building) => (
              <div
                key={building._id}
                className="bg-[#003058] rounded-lg shadow-md p-4 shadow-lg shadow-[#ba1c21]"
              >
                <BldDetails buildings={building} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Buildings;
