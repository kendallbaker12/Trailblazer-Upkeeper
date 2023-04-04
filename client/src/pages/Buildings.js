import { useEffect, useState } from "react"
//import { useBuildingContext } from "../hooks/useBuildingsContext"

// components
import BldDetails from "../components/bldDetails"
import BuildingForm from "../components/BuildingForm"



const Buildings = () => {
    // const { buildings, dispatch } = useBuildingContext()
    const [buildings,setBuildings] = useState(null)

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
        <div className="home">
            <div className="buildings" >
                {buildings && buildings.map((buildings) => (
                    <BldDetails key={buildings._id} buildings={buildings} />

                ))}
            </div>
            <BuildingForm />
        </div>
    )
}

export default Buildings