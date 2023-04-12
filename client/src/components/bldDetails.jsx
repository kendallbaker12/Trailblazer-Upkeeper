
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PaintDropDown from "./addPaint"
import RoomDetails from "./roomDetails"
import Icon from '@mdi/react';
import { mdiBrush, mdiBrushOff, mdiEye, mdiEyeOff } from '@mdi/js';




const BldDetails = ({ buildings, rms }) => {
    const [showForm, setShowForm] = useState(false)
    const [showRoomDetails, setShowRoomDetails] = useState(false)
    const [rooms, setRooms] = useState(null)
    const [roomNumber, setRoomNumber] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomPaints, setRoomPaints] = useState([])
    const [error, setError] = useState(null)

    const handleClick = async () => {
        const response = await fetch('/buildings/' + String(buildings._id))
        if (response.ok) {
            var rooms = []
            const response = await fetch('/buildings/' + String(buildings._id) + '/rooms')
            const roomjson = await response.json()
            if (response.ok) {
                if (roomjson.length == 0) {
                }
                else {
                    for (let j = 0; j < roomjson.length; j++) {
                        rooms.push(roomjson[j])
                    }
                }
            }
            if (!response.ok) {
                console.log("room does not exist")
            }
        }
        setRooms(rooms)
        setShowRoomDetails(!showRoomDetails)
    }
    const updateRooms = async () => {
        const response = await fetch('/buildings/' + String(buildings._id))
        if (response.ok) {
            const secondresponse = await fetch('/buildings/' + String(buildings._id + '/rooms' + String(rms._id)))

        }
    }
    const postRooms = async () => {
        const response = await fetch('/buildings/' + String(buildings._id))
        if (response.ok) {
            console.log('testing', roomPaints)
            var rooms = { roomNumber, roomType, roomPaints }
            console.log(rooms)
            const presponse = await fetch('/buildings/' + String(buildings._id) + '/rooms', {
                method: 'POST',
                body: JSON.stringify(rooms),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const roomjson = await response.json()
            if (!presponse.ok) {
                console.log("error with room post method")
                console.log(roomNumber, roomType, roomPaints)
                setError(roomjson.error)
            }
            if (presponse.ok) {
                setRoomNumber('')
                setRoomType('')
                setRoomPaints([''])
                setError(null)
                window.location.reload(true)
                console.log('new room added', roomjson)
            }
        }
        console.log(roomNumber, roomType, roomPaints)
    }

    const toggleForm = () => {
        setShowForm(!showForm);
    }



    return (
        <div className="bg-white  rounded-lg shadow-md p-10 border border-2 border-[#ba1c21]">
            <div className="flex flex-col items-center bg-zinc-50 rounded-sm mx-24">
                <h3 className="text-[#003058] text-lg font-bold mb-2">{buildings.name}</h3>
                <p className="text-md font-bold mb-2">Number of rooms: {buildings.rooms}</p>
            </div>
            <br />
            <div className="button-div flex justify-center items-center space-x-4 ">
                <button onClick={toggleForm} className="w-1/5 inline-flex justify-center py-2 px-7 
                text-white bg-gradient-to-tr mx-10
                from-red-500 via-red-600 to-blue-700 
                focus:ring-1 focus:outline-none focus:ring-red-500 
                shadow-lg shadow-red-500/50 dark:shadow-lg 
                dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90
                text-sm px-7 py-2.5 text-center mr-2 mb-2 transform hover:scale-110 transition duration-300">
                    {showForm ? <Icon path={mdiBrushOff} size={1} /> : <Icon path={mdiBrush} size={1} />}</button>
                <button className="w-1/5 inline-flex justify-center py-2 px-7 
                text-white bg-gradient-to-tr mx-10
                from-red-500 via-red-600 to-blue-700 
                focus:ring-1 focus:outline-none focus:ring-red-500 
                shadow-lg shadow-red-500/50 dark:shadow-lg 
                dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90
                text-sm px-7 py-2.5 text-center mr-2 mb-2 transform hover:scale-110 transition duration-300"
                    onClick={() => {
                        handleClick()
                    }}>{showRoomDetails ? <Icon path={mdiEyeOff} size={1} /> : <Icon path={mdiEye} size={1} />}</button>
            </div>
            {showForm && (
                <div className="bg-white rounded-lg shadow-lg p-6 shadow-lg shadow-[#003058]">
                    <h4 class="text-lg font-bold mb-4 ">Add a New Room!</h4>
                    <div>
                        <label className="block mb-2 font-bold text-gray-700"><strong>Room Number: </strong></label>
                        <input
                            type='number'
                            className={`w-full border p-2 rounded-lg mb-4 ${!roomNumber ? 'border-red-500' : 'border-gray-300'
                                }`}
                            onChange={(e) => setRoomNumber(e.target.value)}
                            value={roomNumber}
                            required
                        />
                        {!roomNumber && (
                            <div className="text-red-500 text-sm">This field is required.</div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 font-bold text-gray-700">Room Type: </label>
                        <select

                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="w-full border-2 border-gray-300 p-2 rounded-lg mb-4"
                        >
                            <option>
                                Select a Room Type
                            </option>
                            <option value={'classroom'}>Class Room</option>
                            <option value={'office'}>Office</option>
                            <option value={'storage'}>Storage</option>
                            <option value={'studyroom'}>Study Room</option>
                            <option value={'hallway'}>Hall Way</option>
                            <option value={'lobby'}>Lobby</option>
                            <option value={'misc'}>Misc.</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-bold text-gray-700">Room Paints: </label>
                        <PaintDropDown
                            roomPaints={roomPaints}
                            setRoomPaints={setRoomPaints}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={postRooms}
                            className=" w-1/5 inline-flex justify-center py-2 px-7 
                                        text-white bg-gradient-to-tr mx-10
                                        from-red-500 via-red-600 to-blue-700 
                                        focus:ring-1 focus:outline-none focus:ring-red-500 
                                        shadow-lg shadow-red-500/50 dark:shadow-lg 
                                        dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90
                                            text-sm px-7 py-2.5 text-center mr-2 mb-2 transform hover:scale-110 transition duration-300"
                        >Add Room</button>
                    </div>
                    {error && <div className="error">{error}</div>}
                </div>
            )}
            {showRoomDetails && (
                <div className="bg-[#003058] border border-gray-300 rounded-md p-4">
                    {rooms && rooms.map(({
                        _id,
                        roomNumber,
                        roomType,
                        roomPaints
                    }) => (
                        <RoomDetails
                            key={_id}
                            roomNumber={roomNumber}
                            roomType={roomType}
                            roomPaints={roomPaints}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default BldDetails