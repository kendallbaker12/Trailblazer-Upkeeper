import { useState, useEffect } from "react"

const PaintDropDown = ({ roomPaints, setRoomPaints }) => {
    const [paints, setPaints] = useState(null)
    const [paint1, setPaint1] = useState('')
    useEffect(() => {
        const fetchPaints = async () => {
            const response = await fetch('/paints')
            const json = await response.json()

            if (response.ok) {
                setPaints(json)
            }
        }
        fetchPaints()
    }, [])



    return (
        <div>
            <ul className="my-2 mx-24 rounded-64">
                {roomPaints.map(paint2 =>
                    <li key={paint2} className="py-2 px-10 bg-[#003058] opacity-100 text-white rounded-full mb-2 text-center">{paints.find(paint3 => paint3._id == paint2).paintName}</li>
                )}
            </ul>
            <div className="flex items-center justify-between">
                <select className="block w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={e => setPaint1(e.target.value)}>
                    <option className="text-gray-400" value="">Select a Paint</option>
                    {paints && paints.map((paint) => (
                        <option className="px-2 py-1 hover:bg-gray-200 focus:bg-gray-200" key={paint._id} value={paint._id}>{paint.paintName}</option>
                    ))}
                </select>
                <button
                    className="w-1/5 inline-flex justify-center py-2 px-7 
                    text-white bg-gradient-to-tr mx-10
                    from-red-500 via-red-600 to-blue-700 
                    focus:ring-1 focus:outline-none focus:ring-red-500 
                    shadow-lg shadow-red-500/50 dark:shadow-lg 
                    dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90
                    text-sm px-7 py-2.5 text-center mr-2 mb-2 transform hover:scale-110 transition duration-300"
                    onClick={() => {
                        setRoomPaints([...roomPaints, paint1])
                    }}
                >
                    Add Paint
                </button>
            </div>
        </div>
    )
}

export default PaintDropDown