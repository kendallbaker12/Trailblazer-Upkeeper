import {useState} from "react"


const RoomForm = ({buildings}) =>{
    const [roomNumber, setRoomNumber] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomPaints, setRoomPaints] = useState([''])
    const [error, setError] = useState(null)


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const fetchRoomsResponse = await fetch('/buildings/'+String(buildings._id))

        if(fetchRoomsResponse.ok){
            const rooms = {roomNumber,roomType,roomPaints}
            const postRoomsResponse = await fetch('/buildings/'+String(buildings._id)+'/rooms',{
                method: 'POST',
                body: JSON.stringify(rooms),
                headers:{
                    'Content-Type': 'application/json' 
                }
            })
            const postJson = await postRoomsResponse.json()
            if(!postRoomsResponse.ok){
                console.log("error with room post method")
                console.log(roomNumber,roomType,roomPaints)
                setError(postJson.error)
            }
            if(postRoomsResponse.ok){
                setRoomNumber('')
                setRoomType('')
                setRoomPaints([''])
                setError(null)
                window.location.reload(false)
                console.log('new room added',postJson)
            }
        }
        
    }
    return(
        <div className="room-form-div">
            <h4><strong>Add a New Room!</strong></h4>
            <form className="room-form" onSubmit={handleSubmit}>
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
    )

}

export default RoomForm