import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import userReducer from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 로컬 스토리지

const persistConfig = {
    key: 'root', // localStorage key
    storage, // 사용할 스토리지
    whitelist: ['user'], // persist할 리듀서
};
console.log('storage', storage);

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
