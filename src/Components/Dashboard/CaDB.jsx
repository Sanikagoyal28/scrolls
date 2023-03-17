
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CADBThunk } from "../../Redux/dashboard"
import Navbar from "../Navbar/navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';

function CaDB() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.dashboard)
    console.log(reducer)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [referralCode, setRefferalCode] = useState('')
    const [numRef, setNumRef] = useState('')
    const [college, setCollege] = useState('')
    const [teams, setTeams] = useState([])
    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        dispatch(CADBThunk())
        setName(reducer.dataCA.name)
        setRefferalCode(reducer.dataCA.referral_code)
        setNumRef(reducer.dataCA.referral_count)
        setCollege(reducer.dataCA.college)
        // setTeams(reducer.dataCA.list of teams)
        setLeaderboard(reducer.dataCA.leaderboard)

    }, [])

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
        <div className="dbOuterDiv">
            <p className="dashboard">Dashboard</p>
            <p className="dbHead1">Details regarding Campus Ambassador</p>

            <hr className="dbHR1" />
            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Name</p>
                    <p className="dbText">This will be displayed on your Profile</p>
                </div>
                <div className="teamID_box">{name}</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Referral Code</p>
                    <p className="dbText">Team size can't exceed more than 3 members</p>
                </div>
                <div className="teamID_box">{referralCode}</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Number of Referrals used</p>
                    <p className="dbText">This will be displayed on your Profile</p>
                </div>
                <div className="teamID_box">{numRef}</div>
            </div>

            <hr className="dbHR2" />

            <p className="dbHead">List of teams</p>
            <div className="member_box">
                <p>Team Name</p>
                <p>Leader</p>
            </div>
            {teams.length > 0 ? teams.map((t) => {
                return <>
                    <div className="team_box_data">
                        <p>{t.team_name}</p>
                        <p>{t.leader}</p>
                    </div>
                </>
            }) :  <div className="team_box_data">
                <p>No teams made yet.</p>
            </div> }

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">College</p>
                    <p className="dbText">This will be displayed on your Profile</p>
                </div>
                <div className="teamID_box">{college}</div>
            </div>

            <hr className="dbHR2" />

            <p className="dbHead">Leaderboard</p>
            <div className="member_box">
                <p>CA Name</p>
                <p>Rank</p>
                <p>Referral count</p>
            </div>
            {leaderboard.length > 0 ? leaderboard.map((t, index) => {
                return <>
                    <div className="member_box_data">
                        <p>{t.CA_name}</p>
                        <p>{index + 1}</p>
                        <p>{t.referral_count}</p>
                    </div>
                </>
            }) : null}
        </div>

        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}
export default CaDB