import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { dialog8, dialog0, dialog10 } from "../../../Redux/step";
import { FgtCAThunk, OtpCAThunk } from "../../../Redux/loginSlice";
import OtpField from "react-otp-field"

function Otp() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.login)
    const [loader, setLoader] = useState(false)
    const [value, setValue] = useState("")
    const [seconds, setSeconds] = useState(59)
    const email = localStorage.getItem("login_email")

    useEffect(() => {
        const timer =
            seconds > 0 && setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000)
        return () => clearInterval(timer)
    }, [seconds])

    useEffect(() => {
        if (seconds != 0)
            document.getElementById("resendOtp").style.opacity = "0.5";
        else
            document.getElementById("resendOtp").style.opacity = "1";
    }, [seconds])

    function Otp() {

        localStorage.setItem("login_otp", value)
        const data = {
            "email": email,
            "otp": value
        }
        console.log(data)
        if (value) {
            dispatch(OtpCAThunk(data)).
                then((res) => {
                  
                    if (res.payload.status == 400) {
                        toast.error(`${res.payload.data.msg}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    if (res.payload.status == 200) {
                        dispatch(dialog10())
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
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog8()) }} />
                <p className="heading">OTP Verification</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <p className="forgotText">Enter 4 digit OTP send to example@gmail.com</p>
            <div className="otpInputFlex">
                <OtpField className="otpInputFlex"
                    value={value}
                    onChange={setValue}
                    numInputs={4}
                    onChangeRegex={/^([0-9]{0,})$/}
                    autoFocus
                    isTypeNumber
                    inputProps={{ className: 'otpInput', disabled: false }}
                />
            </div>
            <div className="resend">
                <p id='resendOtp' disabled={seconds !== 0 ? true : false} onClick={() => { dispatch(FgtCAThunk(email), setSeconds(59)) }}>Resend Otp</p>
                <span id="timer">00:{seconds}</span>
            </div>
            <button className="regButton" onClick={Otp}>Continue</button>
        </div>

        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default Otp