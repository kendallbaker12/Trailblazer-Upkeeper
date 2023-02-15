import { useEffect } from "react"
import { useBuildingContext } from "../hooks/useBuildingsContext"

// components
import BldDetails from "../components/bldDetails"
import BuildingForm from "../components/BuildingForm"



const Home = () => {
    const { buildings, dispatch } = useBuildingContext()

    useEffect(() => {
        const fetchBuildings = async () => {
            const response = await fetch('/api/buildings')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_BUILDINGS', payload: json })
            }
        }
        fetchBuildings()
    }, [])

    return (
        <div className="home">
            <div className="buildings">
                {buildings && buildings.map((buildings) => (
                    <BldDetails key={buildings._id} buildings={buildings} />
                ))}
            </div>
            <BuildingForm />
        </div>
    )
}

export default Home