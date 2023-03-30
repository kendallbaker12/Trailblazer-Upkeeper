import { useState } from "react"
//import { useBuildingContext } from "../hooks/useBuildingsContext"

const BuildingForm = () => {
    //const { dispatch } = useBuildingContext()

    const [name, setName] = useState('')
    const [rooms, setClassrooms] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const building = { name, rooms }

        const response = await fetch('/buildings', {
            method: 'POST',
            body: JSON.stringify(building),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            console.log("error here")
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setClassrooms('')
            setError(null)
            console.log('new building added', json)
            //dispatch({ type: 'CREATE_BUILDING', payload: json })
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Building</h3>

            <label>Building Name: </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>Number of classrooms: </label>
            <input
                type="number"
                onChange={(e) => setClassrooms(e.target.value)}
                value={rooms}
            />
            <button>Add Building</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default BuildingForm