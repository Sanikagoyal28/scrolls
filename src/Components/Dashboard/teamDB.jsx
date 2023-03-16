import Navbar from "../Navbar/navbar"
import "./teamDB.css"
import file from "../Assets/file.svg"

function TeamDB() {
    return <>
        <Navbar />
        <div className="dbOuterDiv">
            <p className="dashboard">Dashboard</p>
            <p className="dbHead1">Details regarding Team and Members</p>

            <hr className="dbHR1" />
            <div className="dbBtns">
                <button className="dbCancel" >Cancel</button>
                <button className="dbSave" >Save</button>
            </div>
            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Team ID</p>
                    <p className="dbText">This will be displayed on your Profile</p>
                </div>
                <div className="teamID_box">team id</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Team Size</p>
                    <p className="dbText">Team size can't exceed more than 3 members</p>
                </div>
                <div className="teamID_box">team id</div>
            </div>

            <hr className="dbHR2" />

            <p className="dbHead">Members</p>
            <div className="member_box">
                <p>Name</p>
                <p>Role</p>
                <p>Scroll ID</p>
            </div>
            <div className="member_box_data">
                <p>ALex</p>
                <p>Leader</p>
                <p>210000220</p>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Domain</p>
                    <p className="dbText">Select Team Domain</p>
                </div>
                <select className="teamID_box" >
                    <option id="option">--select--</option>
                    <option value="BE/BTech">Management Science</option>
                    <option value="MTech">Electronics and Communication Engineering</option>
                    <option value="MCA">Civil Engineering</option>
                    <option value="MBA">Electrical and Electronics Engineering</option>
                    <option id="other" value="others">Computer Science and Information Technology</option>
                    <option value="MBA">Mechanical Engineering</option>
                </select>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Topic</p>
                    <p className="dbText">Select Topic</p>
                </div>
                <select className="teamID_box" >
                    <option id="option">--select--</option>
                    <option value="BE/BTech">Management Science</option>
                    <option value="MTech">Electronics and Communication Engineering</option>
                    <option value="MCA">Civil Engineering</option>
                    <option value="MBA">Electrical and Electronics Engineering</option>
                    <option id="other" value="others">Computer Science and Information Technology</option>
                    <option value="MBA">Mechanical Engineering</option>
                </select>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Synopsis</p>
                    <p className="dbText">Note: You can upload the document only once. Please carefully recheck your document while uploading.</p>
                </div>
                <div className="file_box">
                    <label for="uploadFile"><img src={file} className="fileIcon" /></label>
                    <input type="file" id="uploadFile" accept="image/png, image/jpg, image/jpeg" hidden />
                    <p className="uploadText">Click to upload</p>
                </div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Paper</p>
                    <p className="dbText">Note: You can upload the document only once. Please carefully recheck your document while uploading.</p>
                </div>
                <div className="file_box">
                    <label for="uploadFile"><img src={file} className="fileIcon" /></label>
                    <input type="file" id="uploadFile" accept="image/png, image/jpg, image/jpeg" hidden />
                    <p className="uploadText">Click to upload</p>
                </div>
            </div>

            <hr className="dbHR2" />

        </div>
    </>
}

export default TeamDB