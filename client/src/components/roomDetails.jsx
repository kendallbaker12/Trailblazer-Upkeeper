const roomDetails = ({ rooms }) => {

    return (
        <div className="room-details">
            <h4>{rooms.name}</h4>
            <p>{rooms.roomNumber}</p>
        </div>
    )
}