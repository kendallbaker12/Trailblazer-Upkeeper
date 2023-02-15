import { useContext } from "react"
import { BuildingContext } from "../context/BuildingContext"

export const useBuildingContext = () => {
    const context = useContext(BuildingContext)

    if (!context) {
        throw Error('useBuildingContext must be used inside an BuildingContextProvider')
    }

    return context
}