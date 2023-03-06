import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import "./register.css"
import { useEffect, useState } from "react"

function MemberRegister() {

    const rightName = /^[a-z ,.'-]+$/i;
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isnum = /^\d+$/;
    const [isCorrect, setIsCorrect] = useState(false);
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [input, setInput] = useState({
        name: '',
        email: '',
        pass: '',
        confirmPass: '',
        gender: '',
        mobile: '',
        course: '',
        branch: '',
        year: ''
    })
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
        if (input.pass == input.confirmPass) {
            setIsCorrect(true)
            document.getElementById("WrongPwd2").style.display = "none";
        }
        else {
            setIsCorrect(false)
            document.getElementById("WrongPwd2").style.display = "block";
        }
    }, [input.confirmPass])


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
        if (input.course == "others")
            document.getElementById("otherOption").style.display = 'block'
        else
            document.getElementById("otherOption").style.display = 'none'
    }, [input.course])

    return <>
        <div className="register">
            <div className="regFlex">
                <img className="arrow" src={arrow} />
                <p className="heading">Register as <span id="member">Member</span></p>
                <img className="cross" src={cross} />
            </div>
            <p className="regName">Name</p>
            <input type="text" className="regInputname" placeholder="Enter your name" value={input.name} onChange={(e) => setInput({ name: e.target.value })} />
            <p id="wrongName">Name must contain only alphabetic characters.</p>
            <p className="regName">Email</p>
            <input type="text" className="regInputname" placeholder="Enter your email" value={input.email} onChange={(e) => setInput({ email: e.target.value })} />
            <p id="wrongEmail">Please enter a valid Email address</p>
            <p className="regName">Password</p>
            {show1 ? (
                <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow1} />
            ) : (
                <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow1} />
            )}
            <input type={show1 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={input.pass} onChange={(e) => setInput({ pass: e.target.value })} />
            <p id="WrongPwd1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
            <p className="regName">Confirm Password</p>
            {show2 ? (
                <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow2} />
            ) : (
                <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow2} />
            )}
            <input type={show2 ? "text" : "password"} className="regInputname" placeholder="Enter password" value={input.confirmPass} onChange={(e) => setInput({ confirmPass: e.target.value })} />
            <p id="WrongPwd2">Password entered in two fields must be same.</p>
            <p className="regName">Select your gender</p>
            {/* <input type="radio" className="regInputradio"> */}
            <input type="text" className="regInputname" placeholder="Enter password" />
            <p className="regName">Mobile Number</p>
            <input type="text" className="regInputname" placeholder="Enter phone number" value={input.mobile} onChange={(e) => setInput({ mobile: e.target.value })} />
            <p id="wrongNum">Number must contain only numeric characters.</p>
            <p className="regName">Course</p>
            <select className="regInputname" value={input.course} onChange={(e) => { setInput({ course: e.target.value }) }} >
                <option id="option">--select--</option>
                <option value="BE/BTech">BE/BTech</option>
                <option value="MTech">M.Tech</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option id="other" value="others">Others</option>
            </select>
            <input type="text" id="otherOption" placeholder="Enter course input.name" value={input.course} onChange={(e) => { setInput({ course: e.target.value }) }} />
            <p className="regName">Branch</p>
            <input type="text" className="regInputname" placeholder="Enter your branch" value={input.branch} onChange={(e) => { setInput({ branch: e.target.value }) }} />
            <p id="wrongBranch">Please enter a valid branch.</p>
            <p className="regName">Year of study</p>
            <select className="regInputname" value={input.year} onChange={(e) => { setInput({ year: e.target.value }) }}>
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
            <button className="regButton"></button>
        </div>
    </>

}
export default MemberRegister