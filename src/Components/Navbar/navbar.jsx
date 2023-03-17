import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../Assets/menu.svg"
import cross from "../Assets/navCross.svg"

function Navbar() {


    function showmenu() {
        document.getElementById('uli').style.width = "60vw";
    }

    function close() {
        document.getElementById('uli').style.width = 0;
    }

    const [show, setShow] = useState(false)
    function handleDropdown(){
        setShow(!show)

        if(show){
            document.getElementById('dropdown').style.display = "flex";
        }
        else{
            document.getElementById('dropdown').style.display = "none";
        }
    }


    return <>
        <div id='uli'>
            <img src={cross} id='crossimg' onClick={close}></img>
            <ul>
                <li>Home</li>
                <li>Domains</li>
                <li>Previous Year</li>
                <li>Updates</li>
                <li>Contacts</li>
                <li> <button className="liRegister" >Register</button></li>
                <li><button className="liLogin" >Login</button></li>
            </ul>
        </div>

        <div id="dropdown">
            <ul>
                <li>Management Science</li>
                <li>Electronics and Communication Engineering</li>
                <li>Civil Engineering</li>
                <li>Electrical and Electronics Engineering</li>
                <li>Computer Science and Information Technology</li>
                <li>Mechanical Engineering</li>
            </ul>
        </div>

        <div className="navbar">
            <p className="navScroll">Scrolls<span className="navDot">.</span></p>
            <div className="navFlex1">

                <NavLink to="/"> <p className="navHead">Home</p></NavLink>
               <p className="navHead" onClick={handleDropdown}>Domains</p>
                <NavLink to="/previous_year"> <p className="navHead">Previous Year</p></NavLink>
                <NavLink to="/updates"> <p className="navHead">Updates</p></NavLink>
                <NavLink to="/"> <p className="navHead">Contact Us</p></NavLink>

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