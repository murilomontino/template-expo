import { useDispatch } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { persistReducer, persistStore } from 'redux-persist'

import { configureStore } from '@reduxjs/toolkit'

import rootReducers from './reducers'

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['drugs'],
}

const persistedReducer = persistReducer(config, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
