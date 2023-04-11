const RoomDetails = ({
    roomNumber,
    roomType,
    roomPaints
}) => {

    return (
        <div className="p-4 mb-4 border rounded-lg bg-white">
            <h2 className="text-xl font-bold">{roomNumber}</h2>
            <h4 className="text-sm mb-2">Room Type: {roomType}</h4>
            <div className="space-y-2">
                {roomPaints.map(paint => (
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <h4 className="text-sm font-medium mb-2">Paint: {paint.paintName}</h4>
                        <p className="text-xs">{paint.paintComposition}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoomDetails