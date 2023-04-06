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
            <ul>
                {roomPaints.map(paint2 =>
                    <li key={paint2}>
                        {paints.find(paint3 => paint3._id == paint2).paintName}
                        {/* {paint2} */}
                    </li>
                )}
            </ul>
            <select onChange={e => setPaint1(e.target.value)}>
                {paints && paints.map((paint) => (
                    <option key={paint._id} value={paint._id}>{paint.paintName}</option>
                ))}
            </select>
            <button onClick={() => {
                setRoomPaints(
                    [...roomPaints, paint1]
                )
            }}>anytext</button>
        </div>
    )
}

export default PaintDropDown