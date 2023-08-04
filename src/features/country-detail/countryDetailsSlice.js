import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fetchCountryByName = createAsyncThunk(
    "country-details/fetchCountryByName",
    async (name, thunkAPI) => {
        const { extra } = thunkAPI
        const { client, api } = extra

        const response = await client.get(api.searchByCountry(name))
        return response.data[0]
    }
)

const fetchNeighbours = createAsyncThunk(
    "country-details/fetchNeighbours",
    async (codes, thunkAPI) => {
        const { extra } = thunkAPI
        const { client, api } = extra

        const response = await client.get(api.filterByCode(codes))
        return response.data
    }
)

const initialState = {
    status: "idle",
    country: {},
    error: null,
    neighbours: []
}

const countryDetailsSlice = createSlice({
    name: "country-details",
    initialState,
    reducers: {
        clearCountry: (state, action) => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryByName.pending, (state, action) => {
                state.status = "loading"
                state.error = "null"
            })
            .addCase(fetchCountryByName.fulfilled, (state, action) => {
                state.status = "recievied"
                state.country = action.payload
            })
            .addCase(fetchCountryByName.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error
            })
            .addCase(fetchNeighbours.fulfilled, (state, action) => {
                state.neighbours = action.payload
            })
    }
})

export const { clearCountry } = countryDetailsSlice.actions
export const countryDetailsReducer = countryDetailsSlice.reducer

export { fetchCountryByName, fetchNeighbours }

export const selectCountryDetails = state => state.currentCountry
export const selectNeighbours = state => state.currentCountry.neighbours