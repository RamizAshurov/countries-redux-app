export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})

export const selectAllCountries = (state) => state.countries.list
export const selectFilteredCountries = (state, { search, region }) => {

    if (search === "" && region === "") 
        return state.countries.list
    
    return state.countries.list.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
    })
}