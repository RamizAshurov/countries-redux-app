import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer.js'

import axios from 'axios'
import * as config from '../config.js'

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhansers(applyMiddleware(thunk.withExtraArgument({
    client: axios,
    config
}))))

export { store }