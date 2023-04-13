import { useEffect, useState } from "react"

//components

import PaintDetails from "../components/paintDetails"
import PaintForm from "../components/paintForm"

const Paints = () => {
    const [paints, setPaints] = useState(null)
    const [showForm, setShowForm] = useState(false)
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
        <div className="paint-page mt-20">
            <div className="flex flex-wrap justify-between">
                <div>
                    <PaintForm />
                    <br />
                </div>
                <div className="flex justify-end w-1/2">
                    <img className="" src="https://brand.utahtech.edu/wp-content/uploads/sites/249/2022/05/Athletic-Trailblazers-Logomark-Web.png" alt="logo" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="paints grid grid-cols-3 grid-rows-3 gap-3">
                {paints && paints.map((paints) => (
                    <PaintDetails key={paints._id} paints={paints} />
                ))}
            </div>
            <br />

        </div>
    )
}

export default Paints