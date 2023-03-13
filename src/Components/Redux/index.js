import { combineReducers } from "redux"
import RegisterSlice from "./registerSlice"

const userReducer = combineReducers({
    register: RegisterSlice.reducer
})

export default userReducer