import { useState } from "react"
import { Alert } from "@material-tailwind/react"
// import Select from "./paintFormSelect"

import PaintDetails from "./paintDetails"


// const SelectPaintFinish = () => {
//     const [paintFinish, setPaintFinish] = useState('')
//     const onChange = (e) => {

//     }
//     return (
//         <div>
//           <select onChange={onChange} className="form-select">
//             <option defaultValue disabled>
//               Select Paint Composition
//             </option>
//             <option value="eggshell">Eggshell</option>
//             <option value="semigloss">Semi Gloss</option>
//             <option value="matte">Matte</option>
//             <option value="mediumgloss">Medium Gloss</option>
//             <option value="highgloss">High Gloss</option>
//             <option value="satin">Satin</option>
//           </select>
//         </div>
//       )
// }

const PaintForm = () => {
    const [paintName, setPaintName] = useState('')
    const [paintFinishes, setPaintFinish] = useState('')
    const [paintComposition, setPaintComposition] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const paint = { paintName, paintFinishes, paintComposition }

        const response = await fetch('/paints', {
            method: 'POST',
            body: JSON.stringify(paint),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            console.log("error with paint post method")
            console.log(paintName, paintFinishes, paintComposition)
            setError(json.error)
        }

        if (response.ok) {
            setPaintName('')
            setPaintFinish('')
            setPaintComposition('')
            setError(null)
            window.location.reload(false)
            console.log('new paint added', json)
        }
    }
    return (
        <div className="max-w-md mx-10 bg-gray-100 rounded-xl shadow-lg shadow-[#ba1c21] overflow-hidden border-4 border-blue-50 border-opacity-90">
            <div className="px-4 py-5 sm:px-6 bg-gray-200 text-center shadow-[#ba1c21]">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Add a New Paint!</h2>
            </div>
            <div className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <div>
                        {/* <label className="block text-sm font-medium text-gray-700">Paint Name</label> */}
                        <div className="mt-1 shadow-lg shadow-[#003058]">
                            <input
                                type="text"
                                value={paintName}
                                onChange={(e) => setPaintName(e.target.value)}
                                className="appearance-none block w-full px-3 
                                py-2 border rounded-md placeholder-gray-400 
                                focus:outline-none focus:ring-4 focus:ring-blue-500 
                                focus:border-transparent"
                                placeholder="Enter paint name"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Paint Finish</label>
                        <div className="mt-1 shadow-md shadow-[#003058]">
                            <select
                                value={paintFinishes}
                                onChange={(e) => setPaintFinish(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 
                                border rounded-md placeholder-gray-400 
                                focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="" disabled>Select paint finish</option>
                                <option value="eggshell">Eggshell</option>
                                <option value="semigloss">Semi Gloss</option>
                                <option value="matte">Matte</option>
                                <option value="mediumgloss">Medium Gloss</option>
                                <option value="highgloss">High Gloss</option>
                                <option value="satin">Satin</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Paint Composition</label>
                        <div className="mt-1 shadow-md shadow-[#003058]">
                            <input
                                type="text"
                                value={paintComposition}
                                onChange={(e) => setPaintComposition(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter paint composition"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 text-white bg-gradient-to-tr mx-10 from-red-500 via-red-600 to-blue-700 focus:ring-1 focus:outline-none focus:ring-red-500 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90 text-sm px-7 py-2.5 text-center mr-2 mb-2">
                            Add Paint
                        </button>
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default PaintForm