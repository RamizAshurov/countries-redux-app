import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCountries, selectCountriesInfo, selectFilteredCountries } from './countriesSlice';
import { selectControls } from '../controls/controlsSlice';

const useCountries = () => {
    const dispatch = useDispatch()
    const controls = useSelector(selectControls)
    const countries = useSelector(state => selectFilteredCountries(state, controls))
    const { status, error } = useSelector(selectCountriesInfo)

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    return [status, error, countries]
}

export { useCountries }