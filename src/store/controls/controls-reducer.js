import { SET_REGION, CLEAR_REGION, SET_SEARCH, CLEAN_UP } from "./controls-actions";

const initialState = {
    search: "",
    region: ""
}
 
const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGION:
            return {
                ...state,
                region: action.payload
            }
        case CLEAR_REGION:
            return {
                ...state,
                region: ""
            }
        case SET_SEARCH: 
            return {
                ...state,
                search: action.payload
            }
        case CLEAN_UP: 
            return initialState
        default:
            return state;
    }
}

export { controlsReducer }