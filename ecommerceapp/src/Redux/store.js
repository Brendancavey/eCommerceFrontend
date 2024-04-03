import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)
const persistedCategoryReducer = persistReducer(persistConfig, categoryReducer)

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        categories: persistedCategoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)

