import { createSlice } from '@reduxjs/toolkit'

const controlsSlice = createSlice({
    name: "controls",
    initialState: {
        search: "",
        region: ""
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        cleanUp: (state, action) => {
            state.search = ""
            state.region = ""
        }
    }
})

export const { setSearch, setRegion, cleanUp } = controlsSlice.actions
export const controlsReducer = controlsSlice.reducer

export const selectSearch = state => state.controls.search
export const selectRegion = state => state.controls.region
export const selectControls = state => state.controls

