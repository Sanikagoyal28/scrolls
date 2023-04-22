import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../Assets/menu.svg"
import cross from "../Assets/navCross.svg"
import dropdown from "../Assets/dropdown.svg"
import domain from "../Assets/domain.svg"
import { Button, Dialog, DialogTitle } from "@mui/material";
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
import { dialog1, dialog6, logout } from "../../Redux/step";
import "./Navbar.css"
import LogOut from "../logOut/logOut";
import { RegOpenThunk } from "../../Redux/registerSlice";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
    const [dialogg, setDialogg] = useState(false)
    const [login, setLogin] = useState(false)
    const reducer = useSelector((s) => s.register)
    const [loading, setLoading] = useState(false)
    const [out, setOut] = useState(false)
    const [path, setPath] = useState("")
    const [soon, setSoon] = useState(false)
    const dispatch = useDispatch()
    const step = useSelector((s) => s.step)
    const { title } = useSelector((s) => s.heading)

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
        fourteen: false,
        logout: false
    })

    useEffect(() => {
        if (step.step === 0) {
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
                fourteen: false,
                logout: false
            })
        }
        if (step.step === 1 && dialogg) {
            setStepDialog({ one: true })
        }
        if (step.step === 2 && dialogg) {
            setStepDialog({ two: true })
        }
        if (step.step === 3 && dialogg) {
            setStepDialog({ three: true })
        }
        if (step.step === 4 && dialogg) {
            setStepDialog({ four: true })
        }
        if (step.step === 5 && dialogg) {
            setStepDialog({ five: true })
        }
        if (step.step === 6 && login) {
            setStepDialog({ six: true })
        }
        if (step.step === 7 && login) {
            setStepDialog({ seven: true })
        }
        if (step.step === 8 && login) {
            setStepDialog({ eight: true })
        }
        if (step.step === 9 && login) {
            setStepDialog({ nine: true })
        }
        if (step.step === 10 && login) {
            setStepDialog({ ten: true })
        }
        if (step.step === 11 && login) {
            setStepDialog({ eleven: true })
        }
        if (step.step === 12 && login) {
            setStepDialog({ twelve: true })
        }
        if (step.step === 13 && login) {
            setStepDialog({ thirteen: true })
        }
        if (step.step === 14 && login) {
            setStepDialog({ fourteen: true })
        }
        if (step.step === 15 && out) {
            setStepDialog({ logout: true })
        }

    }, [step, dialogg])

    useEffect(() => {
        if (title === "Team") {
            document.getElementsByClassName("liRegister")[0].style.display = "none"
            document.getElementsByClassName("liLogin")[0].style.display = "none"
            document.getElementById("ca").style.display = "none"
            document.getElementById("team").style.display = "block"
            document.getElementById("liTitle").style.display = "block"
            document.getElementById("liLogout").style.display = "block"
            setPath("/team_db")
            document.getElementsByClassName("navFlex1")[0].style.display = "none"
            document.getElementsByClassName("navFlexLogin")[0].style.display = "flex"
            document.getElementsByClassName("navRegister")[0].style.display = "none"
            document.getElementsByClassName("navLogin")[0].style.display = "none"
            document.getElementsByClassName("navDbT")[0].style.display = "block"
            document.getElementsByClassName("navFlex3")[0].style.display = "flex"
        }

        if (title === "CA") {
            document.getElementsByClassName("liRegister")[0].style.display = "none"
            document.getElementsByClassName("liLogin")[0].style.display = "none"
            document.getElementById("team").style.display = "none"
            document.getElementById("ca").style.display = "block"
            document.getElementById("liTitle").style.display = "block"
            document.getElementById("liLogout").style.display = "block"
            setPath("/ca_db")
            document.getElementsByClassName("navFlex1")[0].style.display = "none"
            document.getElementsByClassName("navFlexLogin")[0].style.display = "flex"
            document.getElementsByClassName("navRegister")[0].style.display = "none"
            document.getElementsByClassName("navLogin")[0].style.display = "none"
            document.getElementsByClassName("navDbT")[0].style.display = "block"
            document.getElementsByClassName("navFlex3")[0].style.display = "flex"
        }

        if (title === "") {
            document.getElementsByClassName("liRegister")[0].style.display = "block"
            document.getElementsByClassName("liLogin")[0].style.display = "block"
            document.getElementById("ca").style.display = "none"
            document.getElementById("team").style.display = "none"
            document.getElementById("liTitle").style.display = "none"
            document.getElementById("liLogout").style.display = "none"
            document.getElementsByClassName("navFlex1")[0].style.display = "flex"
            document.getElementsByClassName("navFlexLogin")[0].style.display = "none"
            document.getElementsByClassName("navRegister")[0].style.display = "block"
            document.getElementsByClassName("navLogin")[0].style.display = "block"
            document.getElementsByClassName("navDbT")[0].style.display = "none"
            document.getElementsByClassName("navFlex3")[0].style.display = "none"

        }
    }, [title])

    const [showD, setShowD] = useState(false)
    function showmenu() {
        setShowD(prev => !prev)
        // document.getElementById('uli').style.width = "55vw";
    }

    function close() {
        setShowD(false)
        document.getElementById('uli').style.width = 0;
    }

    useEffect(() => {
        if (showD)
            document.getElementById('uli').style.width = "55vw";
        else
            document.getElementById('uli').style.width = 0;
    }, [showD])

    const [show, setShow] = useState(false)
    function handleDropdown() {
        setShow(true)
        document.getElementById('dropdown').style.display = "flex";
    }
    function closeDropdown() {
        setShow(false)
        setMore(false)
        document.getElementById('dropdown').style.display = "none";
        document.getElementById('moreDD').style.display = "none";
        document.getElementById('moreDD2').style.display = "none";
    }

    const [more, setMore] = useState(false)
    function handleMore() {
       
        setMore(true)
        document.getElementById('moreDD').style.display = "flex";
    }

    const [more2, setMore2] = useState(false)
    function handleMore2() {
        setMore2(true)
        document.getElementById('moreDD2').style.display = "flex";
    }

    const [mobShow, setMobShow] = useState(false)

    function handleSoonClose() {
        setSoon(false)
    }

    //open registration
    function RegOpen() {
        dispatch(RegOpenThunk())
            .then((res) => {
                
                if (res.payload.status === 200) {
                    setDialogg(true);
                    dispatch(dialog1())
                }
                if (res.payload.status === 400) {
                    setDialogg(true);
                    setSoon(true)
                }
                if (res.payload.status === 429) {
                    toast.error("You have attempted too many times Today, please try again tomorrow", {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
            })
            .catch((err) => {
                // console.log(err)
            })
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
        {/* {showD && */}
        <div id='uli'>
            <img src={cross} id='crossimg' onClick={close}></img>
            <ul id="uliList">
                <NavLink to="/"><li>Home</li></NavLink>
                <li onClick={() => setMobShow(prev => !prev)}>Domains <img src={dropdown} id="domainIcon" /></li>
                {mobShow && <div id="liDropdown">
                    <ul>
                        <NavLink to="/domain_management"><li>Management Science</li></NavLink>
                        <NavLink to="/domain_me"><li>Mechanical Engineering</li></NavLink>
                        <NavLink to="/domain_civil"><li>Civil Engineering</li></NavLink>
                        <NavLink to="/domain_en"><li>Electrical and Electronics Engineering</li></NavLink>
                        <NavLink to="/domain_cs"><li>Computer Science and Information Technology</li></NavLink>
                        <NavLink to="/domain_ece"><li>Electronics and Communication Engineering</li></NavLink>
                    </ul>
                </div>}
                <NavLink to="/updates"><li>Updates</li></NavLink>
                <NavLink to="/process"><li>How To Register</li></NavLink>
                <NavLink to="/rules"><li>Rules</li></NavLink>
                <NavLink to="/faq"><li>FAQs</li></NavLink>
                <NavLink to="/team_db"><li id="team">Dashboard</li></NavLink>
                <NavLink to="/ca_db"><li id="ca">Dashboard</li></NavLink>
                <li id="liTitle">{title}</li>
                <li id="liLogout" onClick={() => { setOut(true); dispatch(logout()) }}>Logout</li>
                <li> <button className="liRegister" onClick={() => { RegOpen() }} >Register</button></li>
                <li><button className="liLogin" onClick={() => { setLogin(true); dispatch(dialog6()) }} >Login</button></li>
            </ul>
        </div>

        <div id="dropdown" onMouseOver={handleDropdown} onMouseLeave={closeDropdown}>
            <ul>
                <NavLink to="/domain_management"><li>Management Sciences</li></NavLink>
                <NavLink to="/domain_ece"> <li>Electronics and Communication Engineering</li></NavLink>
                <NavLink to="/domain_civil"><li>Civil Engineering</li></NavLink>
                <NavLink to="/domain_en"> <li>Electrical and Electronics Engineering</li></NavLink>
                <NavLink to="/domain_cs"> <li>Computer Science and Information Technology</li></NavLink>
                <NavLink to="/domain_me"> <li>Mechanical Engineering</li></NavLink>
            </ul>
        </div>

        <div id="moreDD" onMouseOver={handleMore} onMouseLeave={closeDropdown} >
            <ul>
                <NavLink to="/rules"><li>Rules</li></NavLink>
                <NavLink to="/process"> <li>How To Register</li></NavLink>
                <NavLink to="/faq"><li>FAQs</li></NavLink>
            </ul>
        </div>

        <div id="moreDD2" onMouseOver={handleMore2} onMouseLeave={closeDropdown} >
            <ul>
                <NavLink to="/rules"><li>Rules</li></NavLink>
                <NavLink to="/process"> <li>How To Register</li></NavLink>
                <NavLink to="/faq"><li>FAQs</li></NavLink>
            </ul>
        </div>

        <div className="navbar" onMouseLeave={closeDropdown}>
            <NavLink to="/"><p className="navScroll">SCROLLS<span className="navDot">.</span></p></NavLink>
            <div className="navFlex1">
                <NavLink to="/"><p className="navHead">Home</p></NavLink>
                <p className="navHead" onClick={handleDropdown} onMouseOver={handleDropdown} id="navdomain">Domains</p>
                <NavLink to="/updates"> <p className="navHead">Updates</p></NavLink>
                <NavLink to="/rules"> <p id="navRule" className="navHead">Rules</p></NavLink>
                <NavLink to="/process"> <p id="navCA" className="navHead">How To Register</p></NavLink>
                <NavLink to="/faq"><p id="navCA" className="navHead">FAQs</p></NavLink>
                <p className="navHead" id="navMore" onClick={handleMore} onMouseOver={handleMore}>More</p>
            </div>
            <div className="navFlexLogin">
                <NavLink to="/"><p className="navHead">Home</p></NavLink>
                <p className="navHead" onClick={handleDropdown} onMouseOver={handleDropdown} id="navdomain">Domains</p>
                <NavLink to="/updates"> <p className="navHead" id="navUpdate">Updates</p></NavLink>
                <NavLink to={path}><p className="navDbT">Dashboard</p></NavLink>
                {/* <NavLink to="/ca_db"><p className="navDbC" id="ca_db">Dashboard</p></NavLink> */}
                <NavLink to="/rules"> <p id="navRule2" className="navHead">Rules</p></NavLink>
                <NavLink to="/process"> <p id="navCA" className="navHead">How To Register</p></NavLink>
                <NavLink to="/faq"><p id="navCA" className="navHead">FAQs</p></NavLink>
                <p className="navHead" id="navMore2" onClick={handleMore2} onMouseOver={handleMore2}>More</p>
            </div>
            <div className="navFlex2">
                <button className="navRegister" onClick={() => { RegOpen() }}>Register</button>
                <button className="navLogin" onClick={() => { setLogin(true); dispatch(dialog6()) }}>Login</button>
                <img src={menu} id="menu" onClick={showmenu}></img>
            </div>
            <div className="navFlex3">
                <p className="navTitle">{title}</p>
                <p className="logout" onClick={() => { setOut(true); dispatch(logout()) }}>Logout</p>
            </div>
        </div>

        <Dialog open={stepDialog.one} PaperProps={{
            sx: {
                maxHeight: 1300,
                marginTop: 60,
                maxWidth: 1000
            }
        }}>
        <Team />
            {/* <Register /> */}
        </Dialog>

        <Dialog open={stepDialog.two} PaperProps={{
            sx: {
                maxHeight: 1100,
                marginTop: 94,
                maxWidth: 1000
            }
        }} >
            <Member />
        </Dialog>

        {/* <Dialog open={stepDialog.three} PaperProps={{
            sx: {
                maxHeight: 1100,
                marginTop: 76,
                maxWidth: 1000
            }
        }}>
            <Team />
        </Dialog> */}

        <Dialog open={stepDialog.four} PaperProps={{
            sx: { maxWidth: 1000 }
        }}>
            <CA1 />
        </Dialog>

        <Dialog open={stepDialog.five} PaperProps={{
            sx: {
                maxHeight: 1240,
                marginTop: 94,
                maxWidth: 1000
            }
        }} >
            <CA2 />
        </Dialog>

        <Dialog open={stepDialog.six} PaperProps={{
            sx: { maxHeight: 450, maxWidth: 1000 }
        }}>
            <LoginTeam />
            {/* <Login1 /> */}
        </Dialog>

        {/* <Dialog open={stepDialog.seven} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }}>
            <Login />
        </Dialog>

        <Dialog open={stepDialog.eight} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }}>
            <Forgot />
        </Dialog>

        <Dialog open={stepDialog.nine} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }}>
            <Otp />
        </Dialog>

        <Dialog open={stepDialog.ten} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }} >
            <Reset />
        </Dialog> */}

        {/* <Dialog open={stepDialog.eleven} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }} >
            <LoginTeam />
        </Dialog> */}

        <Dialog open={stepDialog.twelve} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }}>
            <ForgotTeam />
        </Dialog>

        <Dialog open={stepDialog.thirteen} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }}>
            <OtpTeam />
        </Dialog>

        <Dialog open={stepDialog.fourteen} PaperProps={{
            sx: { maxHeight: 500, maxWidth: 1000 }
        }} >
            <ResetTeam />
        </Dialog>

        <Dialog open={stepDialog.logout} PaperProps={{
            sx: { maxWidth: 1000 }
        }}>
            <LogOut />
        </Dialog>

        <Dialog open={soon} onClose={handleSoonClose}
            keepMounted >
            <div id="soonDialog">
                <DialogTitle>{"Registrations will open soon"}</DialogTitle>
                <Button onClick={handleSoonClose}>Okay</Button>
            </div>
        </Dialog>
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        <ToastContainer />
    </>
}

export default Navbar