import landImage from "../Assets/scroll_bg.svg"
import domainLogo from "../Assets/domainLogo.svg"
import discord from "../Assets/Discord.svg"
import twitter from "../Assets/Twitter.svg"
import instagram from "../Assets/Instagram.svg";
import facebook from "../Assets/Facebook.svg"
import linkedin from "../Assets/linkedIn.svg"
import sendIcon from "../Assets/letter_send.svg"
import SI from "../Assets/SI_logo.svg"
import Navbar from "../Navbar/Navbar"
import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import "./landingPage.css"
import "../Register/register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { RegCACheck, RegCAThunk, RegMemberThunk, RegTeamThunk } from "../Redux/registerSlice";
import { Spinner, Toast } from 'react-bootstrap';
import FormData from "form-data";
import { LoginTeamThunk } from "../Redux/loginSlice";
// import Member from "../Register/member";

function LandingPage() {

    const [dialogg, setDialogg] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
    const fd = new FormData();
    console.log(reducer)

    // register 1
    const [redirect, setRedirect] = useState({
        asMember: false,
        asTeam: false,
        asCA: false
    })

    // register 2
    const rightName = /^[a-z ,.'-]+$/i;
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isnum = /^\d+$/;
    const [isCorrect, setIsCorrect] = useState(false);
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const inputState = {
        name: '',
        email: '',
        pass: '',
        confirmPass: '',
        gender: '',
        mobile: '',
        college: '',
        course: '',
        otherCourse: '',
        branch: '',
        year: ''
    }
    const [input, setInput] = useState(inputState)
    function handleShow1() {
        setShow1(!show1)
    }
    function handleShow2() {
        setShow2(!show2)
    }

    useEffect(() => {
        if (rightName.test(input.name)) {
            document.getElementById("wrongName").style.display = "none";
            setIsCorrect(true);
        } else if (input.name) {
            document.getElementById("wrongName").style.display = "block";
            setIsCorrect(false);
        }
    }, [input.name]);

    useEffect(() => {
        if (rightemail.test(input.email)) {
            document.getElementById("wrongEmail").style.display = "none";
            setIsCorrect(true)
        }
        else if (input.email) {
            document.getElementById("wrongEmail").style.display = "block";
            setIsCorrect(false)
        }
    }, [input.email])

    useEffect(() => {
        if (rightpass.test(input.pass)) {
            document.getElementById("WrongPwd1").style.display = "none";
            setIsCorrect(true)
        } else if (input.pass) {
            document.getElementById("WrongPwd1").style.display = "block";
            setIsCorrect(false)
        }
    }, [input.pass]);

    useEffect(() => {
        if (input.pass || input.confirmPass) {
            if (input.pass == input.confirmPass) {
                setIsCorrect(true)
                document.getElementById("WrongPwd2").style.display = "none";
            }
            else if (input.confirmPass) {
                setIsCorrect(false)
                document.getElementById("WrongPwd2").style.display = "block";
            }
        }
    }, [input.confirmPass, input.pass])

    useEffect(() => {
        if (rightName.test(input.branch)) {
            document.getElementById("wrongBranch").style.display = "none";
            setIsCorrect(true);
        } else if (input.branch) {
            document.getElementById("wrongBranch").style.display = "block";
            setIsCorrect(false);
        }
    }, [input.branch]);

    useEffect(() => {
        if (isnum.test(input.mobile)) {
            document.getElementById("wrongNum").style.display = "none";
            setIsCorrect(true)
        }
        else if (input.mobile) {
            document.getElementById("wrongNum").style.display = "block";
            setIsCorrect(false)
        }
    }, [input.mobile])

    useEffect(() => {
        if (input.course) {
            if (input.course == "others")
                document.getElementById("otherOption").style.display = 'block'
            else
                document.getElementById("otherOption").style.display = 'none'
        }
    }, [input.course])

    function chooseGender(index, gender) {
        var l = document.getElementsByClassName("regGender")
        for (var i = 0; i < l.length; i++) {
            if (i == index) {
                l[i].style.color = "#FAC949"
                l[i].style.borderColor = "#FAC949"
            }
            else {
                l[i].style.color = "rgba(0,0,0,0.5)"
                l[i].style.borderColor = "rgba(0,0,0,0.5)"
            }
        }
        setInput({ ...input, gender: gender })
    }

    function RegAsMember() {
        var data;
        if (input.course == "others") {
            data = {
                "name": input.name,
                "email": input.email,
                "password": input.pass,
                "gender": input.gender,
                "mobile": input.mobile,
                "course": input.otherCourse,
                "college": input.college,
                "year_of_study": input.year
            }
        }
        else {
            data = {
                "name": input.name,
                "email": input.email,
                "password": input.pass,
                "gender": input.gender,
                "mobile": input.mobile,
                "course": input.course,
                "college": input.college,
                "year_of_study": input.year
            }
        }
        console.log(data)
        if (isCorrect) {
            dispatch(RegMemberThunk(data)).
                then((res) => {
                    if (res.payload.status === 201) {
                        toast.success(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        setDialogg(false);
                        setRedirect({ asMember: false })
                    }
                    else {
                        toast.error(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // team registration
    const teamState = {
        name: '',
        size: '',
        leaderId: '',
        member3: '',
        member2: '',
        referral: '',
        pass: '',
        cPass: ''
    }
    const [team, setTeam] = useState(teamState)
    useEffect(() => {
        if (rightpass.test(team.pass)) {
            document.getElementById("WrongPwdTeam1").style.display = "none";
        } else if (team.pass) {
            document.getElementById("WrongPwdTeam1").style.display = "block";
        }
    }, [team.pass]);

    useEffect(() => {
        if (team.pass || team.cPass) {
            if (team.pass == team.cPass) {
                document.getElementById("WrongPwdTeam2").style.display = "none";
            }
            else {
                document.getElementById("WrongPwdTeam2").style.display = "block";
            }
        }
    }, [team.cPass])

    useEffect(() => {
        if (team.size) {
            if (team.size == 1) {
                document.getElementsByClassName("teamLeader")[0].style.display = "block";
                document.getElementsByClassName("teamLeader")[1].style.display = "none";
                document.getElementsByClassName("teamLeader")[2].style.display = "none";
            }
            if (team.size == 2) {
                document.getElementsByClassName("teamLeader")[0].style.display = "block";
                document.getElementsByClassName("teamLeader")[1].style.display = "block";
                document.getElementsByClassName("teamLeader")[2].style.display = "none";
            }
            if (team.size == 3) {
                document.getElementsByClassName("teamLeader")[0].style.display = "block";
                document.getElementsByClassName("teamLeader")[1].style.display = "block";
                document.getElementsByClassName("teamLeader")[2].style.display = "block";
            }
        }
    }, [team.size])

    function RegAsTeam() {
        var data;
        if (team.size == 1) {
            data = {
                "name": team.name,
                "size": parseInt(team.size),
                "leader_id": parseInt(team.leaderId),
                "referral_used": team.referral,
                "password": team.pass
            }
        }
        if (team.size == 2) {
            data = {
                "name": team.name,
                "size": parseInt(team.size),
                "leader_id": parseInt(team.leaderId),
                "member_2": parseInt(team.member2),
                "referral_used": team.referral,
                "password": team.pass
            }
        }
        if (team.size == 3) {
            data = {
                "name": team.name,
                "size": parseInt(team.size),
                "leader_id": parseInt(team.leaderId),
                "member_2": parseInt(team.member2),
                "member_3": parseInt(team.member3),
                "referral_used": team.referral,
                "password": team.pass
            }
        }
        console.log(data)
        if (team.name && team.size && team.leaderId && team.referral && team.pass) {
            dispatch(RegTeamThunk(data)).
                then((res) => {
                    console.log(res)
                    if (res.payload.status === 201) {
                        toast.success(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    else if (res.payload.status === 400) {
                        console.log(data)
                        console.log(data[0])

                        if (data[0]) {
                            toast.error(`${res.payload.data[0]}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                        }
                        if (data.leader_id) {
                            toast.error(`${res.payload.data.leader_id[0]}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                        }
                        else if (data.name) {
                            toast.error(`${res.payload.data.name[0]}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                        }
                        else if (data.member_2) {
                            toast.error(`${res.payload.data.member_2[0]}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                        }
                        else if (data.member_3) {
                            toast.error(`${res.payload.data.member_3[0]}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                        }
                        else {
                            toast.error(`${res.payload.data[0]}`, {
                                position: "top-right",
                                theme: "light",
                                autoClose: 5000,
                            });
                        }
                    }
                    else {
                        toast.error(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // ca registration
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
                    console.log(res)
                    if (res.payload.status === 200) {
                        toast.success(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        setDialogg(false);
                        setRedirect({ asCA: false })
                    }
                    else if (res.payload.status === 409) {
                        toast.success(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        setDialogg(false);
                        setRedirect({ asCA: false })
                    }
                    else if (res.payload.status === 400) {
                        toast.info(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        setDialogg(false);
                        setRedirect({ asCA: false })
                        setOpenCA(true)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    // useEffect(() => {
    //     if (reducer.msg) {
    //         toast.success(`${reducer.msg}`, {
    //             position: "top-right",
    //             theme: "light",
    //         });
    //     }
    // }, [reducer.msg])

    // register 5

    const [openCA, setOpenCA] = useState(false)
    const [isCA, setIsCA] = useState(false)

    const caState = {
        name: '',
        email: localStorage.getItem("email"),
        pass: '',
        confirmPass: '',
        gender: '',
        mobile: '',
        college: '',
        course: '',
        otherCourse: '',
        branch: '',
        year: ''
    }
    const [ca, setCA] = useState(caState)
    useEffect(() => {
        if (rightName.test(ca.name)) {
            document.getElementById("wrongNameCA").style.display = "none";
            setIsCA(true);
        } else if (ca.name) {
            document.getElementById("wrongNameCA").style.display = "block";
            setIsCA(false);
        }
    }, [ca.name]);

    useEffect(() => {
        if (rightpass.test(ca.pass)) {
            document.getElementById("WrongPwdCA1").style.display = "none";
            setIsCA(true);
        } else if (ca.pass) {
            document.getElementById("WrongPwdCA1").style.display = "block";
            setIsCA(false);
        }
    }, [ca.pass]);

    useEffect(() => {
        if (ca.pass) {
            if (ca.pass == ca.confirmPass) {
                document.getElementById("WrongPwdCA2").style.display = "none";
                setIsCA(true);
            }
            else if (ca.confirmPass) {
                document.getElementById("WrongPwdCA2").style.display = "block";
                setIsCA(false);
            }
        }
    }, [ca.confirmPass])

    useEffect(() => {
        if (rightName.test(ca.branch)) {
            document.getElementById("wrongBranchCA").style.display = "none";
            setIsCA(true);
        } else if (ca.branch) {
            document.getElementById("wrongBranchCA").style.display = "block";
            setIsCA(false);
        }
    }, [ca.branch]);

    useEffect(() => {
        if (isnum.test(ca.mobile)) {
            document.getElementById("wrongNumCA").style.display = "none";
            setIsCA(true);
        }
        else if (ca.mobile) {
            document.getElementById("wrongNumCA").style.display = "block";
            setIsCA(false);
        }
    }, [ca.mobile])

    useEffect(() => {
        if (ca.course) {
            if (ca.course == "others")
                document.getElementById("otherCA").style.display = 'block'

            else
                document.getElementById("otherCA").style.display = 'none'
        }
    }, [ca.course])
    function chooseGenderCA(index, gender) {
        var l = document.getElementsByClassName("regGender")
        for (var i = 0; i < l.length; i++) {
            if (i == index) {
                l[i].style.color = "#FAC949"
                l[i].style.borderColor = "#FAC949"
            }
            else {
                l[i].style.color = "rgba(0,0,0,0.5)"
                l[i].style.borderColor = "rgba(0,0,0,0.5)"
            }
        }
        setCA({ ...ca, gender: gender })
    }

    function RegAsCA() {

        var data;
        if (ca.course == "others") {
            data = {
                "name": ca.name,
                "email": ca.email,
                "password": ca.pass,
                "gender": ca.gender,
                "mobile": ca.mobile,
                "course": ca.otherCourse,
                "college": ca.college,
                "year_of_study": ca.year
            }
        }
        else {
            data = {
                "name": ca.name,
                "email": ca.email,
                "password": ca.pass,
                "gender": ca.gender,
                "mobile": ca.mobile,
                "course": ca.course,
                "college": ca.college,
                "year_of_study": ca.year
            }
        }
        console.log(data)
        if (isCA) {
            dispatch(RegCAThunk(data)).
                then((res) => {
                    if (res.payload.status === 201) {
                        toast.success(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        setDialogg(false);
                        setOpenCA(false)
                    }
                    else {
                        toast.error(`${res.payload.data[0]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // login 1

    const [dialogLogin, setDialogLogin] = useState(true)

    const [redirectLogin, setRedirectLogin ] = useState({
        asCA:false,
        asTeam:false
    })

    const loginState1 ={
        email:'',
        password:''
    }
    const [login1, setLogin1] = useState(loginState1)

    useEffect(() => {
        if (rightemail.test(login1.email)) {
            document.getElementById("wrongEmailLog1").style.display = "none";
        } else if (login1.email) {
            document.getElementById("wrongEmailLog1").style.display = "block";
        }
    }, [login1.email]);

    // useEffect(() => {
    //     if (rightpass.test(login1.password)) {
    //         document.getElementById("wrongPwdLog1").style.display = "none";
    //     }
    //     else if (login1.password) {
    //         document.getElementById("wrongPwdLog1").style.display = "block";
    //     }
    // }, [login1.password])

    function LoginCA1 () {
        const data = {
           "email":login1.email,
           "password": login1.password
        }
        console.log(data)
        dispatch(LoginTeamThunk(data))
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
        <Navbar />
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
                    <button className="landRegister" onClick={() => { setDialogg(true) }} >Register Now</button>
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
                <div className="group">
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
                </div>
                <hr className="timelineHR" />
            </div>
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

        {/* register 1 */}
        <Dialog open={dialogg} >
            <div className="register" id="regDiv">
                <div className="regFlex">
                    <img className="arrow" src={arrow} />
                    <p className="heading" id="registerAs">Register as</p>
                    <img className="cross" src={cross} onClick={() => { setDialogg(false) }} />
                </div>
                <button className="asRegister" id="regMember" onClick={() => { setRedirect({ asMember: true }) }} >Member</button>
                <button className="asRegister" onClick={() => { setRedirect({ asTeam: true }) }} >Team</button>
                <button className="asRegister" id="CA" onClick={() => { setRedirect({ asCA: true }) }} >Campus Ambassador</button>
            </div>
            {(loading) ? <Spinner animation="border" variant="light" id="loadSpinner" /> : null}
        </Dialog>

        {/* register 2 */}
        <Dialog open={redirect.asMember} PaperProps={{
            sx: {
                maxHeight: 1240,
                marginTop: 94
            }
        }} >
            {/* <Member redirectTo={as} */}
            <div className="register">
                <div className="regFlex">
                    <img className="arrow" src={arrow} onClick={() => { setDialogg(true); setRedirect({ asMember: false }) }} />
                    <p className="heading">Register as <span id="member">Member</span></p>
                    <img className="cross" src={cross} onClick={() => { setDialogg(false); setRedirect({ asMember: false }) }} />
                </div>
                <p className="regName">Name</p>
                <input type="text" className="regInputname" id="input" placeholder="Enter your name" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                <p id="wrongName">Name must contain only alphabetic characters.</p>
                <p className="regName">Email</p>
                <input type="text" className="regInputname" placeholder="Enter your email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                <p id="wrongEmail">Please enter a valid Email address</p>
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow1} />
                )}
                <input type={show1 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={input.pass} onChange={(e) => setInput({ ...input, pass: e.target.value })} />
                <p id="WrongPwd1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow2} />
                )}
                <input type={show2 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={input.confirmPass} onChange={(e) => setInput({ ...input, confirmPass: e.target.value })} />
                <p id="WrongPwd2">Password entered in two fields must be same.</p>
                <p className="regName">Select your gender</p>
                <div className="genders">
                    <button className="regGender" onClick={() => { chooseGender(0, "M") }} >Male</button>
                    <button className="regGender" onClick={() => { chooseGender(1, "F") }}>Female</button>
                    <button className="regGender" onClick={() => { chooseGender(2, "O") }}>Others</button>
                </div>
                <p className="regName">Mobile Number</p>
                <input type="text" className="regInputname" placeholder="Enter phone number" value={input.mobile} onChange={(e) => setInput({ ...input, mobile: e.target.value })} />
                <p id="wrongNum">Number must contain only numeric characters.</p>
                <p className="regName">College Name</p>
                <input type="text" className="regInputname" placeholder="Enter your college name" value={input.college} onChange={(e) => setInput({ ...input, college: e.target.value })} />
                <p className="regName">Course</p>
                <select className="regInputname" value={input.course} onChange={(e) => { setInput({ ...input, course: e.target.value }) }} >
                    <option id="option">--select--</option>
                    <option value="BE/BTech">BE/BTech</option>
                    <option value="MTech">M.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option id="other" value="others">Others</option>
                </select>
                <input type="text" id="otherOption" placeholder="Enter course name" value={input.otherCourse} onChange={(e) => { setInput({ ...input, otherCourse: e.target.value }) }} />
                <p className="regName">Branch</p>
                <input type="text" className="regInputname" placeholder="Enter your branch" value={input.branch} onChange={(e) => { setInput({ ...input, branch: e.target.value }) }} />
                <p id="wrongBranch">Please enter a valid branch.</p>
                <p className="regName">Year of study</p>
                <select className="regInputname" value={input.year} onChange={(e) => { setInput({ ...input, year: e.target.value }) }}>
                    <option >--select--</option>
                    {(input.course == "BE/BTech" || input.course == "others") ? <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </> : <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </>}
                </select>
                <button className="regButton" onClick={RegAsMember}>Register</button>
            </div>
            <ToastContainer />
            {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        </Dialog>

        {/* register 3 */}
        <Dialog open={redirect.asTeam} PaperProps={{
            sx: {
                maxHeight: 1100,
                marginTop: 76
            }
        }}>
            <div className="register">
                <div className="regFlex">
                    <img className="arrow" src={arrow} onClick={() => { setDialogg(true); setRedirect({ asTeam: false }) }} />
                    <p className="heading">Register as <span id="member">Team</span></p>
                    <img className="cross" src={cross} onClick={() => { setDialogg(false); setRedirect({ asTeam: false }) }} />
                </div>
                <p className="regName">Team Name</p>
                <input type="text" className="regInputname" placeholder="Enter team name" value={team.name} onChange={(e) => { setTeam({ ...team, name: e.target.value }) }} />
                <p className="regName">Team Size</p>
                <select className="regInputname" value={team.size} onChange={(e) => { setTeam({ ...team, size: e.target.value }) }}>
                    <option >--select--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p className="regName">Referral Code</p>
                <input type="text" className="regInputname" placeholder="Enter referral code" value={team.referral} onChange={(e) => { setTeam({ ...team, referral: e.target.value }) }} />
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="TEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="TEye" onClick={handleShow1} />
                )}
                <input type={show1 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={team.pass} onChange={(e) => { setTeam({ ...team, pass: e.target.value }) }} />
                <p id="WrongPwdTeam1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="TEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="TEye" onClick={handleShow2} />
                )}
                <input type={show2 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={team.cPass} onChange={(e) => { setTeam({ ...team, cPass: e.target.value }) }} />
                <p id="WrongPwdTeam2">Password entered in two fields must be same.</p>
                <div className="teamLeader">
                    <p className="regName">Team Leader ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" value={team.leaderId} onChange={(e) => { setTeam({ ...team, leaderId: e.target.value }) }} />
                </div>
                <div className="teamLeader">
                    <p className="regName">Member 2 ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" value={team.member2} onChange={(e) => { setTeam({ ...team, member2: e.target.value }) }} />
                </div>
                <div className="teamLeader">
                    <p className="regName">Member 3 ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" value={team.member3} onChange={(e) => { setTeam({ ...team, member3: e.target.value }) }} />
                </div>
                <button className="regButton" onClick={RegAsTeam}>Register</button>
            </div>
            <ToastContainer />
            {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        </Dialog>

        {/* register 4 */}
        <Dialog open={redirect.asCA}>
            <div className="register" id="regDiv">
                <div className="regFlex">
                    <img className="arrow" src={arrow} onClick={() => { setDialogg(true); setRedirect({ asCA: false }) }} />
                    <p className="heading" id="registerCA">Register as <span id="member">Campus Ambassador</span></p>
                    <img className="cross" src={cross} onClick={() => { setDialogg(false); setRedirect({ asCA: false }) }} />
                </div>
                <p className="regName">Email</p>
                <input type="text" className="regInputname" placeholder="Enter your email" value={caEemail} onChange={(e) => setCAEmail(e.target.value)} />
                <p id="wrongCAEmail">Please enter a valid Email address</p>
                <button className="regContinue" onClick={() => { CAEmailCheck() }}>Continue</button>
            </div>
            <ToastContainer />
            {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        </Dialog>

        {/* register 5 */}
        <Dialog open={openCA} PaperProps={{
            sx: {
                maxHeight: 1240,
                marginTop: 94
            }
        }} >
            <div className="register">
                <div className="regFlex">
                    <img className="arrow" src={arrow} onClick={() => { setDialogg(true); setOpenCA(false) }} />
                    <p className="heading">Register as <span id="member">Member</span></p>
                    <img className="cross" src={cross} onClick={() => { setDialogg(false); setOpenCA(false) }} />
                </div>
                <p className="regName">Name</p>
                <input type="text" className="regInputname" id="input" placeholder="Enter your name" value={ca.name} onChange={(e) => setCA({ ...ca, name: e.target.value })} />
                <p id="wrongNameCA">Name must contain only alphabetic characters.</p>
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="CEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="CEye" onClick={handleShow1} />
                )}
                <input type={show1 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={ca.pass} onChange={(e) => setCA({ ...ca, pass: e.target.value })} />
                <p id="WrongPwdCA1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="CEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="CEye" onClick={handleShow2} />
                )}
                <input type={show2 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={ca.confirmPass} onChange={(e) => setCA({ ...ca, confirmPass: e.target.value })} />
                <p id="WrongPwdCA2">Password entered in two fields must be same.</p>
                <p className="regName">Select your gender</p>
                <div className="genders">
                    <button className="regGender" onClick={() => { chooseGenderCA(0, "M") }} >Male</button>
                    <button className="regGender" onClick={() => { chooseGenderCA(1, "F") }}>Female</button>
                    <button className="regGender" onClick={() => { chooseGenderCA(2, "O") }}>Others</button>
                </div>
                <p className="regName">Mobile Number</p>
                <input type="text" className="regInputname" placeholder="Enter phone number" value={ca.mobile} onChange={(e) => setCA({ ...ca, mobile: e.target.value })} />
                <p id="wrongNumCA">Number must contain only numeric characters.</p>
                <p className="regName">College Name</p>
                <input type="text" className="regInputname" placeholder="Enter your college name" value={ca.college} onChange={(e) => setCA({ ...ca, college: e.target.value })} />
                <p className="regName">Course</p>
                <select className="regInputname" value={ca.course} onChange={(e) => { setCA({ ...ca, course: e.target.value }) }} >
                    <option id="option">--select--</option>
                    <option value="BE/BTech">BE/BTech</option>
                    <option value="MTech">M.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option id="other" value="others">Others</option>
                </select>
                <input type="text" id="otherCA" placeholder="Enter course name" value={ca.otherCourse} onChange={(e) => { setCA({ ...ca, otherCourse: e.target.value }) }} />
                <p className="regName">Branch</p>
                <input type="text" className="regInputname" placeholder="Enter your branch" value={ca.branch} onChange={(e) => { setCA({ ...ca, branch: e.target.value }) }} />
                <p id="wrongBranchCA">Please enter a valid branch.</p>
                <p className="regName">Year of study</p>
                <select className="regInputname" value={ca.year} onChange={(e) => { setCA({ ...ca, year: e.target.value }) }}>
                    <option >--select--</option>
                    {(ca.course == "BE/BTech" || ca.course == "others") ? <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </> : <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </>}
                </select>
                <button className="regButton" onClick={RegAsCA}>Register</button>
            </div>
            <ToastContainer />
            {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        </Dialog>

        {/*login 1 */}
        <Dialog open={dialogLogin} PaperProps={{
            sx: { maxHeight: 400} }}>
            <div className="register" id="regDiv">
                <div className="regFlex">
                    <img className="arrow" src={arrow} />
                    <p className="heading" id="registerAs">Login as</p>
                    <img className="cross" src={cross} onClick={() => { setDialogLogin(false) }} />
                </div>
                <button className="asRegister" id="regMember" onClick={() => { setRedirectLogin({ asTeam: true }) }} >Team</button>
                <button className="asRegister" onClick={() => { setRedirectLogin({ asCA: true }) }} >Campus Ambassador</button>
            </div>
            {(loading) ? <Spinner animation="border" variant="light" id="loadSpinner" /> : null}
        </Dialog>

        {/* login 2 */}
        <Dialog open={redirectLogin.asCA}>
            <div className="register" id="regDiv">
                <div className="regFlex">
                    <img className="arrow" src={arrow} onClick={() => { setDialogLogin(true); setRedirectLogin({ asCA: false }) }} />
                    <p className="heading" id="registerCA">Login as <span id="member">Campus Ambassador</span></p>
                    <img className="cross" src={cross} onClick={() => { setDialogLogin(false); setRedirectLogin({ asCA: false }) }} />
                </div>
                <p className="regName">Email</p>
                <input type="text" className="regInputname" placeholder="Enter your email" value={login1.email} onChange={(e) => setLogin1({ ...login1, email: e.target.value })} />
                <p id="wrongEmailLog1">Please enter a valid Email address</p>
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="LogEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LogEye" onClick={handleShow1} />
                )}
                <input type={show1 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={login1.password} onChange={(e) => setLogin1({ ...login1, password: e.target.value })} />
                {/* <p id="wrongPwdLog1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p> */}
                <button className="regContinue" onClick={() => { LoginCA1() }}>Continue</button>
            </div>
            <ToastContainer />
            {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        </Dialog>
    </>
}

export default LandingPage