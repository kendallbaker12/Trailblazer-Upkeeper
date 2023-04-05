
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RoomDetails from "./roomDetails"
import RoomForm from "./roomForm"


const BldDetails = ({ buildings }) => {
    const navigate = useNavigate()
    const [rooms,setRooms] = useState(null)
    const [roomNumber, setRoomNumber] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomPaints, setRoomPaints] = useState([''])
    const [error, setError] = useState(null)

    const handleClick = async () =>{
        const response = await fetch('/buildings/'+String(buildings._id))
        const bldjson = await response.json()

        if(response.ok){
            var rooms = []
            const response = await fetch('/buildings/'+ String(buildings._id) +'/rooms')
            const roomjson = await response.json()
            if (response.ok){
                if(roomjson.length == 0){
                    console.log("testing for loop in rooms")
                }
                for(let j=0;j < roomjson.length;j++){
                    rooms.push(roomjson[j])
                }
            }
            if(!response.ok){
                console.log("room does not exist")
            }
        }
        setRooms(rooms)
    }

    const postRooms = async () =>{
        const response = await fetch('/buildings/'+String(buildings._id))
        const bldjson = await response.json()

        if(response.ok){
            console.log('testing')
            var rooms = {roomNumber,roomType,roomPaints}
            const presponse = await fetch('/buildings/'+ String(buildings._id) +'/rooms',{
                method: 'POST',
                body: JSON.stringify(rooms),
                headers:{
                    'Content-Type': 'application/json' 
                }
            })
            const roomjson = await response.json()
            if(!presponse.ok){
                console.log("error with room post method")
                console.log(roomNumber,roomType,roomPaints)
                setError(roomjson.error)
            }
            if(presponse.ok){
                setRoomNumber('')
                setRoomType('')
                setRoomPaints([''])
                setError(null)
                // window.location.reload(false)
                console.log('new room added',roomjson)
            }
        }
        console.log(roomNumber,roomType,roomPaints)
    }
   

    return (
        <div className="bld-details">
            <h4>{buildings.name}</h4>
            <p><strong>Number of rooms: </strong>{buildings.rooms}</p>
            <button  onClick={handleClick}>Click Here to see rooms.</button>
            <div className="bld-room-details">
            {
                rooms && rooms.map(({
                    _id,
                    roomNumber,
                    roomType,
                    roomPaints
                })=> (
                    <RoomDetails 
                        key={_id}
                        roomNumber={roomNumber}
                        roomType={roomType}
                        roomPaints={roomPaints}
                    />
                ))
                
            }
             <h4><strong>Add a New Room!</strong></h4>
            <form className="room-form" onSubmit={postRooms}>
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
                <input
                    type='text'
                    onChange={(e) => setRoomPaints(e.target.value)}
                    value={[roomPaints]}
                />
                <button>Add Room</button>
                {error && <div className="error">{error}</div>}
            </form>
            </div>
        </div>
    )
}

export default BldDetails