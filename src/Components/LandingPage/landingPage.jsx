import landImage from "../../Assets/scroll_bg.svg"
import Navbar from "../Navbar/Navbar"
import "./landingPage.css"

function LandingPage() {
    return <>
        <Navbar />
        <div className="landingPage">
            <div className="landBlock1">
                <img src={landImage} className="landImage" />
                <div id="loginBg"/>
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
        </div>

    </>
}

export default LandingPage