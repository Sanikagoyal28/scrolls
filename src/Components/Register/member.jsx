import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { dialog0, dialog1 } from "../../Redux/step";
import { RegMemberThunk } from "../../Redux/registerSlice";
import { Spinner } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useCallback } from "react";

function Member() {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
    const rightName = /^[a-z ,.'-]+$/i;
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    const isnum = /^\d+$/;
    const [isCorrect, setIsCorrect] = useState(false);
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const boolen = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        course: false,
        year: false
    }
    const [bool, setBool] = useState(boolen)

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
            setBool({ ...bool, one: true })
        }
        else if (input.name) {
            document.getElementById("wrongName").style.display = "block";
            setBool({ ...bool, one: false })
        }
    }, [input.name]);

    useEffect(() => {
        if (rightemail.test(input.email)) {
            document.getElementById("wrongEmail").style.display = "none";
            setBool({ ...bool, two: true })
        }
        else if (input.email) {
            document.getElementById("wrongEmail").style.display = "block";
            setBool({ ...bool, two: false })
        }
    }, [input.email])

    useEffect(() => {
        if (rightpass.test(input.pass)) {
            document.getElementById("WrongPwd1").style.display = "none";
            setBool({ ...bool, three: true })
        } else if (input.pass) {
            document.getElementById("WrongPwd1").style.display = "block";
            setBool({ ...bool, three: false })
        }
    }, [input.pass]);

    useEffect(() => {
        if (input.pass || input.confirmPass) {
            if (input.pass == input.confirmPass) {
                setBool({ ...bool, four: true })
                document.getElementById("WrongPwd2").style.display = "none";
            }
            else if (input.confirmPass) {
                setBool({ ...bool, four: false })
                document.getElementById("WrongPwd2").style.display = "block";
            }
        }
    }, [input.confirmPass, input.pass])

    useEffect(() => {
        if (rightName.test(input.branch)) {
            document.getElementById("wrongBranch").style.display = "none";

        } else if (input.branch) {
            document.getElementById("wrongBranch").style.display = "block";

        }
    }, [input.branch]);

    useEffect(() => {
        if (isnum.test(input.mobile) && input.mobile.length == 10) {
            document.getElementById("wrongNum").style.display = "none";
            setBool({ ...bool, six: true })
        }
        else if (input.mobile) {
            document.getElementById("wrongNum").style.display = "block";
            setBool({ ...bool, six: false })
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

    const [msg1, setMsg1] = useState('')
    const [msg2, setMsg2] = useState('')
    const [msg3, setMsg3] = useState('')
    const [msg4, setMsg4] = useState('')
    useEffect(() => {
        if (input.gender) {
            setMsg1("")
        }
        if (input.course) {
            setMsg2("")
            setBool({ ...bool, course: true })
        }
        if (input.college) {
            setMsg3("")
        }
        if (input.year) {
            setMsg4("")
            setBool({ ...bool, year: true })
        }
    }, [input.course, input.gender, input.college, input.year])

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

    //captcha
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [valu, setValu] = useState('')
    const [token, setToken] = useState(false);
    const key = "6Lc40yElAAAAAJuSuZ8MhKA4ZSB_gXoVmTWu6KWP"
    function onChange(value) {
        setValu(value)
        setToken(true)
    }

    const onVerify = useCallback((token) => {
        setValu(token)
        setToken(true)
    });

    const [count, setCount] = useState(false)

    useEffect(() => {
        if (valu != '')
            setCount(false)
    }, [valu])

    // useEffect(() => {
    //     if (bool.one && bool.two && bool.four && bool.six && input.gender && input.course && input.college && input.year) {
    //         setCount(true)
    //     }
    // }, [bool, input])

    // change captcha value
    // function changeValu() {
    //     setValu('')
    // }
    // useEffect(() => {
    //     if (bool.one && bool.two && bool.four && bool.six && input.gender && input.course && input.college && input.year) {
    //         setTimeout(changeValu, 1000)
    //     }
    // })
    const [load, setLoad] = useState(false)

    function RegAsMember(e) {
        e.preventDefault();
        if (!input.gender) {
            setMsg1("Chhose a gender")
        }
        else if (!input.course) {
            setMsg2("Select a course")
            setBool({ ...bool, course: false })
        }
        else if (!input.college) {
            setMsg3("Enter your College Name")
        }
        else if (!input.year) {
            setMsg4("Select a year of study")
            setBool({ ...bool, year: false })
        }

        if (bool.one && bool.two && bool.four && bool.six && input.gender && bool.course && input.college && bool.year) {
            setLoad(true)
            setCount(true)
        }
        else {
            toast.error("Please fill the details correctly", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
    }

    useEffect(() => {
        if (valu != '') {
            var data;
            if (input.branch) {
                if (input.course == "others") {
                    data = {
                        "name": input.name,
                        "email": input.email,
                        "password": input.pass,
                        "gender": input.gender,
                        "mobile": input.mobile,
                        "course": input.otherCourse,
                        "college": input.college,
                        "year_of_study": input.year,
                        "g-recaptcha-response": valu,
                        "branch": input.branch
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
                        "year_of_study": input.year,
                        "g-recaptcha-response": valu,
                        "branch": input.branch
                    }
                }
            }
            else {
                if (input.course == "others") {
                    data = {
                        "name": input.name,
                        "email": input.email,
                        "password": input.pass,
                        "gender": input.gender,
                        "mobile": input.mobile,
                        "course": input.otherCourse,
                        "college": input.college,
                        "year_of_study": input.year,
                        "g-recaptcha-response": valu
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
                        "year_of_study": input.year,
                        "g-recaptcha-response": valu
                    }
                }
            }

            dispatch(RegMemberThunk(data)).
                then((res) => {
                    setLoad(false)
                    var y = res.payload.data.msg.replace(
                        /\w\S*/g,
                        function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }
                    );

                    if (res.payload.status === 201) {
                        dispatch(dialog0())
                        toast.success(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    else if (res.payload.status === 429) {
                        toast.error("You have attempted too many times Today, please try again tomorrow", {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    else {
                        toast.error(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
                .catch((err) => {
                })
        }
    }, [valu])

    const [timer, setTimer] = useState(10)
    useEffect(() => {
        if (reducer.loading || load) {
            const time =
                timer > 0 && setInterval(() => {
                    setTimer(timer - 1)
                }, 1000)
            return () => clearInterval(time)
        }
    }, [timer, reducer.loading, load])

    useEffect(() => {
        
        if (timer > 0) {
            if (reducer.loading || load) {
                setLoading(true)
                document.body.style.opacity = 0.5;
            }
            else {
                setLoading(false)
                document.body.style.opacity = 1;
            }
        }
        else {
            setLoading(false)
            document.body.style.opacity = 1;
            setLoad(false)
        }
    }, [reducer.loading, load, timer])

    return <>
        <div className="register">
            <div className="regFlex" id="memberReg">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog1()) }} />
                <p className="heading">Register as <span id="member">Member</span></p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form className="allForm" onSubmit={RegAsMember}>
                <p className="regName">Name</p>
                <input required type="text" className="regInputname" id="input" placeholder="Enter your name" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                <p id="wrongName">Name must contain only alphabetic characters.</p>
                <p className="regName">Email</p>
                <input required type="text" className="regInputname" placeholder="Enter your email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                <p id="wrongEmail">Please enter a valid Email address</p>
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow1} />
                )}
                <input required type={show1 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={input.pass} onChange={(e) => setInput({ ...input, pass: e.target.value })} />
                <p id="WrongPwd1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow2} />
                )}
                <input required type={show2 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={input.confirmPass} onChange={(e) => setInput({ ...input, confirmPass: e.target.value })} />
                <p id="WrongPwd2">Password entered in two fields must be same.</p>
                <p className="regName">Select your gender</p>
                <div className="genders">
                    <button type="button" className="regGender" onClick={() => { chooseGender(0, "M") }} >Male</button>
                    <button type="button" className="regGender" onClick={() => { chooseGender(1, "F") }}>Female</button>
                    <button type="button" className="regGender" onClick={() => { chooseGender(2, "O") }}>Others</button>
                </div>
                <p className="teamError">{msg1}</p>
                <p className="regName">Mobile Number</p>
                <input required type="text" className="regInputname" placeholder="Enter phone number" value={input.mobile} onChange={(e) => setInput({ ...input, mobile: e.target.value })} />
                <p id="wrongNum">Contact Number should be of 10 digit.</p>
                <p className="regName">College Name</p>
                <input required type="text" className="regInputname" placeholder="Enter your college name" value={input.college} onChange={(e) => setInput({ ...input, college: e.target.value })} />
                <p className="teamError">{msg3}</p>
                <p className="regName">Course</p>
                <select required className="regInputname" value={input.course} onChange={(e) => { setInput({ ...input, course: e.target.value }) }} >
                    <option id="option" value="">--select--</option>
                    <option value="BE/BTech">BE/BTech</option>
                    <option value="MTech">M.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option id="other" value="others">Others</option>
                </select>
                <input type="text" id="otherOption" placeholder="Enter course name" value={input.otherCourse} onChange={(e) => { setInput({ ...input, otherCourse: e.target.value }) }} />
                <p className="teamError">{msg2}</p>
                <p className="regName">Branch</p>
                <input type="text" className="regInputname" placeholder="Enter your branch" value={input.branch} onChange={(e) => { setInput({ ...input, branch: e.target.value }) }} />
                <p id="wrongBranch">Please enter a valid branch.</p>
                <p className="regName">Year of study</p>
                <select required className="regInputname" value={input.year} onChange={(e) => { setInput({ ...input, year: e.target.value }) }}>
                    <option value="" >--select--</option>
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
                <p className="teamError">{msg4}</p>
                <div id="recaptcha">
                    {count ?

                        < GoogleReCaptchaProvider reCaptchaKey={key}>
                            <GoogleReCaptcha onVerify={onVerify} />
                        </GoogleReCaptchaProvider>
                        : null
                    }
                    {/* <ReCAPTCHA size="normal"
                        sitekey={key}
                        onChange={onChange}
                    /> */}
                </div>
                <button className="regButton" type="submit">Register</button>
            </form >

        </div >
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null
        }
        <ToastContainer />
    </>
}

export default Member