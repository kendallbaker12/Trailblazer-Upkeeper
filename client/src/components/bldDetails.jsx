
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RoomDetails from "./roomDetails"


const BldDetails = ({ buildings }) => {
    const navigate = useNavigate()
    const [rooms,setRooms] = useState(null)

    const handleClick = async () =>{
        const response = await fetch('/buildings/'+String(buildings._id))
        const bldjson = await response.json()

        if(response.ok){
            var rooms = []
            const response = await fetch('/buildings/'+ String(buildings._id) +'/rooms')
            const roomjson = await response.json()
            if (response.ok){
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
   

    return (
        <div className="bld-details">
            <h4>{buildings.name}</h4>
            <p><strong>Number of rooms: </strong>{buildings.rooms}</p>
            <button  onClick={handleClick}>Click Here</button>
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
            </div>
        </div>
    )
}

export default BldDetails