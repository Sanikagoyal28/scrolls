import instagram from "../Assets/Instagram.svg";
import phone from "../Assets/phone.svg"
import horizon from "../Assets/horizon.svg";
import SI from "../Assets/SI_logo.svg"
import "../LandingPage/landingPage.css"
import { Link } from "react-router-dom";

function Footer() {
    return <>

        <div className="landFooter">
            <div id="footer">
                <div id="footFlex1">
                    <p className="footHead">Scrolls<span className="navDot">.</span></p>
                    <p className="footHead2">Any questions or remarks? Just write us a message.</p>
                    <p id="formLink"><a target="_blank" href="https://forms.gle/B35DF1KuWqkqocSKA">Google Form</a></p>
                </div>
                <div id="footFlex2">
                    <div id="footFlex2Row">
                        <img src={phone} id="phone" />
                        <p id="telephone">Contact</p>
                    </div>
                    <div className="footFlexRow">
                        <p>8433416286</p>
                        <p>(Rajat Agarwal)</p>
                    </div>
                    <div className="footFlexRow">
                        <p>7985670120</p>
                        <p>(Abhishek Pratap Singh)</p>
                    </div>
                    <div className="footFlexRow">
                        <p>7351407997</p>
                        <p>(Anushka Gautam)</p>
                    </div>
                </div>

                <div id="footFlex3">
                    <p id="telephone">Quick links</p>
                    <div className="footFlexRow">
                        <Link to="/faq"><p id="link">FAQs</p></Link>
                    </div>
                </div>

                <div id="footFlex4">
                    <p id="telephone">Find us</p>
                    <div className="footFlexRow">
                        <img src={instagram} id="instagram" />
                        <p id="link"><a href="https://instagram.com/scrolls_23?igshid=ZDdkNTZiNTM=" target="_blank"  >scrolls_akgec</a></p>
                    </div>
                    <div className="footFlexRow">
                        <img src={horizon} id="horizon" />
                        <p id="link"><a href="https://instagram.com/horizon.akgec?igshid=MGU3ZTQzNzY=" target="_blank" >Team Horizon</a></p>
                    </div>
                </div>
            </div>
            <p className="footText">Powered by <a href="https://www.instagram.com/software.incubator/" target="_blank"  >
            <span id="siIcon" ><img src={SI} /></span><span id="software">SOFTWARE</span><span id="incubator">INCUBATOR </span>
            </a> 
             & Managed by <a href="https://instagram.com/horizon.akgec?igshid=MGU3ZTQzNzY=" target="_blank" ><img src={horizon} id="horizon" />
            <span id="incubator"> TEAM </span>
            <span id="horizonText"> HORIZON</span></a></p>
        </div>
    </>
}

export default Footer
