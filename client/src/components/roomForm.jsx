import { useState } from "react"


const RoomForm = ({ buildings }) => {
    const [roomNumber, setRoomNumber] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomPaints, setRoomPaints] = useState([''])
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchRoomsResponse = await fetch('https://trailblazerupkeeper.onrender.com/buildings/' + String(buildings._id))

        if (fetchRoomsResponse.ok) {
            const rooms = { roomNumber, roomType, roomPaints }
            const postRoomsResponse = await fetch('https://trailblazerupkeeper.onrender.com/buildings/' + String(buildings._id) + '/rooms', {
                method: 'POST',
                body: JSON.stringify(rooms),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const postJson = await postRoomsResponse.json()
            if (!postRoomsResponse.ok) {
                console.log("error with room post method")
                console.log(roomNumber, roomType, roomPaints)
                setError(postJson.error)
            }
            if (postRoomsResponse.ok) {
                setRoomNumber('')
                setRoomType('')
                setRoomPaints([''])
                setError(null)
                window.location.reload(false)
                console.log('new room added', postJson)
            }
        }

    }
    return (
        <div className="p-6 bg-gray-100">
            <h4 className="mb-4 text-lg font-semibold">Add a New Room!</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <div className="flex-1">
                        <label htmlFor="room-number" className="block mb-1 font-medium">
                            Room Number:
                        </label>
                        <input
                            id="room-number"
                            name="room-number"
                            type="number"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            onChange={(e) => setRoomNumber(e.target.value)}
                            value={roomNumber}
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="room-type" className="block mb-1 font-medium">
                            Room Type:
                        </label>
                        <select
                            id="room-type"
                            name="room-type"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                        >
                            <option defaultValue disabled>
                                Select a Room Type
                            </option>
                            <option value={"classroom"}>Class Room</option>
                            <option value={"office"}>Office</option>
                            <option value={"storage"}>Storage</option>
                            <option value={"studyroom"}>Study Room</option>
                            <option value={"hallway"}>Hall Way</option>
                            <option value={"lobby"}>Lobby</option>
                            <option value={"misc"}>Misc.</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="room-paints" className="block mb-1 font-medium">
                        Room Paints:
                    </label>
                    <input
                        id="room-paints"
                        name="room-paints"
                        type="text"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={(e) => setRoomPaints(e.target.value)}
                        value={roomPaints}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Add Room
                    </button>
                    {error && (
                        <div className="font-medium text-red-500">{error}</div>
                    )}
                </div>
            </form>
        </div>
    );

}

export default RoomForm