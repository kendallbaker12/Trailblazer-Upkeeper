import { useState } from "react"

const RoomDetails = ({
    roomNumber,
    roomType,
    roomPaints
}) => {
    const [showRoomDetails, setShowRoomDetails] = useState(false)

    return (
        <div className="">
            <div className="p-4 mb-4 border rounded-lg bg-zinc-100 shadow-lg shadow-[#ba1c21]">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold">{roomNumber}</h2>
                    <button
                        className="inline-flex justify-center py-2 px-4 text-white bg-gradient-to-tr mx-10 from-[#003058] via-blue-600 to-[#ba1c21] focus:ring-1 focus:outline-none focus:ring-blue-500 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90 text-sm px-7 py-2.5 text-center mr-2 mb-2 transform hover:scale-110 transition duration-300"
                        onClick={() => setShowRoomDetails(!showRoomDetails)}
                    >
                        {showRoomDetails ? 'Hide Room' : 'Show Room'}
                    </button>
                </div>
                {showRoomDetails && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold">Room Type:</h4>
                        <p className="text-lg font-semibold text-gray-700">{roomType}</p>
                        <hr></hr>
                        <h4 className="text-sm font-bold">Paints:</h4>
                        <div className="">
                            {roomPaints.map(paint => (
                                <div className="bg-zinc-300 p-4 rounded-lg shadow-lg mb-2 shadow-sm shadow-[#003058]">
                                    <h4 className="text-sm font-medium ">Paint:</h4>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">{paint.paintName}</p>
                                    <h4 className="text-sm font-medium ">Composition:</h4>
                                    <p className="text-sm font-medium">{paint.paintComposition}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                )}
            </div>
        </div>

    )
}

export default RoomDetails