import { useEffect, useState } from "react"

import RoomDetails from "../components/roomDetails"
import RoomForm from "../components/roomForm"


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
                <RoomForm/>
            </div>
        </div>
    )
}

export default Rooms