import "./result.css"
import Table from 'react-bootstrap/Table';

function TableComp(props) {
    return <>
        <div className="resDiv">
            <p className="resHead">{props.name}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th className="namee">College Name</th>
                        <th>Domain (Topic)</th>
                        <th>Member's Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="resTableRow">
                        <td>Tbfjdbhjcjs</td>
                        <td>Team Namcbhddddde</td>
                        <td className="namee" >College Nasddddddddddddddddddddddme</td>
                        <td>Domaindddddddddddddddddddddddddddddddddddd (Topiddddddddddddddddddddddddddddddddddddddc)</td>
                        <td ><ul>
                            <li>Aman Signhg</li>
                            <li>fjdsfbh ssssssssssssssssssssskm</li>
                        </ul></td>
                    </tr>
                </tbody>
            </Table>
            {/* <table className="resTable">
                <tr className="resTableRow">
                    <td>Team ID</td>
                    <td>Team Name</td>
                    <td>College Name</td>
                    <td>Domain (Topic)</td>
                    <td>Member's Name</td>
                </tr>

                <tr className="resTableRow" id="tableRow">
                    <td>Tbfjdbhjcjs</td>
                    <td>Team Namcbhddddde</td>
                    <td>College Nasddddddddddddddddddddddme</td>
                    <td>Domaindddddddddddddddddddddddddddddddddddd (Topiddddddddddddddddddddddddddddddddddddddc)</td>
                    <td><ul>
                        <li>Aman Signhg</li>
                        <li>fjdsfbh ssssssssssssssssssssskm</li>
                    </ul></td>
                </tr>
                {/* {(teams != undefined && teams.length > 0) ? teams.map((t) => {
                        return <>
                            <tr className="team_box_data" cellSpacing="5">
                                <td>Sanikaaaaaaa</td>
                                <td>{t.leader}</td>
                            </tr>
                        </>
                    }) : null} 
            </table> */}
        </div>
    </>
}

export default TableComp;