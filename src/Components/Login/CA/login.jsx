import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { dialog0, dialog6, dialog8 } from '../../../Redux/step';
import { LoginCAThunk } from '../../../Redux/loginSlice';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { setTitle } from '../../../Redux/heading';

function Login() {

    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [loader, setLoader] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const reducer = useSelector((s) => s.login)

    function handleShow1() {
        setShow1(!show1)
    }
    function handleShow2() {
        setShow2(!show2)
    }

    const loginState1 = {
        email: '',
        password: ''
    }
    const [login1, setLogin1] = useState(loginState1)

    useEffect(() => {
        if (rightemail.test(login1.email)) {
            document.getElementById("wrongEmailLog1").style.display = "none";
        } else if (login1.email) {
            document.getElementById("wrongEmailLog1").style.display = "block";
        }
    }, [login1.email]);

    function LoginCA1(e) {
        e.preventDefault();
        const data = {
            "email": login1.email,
            "password": login1.password
        }
            dispatch(LoginCAThunk(data)).
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
                        localStorage.setItem("CA_ID",res.payload.data.id)
                        dispatch(dialog0())
                        dispatch(setTitle("CA"))
                        toast.success(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        navigate('/ca_db')
                    }
                })
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
        <div className="register" id="regDiv">
            <div className="regFlex loginFlex">
                <img className="arrow" id="back" src={arrow} onClick={() => { dispatch(dialog6()) }} />
                <p className="heading" id="registerCA">Login as <span id="member">Campus Ambassador</span></p>
                <img className="cross" id="back" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form className='allForm' onSubmit={LoginCA1}>
            <p className="regName">Email</p>
            <input type="text" className="regInputname" placeholder="Enter your email" required value={login1.email} onChange={(e) => setLogin1({ ...login1, email: e.target.value })} />
            <p id="wrongEmailLog1">Please enter a valid Email address</p>
            <p className="regName">Password</p>
            {show1 ? (
                <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow1} />
            ) : (
                <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow1} />
            )}
            <input type={show1 ? "text" : "password"} className="regInputname inputPwd" required placeholder="Enter password" value={login1.password} onChange={(e) => setLogin1({ ...login1, password: e.target.value })} />
            <p className="forgotPass" id="caFgtpass" onClick={() => { dispatch(dialog8()) }}>Forgot Password ?</p>
            {/* <p id="wrongPwdLog1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p> */}
            <button className="regContinue" type="submit" >Continue</button>
            </form>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default Login