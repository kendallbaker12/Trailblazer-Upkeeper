import {useState} from "react"
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

const PaintForm =() =>{
    const [paintName, setPaintName] = useState('')
    const [paintFinishes, setPaintFinish] = useState('')
    const [paintComposition, setPaintComposition] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const paint = {paintName,paintFinishes,paintComposition}
        
        const response = await fetch('/paints',{
            method: 'POST',
            body: JSON.stringify(paint),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            console.log("error with paint post method")
            console.log(paintName,paintFinishes,paintComposition)
            setError(json.error)
        }

        if (response.ok){
            setPaintName('')
            setPaintFinish('')
            setPaintComposition('')
            setError(null)
            window.location.reload(false)
            console.log('new paint added',json)
        }
    }
    return(
        <div className="paint-form-div">
            <h1><strong>Add a New Paint!</strong></h1>
            <form className="paint-form" onSubmit={handleSubmit}>
                <label>Paint Name: </label>
                <input 
                    type='text'
                    onChange={(e)=> setPaintName(e.target.value)}
                    value={paintName}
                />
                <label>Paint Finish: </label>
                <select value={paintFinishes} onChange={(e) => setPaintFinish(e.target.value)}>
                    <option defaultValue disabled>
                        Select Paint finish
                    </option>
                    <option value="eggshell">Eggshell</option>
                    <option value="semigloss">Semi Gloss</option>
                    <option value="matte">Matte</option>
                    <option value="mediumgloss">Medium Gloss</option>
                    <option value="highgloss">High Gloss</option>
                    <option value="satin">Satin</option>
                </select>
                <label>Paint Composition: </label>
                <input 
                    type='text'
                    onChange={(e)=> setPaintComposition(e.target.value)}
                    value={paintComposition}
                />
                <button>Add Paint</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default PaintForm