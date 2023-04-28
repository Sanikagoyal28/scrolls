import { useState } from "react"
import Navbar from "../Navbar/navbar"
import Footer from "../footer/footer"
import "./result.css"
import TableComp from "./table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { ResultThunk } from "../../Redux/resultSlice"
import { Spinner } from 'react-bootstrap';

function Result() {

    const dispatch = useDispatch();
    const reducer = useSelector((s) => s.result)

    const team = {
        MS_team: '',
        CS_team: '',
        EN_team: '',
        EC_team: '',
        CE_team: '',
        ME_team: ''
    }
    const [selected, setSelected] = useState(team)
    const [wait, setWait] = useState(team)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        dispatch(ResultThunk())
    }, [])

    console.log(reducer)
    useEffect(() => {
        if (reducer.selectedTeam != '' && reducer.selectedTeam != null && reducer.selectedTeam != undefined) {
            setSelected({
                ...selected, MS_team: reducer.selectedTeam.msg.MS_team, CS_team: reducer.selectedTeam.msg.CS_team,
                EN_team: reducer.selectedTeam.msg.EN_team, EC_team: reducer.selectedTeam.msg.EC_team,
                CE_team: reducer.selectedTeam.msg.CE_team, ME_team: reducer.selectedTeam.msg.ME_team,
            })
        }
        if (reducer.waitlistedTeam != '' && reducer.waitlistedTeam != null && reducer.waitlistedTeam != undefined) {
            setWait({
                ...wait, MS_team: reducer.waitlistedTeam.MS_team, CS_team: reducer.waitlistedTeam.CS_team,
                 EC_team: reducer.waitlistedTeam.EC_team
            })
        }
    }, [reducer])

    const [timer, setTimer] = useState(14)
    useEffect(() => {
        if (reducer.loading) {
            const time =
                timer > 0 && setInterval(() => {
                    setTimer(timer - 1)
                }, 1000)
            return () => clearInterval(time)
        }
    }, [timer, reducer.loading])

    useEffect(() => {
        if (timer > 0) {
            if (reducer.loading) {
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
        }
    }, [reducer.loading, timer])

    return <>
        <Navbar />
        <div id="RESULT">
            <div id="resultHead">Result Declaration</div>
            <TableComp name="Computer Science and Information Technology" data={selected.CS_team} wait={wait.CS_team} bool="true" />
            <TableComp name="Civil Engineering" data={selected.CE_team} wait={wait.CE_team} bool="false" />
            <TableComp name="Electrical and Electronics Engineering" data={selected.EN_team} wait={wait.EN_team} bool="false" />
            <TableComp name="Electronics and Communication Engineering" data={selected.EC_team} wait={wait.EC_team} bool="true" />
            <TableComp name="Mechanical Engineering" data={selected.ME_team} wait={wait.ME_team} bool="false" />
            <TableComp name="Management Sciences" data={selected.MS_team} wait={wait.MS_team} bool="true" />
        </div>
        <Footer />

        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default Result