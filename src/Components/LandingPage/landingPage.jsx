import landImage from "../Assets/scroll_bg.svg"
import domainLogo from "../Assets/domainLogo.svg"
import discord from "../Assets/Discord.svg"
import twitter from "../Assets/Twitter.svg"
import instagram from "../Assets/Instagram.svg";
import facebook from "../Assets/Facebook.svg"
import linkedin from "../Assets/linkedIn.svg"
import sendIcon from "../Assets/letter_send.svg"
import SI from "../Assets/SI_logo.svg"
import Navbar from "../Navbar/Navbar"
import "./landingPage.css"

function LandingPage() {
    return <>
        <Navbar />
        <div className="landingPage">
            <div className="landBlock1">
                <div id="loginBg">
                    <img src={landImage} className="landImage" />
                </div>
                <div className="landFlex">
                    <p className="landText1">
                        Lorem ipsum dolor sit amet,
                    </p>
                    <p className="landText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo. Pellentesque nec porta erat. Donec venenatis massa
                    </p>
                    <button className="landRegister">Register Now</button>
                </div>
            </div>
            <div className="landAbout">
                <div id="text1Border">
                    <p className="aboutScroll">About Scrolls</p>
                </div>
                <p className="aboutHead">
                    “Reasons will take you from A to B but imagination will take you everywhere.”
                    - Albert Einstein
                </p>
                <p className="aboutText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo. Pellentesque nec porta erat. Donec venenatis massa ligula, quis dictum turpis tempus vel. Mauris et mattis velit, et tempus justo. Suspendisse posuere magna sit amet molestie condimentum. Sed dapibus ac ligula vitae dignissim. Curabitur ac aliquet libero, pharetra dapibus ante. Vestibulum varius vehicula tristique.
                    In diam ligula, egestas eu sollicitudin tristique, convallis quis quam. Vestibulum cursus elementum quam, vitae faucibus nibh bibendum eget. Fusce volutpat urna ut convallis convallis. Donec pharetra, ligula et ultrices dapibus, odio risus dignissim ipsum, vel blandit nisi sapien et dui. In hac habitasse platea dictumst. Nullam in semper leo. Proin porta, risus sit amet consectetur ultrices, velit est volutpat lectus, in condimentum erat dui in ex. Aenean hendrerit velit quam, nec ullamcorper nisi commodo nec. Quisque cursus commodo sem nec fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nulla in vehicula magna. Etiam interdum pretium neque, vitae scelerisque eros bibendum at. Nunc pulvinar egestas lorem ac porta. Nullam arcu eros, vulputate eget sapien quis, viverra posuere nibh. Phasellus sit amet libero dapibus, tincidunt leo sit amet, blandit nisi. Proin facilisis pharetra tempus. Morbi tempor tellus vitae diam vehicula maximus. Aliquam nulla augue, suscipit sit amet elit sed, bibendum finibus velit. Pellentesque ac nibh ut ante suscipit viverra.
                </p>
            </div>
            <div className="landDomain">
            <div id="domainBorder">
                <p className="aboutScroll">Domains</p>
                </div>
                <div className="domainCards">
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Mechanical</p>
                    </div>
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Mechanical</p>
                    </div>
                    <div className="domainCard1">
                        <img src={domainLogo} className="domainLogo1" />
                        <p className="domainText1">Mechanical</p>
                    </div>
                    <div className="domainCard2">
                        <img src={domainLogo} className="domainLogo2" />
                        <p className="domainText2">Mechanical</p>
                    </div>
                </div>
            </div>
            <div className="landTimeline">
            <div id="timelineBorder">
                <p className="aboutScroll" id="timelineHeading">Timeline</p>
                </div>
                <div className="group">
                <div className="group">
                    <div className="timeline">
                        <div id="circle1" />
                        <hr id="line1" />
                        <div id="circle2" />
                        <hr id="line2" />
                        <hr id="line3" />
                        <div id="circle3" />
                    </div>
                    <p className="timelineText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                    </p>
                </div>
                <div className="group" id="rotatedGroup">
                    <div className="timeline">
                        <div id="circle1" />
                        <hr id="line1" />
                        <div id="circle2" />
                        <hr id="line2" />
                        <hr id="line3" />
                        <div id="circle3" />
                    </div>
                    <p className="timelineText" id="rotatedText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                    </p>
                </div>
                <div className="group">
                    <div className="timeline">
                        <div id="circle1" />
                        <hr id="line1" />
                        <div id="circle2" />
                        <hr id="line2" />
                        <hr id="line3" />
                        <div id="circle3" />
                    </div>
                    <p className="timelineText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                    </p>
                </div>
                <div className="group" id="rotatedGroup">
                    <div className="timeline">
                        <div id="circle1" />
                        <hr id="line1" />
                        <div id="circle2" />
                        <hr id="line2" />
                        <hr id="line3" />
                        <div id="circle3" />
                    </div>
                    <p className="timelineText" id="rotatedText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo.
                    </p>
                </div>
                </div>
              <hr className="timelineHR" />
            </div>
            <div className="landFooter">
                <p className="footHead">Contact Us</p>
                <div className="footIcons">
                    <div className="footIconFlex1">
                        <img src={twitter} className="footIcon" />
                        <img src={instagram} className="footIcon" />
                        <img src={discord} className="footIcon" />
                    </div>
                    <div className="footIconFlex2">
                        <img src={facebook} className="footIcon" />
                        <img src={linkedin} className="footIcon" />
                    </div>
                </div>
                <img src={sendIcon} className="footSendicon" />
                <p className="footText">Powered by <span id="siIcon" ><img src={SI} /></span><span id="software">SOFTWARE</span><span id="incubator">INCUBATOR</span></p>
            </div>
        </div>

    </>
}

export default LandingPage