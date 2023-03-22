import Navbar from "../Navbar/navbar"
import "./faq.css"

function FAQ() {

    return <>
        <Navbar />
        <div className="FAQ">
            <p className="dashboard">FAQs</p>

            <p className="question">Ques 1. What responsibility does being a Campus Ambassador entail?</p>
            <p className="answer">A campus ambassador is the point of contact between the Scrolls Team and the college students.</p>
            <hr className="faqLine" />
            <p className="question">Ques 2. How can we become CA?</p>
            <p className="answer">Fill out the form and you will be shortlisted based on your answers.</p>
            <hr className="faqLine" />
            <p className="question">Ques 3. What benefits do we get as a CA?</p>
            <p className="answer"> As a CA, you get an opportunity to increase networking along with enhancing communication and providing timely information to the students on your campus. You become the face of students to convey their words.</p>
            <hr className="faqLine" />
            <p className="question">Ques 4. Does being a Campus Ambassador boost my Resume?</p>
            <p className="answer">Indeed, being a campus ambassador accentuates your communication skills,  general awareness, negotiation skills alongside helping you to grow your network.</p>
            <hr className="faqLine" />
        </div>
    </>

}

export default FAQ