import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCountry, fetchCountryByName, selectCountryDetails } from "./countryDetailsSlice";

const useFetchCountryByName = (name) => {
    const dispatch = useDispatch()
    
    const countryInfo = useSelector(selectCountryDetails)

    useEffect(() => {
        dispatch(fetchCountryByName(name))

        return () => dispatch(clearCountry())
    }, [name, dispatch])

    return countryInfo
}

export { useFetchCountryByName }