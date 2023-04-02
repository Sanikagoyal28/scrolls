import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"
import "./domain.css"

function DomainManage() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar />
        <div className="Domain">
            <p className="domainHead">Management Sciences</p>
            <ul>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Effect of Ukraine - Russia war on world economy</p>
                        <p className="domainText">The ongoing conflict between Ukraine and Russia has had several impacts on the world economy. There are some possible effects on Energy prices, Trade, Tourism, Foreign investment. What are your views on the same?</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Budget 2023: Populism VS Tough Decisions</p>
                        <p className="domainText">The budget for 2023 will likely be a balancing act between populism and tough decisions, as governments around the world face the challenge of balancing the needs of their citizens with the realities of limited resources and uncertain economic conditions. On the one hand, governments may be tempted to pursue populist policies aimed at winning public support and boosting their electoral prospects. On the other hand, tough decisions may be necessary to address pressing issues such as rising debt levels, climate change, and the impact of the pandemic on public health and the economy. Give your views on the same.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Effect of Hindenburg Report: Financial terror in India</p>
                        <p className="domainText">The Hindenburg Research report, which was released in early 2021, focused on allegations of financial impropriety by the Indian conglomerate Adani Group. The report alleged that the group had engaged in a range of financial irregularities, including accounting manipulation, money laundering, and tax evasion. Nonetheless, the release of the report has raised concerns about corporate governance and financial transparency in India, which could have wider implications for the country's economy. Investors and analysts will be closely watching the situation to see how it develops and whether there are any broader implications for the Indian financial markets. Describe briefly.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Social media has eclipsed the real news</p>
                        <p className="domainText">The rise of social media has undoubtedly had a significant impact on the way people consume news and information. Social media platforms like Facebook, Twitter, and Instagram have become primary sources of news for many people, particularly younger generations. However, it is important to note that social media has not completely eclipsed "real news" or traditional news sources. How do you think social media has an impact on the way people consume news and information?</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Importance of learning from history for the growth of a nation</p>
                        <p className="domainText">Learning from history is essential for the growth and development of a nation. History provides a wealth of knowledge and experience that can be applied to current and future challenges, helping nations to make informed decisions, avoid past mistakes, and build on past successes. Give your views.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Money laundering has led to a parallel economy</p>
                        <p className="domainText">Money laundering, which is the process of concealing the origins of illegally obtained money, can have a range of negative consequences for economies and societies. Money laundering typically involves the transfer of funds through multiple accounts or jurisdictions, making it difficult to trace the origins of the money. Criminal organizations and individuals engaged in money laundering often use the proceeds to invest in legitimate businesses or assets, such as real estate or luxury goods, in order to disguise the illegal source of the funds. Describe briefly.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Artificial Intelligence taking over the creative field: A glimpse of a grim future?</p>
                        <p className="domainText">The idea of artificial intelligence (AI) taking over the creative field, including areas such as music, art, and literature, is a topic of much debate and speculation.  While AI has the potential to generate impressive and original works of art and music, it is important to consider the potential drawbacks, including the loss of human expression and the ethical questions raised by the ownership and attribution of AI-generated works. It is important to continue to explore the potential of AI in the creative field, while also maintaining a critical and thoughtful approach. Give your views on the same.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Business Intelligence: Alignment of IT and Business</p>
                        <p className="domainText">Business intelligence (BI) is a data-driven approach to business decision-making that involves the collection, analysis, and presentation of information to support strategic planning and operational decision-making. The alignment of IT and business is a critical aspect of successful BI implementation. Describe briefly.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">India emerging as an economic power in the new world order</p>
                        <p className="domainText">India has emerged as a major economic power in the new world order, with a rapidly growing economy and a large and increasingly affluent middle class. India's economy is the sixth-largest in the world by nominal GDP and the third-largest by purchasing power parity (PPP). India's emergence as an economic power in the new world order is a significant development, with important implications for global trade, investment, and geopolitical relations. While the country still faces a number of challenges, its growing economy and strategic location make it a key player in the emerging global landscape. Give your views on the same.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Banking policies to develop microfinance capabilities to support MSMEs and underprivileged</p>
                        <p className="domainText">Microfinance is a critical tool for supporting micro, small, and medium-sized enterprises (MSMEs) and underprivileged communities, who often lack access to traditional financial services. Developing banking policies that support microfinance capabilities is therefore an important step in promoting financial inclusion and supporting economic development. Describe briefly.</p>
                    </div>
                </li>
            </ul>
        </div>
        <Footer />
    </>
}

export default DomainManage