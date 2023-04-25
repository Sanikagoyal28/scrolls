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
                    {props.data.length > 0 ? props.data.map((d) => {
                        return <>
                            <tr className="resTableRow">
                                <td>{d.team_id}</td>
                                <td>{d.name}</td>
                                <td className="namee" >{d.college}</td>
                                {/* {(d.domain === '' || d.domain === null || d.domain === undefined) && (d.topic === '' || d.topic === null || d.topic === undefined) ? null : */}
                                    <td>{d.domain } ({d.topic})</td>
                                {/* } */}
                                <td ><ul>
                                    <li>{d.leader_name}</li>
                                    <li>{d.member_2_name}</li>
                                    {(d.member_3_name != '' && d.member_3_name != null && d.member_3_name != undefined) ?
                                        <li>{d.member_3_name}</li>
                                        : null}
                                </ul></td>
                            </tr>
                        </>
                    })
                        : null}
                </tbody>
            </Table>
        </div>
    </>
}

export default TableComp;