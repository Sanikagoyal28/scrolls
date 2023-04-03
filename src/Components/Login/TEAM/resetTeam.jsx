import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { ResetTeamThunk } from "../../../Redux/loginSlice";
import { dialog13, dialog0, dialog11 } from "../../../Redux/step";

function ResetTeam() {

    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.login)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [loader, setLoader] = useState(false)

    const inputState = {
        pass: '',
        confirmPass: '',
    }
    const [input, setInput] = useState(inputState)
    function handleShow1() {
        setShow1(!show1)
    }
    function handleShow2() {
        setShow2(!show2)
    }

    useEffect(() => {
        if (rightpass.test(input.pass)) {
            document.getElementById("WrongPwd1").style.display = "none";
        } else if (input.pass) {
            document.getElementById("WrongPwd1").style.display = "block";
        }
    }, [input.pass]);

    useEffect(() => {
        if (input.pass || input.confirmPass) {
            if (input.pass == input.confirmPass) {
                document.getElementById("WrongPwd2").style.display = "none";
            }
            else if (input.confirmPass) {
                document.getElementById("WrongPwd2").style.display = "block";
            }
        }
    }, [input.confirmPass, input.pass])

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

    function ResetPassword(e) {
        e.preventDefault()
        const data = {
            "email": localStorage.getItem("login_email"),
            "otp": localStorage.getItem("login_otp"),
            "password": input.pass
        }
        if (input.pass && input.confirmPass) {
            dispatch(ResetTeamThunk(data)).
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
                    if (res.payload.status == 200) {
                        dispatch(dialog11())
                        toast.success(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
        }
    }

    return <>
        <div className="register">
            <div className="regFlex" id="rstHeadbox" >
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog13()) }} />
                <p className="heading">Reset Password</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form className='allForm' onSubmit={ResetPassword} id="loginForm">
                <p className="regName">New Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow1} />
                )}
                <input type={show1 ? "text" : "password"} className="regInputname inputPwd" required placeholder="Enter password" value={input.pass} onChange={(e) => setInput({ ...input, pass: e.target.value })} />
                <p id="WrongPwd1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow2} />
                )}
                <input type={show2 ? "text" : "password"} className="regInputname inputPwd" required placeholder="Enter password" value={input.confirmPass} onChange={(e) => setInput({ ...input, confirmPass: e.target.value })} />
                <p id="WrongPwd2">Password entered in two fields must be same.</p>
                <button className="regButton" type="submit" >Reset Password</button>
            </form>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default ResetTeam