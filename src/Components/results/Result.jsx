import { useState } from "react"
import Navbar from "../Navbar/navbar"
import Footer from "../footer/footer"
import "./result.css"
import TableComp from "./table"


function Result() {

    const [teams, setTeams] = useState('')
    return <>
        <Navbar />
        <div id="RESULT">
            <div id="resultHead">Result Declaration</div>
            <TableComp name="Computer Science and Information Technology" />
            <TableComp name="Civil Engineering" />
            <TableComp name="Electrical and Electronics Engineering" />
            <TableComp name="Electronics and Communication Engineering" />
            <TableComp name="Mechanical Engineering" />
            <TableComp name="Management Sciences" />
        </div>
        <Footer />
    </>
}

export default Result