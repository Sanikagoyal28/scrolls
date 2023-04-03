import landImage from "../Assets/scroll_bg.svg"
import domainLogo from "../Assets/domainLogo.svg"
import { forwardRef, useEffect, useState } from "react";
import { Button, Dialog, DialogTitle, Slide } from "@mui/material";
import { dialog0, dialog1, dialog6 } from "../../Redux/step";
import Register from "../Register/Register";
import Member from "../Register/member";
import Team from "../Register/team";
import CA1 from "../Register/CA1";
import CA2 from "../Register/CA2";
import { useDispatch, useSelector } from "react-redux"
import "./landingPage.css"
import "./timeline.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-toastify/scss/_closeButton.scss"
import { InstagramEmbed } from 'react-social-media-embed';
import Navbar from "../Navbar/navbar";
import mobTimeline from "../Assets/mob_timeline.svg"
import timelineNew from "../Assets/timeline.svg"
import timelinePhone from "../Assets/timelinePhone.svg"
import { NavLink, useNavigate } from "react-router-dom";
import { RegOpenThunk } from "../../Redux/registerSlice";
import { Spinner } from "react-bootstrap";
import Footer from "../footer/footer";

function LandingPage() {

    const reducer = useSelector((s) => s.login)
    const reducerReg = useSelector((s) => s.register)
    const [path, setPath] = useState('')
    const [dialogg, setDialogg] = useState(false)
    const [loading, setLoading] = useState(false)
    const [soon, setSoon] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
    })

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        if (step.step == 0) {
            setStepDialog({
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
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
    }, [step, dialogg])

    useEffect(() => {
        if (title === "CA") {
            setPath("/ca_db")
            document.getElementById("toDash").style.display = "inline"
            document.getElementById("toReg").style.display = "none"
        }
        if (title === "Team") {
            setPath("/team_db")
            document.getElementById("toDash").style.display = "inline"
            document.getElementById("toReg").style.display = "none"
        }
        if (title === "") {
            document.getElementById("toDash").style.display = "none"
            document.getElementById("toReg").style.display = "inline"
        }
    }, [title])

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    function RegOpen() {
        dispatch(RegOpenThunk())
            .then((res) => {
                console.log(res)
                if (res.payload.status === 200) {
                    setDialogg(true);
                    dispatch(dialog1())
                }
                if (res.payload.status === 400) {
                    setDialogg(true);
                    setSoon(true)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleSoonClose() {
        setSoon(false)
    }

    const [size, setSize] = useState('')
    useEffect(() => {
        function handleSize() {
            var w = window.innerWidth
            if (w < 531) {
                // console.log("compact")
                setSize(1400)
            }
            else {
                setSize(1300)
                // console.log("normal")
            }
        }

        window.addEventListener("resize", handleSize)
        handleSize()
    }, [])

    useEffect(() => {
        if (reducerReg.loading) {
            setLoading(true)
            document.body.style.opacity = 0.5;
        }
        else {
            setLoading(false)
            document.body.style.opacity = 1;
        }
    }, [reducerReg.loading])

    return <>

        {/* <div style={{ display: 'flex', justifyContent: 'center', zIndex:"20", position:'fixed' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
        </div> */}

        <Navbar />
        <div className="landingPage">
            <div className="landBlock1">
                <div id="loginBg" style={{ backgroundImage: `url(${landImage})` }}>
                    {/* <img src={landImage} className="landImage" /> */}
                </div>
                <div className="landFlex">
                    <p className="landText1">
                        Students Creative & Oratory Learning Skills 2023
                    </p>
                    <p className="landText2">
                        Prestigious National Level Technical Paper Presentation organized by A.K.G.E.C. in association with Ghaziabad Management Association.
                    </p>
                    <button className="landRegister" id="toReg" onClick={() => { RegOpen() }} >Register Now</button>
                    {/* <button className="landRegister" id="toReg" onClick={() => { setDialogg(true); dispatch(dialog1()) }} >Register Now</button> */}
                    <button className="landRegister" id="toDash" onClick={() => { navigate(path) }} >To Dashboard</button>
                </div>
            </div>
            <div className="landAbout">
                <div id="text1Border">
                    <p className="aboutScroll">About Scrolls</p>
                </div>
                <p className="aboutHead">
                    “Reasons will take you from A to B but imagination will take you everywhere.”<br />
                    - Albert Einstein
                </p>
                <p className="aboutText">
                    ‘SCROLLS’ is a platform for the innovative minds to exchange their ideas, inventiveness and enterprise and administer their erudition in various flourishing sectors. It encompasses various aspects and trends relating to computing, telecommunication and information technologies along with advancements in management thus aiming to discover the best possible ingenuity to solve problems with a futuristic approach.
                </p>
            </div>
            <div className="landDomain">
                <div id="text1Border">
                    <p className="aboutScroll">Domains</p>
                </div>
                <div className="domainCards">
                    <NavLink to="/domain_civil">
                        <div className="domainCard1" onClick={() => { window.scroll(0, 0) }}>
                            <img src={domainLogo} className="domainLogo1" />
                            <p className="domainText1">Civil Engineering</p>
                        </div>
                    </NavLink>
                    <NavLink to="/domain_cs">
                        <div className="domainCard2" onClick={() => { window.scroll(0, 0) }}>
                            <img src={domainLogo} className="domainLogo2" />
                            <p className="domainText2">Computer Science and Information Technology</p>
                        </div>
                    </NavLink>
                    <NavLink to="/domain_en">
                        <div className="domainCard1" onClick={() => { window.scroll(0, 0) }}>
                            <img src={domainLogo} className="domainLogo1" />
                            <p className="domainText1">Electrical and Electronics Engineering</p>
                        </div>
                    </NavLink>
                    <NavLink to="/domain_ece">
                        <div className="domainCard2" onClick={() => { window.scroll(0, 0) }}>
                            <img src={domainLogo} className="domainLogo2" />
                            <p className="domainText2">Electronics and Communication Engineering</p>
                        </div>
                    </NavLink>
                    <NavLink to="/domain_me">
                        <div className="domainCard1" onClick={() => { window.scroll(0, 0) }}>
                            <img src={domainLogo} className="domainLogo1" />
                            <p className="domainText1">Mechanical Engineering</p>
                        </div>
                    </NavLink>
                    <NavLink to="/domain_management">
                        <div className="domainCard2" onClick={() => { window.scroll(0, 0) }}>
                            <img src={domainLogo} className="domainLogo2" />
                            <p className="domainText2">Management Sciences</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="landTimeline">
                <div id="text1Border">
                    <p className="aboutScroll" id="timelineHeading">Timeline</p>
                </div>
                <div>
                    <img src={timelineNew} className="timeline" />
                    <img src={timelinePhone} className="mob_timeline" />
                </div>
            </div>
        </div>
        <Footer />

        <div className="Dialogue1">
            <Dialog open={stepDialog.one} PaperProps={{
                sx: {

                    maxWidth: 1000
                }
            }}>
                <Register />
            </Dialog>
        </div>
        <Dialog open={stepDialog.two} PaperProps={{
            sx: {
                maxHeight: 1300,
                marginTop: 94,
                maxWidth: 1000
            }
        }} >
            <Member />
        </Dialog>

        <Dialog open={stepDialog.three} PaperProps={{
            sx: {
                maxHeight: 1100,
                marginTop: 76,
                maxWidth: 1000
            }
        }}>
            <Team />
        </Dialog>

        <Dialog open={stepDialog.four} PaperProps={{
            sx: {
                maxWidth: 1000
            }
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

        <Dialog open={soon} onClose={handleSoonClose} PaperProps={{
            sx: {
                maxWidth: 1000
            }
        }}
            keepMounted >
            <div id="soonDialog">
                <DialogTitle>{"Registrations will open soon"}</DialogTitle>
                <Button onClick={handleSoonClose}>Okay</Button>
            </div>
        </Dialog>
        {(loading) ? <Spinner animation="border" variant="light" id="loadSpinner" /> : null}
        <ToastContainer />
    </>
}

export default LandingPage