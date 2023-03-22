
import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { RegCAThunk } from "../../Redux/registerSlice";
import { Spinner } from 'react-bootstrap';
import { dialog0, dialog1, dialog4 } from "../../Redux/step";
import ReCAPTCHA from "react-google-recaptcha";

function CA2() {

    // register 5
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
    const [isCA, setIsCA] = useState(false)
    const rightName = /^[a-z ,.'-]+$/i;
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    const isnum = /^\d+$/;
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    function handleShow1() {
        setShow1(!show1)
    }
    function handleShow2() {
        setShow2(!show2)
    }

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

      //captcha

      const [valu, setValu] = useState('')
      const [token, setToken] = useState(false);
      // const key = "6Lf6HCIlAAAAAGU2ube1_efUhBj63FQcx3Bkl9kp"
      const key = "6LeZ8CElAAAAAPmAryGCBt-Y1bvEGF4VsITNJrAS"
      function onChange(value) {
          setValu(value)
          setToken(true)
          console.log("Captcha value:", value);
      }

    function RegAsCA() {
        if (!token) {
            toast.error("Please verify the captcha", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
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
                "year_of_study": ca.year,
                "g-recaptcha-response":valu
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
                "year_of_study": ca.year,
                "g-recaptcha-response":valu
            }
        }
        console.log(data)
        if (isCA && token) {
            dispatch(RegCAThunk(data)).
                then((res) => {
                    if (res.payload.status === 201) {
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
            <div className="regFlex" id="memberReg" >
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog4()) }} />
                <p className="heading" id="registerCA">Register as <span id="member">Campus Ambassador</span></p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <p className="regName">Name</p>
                <input required type="text" className="regInputname" id="input" placeholder="Enter your name" value={ca.name} onChange={(e) => setCA({ ...ca, name: e.target.value })} />
                <p id="wrongNameCA">Name must contain only alphabetic characters.</p>
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="CEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="CEye" onClick={handleShow1} />
                )}
                <input required type={show1 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={ca.pass} onChange={(e) => setCA({ ...ca, pass: e.target.value })} />
                <p id="WrongPwdCA1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="CEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="CEye" onClick={handleShow2} />
                )}
                <input required type={show2 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={ca.confirmPass} onChange={(e) => setCA({ ...ca, confirmPass: e.target.value })} />
                <p id="WrongPwdCA2">Password entered in two fields must be same.</p>
                <p className="regName">Select your gender</p>
                <div className="genders">
                    <button className="regGender" onClick={() => { chooseGenderCA(0, "M") }} >Male</button>
                    <button className="regGender" onClick={() => { chooseGenderCA(1, "F") }}>Female</button>
                    <button className="regGender" onClick={() => { chooseGenderCA(2, "O") }}>Others</button>
                </div>
                <p className="regName">Mobile Number</p>
                <input required type="text" className="regInputname" placeholder="Enter phone number" value={ca.mobile} onChange={(e) => setCA({ ...ca, mobile: e.target.value })} />
                <p id="wrongNumCA">Number must contain only numeric characters.</p>
                <p className="regName">College Name</p>
                <input required type="text" className="regInputname" placeholder="Enter your college name" value={ca.college} onChange={(e) => setCA({ ...ca, college: e.target.value })} />
                <p className="regName">Course</p>
                <select required className="regInputname" value={ca.course} onChange={(e) => { setCA({ ...ca, course: e.target.value }) }} >
                    <option id="option">--select--</option>
                    <option value="BE/BTech">BE/BTech</option>
                    <option value="MTech">M.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option id="other" value="others">Others</option>
                </select>
                <input required type="text" id="otherCA" placeholder="Enter course name" value={ca.otherCourse} onChange={(e) => { setCA({ ...ca, otherCourse: e.target.value }) }} />
                <p className="regName">Branch</p>
                <input required type="text" className="regInputname" placeholder="Enter your branch" value={ca.branch} onChange={(e) => { setCA({ ...ca, branch: e.target.value }) }} />
                <p id="wrongBranchCA">Please enter a valid branch.</p>
                <p className="regName">Year of study</p>
                <select required className="regInputname" value={ca.year} onChange={(e) => { setCA({ ...ca, year: e.target.value }) }}>
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
                <div id="recaptcha">
                    <ReCAPTCHA
                        sitekey={key}
                        onChange={onChange}
                    />
                </div>
                <button className="regButton" onClick={RegAsCA}>Register</button>
            </form>
        </div>
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}

    </>
}

export default CA2