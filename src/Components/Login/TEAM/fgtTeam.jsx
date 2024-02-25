import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { FgtTeamThunk } from "../../../Redux/loginSlice";
import { dialog12, dialog0, dialog13, dialog11 } from "../../../Redux/step";
import ReCAPTCHA from "react-google-recaptcha";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useCallback } from "react";

function ForgotTeam() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.login)
    const [email, setEmail] = useState("")
    const [loader, setLoader] = useState(false)
    const [bool, setBool] = useState(false)
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (rightemail.test(email)) {
            document.getElementById("wrongEmailLog1").style.display = "none";
            setBool(true)
        } else if (email) {
            document.getElementById("wrongEmailLog1").style.display = "block";
            setBool(false)
        }
    }, [email]);

    //captcha
    const [valu, setValu] = useState('')
    const [token, setToken] = useState(false);
    const [load, setLoad] = useState(false)
    const key = "6Lc40yElAAAAAJuSuZ8MhKA4ZSB_gXoVmTWu6KWP"

    const onVerify = useCallback((token) => {
     
        setValu(token)
        setToken(true)
    });

    const [count, setCount] = useState(false)

    useEffect(() => {
        if (valu != '')
            setCount(false)
    }, [valu])


    function ForgotPassword(e) {
        e.preventDefault();
        
        if (bool) {
            setLoad(true)
            setCount(true)
        }

        const data = {
            email,
            "g-recaptcha-response": valu
        }
        localStorage.setItem("login_email", email)
        // if (token && email && bool) {
        //     dispatch(FgtTeamThunk(data)).
        //         then((res) => {
        //             var y = res.payload.data.msg.replace(
        //                 /\w\S*/g,
        //                 function (txt) {
        //                     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        //                 }
        //             );

        //             if (res.payload.status == 400) {
        //                 toast.error(y, {
        //                     position: "top-right",
        //                     theme: "light",
        //                     autoClose: 5000,
        //                 });
        //             }
        //             if (res.payload.status == 201) {
        //                 dispatch(dialog13())
        //                 toast.success(y, {
        //                     position: "top-right",
        //                     theme: "light",
        //                     autoClose: 5000,
        //                 });
        //             }
        //             if (res.payload.status === 429) {
        //                 toast.error("You have attempted too many times Today, please try again tomorrow", {
        //                     position: "top-right",
        //                     theme: "light",
        //                     autoClose: 5000,
        //                 });
        //             }
        //         })
        // }
    }

    useEffect(() => {
        if (valu != '') {
            const data = {
                email,
                "g-recaptcha-response": valu
            }
           
            dispatch(FgtTeamThunk(data)).
                then((res) => {
                    setLoad(false)
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
                        dispatch(dialog13())
                        toast.success(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    if (res.payload.status === 429) {
                        toast.error("You have attempted too many times Today, please try again tomorrow", {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
        }
    }, [valu])

    const [timer, setTimer] = useState(10)
    useEffect(() => {
        if (reducer.loading || load) {
            const time =
                timer > 0 && setInterval(() => {
                    setTimer(timer - 1)
                }, 1000)
            return () => clearInterval(time)
        }
    }, [timer, reducer.loading, load])

    useEffect(() => {
        if (timer > 0) {
            if (reducer.loading || load) {
                setLoader(true)
                document.body.style.opacity = 0.5;
            }
            else {
                setLoader(false)
                document.body.style.opacity = 1;
            }
        }
        else {
            setLoader(false)
            document.body.style.opacity = 1;
            setLoad(false)
        }
    }, [reducer.loading, load, timer])

    return <>
        <div className="register">
            <div className="regFlex" id="fgtHeadbox">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog11()) }} />
                <p className="heading" id="forgotHead">Forgot Password?</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>

            <form className='allForm' onSubmit={ForgotPassword} id="loginForm">
                <p className="forgotText">We’ll send you a One Time Password on this email.</p>
                <p className="regName">Email ID</p>
                <input type="text" className="regInputname" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p id="wrongEmailLog1">Please enter a valid Email address</p>
                <div id="recaptcha">
                    {count ?

                        < GoogleReCaptchaProvider reCaptchaKey={key}>
                            <GoogleReCaptcha onVerify={onVerify} />
                        </GoogleReCaptchaProvider>
                        : null
                    }
                </div>
                <button className="regButton" type="submit" >Continue</button>
            </form>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default ForgotTeam