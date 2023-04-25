import { combineReducers } from "redux"
import DbSlice from "./dashboard"
import titleSlice from "./heading"
import LoginSlice from "./loginSlice"
import RegisterSlice from "./registerSlice"
import StepSlice from "./step"
import ResultSlice from "./resultSlice"

const userReducer = combineReducers({
    register: RegisterSlice.reducer,
    login:LoginSlice.reducer,
    step: StepSlice.reducer,
    dashboard:DbSlice.reducer,
    heading: titleSlice.reducer,
    result:ResultSlice.reducer
})

export default userReducer