import { useEffect, useState } from "react"

import RoomDetails from "../components/roomDetails"



const Rooms = () =>{
    const [rooms,setRooms] = useState(null)
    useEffect(()=>{
        const fetchRooms = async () =>{
            const response = await fetch('/buildings/')
            const json = await response.json()

            if (response.ok){
                var rooms = []
                for (let i = 0; i < json.length;i++){
                    const response = await fetch('/buildings/'+ String(json[i]._id) +'/rooms')
                    const jsonsomethingdifferent = await response.json()
                    
                    if (response.ok){
                        for (let j=0;j < jsonsomethingdifferent.length;j++){
                            rooms.push(jsonsomethingdifferent[j])
                        }
                        
                    }
                }
                setRooms(rooms)
                console.log(rooms)
            }
        }
        fetchRooms()
    },[])
    return(
        <div className="room-page">
            <div className="rooms">
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

export default Rooms