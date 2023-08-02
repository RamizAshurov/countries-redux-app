export const SET_SEARCH = "controls/SET_SEARCH"
export const SET_REGION = "controls/SET_REGION"
export const CLEAR_REGION = "controls/CLEAR_REGION"
export const CLEAN_UP = "controls/CLEAN_UP"

const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search
})

const setRegion = (region) => ({
    type: SET_REGION,
    payload: region
})

const clearRegion = () => ({ type: CLEAR_REGION })

const cleanUp = () => ({
    type: CLEAN_UP
})

export { setSearch, setRegion, clearRegion, cleanUp }