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

function Navbar() {
    const [dialogg, setDialogg] = useState(false)
    const [login, setLogin] = useState(false)
    const [out, setOut] = useState(false)
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
            if(showD){
            document.getElementsByClassName("liRegister")[0].style.display = "none"
            document.getElementsByClassName("liLogin")[0].style.display = "none"
            document.getElementById("ca").style.display = "none"
            document.getElementById("team").style.display = "block"
            document.getElementById("liTitle").style.display = "block"
            document.getElementById("liLogout").style.display = "block"
            }
            document.getElementsByClassName("navFlex1")[0].style.display = "none"
            document.getElementsByClassName("navFlexLogin")[0].style.display = "flex"
            document.getElementsByClassName("navRegister")[0].style.display = "none"
            document.getElementsByClassName("navLogin")[0].style.display = "none"
            document.getElementsByClassName("navDbC")[0].style.display = "none"
            document.getElementsByClassName("navDbT")[0].style.display = "block"
            document.getElementsByClassName("navFlex3")[0].style.display = "flex"
        }

        if (title === "CA") {
            if(showD){
            document.getElementsByClassName("liRegister")[0].style.display = "none"
            document.getElementsByClassName("liLogin")[0].style.display = "none"
            document.getElementById("team").style.display = "none"
            document.getElementById("ca").style.display = "block"
            document.getElementById("liTitle").style.display = "block"
            document.getElementById("liLogout").style.display = "block"
            }
            document.getElementsByClassName("navFlex1")[0].style.display = "none"
            document.getElementsByClassName("navFlexLogin")[0].style.display = "flex"
            document.getElementsByClassName("navRegister")[0].style.display = "none"
            document.getElementsByClassName("navLogin")[0].style.display = "none"
            document.getElementsByClassName("navDbC")[0].style.display = "block"
            document.getElementsByClassName("navDbT")[0].style.display = "none"
            document.getElementsByClassName("navFlex3")[0].style.display = "flex"
        }

        if (title === "") {
            if(showD){
            document.getElementsByClassName("liRegister")[0].style.display = "block"
            document.getElementsByClassName("liLogin")[0].style.display = "block"
            document.getElementById("ca").style.display = "none"
            document.getElementById("team").style.display = "none"
            document.getElementById("liTitle").style.display = "none"
            document.getElementById("liLogout").style.display = "none"
            }
            document.getElementsByClassName("navFlex1")[0].style.display = "flex"
            document.getElementsByClassName("navFlexLogin")[0].style.display = "none"
            document.getElementsByClassName("navRegister")[0].style.display = "block"
            document.getElementsByClassName("navLogin")[0].style.display = "block"
            document.getElementsByClassName("navDbC")[0].style.display = "none"
            document.getElementsByClassName("navDbT")[0].style.display = "none"
            document.getElementsByClassName("navFlex3")[0].style.display = "none"
            
        }
    }, [title])

    const [showD, setShowD] = useState(false)
    function showmenu() {
        setShowD(prev => !prev)
       
        // if(showD)
        // document.getElementById('uli').style.width = "60vw";
        // else
        // document.getElementById('uli').style.width = 0;
    }

    function close() {
        setShowD(false)
    }

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
    }

    const [more, setMore] = useState(false)
    function handleMore() {
        console.log(more)
        setMore(true)
        document.getElementById('moreDD').style.display = "flex";
    }
    const [mobShow, setMobShow] = useState(false)

    function handleSoonClose() {
        setSoon(false)
    }

    return <>
     {showD&&
        <div id='uli'>
            <img src={cross} id='crossimg' onClick={close}></img>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <li onClick={()=>setMobShow(prev=>!prev)}>Domains <img src={dropdown} id="domainIcon"  /></li>
                {mobShow&&<div id="liDropdown">
                    <ul>
                        <NavLink to="/domain_management"><li>Management Science</li></NavLink>
                        <NavLink to="/domain_ece"><li>Electronics and Communication Engineering</li></NavLink>
                        <NavLink to="/domain_civil"><li>Civil Engineering</li></NavLink>
                        <NavLink to="/domain_en"><li>Electrical and Electronics Engineering</li></NavLink>
                        <NavLink to="/domain_cs"><li>Computer Science and Information Technology</li></NavLink>
                        <NavLink to="/domain_me"><li>Mechanical Engineering</li></NavLink>
                    </ul>
                </div>}
                <NavLink to="/updates"><li>Updates</li></NavLink>
                <NavLink to="/ca"><li>CA</li></NavLink>
                <NavLink to="/rules"><li>Rules</li></NavLink>
                <NavLink to="/faq"><li>FAQs</li></NavLink>
                <NavLink to="/team_db"><li id="team">Dashboard</li></NavLink>
                <NavLink to="/ca_db"><li id="ca">Dashboard</li></NavLink>
                <li id="liTitle">{title}</li>
                <li id="liLogout" onClick={() => { setOut(true); dispatch(logout()) }}>Logout</li>
                <li> <button className="liRegister" onClick={() => { setDialogg(true); setSoon(true) }} >Register</button></li>
                {/* <li> <button className="liRegister" onClick={() => { setDialogg(true); dispatch(dialog1()) }} >Register</button></li> */}
                <li><button className="liLogin" onClick={() => { setLogin(true); dispatch(dialog6()) }} >Login</button></li>
            </ul>
        </div>}

        <div id="dropdown" onMouseOver={handleDropdown} onMouseLeave={closeDropdown}>
            <ul>
                <NavLink to="/domain_management"><li>Management Science</li></NavLink>
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
                <NavLink to="/ca"> <li>CA</li></NavLink>
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
                <NavLink to="/ca"> <p id="navCA" className="navHead">CA</p></NavLink>
                <NavLink to="/faq"><p id="navCA" className="navHead">FAQs</p></NavLink>
                <p className="navHead" id="navMore" onClick={handleMore} onMouseOver={handleMore}>More</p>
            </div>
            <div className="navFlexLogin">
                <NavLink to="/"><p className="navHead">Home</p></NavLink>
                <p className="navHead" onClick={handleDropdown} onMouseOver={handleDropdown} id="navdomain">Domains</p>
                <NavLink to="/updates"> <p className="navHead" id="navUpdate">Updates</p></NavLink>
                <NavLink to="/team_db"><p className="navDbT">Dashboard</p></NavLink>
                <NavLink to="/ca_db"><p className="navDbC">Dashboard</p></NavLink>
                <NavLink to="/rules"> <p id="navRule" className="navHead">Rules</p></NavLink>
                <NavLink to="/ca"> <p id="navCA" className="navHead">CA</p></NavLink>
                <NavLink to="/faq"><p id="navCA" className="navHead">FAQs</p></NavLink>
                <p className="navHead" id="navMore2" onClick={handleMore} onMouseOver={handleMore}>More</p>
            </div>
            <div className="navFlex2">
                {/* <button className="navRegister" onClick={() => { setDialogg(true); setSoon(true) }}>Register</button> */}
                <button className="navRegister" onClick={() => { setDialogg(true); dispatch(dialog1()) }}>Register</button>
                <button className="navLogin" onClick={() => { setLogin(true); dispatch(dialog6()) }}>Login</button>
                <img src={menu} id="menu" onClick={showmenu}></img>
            </div>
            <div className="navFlex3">
                <p className="navTitle">{title}</p>
                <p className="logout" onClick={() => { setOut(true); dispatch(logout()) }}>Logout</p>
            </div>
        </div>

        <Dialog open={stepDialog.one}>
            <Register />
        </Dialog>

        <Dialog open={stepDialog.two} PaperProps={{
            sx: {
                maxHeight: 1300,
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
            sx: { maxHeight: 500 }
        }}>
            <Login />
        </Dialog>

        <Dialog open={stepDialog.eight} PaperProps={{
            sx: { maxHeight: 500 }
        }}>
            <Forgot />
        </Dialog>

        <Dialog open={stepDialog.nine} PaperProps={{
            sx: { maxHeight: 500 }
        }}>
            <Otp />
        </Dialog>

        <Dialog open={stepDialog.ten} PaperProps={{
            sx: { maxHeight: 500 }
        }} >
            <Reset />
        </Dialog>

        <Dialog open={stepDialog.eleven} PaperProps={{
            sx: { maxHeight: 500 }
        }} >
            <LoginTeam />
        </Dialog>

        <Dialog open={stepDialog.twelve} PaperProps={{
            sx: { maxHeight: 500 }
        }}>
            <ForgotTeam />
        </Dialog>

        <Dialog open={stepDialog.thirteen} PaperProps={{
            sx: { maxHeight: 500 }
        }}>
            <OtpTeam />
        </Dialog>

        <Dialog open={stepDialog.fourteen} PaperProps={{
            sx: { maxHeight: 500 }
        }} >
            <ResetTeam />
        </Dialog>

        <Dialog open={stepDialog.logout} >
            <LogOut />
        </Dialog>

        <Dialog open={soon} onClose={handleSoonClose}
            keepMounted >
            <div id="soonDialog">
                <DialogTitle>{"Registrations will open soon"}</DialogTitle>
                <Button onClick={handleSoonClose}>Okay</Button>
            </div>
        </Dialog>
    </>
}

export default Navbar