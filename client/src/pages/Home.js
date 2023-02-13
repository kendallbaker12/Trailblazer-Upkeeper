import { useEffect, useState } from "react"

// components
import BldDetails from "../components/bldDetails"

const Home = () => {
    const [buildings, setBuildings] = useState(null)

    useEffect(() => {
        const fetchBuildings = async () => {
            const response = await fetch('/api/buildings')
            const json = await response.json()

            if (response.ok) {
                setBuildings(json)
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
        </div>
    )
}

export default Home