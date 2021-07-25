import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import reducer from './reducers'
import { persistReducer } from 'redux-persist'
import storage from './storage'
import { commonMiddleware } from './middlewares/commonMiddleware'

export interface AppState {
  metadata: any
  auth: any
}

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return configureStore({
      reducer,
      middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
    })
  } else {
    const persistConfig = {
      key: 'auth',
      whitelist: ['auth'],
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware({
        serializableCheck: false,
      }).concat(commonMiddleware),
    })

    return store
  }
}

export const storeWrapper = createWrapper(initStore)
export type StoreType = ReturnType<typeof initStore>
export type RootState = ReturnType<StoreType['getState']>
export type AppDispatch = StoreType['dispatch']
