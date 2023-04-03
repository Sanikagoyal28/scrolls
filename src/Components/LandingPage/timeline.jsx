
import "./timeline.css"
import image from "../Assets/tl.svg"

function Timeline() {
    return <>
        <div className="timeline">
            <div className="tl_group2">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head">Registrations Closes On</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" />
                </div>
                <p className="tl_Text">
                    15th April
                </p>
            </div>

            <div className="tl_group2">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head">Synopsis Submission Closes</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" />
                </div>
                <p className="tl_Text">
                    17th April
                </p>
            </div>

            <div className="tl_group2">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head">Notifications of Acceptance</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" />
                </div>
                <p className="tl_Text">
                    24th April
                </p>
            </div>

            <div className="tl_group2">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head">Submission of Final Paper</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" />
                </div>
                <p className="tl_Text">
                    2nd May
                </p>
            </div>

            <div className="tl_group2">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head">Main Event</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" />
                </div>
                <p className="tl_Text">
                    5th May
                </p>
            </div>

        </div>
    </>
}

export default Timeline