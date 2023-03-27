import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Baseurl from "./Baseurl";

const initialState = {
    loading: false,
    msg: '',
}

const LoginTeamThunk = createAsyncThunk("login/team", async (data) => {
    return await Baseurl.post("participants/team_login/", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const FgtTeamThunk = createAsyncThunk("fgt/team", async (data) => {
    return await Baseurl.post("participants/forgot_password/1", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const OtpTeamThunk = createAsyncThunk("otp/team", async (data) => {
    return await Baseurl.post("participants/verify_otp/1", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const ResetTeamThunk = createAsyncThunk("reset/team", async (data) => {
    return await Baseurl.patch("participants/forgot_password/1", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const LoginCAThunk = createAsyncThunk("login/ca", async (data) => {
    return await Baseurl.post("participants/login/", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})


const FgtCAThunk = createAsyncThunk("fgt/ca", async (data) => {
    return await Baseurl.post("participants/forgot_password/0", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const OtpCAThunk = createAsyncThunk("otp/ca", async (data) => {
    return await Baseurl.post("participants/verify_otp/0", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const ResetCAThunk = createAsyncThunk("reset/ca", async (data) => {
    return await Baseurl.patch("participants/forgot_password/0", data)
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
            state.msg = action.payload.data.msg 
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
            state.msg = action.payload.data.msg  
        })
        builder.addCase(LoginCAThunk.rejected, (state, action) => {
            state.loading = false;
        })

         //fgt team
         builder.addCase(FgtTeamThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(FgtTeamThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data.msg 
        })
        builder.addCase(FgtTeamThunk.rejected, (state, action) => {
            state.loading = false;
        })

        // otp team
        builder.addCase(OtpTeamThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(OtpTeamThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data.msg 
        })
        builder.addCase(OtpTeamThunk.rejected, (state, action) => {
            state.loading = false;
        })

        // reset team
        builder.addCase(ResetTeamThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(ResetTeamThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data.msg 
        })
        builder.addCase(ResetTeamThunk.rejected, (state, action) => {
            state.loading = false;
        })

         // fgt CA
         builder.addCase(FgtCAThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(FgtCAThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data.msg 
        })
        builder.addCase(FgtCAThunk.rejected, (state, action) => {
            state.loading = false;
        })

         // otp CA
         builder.addCase(OtpCAThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(OtpCAThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data.msg  
        })
        builder.addCase(OtpCAThunk.rejected, (state, action) => {
            state.loading = false;
        })

         // reset CA
         builder.addCase(ResetCAThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(ResetCAThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data.msg  
        })
        builder.addCase(ResetCAThunk.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default LoginSlice

export {LoginCAThunk, LoginTeamThunk, FgtTeamThunk, FgtCAThunk, OtpTeamThunk, OtpCAThunk, ResetCAThunk, ResetTeamThunk}