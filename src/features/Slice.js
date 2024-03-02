import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
    name: "user",
    initialState:{
        user: {},
        userToken: ''
    },
    reducers:{
        Userdata: (state,{payload})=>{
            state.user = {payload}
        },
        UserToken: (state, {payload})=>{
            state.userToken = {payload}
        }
    }
})

export const {Userdata, UserToken} = MySlice.actions
export default MySlice.reducer