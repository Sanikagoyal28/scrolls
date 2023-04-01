import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"

function CA() {

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return <>
        <Navbar />
        <div className="FAQ">
            <p className="dashboard" id="Faqs">Campus Ambassador</p>
            <p className="answer">Campus ambassadors are the students who have the main and direct contact with the Scrolls Team and are the representation of our voice on their campus.
                As a campus ambassador, your main objective would be to raise awareness about the organization and to get students on board for the event. You will have the opportunity to represent our event on your campus and within your community, promoting our events, and engaging with the  students and faculty.
                It is a great learning juncture for you as it provides a glimpse of the corporate world and you'll learn about the working of organizations.

                Campus Ambassador with the maximum number of registrations will receive a letter of appreciation and other benefits.

                Grab the opportunity and avail the chance to become the campus ambassador and unlock the benefits that awaits you. Hurry Up and register now!!</p>
            <hr className="faqLine" />
        </div>
        <Footer />
    </>

}

export default CA