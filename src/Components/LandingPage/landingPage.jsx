import landImage from "../Assets/scroll_bg.svg"
import domainLogo from "../Assets/domainLogo.svg"
import instagram from "../Assets/Instagram.svg";
import phone from "../Assets/phone.svg"
import horizon from "../Assets/horizon.svg";
import SI from "../Assets/SI_logo.svg"
import { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { dialog1, dialog6 } from "../../Redux/step";
import Register from "../Register/Register";
import Member from "../Register/member";
import Team from "../Register/team";
import CA1 from "../Register/CA1";
import CA2 from "../Register/CA2";
import Login1 from "../Login/login1";
import { useDispatch, useSelector } from "react-redux"
import Login from "../Login/CA/login";
import "./landingPage.css"
import "./timeline.css";
import Reset from "../Login/CA/reset";
import Otp from "../Login/CA/otp";
import Forgot from "../Login/CA/fgtPwd";
import LoginTeam from "../Login/TEAM/loginTeam";
import ResetTeam from "../Login/TEAM/resetTeam";
import OtpTeam from "../Login/TEAM/otpTeam";
import ForgotTeam from "../Login/TEAM/fgtTeam";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InstagramEmbed } from 'react-social-media-embed';
import Navbar from "../Navbar/navbar";
import timeline from "../Assets/timeline.svg"
import mobTimeline from "../Assets/mob_timeline.svg"
import { Link } from "react-router-dom";

function LandingPage() {

    const reducer = useSelector((s) => s.login)
    const reducerReg = useSelector((s) => s.register)
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

    return <>

        {/* <div style={{ display: 'flex', justifyContent: 'center', zIndex:"20", position:'fixed' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
        </div> */}

        {/* navbar */}
        <Navbar />

        {/* landing page */}
        <div className="landingPage">
            <div className="landBlock1">
                <div id="loginBg">
                    <img src={landImage} className="landImage" />
                </div>
                <div className="landFlex">
                    <p className="landText1">
                        Students Creative Oratory Learning Skills 2023
                    </p>
                    <p className="landText2">
                        Prestigious National Level Technical Paper Presentation organized by A.K.G.E.C. in association with Ghaziabad Management Association.
                    </p>
                    <button className="landRegister" onClick={() => { setDialogg(true); dispatch(dialog1()) }} >Register Now</button>
                </div>
            </div>
            <div className="landAbout">
                <div id="text1Border">
                    <p className="aboutScroll">About Scrolls</p>
                </div>
                <p className="aboutHead">
                    “Reasons will take you from A to B but imagination will take you everywhere.”
                    - Albert Einstein
                </p>
                <p className="aboutText">
                    ‘SCROLLS’ is a platform for the innovative minds to exchange their ideas, inventiveness and enterprise and administer their erudition in various flourishing sectors. It encompasses various aspects and trends relating to computing, telecommunication and information technologies along with advancements in management thus aiming to discover the best possible ingenuity to solve problems with a futuristic approach.
                    <br /> Campus ambassadors are the students who have the main and direct contact with the Scrolls Team and are the representation of our voice on their campus.
                    As a campus ambassador, your main objective would be to raise awareness about the organization and to get students on board for the event. You will have the opportunity to represent our event on your campus and within your community, promoting our events, and engaging with the  students and faculty.
                    It is a great learning juncture for you as it provides a glimpse of the corporate world and you'll learn about the working of organizations.

                    Campus Ambassador with the maximum number of registrations will receive a letter of appreciation and other benefits.

                    Grab the opportunity and avail the chance to become the campus ambassador and unlock the benefits that awaits you. Hurry Up and register now!!


                </p>
            </div>
            <div className="landDomain">
                <div id="domainBorder">
                    <p className="aboutScroll">Domains</p>
                </div>
                <div className="domainCards">
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Civil Engineering</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">CSIT</p>
                    </div>
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Electrical Engineering</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">ECE</p>
                    </div>
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical Engineering</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Management Science</p>
                    </div>
                </div>
            </div>
            <div className="landTimeline">
                <div id="timelineBorder">
                    <p className="aboutScroll" id="timelineHeading">Timeline</p>
                </div>
                <div>
                    <img src={timeline} className="timeline" />
                    <img src={mobTimeline} className="mob_timeline" />
                </div>
            </div>

            <div className="landFooter">
                <div id="footer">
                    <div id="footFlex1">
                        <p className="footHead">Scrolls<span className="navDot">.</span></p>
                        <p className="footHead2">Any questions or remarks? Just write us a message.</p>
                    </div>
                    <div id="footFlex2">
                        <div id="footFlex2Row">
                            <img src={phone} id="phone" />
                            <p id="telephone">Contact</p>
                        </div>
                        <div className="footFlexRow">
                            <p>8433416286</p>
                            <p>(Rajat Agarwal)</p>
                        </div>
                        <div className="footFlexRow">
                            <p>7985670120</p>
                            <p>(Abhishek Pratap Singh)</p>
                        </div>
                        <div className="footFlexRow">
                            <p>7351407997</p>
                            <p>(Anushka Gautam)</p>
                        </div>
                    </div>

                    <div id="footFlex3">
                        <p id="telephone">Quick links</p>
                        <div className="footFlexRow">
                            <Link to="/faq"><p id="link">FAQs</p></Link>
                        </div>
                    </div>

                    <div id="footFlex4">
                        <p id="telephone">Find us</p>
                        <div className="footFlexRow">
                            <img src={instagram} id="instagram" />
                            <p id="link"><a href="https://instagram.com/scrolls_23?igshid=ZDdkNTZiNTM=" target="_blank"  >scrolls_akgec</a></p>
                        </div>
                        <div className="footFlexRow">
                            <img src={horizon} id="horizon" />
                            <p id="link"><a href="https://instagram.com/horizon.akgec?igshid=MGU3ZTQzNzY=" target="_blank" >Team Horizon</a></p>
                        </div>
                    </div>
                </div>
                <p className="footText">Powered by <span id="siIcon" ><img src={SI} /></span><span id="software">SOFTWARE</span><span id="incubator">INCUBATOR</span></p>
            </div>
        </div>

        <div className="Dialogue1">
            <Dialog open={stepDialog.one}>
                <Register />
            </Dialog>
        </div>
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

        {/* <Dialog open={stepDialog.six} PaperProps={{
            sx: { maxHeight: 500 }
        }}>
            <Login1 />
        </Dialog>

        <Dialog open={stepDialog.seven} PaperProps={{
            sx: { maxHeight: 550 }
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
        </Dialog> */}

        {/* <Dialog open={stepDialog.eleven} PaperProps={{
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
        </Dialog> */}

        <ToastContainer />
    </>
}

export default LandingPage