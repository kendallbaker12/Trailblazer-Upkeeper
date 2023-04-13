import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
//import { useBuildingContext } from "../hooks/useBuildingsContext"

// components
import BldDetails from "../components/bldDetails"
import BuildingForm from "../components/BuildingForm"
import RoomForm from "../components/roomForm"



const Buildings = () => {
    // const { buildings, dispatch } = useBuildingContext()
    const [buildings, setBuildings] = useState(null)

    useEffect(() => {
        const fetchBuildings = async () => {
            const response = await fetch('/buildings')
            const bldjson = await response.json()

            if (response.ok) {
                // dispatch({ type: 'SET_BUILDINGS', payload: json })
                setBuildings(bldjson)

            }
        }
        fetchBuildings()

    }, [])


    return (
        <div className="mt-16">
            <div className="bg-gray-900 py-8">
                <div className="container mx-auto px-8">
                    <img className="w-full h-64 lg:h-80 object-cover" src="https://campus.utahtech.edu/wp-content/themes/dixie-state-university/assets/images/Open-Graph-copy.jpg" ></img>
                </div>
            </div>
            <div className="container mx-auto mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 ">
                    {buildings && buildings.map((building) => (
                        <div key={building._id} className="bg-[#003058] rounded-lg shadow-md p-4 shadow-lg shadow-[#ba1c21]">
                            <BldDetails buildings={building} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Buildings