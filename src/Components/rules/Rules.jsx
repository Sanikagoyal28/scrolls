import Navbar from "../Navbar/navbar"
import "../FAQs/faq.css"
import Footer from "../footer/footer"
import { useEffect } from "react"

function Rules() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar />
        <div className="FAQ">
            <p className="dashboard" id="Faqs">Rules and Regulations</p>
            <p className="answer">1. The competition will be open to all the bonafide students of Engineering and Management Colleges with maximum of 3 and minimum of 2 authors per paper. </p>
            <hr className="faqLine" />
            <p className="answer">2. Synopsis of maximum 1000 words to be sent by the laid down date. Based on the synopsis, an expert committee will select the papers for the final paper presentation.</p>
            <hr className="faqLine" />
            <p className="answer">3. For presentation, a time slot of 7 minutes + 3 minutes (for Q&A) will be given to each team.</p>
            <hr className="faqLine" />
            <p className="answer">4. A soft copy of the final paper is to be sent before the designated date.</p>
            <hr className="faqLine" />
            <p className="answer">5. Teams may select any one topic from any domain.</p>
            <hr className="faqLine" />
            <p className="dashboard" id="Faqs">Paper Format</p>
            <ul>
                <li>Uniform page margins of  1” on all four sides</li>
                <li>Double column format </li>
                <li>Single line spacing</li>
                <li>Times New Roman font with 12 point size </li>
                <li>Paper length -  maximum 10 pages</li>
                <li>No page numbering to be used</li>
                <li>Title should be written in 18 Font size</li>
                <li>
                    Authors to include their name, college name, mobile number and email Id on the paper and synopsis, below the title and before abstract</li>
            </ul>
        </div>
        <Footer />
    </>

}

export default Rules