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
            window.location.reload(false)
            //dispatch({ type: 'CREATE_BUILDING', payload: json })
        }
    }
    return (
        <div className="flex mt-20 justify-center">
            <form className="create bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h3 className="text-lg font-medium mb-2">Add a New Building</h3>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Building Name:</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="rooms">Number of Classrooms:</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="rooms"
                        type="number"
                        onChange={(e) => setClassrooms(e.target.value)}
                        value={rooms}
                    />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Building</button>

                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </form>
        </div>

    )
}

export default Rooms