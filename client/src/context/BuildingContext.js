import { createContext, useReducer } from "react";

export const BuildingContext = createContext()

export const buildingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BUILDINGS':
            return {
                buildings: action.payload
            }
        case 'CREATE_BUILDING':
            return {
                buildings: [action.payload, ...state.buildings]
            }
        default:
            return state
    }
}

export const BuildingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(buildingsReducer, {
        buildings: null
    })

    // not sure what this does?
    // dispatch({ type: 'SET_BUILDINGS', payload: [{}, {}] })

    return (
        <BuildingContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BuildingContext.Provider>
    )
}