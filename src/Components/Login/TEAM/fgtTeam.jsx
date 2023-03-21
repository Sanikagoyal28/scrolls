import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { FgtTeamThunk } from "../../../Redux/loginSlice";
import { dialog12,dialog0, dialog13, dialog11 } from "../../../Redux/step";

function ForgotTeam() {

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
            dispatch(FgtTeamThunk(email)).
                then((res) => {
                   
                    if (res.payload.status == 400) {
                        toast.error(`${res.payload.data.msg}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    if (res.payload.status == 201) {
                        dispatch(dialog13())
                        toast.success(`${res.payload.data.msg}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
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
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog11()) }} />
                <p className="heading">Forgot Password ?</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
           
            <form onSubmit={(e)=>e.preventDefault()} id="loginForm">
            <p className="forgotText">We’ll send you a One Time Password on this email.</p>
            <p className="regName">Email</p>
            <input type="text" required className="regInputname" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p id="wrongEmailLog1">Please enter a valid Email address</p>
            <button className="regButton" onClick={ForgotPassword}>Continue</button>
            </form>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default ForgotTeam