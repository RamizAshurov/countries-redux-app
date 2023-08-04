import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './features/theme/themeSlice';
import { controlsReducer } from './features/controls/controlsSlice';
import { countriesReducer } from './features/countries/countriesSlice'
import { countryDetailsReducer } from './features/country-detail/countryDetailsSlice';

import axios from 'axios';
import * as api from './config'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countriesReducer,
        currentCountry: countryDetailsReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false
    })
})

export default store