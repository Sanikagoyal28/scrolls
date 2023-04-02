import "./404.css"
import errImg from "../Assets/404.svg"

function Error() {
    return <>
    <div id="error">
        <img src={errImg} id="errorImage" />
        {/* <p className='error'>Error 404</p> */}
        <p className='errorHead'>Page Not Found</p>
        </div>
    </>
}

export default Error