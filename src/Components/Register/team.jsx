import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { RegTeamThunk } from "../../Redux/registerSlice";
import { Spinner } from 'react-bootstrap';
import { dialog0, dialog1 } from "../../Redux/step";

function Team() {

    // team registration
    const [loading, setLoading] = useState(false)
    const [referralCode, setRefferalCode] = useState('')
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    function handleShow1() {
        setShow1(!show1)
    }
    function handleShow2() {
        setShow2(!show2)
    }

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
        if (team.referral) {
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
        }
        else {
            if (team.size == 1) {
                data = {
                    "name": team.name,
                    "size": parseInt(team.size),
                    "leader_id": parseInt(team.leaderId),
                    "password": team.pass
                }
            }
            if (team.size == 2) {
                data = {
                    "name": team.name,
                    "size": parseInt(team.size),
                    "leader_id": parseInt(team.leaderId),
                    "member_2": parseInt(team.member2),
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
                    "password": team.pass
                }
            }
        }
        if (team.name && team.size && team.leaderId && team.pass) {
            dispatch(RegTeamThunk(data)).
                then((res) => {
                    if (res.payload.status === 201) {
                        toast.success(`${res.payload.data.msg}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        dispatch(dialog0())
                    }
                    if (res.payload.status === 400) {
                        let x = Object.keys(res.payload.data)
                        toast.error(`${res.payload.data[Object.keys(res.payload.data)[0]]}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
                .catch((err) => {
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
            <div className="regFlex" id="teamReg">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog1()) }} />
                <p className="heading">Register as <span id="member">Team</span></p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <p className="regName">Team Name</p>
                <input required type="text" className="regInputname" placeholder="Enter team name" value={team.name} onChange={(e) => { setTeam({ ...team, name: e.target.value }) }} />
                <p className="regName">Team Size</p>
                <select required className="regInputname" value={team.size} onChange={(e) => { setTeam({ ...team, size: e.target.value }) }}>
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
                <input required type={show1 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={team.pass} onChange={(e) => { setTeam({ ...team, pass: e.target.value }) }} />
                <p id="WrongPwdTeam1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="TEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="TEye" onClick={handleShow2} />
                )}
                <input required type={show2 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={team.cPass} onChange={(e) => { setTeam({ ...team, cPass: e.target.value }) }} />
                <p id="WrongPwdTeam2">Password entered in two fields must be same.</p>
                <div className="teamLeader">
                    <p className="regName">Team Leader ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" required={(team.size == 1 || team.size == 2 || team.size == 3)? true: false} value={team.leaderId} onChange={(e) => { setTeam({ ...team, leaderId: e.target.value }) }} />
                </div>
                <div className="teamLeader">
                    <p className="regName">Member 2 ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" required={(team.size == 2 || team.size == 3) ? true: false} value={team.member2} onChange={(e) => { setTeam({ ...team, member2: e.target.value }) }} />
                </div>
                <div className="teamLeader">
                    <p className="regName">Member 3 ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" required={(team.size == 3) ? true: false} value={team.member3} onChange={(e) => { setTeam({ ...team, member3: e.target.value }) }} />
                </div>
                <button className="regButton" onClick={RegAsTeam}>Register</button>
            </form>
        </div>
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        {/* </Dialog> */}

    </>

}

export default Team