import "./Navbar.css"

function Navbar (){
    return <>
    <div className="navbar">
        <p className="navScroll">Scrolls<span className="navDot">.</span></p>
        <div className="navFlex1">
        <p className="navHead">Home</p>
        <p className="navHead">Domains</p>
        <p className="navHead">Previous Year</p>
        <p className="navHead">Contact Us</p>
        </div>
        <div className="navFlex2">
        <button className="navRegister">Register</button>
        <button className="navLogin">Login</button>
        </div>
        <p className="navFaq">FAQs</p>
    </div>
    </>
}

export default Navbar