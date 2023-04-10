
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PaintDropDown from "./addPaint"
import RoomDetails from "./roomDetails"
import RoomForm from "./roomForm"


const BldDetails = ({ buildings }) => {
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
                    console.log("testing for loop in rooms")
                }
                for (let j = 0; j < roomjson.length; j++) {
                    rooms.push(roomjson[j])
                }
            }
            if (!response.ok) {
                console.log("room does not exist")
            }
        }
        setRooms(rooms)
        setShowRoomDetails(!showRoomDetails)
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
        <div className="bld-details">
            <h4>{buildings.name}</h4>
            <p><strong>Number of rooms: </strong>{buildings.rooms}</p>
            <button onClick={toggleForm}>{showForm ? "Hide" : "Show"} {buildings.name}</button>
            {showForm && (
                <div className="room-form">
                    <label><strong>Room Number: </strong></label>
                    <input
                        type='number'
                        onChange={(e) => setRoomNumber(e.target.value)}
                        value={roomNumber}
                    />
                    <label><strong>Room Type: </strong></label>
                    <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                        <option defaultValue disabled>
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
                    <label><strong>Room Paints: </strong></label>
                    <PaintDropDown
                        roomPaints={roomPaints}
                        setRoomPaints={setRoomPaints}
                    />
                    <button onClick={postRooms}>Add Room</button>
                    {error && <div className="error">{error}</div>}
                </div>
            )}
            <button onClick={() => {
                handleClick()
            }}>{showRoomDetails ? "Hide" : "Show"} Rooms</button>
            {showRoomDetails && (
                <div className="bld-room-details">
                    {
                        rooms && rooms.map(({
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
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default BldDetails