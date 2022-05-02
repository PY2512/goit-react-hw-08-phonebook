import { 
    configureStore, 
    getDefaultMiddleware, 
    combineReducers, } 
    from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
];

const rootReducer = combineReducers({
    items: contactReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, rootReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);