import { useEffect, useState } from "react"

//components

import PaintDetails from "../components/paintDetails"
import PaintForm from "../components/paintForm"

const Paints = () =>{
    const [paints,setPaints] = useState(null)
    useEffect(() =>{
        const fetchPaints = async () =>{
            const response = await fetch('/paints')
            const json = await response.json()

            if (response.ok){
                setPaints(json)
            }
        }
        fetchPaints()
    },[])
    return(
        <div className="paint-page">
            <div className="paints">
                {paints && paints.map((paints) =>(
                    <PaintDetails key={paints._id} paints={paints} />
                ))}
            </div>
            <PaintForm />
        </div>
    )
}

export default Paints