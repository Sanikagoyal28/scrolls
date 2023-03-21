import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title:''
}

const titleSlice = createSlice({
    name:"title",
    initialState,
    reducers:{
        setTitle: function (state, action) {
            // return action.payload
           state.title = action.payload
        }
    }
})

export default titleSlice
export const {setTitle} = titleSlice.actions