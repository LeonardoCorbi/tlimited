import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './Cart'
import loginReducer from './Login'
import userReducer from './User'

export interface ReduxProps {
  cart: Array<{}>,
  login: Boolean,
  user: Object
}

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  user: userReducer
})

const persistConfig = {
  key: 'tlimited',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const redux = createStore(persistedReducer)
const persistor = persistStore(redux)

export {redux, persistor}