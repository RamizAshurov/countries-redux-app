export const SET_LOADING = "countries/SET_LOADING"
export const SET_COUNTIRES = "countries/SET_COUNTRIES"
export const SET_ERROR = "countries/SET_ERROR"

const setLoading = () => ({
    type: SET_LOADING
})

const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

const setCountries = (data) => ({
    type: SET_COUNTIRES,
    payload: data
})

const loadingCountries = () => (dispatch, _, { client, config }) => {
    dispatch(setLoading())

    client.get(config.ALL_COUNTRIES)
        .then(response => dispatch(setCountries(response.data)))
        .catch(error => dispatch(setError(error)))
}

export { loadingCountries }