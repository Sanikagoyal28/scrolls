import Navbar from "../Navbar/navbar"
import './timeLine.css'
import timeline from "../Assets/timeline.svg"
import mobTimeline from "../Assets/mob_timeline.svg"

function TimeLine () {
    return <div>
    <div>
    <img src={timeline} className="timeline" />
    <img src={mobTimeline} className="mob_timeline" />
    </div>
    </div>
}

export default TimeLine;