import { combineReducers } from "redux"
import LoginSlice from "./loginSlice"
import RegisterSlice from "./registerSlice"
import StepSlice from "./step"

const userReducer = combineReducers({
    register: RegisterSlice.reducer,
    login:LoginSlice.reducer,
    step: StepSlice.reducer
})

export default userReducer