import "./404.css"
import errImg from "../Assets/404.svg"
import Navbar from "../Navbar/navbar"
import Footer from "../footer/footer"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Error() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return <>
        <Navbar />
        <div id="error">
            <img src={errImg} id="errorImage" />
            {/* <p className='error'>Error 404</p> */}
            <p className='errorHead'>Page Not Found</p>
            <p className="errorText">The page you are looking for doesn't exist.<br />Please head over to <Link to="/">HOME PAGE</Link> to choose a new direction</p>
        </div>
        <Footer />
    </>
}

export default Error