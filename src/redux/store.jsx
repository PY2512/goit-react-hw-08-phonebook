import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, loading } from './contacts/contacts-reducer';
import {filter} from './filter/filter-reducer';


const middleware = [
    ...getDefaultMiddleware()
    
];

const rootReducer = combineReducers({
    items,
    filter,
    loading,
});

export const store = configureStore({
    reducer: {
        contacts: rootReducer,
        // contacts: persistReducer(contactsPersistConfig, rootReducer),

    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);