import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { dialog7, dialog0, dialog9 } from "../../../Redux/step";
import { FgtCAThunk } from "../../../Redux/loginSlice";
import ReCAPTCHA from "react-google-recaptcha";


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

    //captcha

    const [valu, setValu] = useState('')
    const [token, setToken] = useState(false);
    const key = "6LeZ8CElAAAAAPmAryGCBt-Y1bvEGF4VsITNJrAS"
    function onChange(value) {
        setValu(value)
        setToken(true)
    }


    function ForgotPassword() {

        if (!token) {
            toast.error("Please verify the captcha", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
        localStorage.setItem("login_email", email)

        const data = {
            email,
            "g-recaptcha-response": valu
        }
        if (token && email) {
            dispatch(FgtCAThunk(data)).
                then((res) => {

                    var y = res.payload.data.msg.replace(
                        /\w\S*/g,
                        function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }
                    );

                    if (res.payload.status == 400) {
                        toast.error(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    if (res.payload.status == 201) {
                        dispatch(dialog9())
                        toast.success(y, {
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
            <div className="regFlex" id="fgtHeadbox">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog7()) }} />
                <p className="heading">Forgot Password?</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <div className='allForm'>
            <p className="forgotText">We’ll send you a One Time Password on this email.</p>
            <p className="regName">Email</p>
            <input type="text" required className="regInputname" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p id="wrongEmailLog1">Please enter a valid Email address</p>
            <div id="recaptcha">
                <ReCAPTCHA
                    sitekey={key}
                    onChange={onChange}
                />
            </div>
            <button className="regButton" onClick={ForgotPassword}>Continue</button>
            </div>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default Forgot