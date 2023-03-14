import { combineReducers } from "redux"
import LoginSlice from "./loginSlice"
import RegisterSlice from "./registerSlice"

const userReducer = combineReducers({
    register: RegisterSlice.reducer,
    login:LoginSlice.reducer
})

export default userReducer