import { useEffect, useState } from "react"
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
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
                {buildings && buildings.map((building) => (
                    <div key={building._id} className="bg-[#003058] rounded-lg shadow-md p-4">
                        <BldDetails buildings={building} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Buildings