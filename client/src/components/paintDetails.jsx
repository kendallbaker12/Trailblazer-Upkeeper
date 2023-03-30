const PaintDetails = ({ paints }) => {

    return (
        <div className="paint-details">
            <h2>{paints.paintName}</h2>
            <h4>{paints._id}</h4>
            <p>Paint finish: {paints.paintFinishes}</p>
            <p>Paint composition: {paints.paintComposition}</p>
        </div>
    )
}
export default PaintDetails