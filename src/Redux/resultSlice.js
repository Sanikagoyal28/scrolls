import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Baseurl from "./Baseurl"

const initialState = {
    selectedTeam: '',
    loading:false
}

const ResultThunk = createAsyncThunk('/result', async () => {
    return await Baseurl.get('participants/team_results/')
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const ResultSlice = createSlice({
    name: "result",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(ResultThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(ResultThunk.fulfilled, (state, action) => {

            state.loading = false;
            state.selectedTeam = action.payload.data
        })
        builder.addCase(ResultThunk.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default ResultSlice
export {ResultThunk}