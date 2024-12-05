import { useParams } from "react-router";
import { CiNoWaitingSign } from "react-icons/ci";

export default function detailEditor() {
    //const { cid, qid } = useParams();
    return (
        <div>
            <h5 className="published float-end">
                <CiNoWaitingSign /> Not Published
            </h5>
            <h5 className="points float-end" style={{ marginLeft: '150px' }}>
                Points: 0
            </h5>

            {/* input for the assignment name */}
            <input type="text" className="padding form-control form-control-md"
                id="wd-name" defaultValue="Quiz Name" placeholder="Quiz Name" />
            <div className="mb-3"> <br />
            <textarea id="wd-description" cols={150} rows={3} placeholder="Quiz Description" />
            </div>

            <table id="editor-table">
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input className="padding" id="wd-points" value={100} />
                    </td>
                </tr><br />






                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select name="wd-group" className="padding" id="wd-group">
                            <option selected>Open this select menu</option>
                            <option value="Assignments">ASSIGNMENTS</option>
                            <option value="Quizzes">QUIZESS</option>
                            <option value="Exams">EXAMS</option>
                            <option value="Projects">PROJECTS</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display grade as</label>
                    </td>
                    <td>
                        <select name="wd-display-grade-as" className="padding" id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                            <option value="letter">Letter</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select name="wd-submission-type" className="padding" id="submission-type">
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                        </select>
                        <br /><br />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top"></td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                        <b>Online entry options</b>
                        <div>
                            <input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="text entry" />
                            <label className="padding" htmlFor="wd-text-entry"> Text Entry</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="wd-website-url" name="wd-website-url" value="website url" />
                            <label className="padding" htmlFor="wd-website-url"> Website URL</label> <br />
                        </div>
                        <div>
                            <input type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="media recordings" />
                            <label className="padding" htmlFor="wd-media-recordings"> Media Recordings</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="student annotation" />
                            <label className="padding" htmlFor="wd-student-annotation"> Student Annotation</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="wd-file-upload" name="wd-file-upload" value="file upload" />
                            <label className="padding" htmlFor="wd-file-upload"> File Upload</label><br />
                        </div>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                        <b>Assign to</b><br />
                        <input className="padding" type="text" id="wd-assign-to" value={"Everyone"} />
                        <br /><br />

                        Due<br />
                        <div className="input-group">
                            <input type="date" className="padding" />
                            <span className="input-group-text"></span>
                        </div>
                        {/* <input className="padding" type="date" id="wd-due-date" value="2024-05-13" /> */}
                        <br /><br />
                        <table>
                            <tr>
                                <td align="left">
                                    Available from<br />
                                    <div className="input-group">
                                        <input type="date" className="padding" />
                                        <span className="input-group-text"></span>
                                    </div>
                                    {/* <input className="padding" type="date" id="wd-available-from" value="2024-05-06" /> */}
                                </td>
                                <td>
                                    Until<br />
                                    <div className="input-group">
                                        <input type="date" className="padding" />
                                        <span className="input-group-text"></span>
                                    </div>
                                    {/* <input className="padding" type="date" id="wd-available-until" value="2024-05-20" /> */}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <button className="bottom-buttons float-end btn-danger" id="save-bt">Save</button>
            <button className="bottom-buttons float-end" id="cancel-bt">Cancel</button>
        </div>
    );
}