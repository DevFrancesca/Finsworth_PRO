import { configureStore } from "@reduxjs/toolkit";
import MySliceReducer from './Slice'; 

const store = configureStore({
  reducer: {
    mySlice: MySliceReducer 
  }
});

export default store;
