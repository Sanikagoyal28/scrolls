import Navbar from "../Navbar/navbar"
import "./teamDB.css"
import file from "../Assets/file.svg"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TeamDBDataThunk, TeamDBThunk } from "../../Redux/dashboard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import FormData from "form-data";

function TeamDB() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.dashboard)
    const [loading, setLoading] = useState(false)
    const [teamId, setTeamId] = useState('')
    const [teamSize, setTeamSize] = useState('')
    const [leader, setLeader] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [domain, setDomain] = useState('')
    const [topic, setTopic] = useState('')
    const [uplDom, setUplDom] = useState('')
    const [uplTop, setUplTop] = useState('')
    const [uplSyn, setUplSyn] = useState([])
    const [uplPaper, setUplPaper] = useState([])
    const fd = new FormData()
    console.log(reducer)
    useEffect(() => {
        dispatch(TeamDBThunk())
    }, [])
    useEffect(() => {
        setTeamId(reducer.dataTeam.id)
        setTeamSize(reducer.dataTeam.size)
        setTopic(reducer.dataTeam.topic)
        setDomain(reducer.dataTeam.domain)
        setLeader(reducer.dataTeam.leader_data)
        setMember2(reducer.dataTeam.member_2_data)
        setMember3(reducer.dataTeam.member_3_data)
    }, [reducer])

    function handleCancel() {
        setUplDom('')
        setUplPaper('')
        setUplSyn('')
        setUplTop('')
    }
    function handleSave() {
        fd.append('synopsis', uplSyn)
        fd.append('paper', uplPaper)
        fd.append('domain', uplDom)
        fd.append('topic', uplTop)
        dispatch(TeamDBDataThunk(fd)).
            then((res) => {
                console.log(res)
                if (res.payload.status === 200) {
                    toast.success(`${res.payload.data.msg}`, {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                } else {
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

    function handleChange(e) {
        setUplPaper(e.target.files[0])
    }
    console.log(leader)

    return <>
        <Navbar />
        <div className="dbOuterDiv">
            <p className="dashboard">Dashboard</p>
            <p className="dbHead1">Details regarding Team and Members</p>

            <hr className="dbHR1" />
            <div className="dbBtns">
                <button className="dbCancel" onClick={() => { handleCancel() }} >Cancel</button>
                <button className="dbSave" onClick={() => { handleSave() }}>Save</button>
            </div>
            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Team ID</p>
                    <p className="dbText">This will be displayed on your Profile</p>
                </div>
                <div className="teamID_box">{teamId}</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Team Size</p>
                    <p className="dbText">Team size can't exceed more than 3 members</p>
                </div>
                <div className="teamID_box">{teamSize}</div>
            </div>

            <hr className="dbHR2" />

            <p className="dbHead">Members</p>
            <div className="member_box">
                <p>Name</p>
                <p>Role</p>
                <p>Scroll ID</p>
            </div>

            {(leader != '' || leader != null) ? <div className="team_box_data"><p>{leader.name}</p>
                <p>Leader</p>
                <p>210000220</p></div> : null}

            {(member2 === '' || member2 === null) ? null : <div className="team_box_data"><p>{member2.name}</p>
                <p>Member</p>
                <p>210000220</p> </div>}

            {(member3 === '' || member3 === null) ? null : <div className="member_box_data"><p>{member3.name}</p>
                <p>Member</p>
                <p>210000220</p></div>}

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Domain</p>
                    <p className="dbText">Select Team Domain</p>
                </div>
                {domain === "" ? <>
                    <select className="teamID_box" onChange={(e) => { setUplDom(e.target.value) }} >
                        <option id="option">--select--</option>
                        <option value="Management Science">Management Science</option>
                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">Information Technology</option>

                        <option value="MBA">Mechanical Engineering</option>
                    </select>
                </> : <div className="teamID_box">{domain}</div>}
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Topic</p>
                    <p className="dbText">Select Topic</p>
                </div>
                {topic === '' ? <>
                    <select className="teamID_box" onChange={(e) => { setUplTop(e.target.value) }}  >
                        <option id="option">--select--</option>
                        <option value="Django">Django</option>
                        {/* <option value="MTech">Electronics and Communication Engineering</option> */}
                        {/* <option value="MCA">Civil Engineering</option> */}
                        {/* <option value="MBA">Electrical and Electronics Engineering</option> */}
                        {/* <option id="other" value="others">Computer Science and Information Technology</option> */}
                        {/* <option value="MBA">Mechanical Engineering</option> */}
                    </select>
                </> : <div className="teamID_box">{topic}</div>}
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Synopsis</p>
                    <p className="dbText">Note: You can upload the document only once. Please carefully recheck your document while uploading.</p>
                </div>
                {(uplSyn.length == 0) ?
                    <div className="file_box">
                        <label for="uploadSyn"><img src={file} className="fileIcon" /></label>
                        <input type="file" id="uploadSyn" accept=".doc, .docx, .pdf" onChange={(e) => { setUplSyn(e.target.files[0]) }} hidden />
                        <p className="uploadText">Click to upload</p>
                    </div> :
                    <div className="teamID_box">{uplSyn.name}</div>}

            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Paper</p>
                    <p className="dbText">Note: You can upload the document only once. Please carefully recheck your document while uploading.</p>
                </div>
                {(uplPaper.length == 0) ?
                    <div className="file_box">
                        <label for="uploadFile"><img src={file} className="fileIcon" /></label>
                        <input type="file" id="uploadFile" accept=".doc, .docx, .pdf" onChange={(e) => { handleChange(e) }} hidden />
                        <p className="uploadText">Click to upload</p>
                    </div> :
                    <div className="teamID_box">{uplPaper.name}</div>}
            </div>

            <hr className="dbHR2" />

        </div>
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default TeamDB