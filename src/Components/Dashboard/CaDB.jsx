
import Navbar from "../Navbar/navbar"



function CaDB() {
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
                    <p className="dbHead">Name</p>
                    <p className="dbText">This will be displayed on your Profile</p>
                </div>
                <div className="teamID_box">team id</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Referral Code</p>
                    <p className="dbText">Team size can't exceed more than 3 members</p>
                </div>
                <div className="teamID_box">team id</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Number of Referrals used</p>
                </div>
                <div className="teamID_box">team id</div>
            </div>

            <hr className="dbHR2" />
            </div>
            </>
}
export default CaDB