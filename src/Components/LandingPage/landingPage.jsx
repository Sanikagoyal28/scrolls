import landImage from "../Assets/scroll_bg.svg"
import domainLogo from "../Assets/domainLogo.svg"
import discord from "../Assets/Discord.svg"
import twitter from "../Assets/Twitter.svg"
import instagram from "../Assets/Instagram.svg";
import facebook from "../Assets/Facebook.svg"
import linkedin from "../Assets/linkedIn.svg"
import sendIcon from "../Assets/letter_send.svg"
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
import TimeLine from "../TimeLine/timeLine";

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
                        Lorem ipsum dolor sit amet,
                    </p>
                    <p className="landText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo. Pellentesque nec porta erat. Donec venenatis massa
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo. Pellentesque nec porta erat. Donec venenatis massa ligula, quis dictum turpis tempus vel. Mauris et mattis velit, et tempus justo. Suspendisse posuere magna sit amet molestie condimentum. Sed dapibus ac ligula vitae dignissim. Curabitur ac aliquet libero, pharetra dapibus ante. Vestibulum varius vehicula tristique.
                    In diam ligula, egestas eu sollicitudin tristique, convallis quis quam. Vestibulum cursus elementum quam, vitae faucibus nibh bibendum eget. Fusce volutpat urna ut convallis convallis. Donec pharetra, ligula et ultrices dapibus, odio risus dignissim ipsum, vel blandit nisi sapien et dui. In hac habitasse platea dictumst. Nullam in semper leo. Proin porta, risus sit amet consectetur ultrices, velit est volutpat lectus, in condimentum erat dui in ex. Aenean hendrerit velit quam, nec ullamcorper nisi commodo nec. Quisque cursus commodo sem nec fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nulla in vehicula magna. Etiam interdum pretium neque, vitae scelerisque eros bibendum at. Nunc pulvinar egestas lorem ac porta. Nullam arcu eros, vulputate eget sapien quis, viverra posuere nibh. Phasellus sit amet libero dapibus, tincidunt leo sit amet, blandit nisi. Proin facilisis pharetra tempus. Morbi tempor tellus vitae diam vehicula maximus. Aliquam nulla augue, suscipit sit amet elit sed, bibendum finibus velit. Pellentesque ac nibh ut ante suscipit viverra.
                </p>
            </div>
            <div className="landDomain">
                <div id="domainBorder">
                    <p className="aboutScroll">Domains</p>
                </div>
                <div className="domainCards">
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Mechanical</p>
                    </div>
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Mechanical</p>
                    </div>
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Mechanical</p>
                    </div>
                </div>
            </div>
            <div className="landTimeline">
                <div id="timelineBorder">
                    <p className="aboutScroll" id="timelineHeading">Timeline</p>
                </div>
                {/* <div className="GrpTL">
                    <div className="tl_group2">
                        <div className="tl_group1">
                            <div id="tl_circle1" />
                            <hr id="tl_line1" />
                            <div id="tl_circle2" />
                            <hr id="tl_line2" />
                            <div id="tl_row">
                                <hr id="tl_line3" />
                                <div id="tl_circle3" />
                            </div>
                        </div>
                        <p className="tl_Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                    <div className="tl_group2" id="tl_rotate_group">
                        <div className="tl_group1">
                            <div id="tl_circle1" />
                            <hr id="tl_line1" />
                            <div id="tl_circle2" />
                            <hr id="tl_line2" />
                            <div id="tl_row">
                                <hr id="tl_line3" />
                                <div id="tl_circle3" />
                            </div>
                        </div>
                        <p className="tl_Text"  id="tl_rotate_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                    <div className="tl_group2">
                        <div className="tl_group1">
                            <div id="tl_circle1" />
                            <hr id="tl_line1" />
                            <div id="tl_circle2" />
                            <hr id="tl_line2" />
                            <div id="tl_row">
                                <hr id="tl_line3" />
                                <div id="tl_circle3" />
                            </div>
                        </div>
                        <p className="tl_Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                    <div className="tl_group2" id="tl_rotate_group">
                        <div className="tl_group1">
                            <div id="tl_circle1" />
                            <hr id="tl_line1" />
                            <div id="tl_circle2" />
                            <hr id="tl_line2" />
                            <div id="tl_row">
                                <hr id="tl_line3" />
                                <div id="tl_circle3" />
                            </div>
                        </div>
                        <p className="tl_Text"  id="tl_rotate_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                </div>
                <hr className="tl_hr" /> */}
                {/* <div className="group1">
                    <div className="group">
                        <div className="timeline">
                            <div id="circle1" />
                            <hr id="line1" />
                            <div id="circle2" />
                            <hr id="line2" />
                            <hr id="line3" />
                            <div id="circle3" />
                        </div>
                        <p className="timelineText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                    <div className="group" id="rotatedGroup">
                        <div className="timeline">
                            <div id="circle1" />
                            <hr id="line1" />
                            <div id="circle2" />
                            <hr id="line2" />
                            <hr id="line3" />
                            <div id="circle3" />
                        </div>
                        <p className="timelineText" id="rotatedText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                    <div className="group">
                        <div className="timeline">
                            <div id="circle1" />
                            <hr id="line1" />
                            <div id="circle2" />
                            <hr id="line2" />
                            <hr id="line3" />
                            <div id="circle3" />
                        </div>
                        <p className="timelineText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                    <div className="group" id="rotatedGroup">
                        <div className="timeline">
                            <div id="circle1" />
                            <hr id="line1" />
                            <div id="circle2" />
                            <hr id="line2" />
                            <hr id="line3" />
                            <div id="circle3" />
                        </div>
                        <p className="timelineText" id="rotatedText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                        </p>
                    </div>
                </div> */}
                {/* <hr className="timelineHR" /> */}
            </div>
            <TimeLine />
            <div className="landFooter">
                <p className="footHead">Contact Us</p>
                <div className="footIcons">
                    <div className="footIconFlex1">
                        <img src={twitter} className="footIcon" />
                        <img src={instagram} className="footIcon" />
                        <img src={discord} className="footIcon" />
                    </div>
                    <div className="footIconFlex2">
                        <img src={facebook} className="footIcon" />
                        <img src={linkedin} className="footIcon" />
                    </div>
                </div>
                <img src={sendIcon} className="footSendicon" />
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

        <Dialog open={stepDialog.six} PaperProps={{
            sx: { maxHeight: 500 }
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

        <ToastContainer />
    </>
}

export default LandingPage