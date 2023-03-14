import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { dialog0, dialog7 } from "../../Redux/step"

function Login1 () {

    const dispatch = useDispatch()

return <>
     <div className="register" id="regDiv">
                <div className="regFlex">
                    <img className="arrow" src={arrow} />
                    <p className="heading" id="registerAs">Login as</p>
                    <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
                </div>
                <button className="asRegister" id="regMember" onClick={() => { dispatch( dialog7() ) }} >Team</button>
                <button className="asRegister" onClick={() => { dispatch( dialog7() ) }} >Campus Ambassador</button>
            </div>
</>
}

export default Login1