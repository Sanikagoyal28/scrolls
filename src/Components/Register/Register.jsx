import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { dialog0, dialog2, dialog3, dialog4 } from "../../Redux/step"

function Register() {

    const dispatch = useDispatch()

    return <>
        <div className="register" id="regDiv">
            <div className="regFlex">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog0()) }}/>
                <p className="heading" id="registerAs">Register as</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <button className="asRegister" id="regMember" onClick={() => { dispatch(dialog2()) }} >Member</button>
            <button className="asRegister" onClick={() => { dispatch(dialog3()) }} >Team</button>
            {/* <button className="asRegister" id="CA" onClick={() => { dispatch(dialog4()) }} >Campus Ambassador</button> */}
        </div>
    </>
}

export default Register