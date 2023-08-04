import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fetchCountries = createAsyncThunk(
    "countries/fetchCountries", 
    async (_, thunkAPI) => {
        const { extra } = thunkAPI;
        const { client, api } = extra

        const response = await client.get(api.ALL_COUNTRIES)
        return response.data
    }
)

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        status: "idle",
        entities: [],
        error: null
    },
    reducer: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = "loading"
                state.error = null
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = "recievied"
                state.entities = action.payload
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error
            })
    }
})

export { fetchCountries }
export const countriesReducer = countriesSlice.reducer

export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.entities.length
})

export const selectAllCountries = (state) => state.countries.entities
export const selectFilteredCountries = (state, { search, region }) => {

    if (search === "" && region === "") 
        return state.countries.entities
    
    return state.countries.entities.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
    })
}