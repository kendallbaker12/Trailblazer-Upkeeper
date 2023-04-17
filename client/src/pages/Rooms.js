import { useEffect, useState } from "react"

import RoomDetails from "../components/roomDetails"
import RoomForm from "../components/roomForm"


const Rooms = () => {

    const [name, setName] = useState('')
    const [rooms, setClassrooms] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const building = { name, rooms }

        const response = await fetch('https://trailblazerupkeeper.onrender.com/buildings', {
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
            window.location.reload(false)
            //dispatch({ type: 'CREATE_BUILDING', payload: json })
        }
    }
    return (
        <div className="flex justify-center mt-20">
            <form className="p-6 bg-white rounded-lg shadow-md create" onSubmit={handleSubmit}>
                <h3 className="mb-2 text-lg font-medium">Add a New Building</h3>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="name">Building Name:</label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="rooms">Number of Classrooms:</label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                        id="rooms"
                        type="number"
                        onChange={(e) => setClassrooms(e.target.value)}
                        value={rooms}
                    />
                </div>

                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Add Building</button>

                {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
            </form>
        </div>

    )
}

export default Rooms