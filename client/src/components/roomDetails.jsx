const RoomDetails = ({
    roomNumber,
    roomType,
    roomPaints
}) => {

    return(
        <div className="room-details">
            <h2>{roomNumber}</h2>
            <h4>Room Type: {roomType}</h4>
            {roomPaints.map(paint =><div><h4>{paint.paintName}</h4><h4>{paint.paintComposition}</h4></div>)}
        </div>
    )
}

export default RoomDetails