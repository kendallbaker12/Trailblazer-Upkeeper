const PaintDetails = ({ paints }) => {


    return (
        <div className="w-full">
            <div className="text-center paint-details max-w-sm p-6 bg-[#003058] rounded-lg shadow hover:border-[#003058] hover:bg-[#ba1c21] dark:border-[#ba1c21] dark:hover:bg-[#ba1c21] border-2 border-white w-full hover:text-[#003058] text-[#ba1c21] transform hover:scale-110 transition duration-300">
                <h2 className="text-lg font-bold mb-2 pb-2">{paints.paintName}</h2>
                <h4 className="text-xs text-white mb-2">{paints._id}</h4>
                <p className="text-sm text-white font-medium mb-2">
                    Paint finish: {paints.paintFinishes}
                </p>
                <p className="text-sm text-white font-medium">
                    Paint composition: {paints.paintComposition}
                </p>
            </div>
        </div>
    )
}
export default PaintDetails