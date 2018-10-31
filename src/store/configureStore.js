import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import * as reducers from '../reducers'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['nav', 'counter'],
  transforms: [immutableTransform()],
}

const reducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, reducer)

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

export default function configureStore() {
  let store = createStore(
    persistedReducer,
    applyMiddleware(logger, thunk, middleware),
  )
  let persistor = persistStore(store)

  return { store, persistor }
}
