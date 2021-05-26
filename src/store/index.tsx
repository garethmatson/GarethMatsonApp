import React from 'react'
import {Provider} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {applyMiddleware, compose, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga'
import reducer from 'src/reducers'
import sagas from 'src/sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  whitelist: ['auth', 'messaging'],
}

const composeEnhancers = compose
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
const persistedReducer = persistReducer(persistConfig, reducer)
const appStore = createStore(persistedReducer, enhancer)
// @ts-ignore
let persistor = persistStore(appStore)

sagaMiddleware.run(sagas)

const store = ({children}: {children: any}) => (
  <>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  </>
)

export default store
