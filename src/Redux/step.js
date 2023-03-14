import { checkboxClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit"
import CA1 from "../Components/Register/CA1";
import Member from "../Components/Register/member";


const initialState ={
    step:0
}

const StepSlice = createSlice({
    name:'step',
    initialState:initialState,
    reducers :{
        dialog0: function (state){
            state.step = 0;
        },
        dialog1:function (state){
            state.step = 1;
        },
        dialog2:function (state){
            state.step = 2;
        },
        dialog3:function (state){
            state.step = 3 ;
        },
        dialog4:function (state){
            state.step = 4 ;
        },
        dialog5:function (state){
            state.step = 5 ;
        },
        dialog6:function (state){
            state.step = 6 ;
        },
        dialog7:function (state){
            state.step = 7 ;
        },
        dialog8:function (state){
            state.step = 8 ;
        },
        dialog9:function (state){
            state.step = 9 ;
        },
        dialog10:function (state){
            state.step = 10 ;
        },
    }
})

export default StepSlice;
export const {dialog0, dialog1, dialog2, dialog3, dialog4, dialog5, dialog6, dialog7, dialog8, dialog9, dialog10} = StepSlice.actions;


// 1. register 1
// 2. register member
// 3. register team
// 4. register CA email check
// 5. register CA
// 6. login option
// 7. login 1
// 8. login 2
// 9. login 3
// 10. login 4
