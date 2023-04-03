import Navbar from "../Navbar/navbar"
import "./teamDB.css"
import file from "../Assets/file.svg"
import fail from "../Assets/fail.gif"
import pending from "../Assets/pending.gif"
import success from "../Assets/success.gif"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TeamDBDataThunk, TeamDBThunk } from "../../Redux/dashboard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import FormData from "form-data";
import { useNavigate } from "react-router"
import { usePrevious } from "react-use"
import Footer from "../footer/footer"

function TeamDB() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.dashboard)
    const [loading, setLoading] = useState(false)

    // const team = {
    //     teamId:'',
    //     teamSize:'',
    //     leader:'',
    //     member2:'',
    //     member3:'',
    //     domain:'',
    //     topic:'',
    //     synopsis:'',
    //     paper:'',
    //     uplDom:'',
    //     uplTop:'',
    //     uplSyn:[],
    //     uplPaper:[],
    //     selected:false,
    //     text1:'',
    //     text2:''
    // }

    // const [teamState, setTeamState] = useState(team)
    const [teamId, setTeamId] = useState('')
    const [teamSize, setTeamSize] = useState('')
    const [leader, setLeader] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [domain, setDomain] = useState('')
    const [topic, setTopic] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [paper, setPaper] = useState('')
    const [uplDom, setUplDom] = useState('')
    const [uplTop, setUplTop] = useState('')
    const [uplSyn, setUplSyn] = useState([])
    const [uplPaper, setUplPaper] = useState([])
    const [image, setImage] = useState("")
    const [selected, setSelected] = useState(false)
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const navigate = useNavigate()
    const fd = new FormData()

    const prevDomain = usePrevious(uplDom)
    const prevSyn = usePrevious(uplSyn)
    const prevTop = usePrevious(uplTop)
    const prevPap = usePrevious(uplPaper)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        dispatch(TeamDBThunk())
    }, [])
    useEffect(() => {
        setTeamId(reducer.dataTeam.team_id)
        setTeamSize(reducer.dataTeam.size)
        setTopic(reducer.dataTeam.topic)
        setDomain(reducer.dataTeam.domain)
        setSelected(reducer.dataTeam.is_selected)
        setPaper(reducer.dataTeam.paper)
        setSynopsis(reducer.dataTeam.synopsis)
        setLeader(reducer.dataTeam.leader_data)
        setMember2(reducer.dataTeam.member_2_data)
        setMember3(reducer.dataTeam.member_3_data)
    }, [reducer])

    useEffect(() => {
        if (!selected && (synopsis === '' || synopsis === null)) {
            setImage(pending)
            setText1("Pending")
            setText2("Submit your Synopsis for Being eligible to submit paper.")
            document.getElementById('Paper').style.display = "none"
        }
        if (!selected && synopsis != '' && synopsis != null) {
            setImage(fail)
            setText1("Pending")
            setText2("You cannot submit Paper until you are selected.")
            document.getElementById('Paper').style.display = "none"
        }
        if (selected) {
            setImage(success)
            setText1("Congratulations")
            setText2("You are selected, you can submit your Paper now.")
            document.getElementById('Paper').style.display = "block"
        }
    }, [synopsis, selected])

    function handleCancel() {
        if (domain === "" && topic === "") {
            setUplDom('')
            setUplTop('')
        }
        setUplPaper('')
        setUplSyn('')
    }

    function handleSave() {
        // setSynopsis("fjnk")
        if (uplDom && uplTop) {
            if (uplSyn.length == 0 && uplPaper.length == 0) {
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
            }
            else if (uplSyn.length != 0 && uplPaper.length == 0) {
                fd.append('synopsis', uplSyn)
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
            }
            else if (uplSyn.length == 0 && uplPaper.length != 0) {
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
                fd.append('paper', uplPaper)
            }
            else if (uplSyn.length != 0 && uplPaper.length != 0) {
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
                fd.append('synopsis', uplSyn)
                fd.append('paper', uplPaper)
            }
        }
        else {
            if (uplSyn.length != 0 && uplPaper.length == 0) {
                fd.append('synopsis', uplSyn)
            }
            else if (uplSyn.length == 0 && uplPaper.length != 0) {
                fd.append('paper', uplPaper)
            }
            else if (uplSyn.length != 0 && uplPaper.length != 0) {
                fd.append('synopsis', uplSyn)
                fd.append('paper', uplPaper)
            }
        }

        //console form data
        for (const pair of fd.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }

        dispatch(TeamDBDataThunk(fd)).
            then((res) => {
                if (res.payload.status === 200) {
                    toast.success(`${res.payload.data.msg}`, {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                    dispatch(TeamDBThunk())
                } else {
                    setUplPaper('')
                    setUplSyn('')
                    toast.error(`${res.payload.data.msg}`, {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
            })
            .catch((err) => {
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

    function handleSynopsis() {
        if ((topic === '' && domain === '') && (uplDom === "" && uplTop === "") || (uplDom != "" && uplTop === "")) {
            toast.error("Please select a Topic or Domain to upload Papers", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
        else {
            console.log("upload")
        }
    }

    function handlePaper() {
        if (!selected) {
            toast.error("Please wait for Admin response", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
        else {
            console.log("true")
        }
    }

    let condition = (prevDomain != uplDom || prevSyn != uplSyn || prevTop != uplTop || prevPap != uplPaper) ? false : true

    return <>
        <Navbar />
        <div id="dbDialog">
            <img id="dialImg" src={image} />
            <p id="dialText1">{text1}</p>
            <p id="dialText2">{text2}</p>
        </div>
        <div className="dbOuterDiv">
            <p className="dashboard">Dashboard</p>
            <p className="dbHead1">Details regarding Team and Members</p>

            <hr className="dbHR1" />
            <div className="dbFlex1">
                <p className="dbHead">Team ID</p>
                <div className="teamID_box">{teamId}</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <p className="dbHead">Team Size</p>
                <div className="teamID_box">{teamSize}</div>
            </div>

            <hr className="dbHR2" />

            <p className="dbHead">Members</p>
            <table id="caTable">
                <tr className="member_box">
                    <td>Name</td>
                    <td>Role</td>
                    <td>Scroll ID</td>
                </tr>
                {(leader != '' && leader != null && leader != undefined) ? <tr className="team_box_data"><td>{leader.name}</td>
                    <td>Leader</td>
                    <td>{leader.member_id}</td> </tr> : null}

                {(member2 != '' && member2 != null && member2 != undefined) ? <tr className="team_box_data"><td>{member2.name}</td>
                    <td>Member 2</td>
                    <td>{member2.member_id}</td> </tr> : null}

                {(member3 != '' && member3 != null && member3 != undefined) ? <tr className="team_box_data"><td>{member3.name}</td>
                    <td>Member 3</td>
                    <td>{member3.member_id}</td> </tr> : null}
            </table>
            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Domain</p>
                    <p className="dbText">Select Team Domain</p>
                </div>
                {domain === "" ? <>
                    <select className="teamID_box" onChange={(e) => { setUplDom(e.target.value) }} >
                        <option id="option" value="">--select--</option>
                        <option value="Management Science">Management Science</option>
                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                        <option value="Computer Science and Information Technology">Computer Science and Information Technology</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
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
                        {uplDom === "Management Science" ? <>
                            <option id="option">--select--</option>
                            <option value="Effect of Ukraine-Russia war on World Economy">Effect of Ukraine-Russia war on World Economy</option>
                            <option value="Budget 2023: Populism vs Tough Decisions">Budget 2023: Populism vs Tough Decisions</option>
                            <option value="Effect of Hindenburg Report: Financial terror in India">Effect of Hindenburg Report: Financial terror in India</option>
                            <option value="Social media has eclipsed the real news">Social media has eclipsed the real news</option>
                            <option value="Importance of learning from history for the growth of nation">Importance of learning from history for the growth of nation</option>
                            <option value="Money laundering has lead to parallel economy">Money laundering has lead to parallel economy</option>
                            <option value="Artificial Intelligence taking over the creative field: A glimpse of a grim future?">Artificial Intelligence taking over the creative field: A glimpse of a grim future?</option>
                            <option value="Business Intelligence: Alignment of IT and Business">Business Intelligence: Alignment of IT and Business</option>
                            <option value="India emerging as an economic power in the new world order">India emerging as an economic power in the new world order</option>
                            <option value="Banking policies to develop microfinance capabilities to support MSMEs and underpriviliged">Banking policies to develop microfinance capabilities to support MSMEs and underpriviliged</option>
                        </> : null}
                        {uplDom === "Electronics and Communication Engineering" ? <>
                            <option id="option">--select--</option>
                            <option value="OLED" >OLEDs(Organic Light Emitting Diodes)</option>
                            <option value="Flexible Electronics and Display">Flexible Electronics and Display</option>
                            <option value="Fuel Cell Technology">Fuel Cell Technology</option>
                            <option value="Revolution in Semiconductor Industries">Revolution in Semiconductor Industries</option>
                            <option value="IOT-Home/ Industry">IOT-Home/ Industry</option>
                            <option value="Optical Wireless and 5G">Optical Wireless and 5G</option>
                            <option value="Visible Light Communication">Visible Light Communication</option>
                            <option value="Smart Antenna">Smart Antenna</option>
                            <option value="Hybrid Cars">Hybrid Cars</option>
                            <option value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</option>
                            <option value="Nanotechnology in Electronics">Nanotechnology in Electronics</option>
                        </> : null}
                        {uplDom === "Civil Engineering" ? <>
                            <option id="option">--select--</option>
                            <option value="Stressed Ribbon bridge">Stressed Ribbon bridge</option>
                            <option value="Green building">Green building</option>
                            <option value="Self Consolidating concrete">Self Consolidating concrete</option>
                            <option value="Fiber reinforced concrete">Fiber reinforced concrete</option>
                            <option value="Advance Earthquake and Resistant Techniques">Advance Earthquake and Resistant Techniques</option>
                            <option value="Base Isolation Building">Base Isolation Building</option>
                            <option value="Use of AI in Civil Engineering">Use of AI in Civil Engineering</option>
                            <option value="Intelligent Transport Systems">Intelligent Transport Systems</option>
                            <option value="Mixed traffic controls">Mixed traffic controls</option>
                            <option value="Advanced Payment Design">Advanced Payment Design</option>
                        </> : null}
                        {uplDom === "Electrical and Electronics Engineering" ? <>
                            <option id="option">--select--</option>
                            <option value="Wireless Power Transmission">Wireless Power Transmission</option>
                            <option value="Hybrid Electric Vehicles">Hybrid Electric Vehicles</option>
                            <option value="Renewable Energy and Environment Protection">Renewable Energy and Environment Protection</option>
                            <option value="Smart grid Technology">Smart grid Technology</option>
                            <option value="Artificial Intelligence in Power stations">Artificial Intelligence in Power stations</option>
                            <option value="Cloud computing in Power Systems">Cloud computing in Power Systems</option>
                            <option value="Role of power Electronics">Role of power Electronics</option>
                            <option value="Cyber Security in Power Systems">Cyber Security in Power Systems</option>
                            <option value="Special Electrical Machines">Special Electrical Machines</option>
                            <option value="Power convertors for Renewable energy">Power convertors for Renewable energy</option>
                            <option value="Sustainable developement">Sustainable developement</option>
                        </> : null}
                        {uplDom === "Computer Science and Information Technology" ? <>
                            <option id="option">--select--</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="Deep Learning">Deep Learning</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Image Processing">Image Processing</option>
                            <option value="Neural Network">Neural Network</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Augumented Reality, Virtual Reality, Metaverse Technology">Augumented Reality, Virtual Reality, Metaverse Technology</option>
                            <option value="Big Data and Analytics">Big Data and Analytics</option>
                            <option value="Wireless Sensor Network">Wireless Sensor Network</option>
                            <option value="Semantic Web: Sentiment analysis of Twitter/Facebook/Instagram">Semantic Web: Sentiment analysis of Twitter/Facebook/Instagram</option>
                            <option value="Quantum Computing">Quantum Computing</option>
                        </> : null}
                        {uplDom === "Mechanical Engineering" ? <>
                            <option id="option">--select--</option>
                            <option value="Computer Aided Engineering/ Computer Aided Design">Computer Aided Engineering/ Computer Aided Design</option>
                            <option value="Smart Materials">Smart Materials</option>
                            <option value="Supply Chain Management">Supply Chain Management</option>
                            <option value="Green Manufacturing">Green Manufacturing</option>
                            <option value="Additive Manufacturing">Additive Manufacturing</option>
                            <option value="MEMS- Micro Electro Mechanical systems">MEMS- Micro Electro Mechanical systems</option>
                            <option value="Automatic Transmissions in Automobiles">Automatic Transmissions in Automobiles</option>
                            <option value="Friction stir welding">Friction stir welding</option>
                            <option value="Industry 4.0">Industry 4.0</option>
                            <option value="Nanotechnology">Nanotechnology</option>
                        </> : null}
                    </select>
                </> : <div className="teamID_box">{topic}</div>}
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Synopsis</p>
                    <p className="dbText">Note: You can upload the document (only PDF, DOCx) only once. Please carefully recheck your document while uploading.</p>
                </div>

                {synopsis === '' || synopsis === null || synopsis === undefined ? <>
                    {(uplSyn.length == 0) ?
                        <label for="uploadSyn">
                            <div className="file_box">
                                <label for="uploadSyn"><img src={file} onClick={() => { handleSynopsis() }} className="fileIcon" /></label>
                                <input type="file" id="uploadSyn" accept=".doc, .docx, .pdf" disabled={((topic === '' && domain === '') && (uplDom === "" && uplTop === "") || (uplDom != "" && uplTop === "")) ? true : false} onChange={(e) => { setUplSyn(e.target.files[0]) }} hidden />
                                <label for="uploadSyn"><p className="uploadText">Click to upload</p></label>
                            </div>
                        </label> : <div id="dbFiles">
                            <div className="teamID_box">{uplSyn.name}</div>
                            <div className="fileFlex">
                                <label for="uploadSyn" id="editFile">Edit</label>
                                <input type="file" id="uploadSyn" accept=".doc, .docx, .pdf" disabled={((topic === '' && domain === '') && (uplDom === "" && uplTop === "") || (uplDom != "" && uplTop === "")) ? true : false} onChange={(e) => { setUplSyn(e.target.files[0]) }} hidden />
                                <p id="remove" onClick={() => { setUplSyn('') }}>Remove</p>
                            </div>
                        </div>
                    }
                </>
                    : <div className="synopsis"><a href={`https://backend.scrollsakgec.in${synopsis}`}>{`https://backend.scrollsakgec.in${synopsis}`}</a></div>}
            </div>

            <hr className="dbHR2" />

            <div id="Paper">
                <div className="dbFlex1">
                    <div className="dbFlex2">
                        <p className="dbHead">Paper</p>
                        <p className="dbText">Note: You can upload the document (only PDF, DOCx) only once. Please carefully recheck your document while uploading.</p>
                    </div>

                    {paper === "" || paper === null || paper === undefined ? <>
                        {(uplPaper.length == 0) ?
                            <label for="uploadFile">
                                <div className="file_box">
                                    <label for="uploadFile"><img src={file} onClick={() => { handlePaper() }} className="fileIcon" /></label>
                                    <input type="file" id="uploadFile" accept=".doc, .docx, .pdf" disabled={(!selected) ? true : false} onChange={(e) => { handleChange(e) }} hidden />
                                    <label for="uploadFile"><p className="uploadText">Click to upload</p></label>
                                </div>
                            </label> : <div id="dbFiles">
                                <div className="teamID_box">{uplPaper.name}</div>
                                <div className="fileFlex">
                                    <label for="uploadFile" id="editFile">Edit</label>
                                    <input type="file" id="uploadFile" accept=".doc, .docx, .pdf" disabled={(!selected) ? true : false} onChange={(e) => { handleChange(e) }} hidden />
                                    <p id="remove" onClick={() => { setUplPaper('') }}>Remove</p>
                                </div>
                            </div>
                        }
                    </>
                        : <div className="synopsis"><a href={`https://backend.scrollsakgec.in${paper}`}>{`https://backend.scrollsakgec.in${paper}`}</a></div>}
                </div>
                <hr className="dbHR2" />
            </div>

            <div className="dbBtns">
                <button className="dbCancel" onClick={() => { handleCancel() }} >Cancel</button>
                <button className="dbSave" type="button" disabled={condition} onClick={() => { handleSave() }}>Save</button>
            </div>
        </div>
        <Footer />
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default TeamDB
