import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../Assets/menu.svg"
import cross from "../Assets/navCross.svg"
import { Dialog } from "@mui/material";
import Login from "../Login/CA/login";
import Reset from "../Login/CA/reset";
import Otp from "../Login/CA/otp";
import Forgot from "../Login/CA/fgtPwd";
import LoginTeam from "../Login/TEAM/loginTeam";
import ResetTeam from "../Login/TEAM/resetTeam";
import OtpTeam from "../Login/TEAM/otpTeam";
import ForgotTeam from "../Login/TEAM/fgtTeam";
import Register from "../Register/Register";
import Member from "../Register/member";
import Team from "../Register/team";
import CA1 from "../Register/CA1";
import CA2 from "../Register/CA2";
import Login1 from "../Login/login1";
import { useDispatch, useSelector } from "react-redux";
import { dialog1, dialog6 } from "../../Redux/step";
import "./Navbar.css"

function Navbar() {
    const [dialogg, setDialogg] = useState(false)
    const [login, setLogin] = useState(false)
    const dispatch = useDispatch()
    const step = useSelector((s) => s.step)

    const [stepDialog, setStepDialog] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
        fourteen: false
    })

    useEffect(() => {
        if (step.step == 0) {
            setStepDialog({
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false,
                eight: false,
                nine: false,
                ten: false,
                eleven: false,
                twelve: false,
                thirteen: false,
                fourteen: false
            })
        }
        if (step.step == 1 && dialogg) {
            setStepDialog({ one: true })
        }
        if (step.step == 2 && dialogg) {
            setStepDialog({ two: true })
        }
        if (step.step == 3 && dialogg) {
            setStepDialog({ three: true })
        }
        if (step.step == 4 && dialogg) {
            setStepDialog({ four: true })
        }
        if (step.step == 5 && dialogg) {
            setStepDialog({ five: true })
        }
        if (step.step == 6 && login) {
            setStepDialog({ six: true })
        }
        if (step.step == 7 && login) {
            setStepDialog({ seven: true })
        }
        if (step.step == 8 && login) {
            setStepDialog({ eight: true })
        }
        if (step.step == 9 && login) {
            setStepDialog({ nine: true })
        }
        if (step.step == 10 && login) {
            setStepDialog({ ten: true })
        }
        if (step.step == 11 && login) {
            setStepDialog({ eleven: true })
        }
        if (step.step == 12 && login) {
            setStepDialog({ twelve: true })
        }
        if (step.step == 13 && login) {
            setStepDialog({ thirteen: true })
        }
        if (step.step == 14 && login) {
            setStepDialog({ fourteen: true })
        }

    }, [step, dialogg])

    function showmenu() {
        document.getElementById('uli').style.width = "60vw";
    }

    function close() {
        document.getElementById('uli').style.width = 0;
    }

    const [show, setShow] = useState(false)
    function handleDropdown(){
        setShow(!show)

        if(show){
            document.getElementById('dropdown').style.display = "flex";
        }
        else{
            document.getElementById('dropdown').style.display = "none";
        }
    }


    return <>
        <div id='uli'>
            <img src={cross} id='crossimg' onClick={close}></img>
            <ul>
                <li>Home</li>
                <li>Domains</li>
                <li>Previous Year</li>
                <li>Updates</li>
                <li>Contacts</li>
                <li> <button className="liRegister" onClick={() => { setDialogg(true); dispatch(dialog1()) }} >Register</button></li>
                <li><button className="liLogin" onClick={() => { setLogin(true); dispatch(dialog6()) }} >Login</button></li>
            </ul>
        </div>

        <div id="dropdown">
            <ul>
                <li>Management Science</li>
                <li>Electronics and Communication Engineering</li>
                <li>Civil Engineering</li>
                <li>Electrical and Electronics Engineering</li>
                <li>Computer Science and Information Technology</li>
                <li>Mechanical Engineering</li>
            </ul>
        </div>

        <div className="navbar">
            <p className="navScroll">Scrolls<span className="navDot">.</span></p>
            <div className="navFlex1">

                <NavLink to="/"> <p className="navHead">Home</p></NavLink>
               <p className="navHead" onClick={handleDropdown}>Domains</p>
                <NavLink to="/previous_year"> <p className="navHead">Previous Year</p></NavLink>
                <NavLink to="/updates"> <p className="navHead">Updates</p></NavLink>
                <NavLink to="/"> <p className="navHead">Contact Us</p></NavLink>

            </div>
            <div className="navFlex2">
                <button className="navRegister" onClick={() => { setDialogg(true); dispatch(dialog1()) }}>Register</button>
                <button className="navLogin" onClick={() => { setLogin(true); dispatch(dialog6()) }}>Login</button>
                <img src={menu} id="menu" onClick={showmenu}></img>
            </div>

        </div>

        <Dialog open={stepDialog.one}>
            <Register />
        </Dialog>

        <Dialog open={stepDialog.two} PaperProps={{
            sx: {
                maxHeight: 1240,
                marginTop: 94
            }
        }} >
             <Member />
        </Dialog>

        <Dialog open={stepDialog.three} PaperProps={{
            sx: {
                maxHeight: 1100,
                marginTop: 76
            }
        }}>
            <Team />
        </Dialog>

        <Dialog open={stepDialog.four}>
            <CA1 />
        </Dialog>

        <Dialog open={stepDialog.five} PaperProps={{
            sx: {
                maxHeight: 1240,
                marginTop: 94
            }
        }} >
            <CA2 />
        </Dialog>

        <Dialog open={stepDialog.six} PaperProps={{
            sx: { maxHeight: 450 }
        }}>
            <Login1 />
        </Dialog>

        <Dialog open={stepDialog.seven} PaperProps={{
            sx: { maxHeight: 450 }
        }}>
            <Login />
        </Dialog>

        <Dialog open={stepDialog.eight} PaperProps={{
            sx: { maxHeight: 450 }
        }}>
            <Forgot />
        </Dialog>

        <Dialog open={stepDialog.nine} PaperProps={{
            sx: { maxHeight: 450 }
        }}>
            <Otp />
        </Dialog>

        <Dialog open={stepDialog.ten} PaperProps={{
            sx: { maxHeight: 450 }
        }} >
            <Reset />
        </Dialog>

        <Dialog open={stepDialog.eleven} PaperProps={{
            sx: { maxHeight: 450 }
        }} >
            <LoginTeam />
        </Dialog>

        <Dialog open={stepDialog.twelve} PaperProps={{
            sx: { maxHeight: 450 }
        }}>
            <ForgotTeam />
        </Dialog>

        <Dialog open={stepDialog.thirteen} PaperProps={{
            sx: { maxHeight: 450 }
        }}>
            <OtpTeam />
        </Dialog>

        <Dialog open={stepDialog.fourteen} PaperProps={{
            sx: { maxHeight: 450 }
        }} >
            <ResetTeam />
        </Dialog>
    </>
}

export default Navbar