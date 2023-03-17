import { combineReducers } from "redux"
import DbSlice from "./dashboard"
import LoginSlice from "./loginSlice"
import RegisterSlice from "./registerSlice"
import StepSlice from "./step"

const userReducer = combineReducers({
    register: RegisterSlice.reducer,
    login:LoginSlice.reducer,
    step: StepSlice.reducer,
    dashboard:DbSlice.reducer
})

export default userReducer