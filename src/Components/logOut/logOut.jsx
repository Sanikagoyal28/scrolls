import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../../Redux/heading";
import { dialog0 } from "../../Redux/step";
import logout from "../Assets/logout.svg"
import "./logout.css"

function LogOut() {
    const naavigate = useNavigate()
    const dispatch = useDispatch()
    function handleLogOut() {
        localStorage.clear();
       dispatch(setTitle(""))
        dispatch(dialog0())
        naavigate('/')

    }

    function handleCancelLog() {
        dispatch(dialog0())
    }

    return <>
        <div className="logoutDiv">
            <div className="lOut1">
                <p className="logoutText1">Log Out?</p>
                <p className="logoutText2">Are you sure you want to log out?</p>
                <button className="logoutbtn1" onClick={handleLogOut}>Yes</button>
                <button className="logoutbtn2" onClick={handleCancelLog}>No</button>
            </div>
            <div className="lOut2">
                <img src={logout} className="logoutImage" />
            </div>
        </div>

    </>
}

export default LogOut;