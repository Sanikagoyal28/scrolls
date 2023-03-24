import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Baseurl from "./Baseurl";

const initialState = {
    loading: false,
    msg: '',
    dataTeam:'',
    dataCA:''
}

const TeamDBThunk = createAsyncThunk("db/team", async () => {
    const accessToken = localStorage.getItem("accessToken")
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    console.log(config)
    return await Baseurl.get("participants/team_dashboard/", config)
        .then((res) => {

            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const TeamDBDataThunk = createAsyncThunk("db_data/team", async (data) => {
    const accessToken = localStorage.getItem("accessToken")
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
   
    return await Baseurl.patch("participants/team_dashboard/", data, config)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((Err) => {
            console.log(Err)
            return Err.response
        })
})

const CADBThunk = createAsyncThunk("db/ca", async () => {
    const id= localStorage.getItem("CA_ID")
    return await Baseurl.get(`participants/ca_dashboard/${id}`)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const DbSlice = createSlice({
    name: "db",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //team
        builder.addCase(TeamDBThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(TeamDBThunk.fulfilled, (state, action) => {
            console.log(action)
            state.loading = false;
            state.dataTeam = action.payload.data
        })
        builder.addCase(TeamDBThunk.rejected, (state, action) => {
            state.loading = false;
        })
        //team
        builder.addCase(TeamDBDataThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(TeamDBDataThunk.fulfilled, (state, action) => {
            console.log(action)
            state.loading = false;
            state.msg = action.payload.data.msg
        })
        builder.addCase(TeamDBDataThunk.rejected, (state, action) => {
            state.loading = false;
        })

        builder.addCase(CADBThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(CADBThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.dataCA = action.payload.data
        })
        builder.addCase(CADBThunk.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default DbSlice
export {TeamDBDataThunk, TeamDBThunk, CADBThunk}