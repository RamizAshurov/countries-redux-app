export const SET_LOADING = "country-details/SET_LOADING"
export const SET_COUNTRY = "country-details/SET_COUNTRY"
export const SET_ERROR = "country-details/SET_ERROR"
export const CLEAR_COUNTRY = "country-details/CLEAR_COUNTRY"
export const SET_NEIGHBOURS = "country-details/SET_NEIGHBOURS"

const setLoading = () => ({
    type: SET_LOADING,
})

const setCountry = country => ({
    type: SET_COUNTRY,
    payload: country
})

const setError = error => ({
    type: SET_ERROR,
    payload: error
})

const clearCountry = () => ({
    type: CLEAR_COUNTRY
})

const setNeighbours = (neighbours) => ({
    type: SET_NEIGHBOURS,
    payload: neighbours
})

const loadingCountryByName = (country) => (dispatch, _, { client, config }) => {
    dispatch(setLoading())

    client.get(config.searchByCountry(country))
        .then(response => dispatch(setCountry(response.data[0])))
        .catch(error => dispatch(setError(error.message)))
}

const loadingNeighbours = (neighbours) => (dispatch, _, { client, config }) => {
    client(config.filterByCode(neighbours))
        .then(response => dispatch(setNeighbours(response.data)))
        .catch(err => console.log(err.message))
}

export { clearCountry, loadingCountryByName, loadingNeighbours }