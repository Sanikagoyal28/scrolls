import Navbar from "../Navbar/navbar"
import UpdCard from "./card"
import "./update.css"

function Update () {
    return <>
    <Navbar />
    <div className="updates">
    <p className="dashboard">Updates</p>
    <p className="dbHead1">Details regarding new Events</p>
    <hr className="dbHR1" />
    <UpdCard text="New uvjvbchxjvvvvvvvgfhddddddffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvjjjjjjjjjkkkkskhaidhusapdate" head="New update" />
    <UpdCard text="New uvjvbchxjvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvjjjjjjjjjkkkkskhaidhusapdate" head="New update" />
    </div>

    </>
}

export default Update