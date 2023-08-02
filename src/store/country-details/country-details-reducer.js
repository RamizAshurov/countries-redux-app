import { SET_COUNTRY, SET_LOADING, SET_ERROR, CLEAR_COUNTRY, SET_NEIGHBOURS } from "./country-details-actions";

const initialState = {
    status: "idle",
    country: {},
    error: null,
    neighbours: []
}

const countryDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                status: "loading",
                error: null
            }
        case SET_COUNTRY: 
            return {
                ...state,
                status: "recievied",
                country: action.payload
            }
        case SET_ERROR: 
            return {
                ...state,
                status: "rejected",
                country: action.payload
            }
        case CLEAR_COUNTRY:
            return {
                ...state,
                status: "idle",
                country: {}
            }
        case SET_NEIGHBOURS:
            return {
                ...state,
                neighbours: action.payload
            }
        default:
            return state
    }
}


export { countryDetailsReducer }