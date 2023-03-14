import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Baseurl from "./Baseurl";

const initialState = {
    loading: false,
    msg: '',
}

const LoginTeamThunk = createAsyncThunk("login/team", async (data) => {
    return await Baseurl.post("participants/team_login", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const LoginCAThunk = createAsyncThunk("login/ca", async (data) => {
    return await Baseurl.post("participants/login", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})


const LoginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //team
        builder.addCase(LoginTeamThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(LoginTeamThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data[0] 
        })
        builder.addCase(LoginTeamThunk.rejected, (state, action) => {
            state.loading = false;
        })
        //CA
        builder.addCase(LoginCAThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(LoginCAThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data[0] 
        })
        builder.addCase(LoginCAThunk.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default LoginSlice

export {LoginCAThunk, LoginTeamThunk}