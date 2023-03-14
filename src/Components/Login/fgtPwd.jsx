import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { dialog7, dialog0, dialog9 } from "../../Redux/step";
import { FgtCAThunk } from "../../Redux/loginSlice";

function Forgot() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.login)
    const [email, setEmail] = useState("")
    const [loader, setLoader] = useState(false)
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (rightemail.test(email)) {
            document.getElementById("wrongEmailLog1").style.display = "none";
        } else if (email) {
            document.getElementById("wrongEmailLog1").style.display = "block";
        }
    }, [email]);

    function ForgotPassword() {

        localStorage.setItem("login_email", email)
        if (email) {
            dispatch(FgtCAThunk(email)).
                then((res) => {
                    dispatch(dialog9())
                    console.log(res)
                })
        }
    }

    useEffect(() => {
        if (reducer.loading) {
            setLoader(true)
            document.body.style.opacity = 0.5;
        }
        else {
            setLoader(false)
            document.body.style.opacity = 1;
        }
    }, [reducer.loading])

    return <>
        <div className="register">
            <div className="regFlex">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog7()) }} />
                <p className="heading">Forgot Password ?</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <p className="forgotText">We’ll send you a One Time Password on this email.</p>
            <p className="regName">Email</p>
            <input type="text" className="regInputname" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p id="wrongEmailLog1">Please enter a valid Email address</p>
            <button className="regButton" onClick={ForgotPassword}>Continue</button>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default Forgot