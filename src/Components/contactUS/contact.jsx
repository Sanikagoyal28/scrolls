
import Navbar from "../Navbar/navbar"
import ContactCard from "./Card2"
import "./contact.css"

function Contact () {
    return <>
     <Navbar />
    <div className="updates">
    <p className="dashboard">Contact Us</p>
    <p className="dbHead1">Folllowing are our contact details , feel free to contact us.</p>
    <hr className="dbHR1" />
    <ContactCard name="Sanika goyal" email="abcd@gmail.com" phone="12345657899" />
    
    </div>

    </>
}

export default Contact