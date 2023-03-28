const BldDetails = ({ buildings }) => {

    return (
        <div className="bld-details">
            <h4>{buildings.name}</h4>
            <p><strong>Number of rooms: </strong>{buildings.rooms}</p>
        </div>
    )
}

export default BldDetails