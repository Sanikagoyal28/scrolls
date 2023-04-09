
import "./timeline.css"
import image from "../Assets/tl.svg"

function Timeline() {
    return <>
        <div className="tl_timeline">
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

            <div className="tl_group2" id="tl_rotated_group">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head tl_rotated_text">Synopsis Submission Closes</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" className="tl_image2" />
                </div>
                <p className="tl_Text tl_rotated_text">
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

            <div className="tl_group2" id="tl_rotated_group">
                <div id="tl_group3">
                    <div className="tl_group1">
                        <p className="tl_Head tl_rotated_text">Submission of Final Paper</p>
                        <div id="tl_circle1" />
                        <hr id="tl_line1" />
                        <div id="tl_circle2" />
                        <hr id="tl_line2" />
                    </div>
                    <img src={image} id="tl_image" />
                </div>
                <p className="tl_Text tl_rotated_text">
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
        <hr id="linee" />
    </>
}

export default Timeline