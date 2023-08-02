import { SET_LOADING, SET_COUNTIRES, SET_ERROR } from "./countries-actions"

const initialState = {
    status: "idle",
    error: null,
    list: []
}

const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: "loading",
                list: []
            }
        case SET_COUNTIRES: 
            return {
                ...state,
                status: "recievied",
                list: payload
            }
        case SET_ERROR: 
            return {
                ...state,
                status: "rejected",
                error: payload.message
            }
        default:
            return state
    }
}

export { countriesReducer }