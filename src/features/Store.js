import { configureStore } from "@reduxjs/toolkit";
import MySliceReducer from './Slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, MySliceReducer);

export const Store = configureStore({
  reducer: {
    mySlice: MySliceReducer,  persistedReducer, 
  }
});

export const persistor = persistStore(Store);
