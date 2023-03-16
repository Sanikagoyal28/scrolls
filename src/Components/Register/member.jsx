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

function Member() {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
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
                    console.log(res)
                    if (res.payload.status === 201) {
                        dispatch(dialog0())
                        toast.success(`${res.payload.data.msg}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                       dispatch(dialog0())
                    }
                    else {
                        toast.error(`${res.payload.data.msg}`, {
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
        <div className="register">
            <div className="regFlex">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog1()) }} />
                <p className="heading">Register as <span id="member">Member</span></p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
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
    </>
}

export default Member