import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"
import "./faq.css"

function FAQ() {

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return <>
        <Navbar />
        <div className="FAQ">
            <p className="dashboard" id="Faqs">FAQs</p>

            <p className="question">Ques 1. What is Scrolls?</p>
            <p className="answer">SCROLLS ( Student's Creative and Oratory Learning Skills) is an annually held National level technical paper presentation competition, inviting students to elaborate on the most thriving and progressive fields of technology and management.</p>
            <hr className="faqLine" />
            <p className="question">Ques 2. Who all can participate?</p>
            <p className="answer">As this is an Inter college competition anyone pursuing an Under Graduate or Post Graduate program in any technical or management domain from any college can participate in this competition.</p>
            <hr className="faqLine" />
            <p className="question">Ques 3. How many members can participate in a team ?</p>
            <p className="answer"> A minimum of 2(two) and maximum of 3(three) members can participate in a team.</p>
            <hr className="faqLine" />
            <p className="question">Ques 4. What are the prerequisite skills for this event?</p>
            <p className="answer">The event doesn't require any pre-requisite skill. It will be solely based upon your creativity and ingenuity to analyse the topic and write the technical paper on the same.</p>
            <hr className="faqLine" />
            <p className="question">Ques 5. What are the benefits of this event?</p>
            <p className="answer">This event provides rostrum to the evolving professionals who can channelize their talent, creativity and give their imagination a cutting edge.</p>
            <hr className="faqLine" />
            <p className="question">Ques 6. What is the purpose of this event ?</p>
            <p className="answer">The sole purpose of this event is to provide an opportunity for the students to gain an experience to widen the vision of creativity and innovation. This experience will be an aid for the participants who want to publish research papers in the near future.</p>
            <hr className="faqLine" />
            <p className="question">Ques 7. What will be the rewards and recognitions for the emerging winners?</p>
            <p className="answer">Total cash prizes worth 72K would be distributed for the winners and along with the certificate of participation for every participant in addition to many more perks.</p>
            <hr className="faqLine" />
            <p className="question">Ques 8. What are the steps?</p>
            <p className="answer">Step 1- Registration<br />
                Step 2- Disclosure of topics from every domain.<br />
                Step 3- Submission of the synopsis on any one of the topics.<br />
                Step 4- Based on the synopsis submitted, selected participants will present the technical paper on the day of the event( 5th May, 2023).<br />
                Step 5- Announcement of winners.<br /></p>
            <hr className="faqLine" />

        </div>
        <Footer />
    </>

}

export default FAQ