import { useState } from "react"

const RoomDetails = ({
    roomNumber,
    roomType,
    roomPaints
}) => {
    const [showRoomDetails, setShowRoomDetails] = useState(false)

    return (
        <div className="p-4 mb-4 border rounded-lg bg-white shadow-lg shadow-[#ba1c21]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{roomNumber}</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowRoomDetails(!showRoomDetails)}
                >
                    {showRoomDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {showRoomDetails && (
                <div className="space-y-2">
                    <h4 className="text-sm">Room Type: {roomType}</h4>
                    {roomPaints.map(paint => (
                        <div className="bg-gray-100 p-2 rounded-lg">
                            <h4 className="text-sm font-medium mb-2">Paint: {paint.paintName}</h4>
                            <p className="text-xs">{paint.paintComposition}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default RoomDetails