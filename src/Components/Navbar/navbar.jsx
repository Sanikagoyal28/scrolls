import menu from "../Assets/menu.svg"
import cross from "../Assets/navCross.svg"

function Navbar() {


    function showmenu() {
        document.getElementById('uli').style.width = "60vw";
    }

    function close() {
        document.getElementById('uli').style.width = 0;
    }


    return <>
        <div id='uli'>
            <img src={cross} id='crossimg' onClick={close}></img>
            <ul>
                <li>Home</li>
                <li>Domains</li>
                <li>Previous Year</li>
                <li>Contacts</li>
                <li> <button className="liRegister" >Register</button></li>
                <li><button className="liLogin" >Login</button></li>
            </ul>
        </div>

        <div className="navbar">
            <p className="navScroll">Scrolls<span className="navDot">.</span></p>
            <div className="navFlex1">
                <p className="navHead">Home</p>
                <p className="navHead">Domains</p>
                <p className="navHead">Previous Year</p>
                <p className="navHead">Updates</p>
                <p className="navHead">Contact Us</p>

            </div>
            <div className="navFlex2">
                <button className="navRegister" >Register</button>
                <button className="navLogin" >Login</button>
                <img src={menu} id="menu" onClick={showmenu}></img>
            </div>

        </div>
    </>
}

export default Navbar