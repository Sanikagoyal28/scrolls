import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"
import UpdCard from "./card"
import "./update.css"

function Update() {

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return <>
        <Navbar />
        <div className="updates">
            <p className="dashboard" id="update">Updates</p>
            <UpdCard text="Registrations are live now" head="Registrations" />
            <UpdCard text="Registrations are live now" head="Registrations" />
            <UpdCard text="Registrations are live now" head="Registrations" />
            <UpdCard text="Registrations are live now" head="Registrations" />
            {/* <div className="updText">
                <ul>
                    <li>1.  The ongoing conflict between Ukraine and Russia has had several impacts on the world economy. There are some possible effects on Energy prices, Trade, Tourism, </li>
                    <li>2.  The ongoing conflict between Ukraine and Russia has had several impacts on the world economy. There are some possible effects on Energy prices, Trade, Tourism, </li>
                    <li>3.  The ongoing conflict between Ukraine and Russia has had several impacts on the world economy. There are some possible effects on Energy prices, Trade, Tourism, </li>
                    <li>4.  The ongoing conflict between Ukraine and Russia has had several impacts on the world economy. There are some possible effects on Energy prices, Trade, Tourism, </li>
                    <li>5.  The ongoing conflict between Ukraine and Russia has had several impacts on the world economy. There are some possible effects on Energy prices, Trade, Tourism, </li>
                </ul>
            </div> */}
        </div>
        <Footer />
    </>
}

export default Update