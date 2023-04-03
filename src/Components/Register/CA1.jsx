
import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { RegCACheck } from "../../Redux/registerSlice";
import { Spinner } from 'react-bootstrap';
import { dialog0, dialog1, dialog5 } from "../../Redux/step";

function CA1 () {

        // ca registration
        const [loading, setLoading] = useState(false)
        const dispatch = useDispatch()
        const reducer = useSelector((s) => s.register)
        const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const [caEemail, setCAEmail] = useState('')

        useEffect(() => {
            if (rightemail.test(caEemail)) {
                document.getElementById("wrongCAEmail").style.display = "none";
            }
            else if (caEemail) {
                document.getElementById("wrongCAEmail").style.display = "block";
            }
        }, [caEemail])
    
        function CAEmailCheck() {
            localStorage.setItem("email", caEemail)
            if (caEemail) {
                dispatch(RegCACheck(caEemail)).
                    then((res) => {
                        if (res.payload.status === 200) {
                            toast.success(`${res.payload.data.msg}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                            dispatch(dialog0())
                        }
                        else if (res.payload.status === 409) {
                            toast.info(`${res.payload.data.msg}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                            dispatch(dialog0())
                        }
                        else if (res.payload.status === 400) {
                            toast.info("Fill the following form to complete registration process.", {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                            dispatch(dialog5())
                        }
                    })
                    .catch((err) => {
                       
                    })
            }
        }

        useEffect(() => {
            if (reducer.loading) {
                setLoading(true)
                document.body.style.opacity = 0.5;
            }
            else {
                setLoading(false)
                document.body.style.opacity = 1;
            }
        }, [reducer.loading])
        
    return <>
            <div className="register" id="regDiv">
                <div className="regFlex" id="regCA">
                    <img className="arrow" id="back" src={arrow} onClick={() => {dispatch(dialog1())}} />
                    <p className="heading" id="registerCA">Register as <span id="member">Campus Ambassador</span></p>
                    <img className="cross" id="back" src={cross} onClick={() => { dispatch(dialog0()) }} />
                </div>
                <div className="allForm">
                <p className="regName">Email ID</p>
                <input type="text" className="regInputname" placeholder="Enter your email" required value={caEemail} onChange={(e) => setCAEmail(e.target.value)} />
                <p id="wrongCAEmail">Please enter a valid Email address</p>
                </div>
                <button className="regContinue" onClick={() => { CAEmailCheck() }}>Continue</button>
            </div>
            <ToastContainer />
            {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default CA1