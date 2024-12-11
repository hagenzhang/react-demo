import { CiNoWaitingSign } from "react-icons/ci";
import * as db from "../../Database";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as quizClient from "./client";
import * as coursesClient from "../client";
import { Link } from "react-router-dom";


export default function DetailEditor() {
    const { cid, qid } = useParams();
    const quizzes = useSelector(
        (state: any) => state.quizzesReducer.quizzes
    );
    const navigate = useNavigate();

    const quiz = quizzes.find((quiz: any) => quiz._id == qid) || {
        title: "",
        points: 0,
        course: cid,
        _id: new Date().getTime().toString(),
    }
    const [selectedQuiz, setSelectedQuiz] = useState(quiz);
    const isEdit = quizzes.findIndex((q: any) => q._id === qid) !== -1;

    // everytime using async pair up with await
    const handleSave = async () => {
        if (isEdit) {
            await quizClient.updateQuiz(selectedQuiz);
        } else {
            await coursesClient.createQuiz(cid || "", selectedQuiz);
        }
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    }

    return (
        <div>

            <div>
                <h5 className="published float-end">
                    <CiNoWaitingSign /> Not Published
                </h5>
                <h5 className="points float-end" style={{ marginLeft: '150px' }}>
                    Points: 0
                </h5>
            </div>


            {/* input for the assignment name */}
            <div>
                <input type="text" className="padding form-control form-control-md"
                    id="wd-name" placeholder="Quiz Name" value={selectedQuiz.title}
                    onChange={(e) => setSelectedQuiz({ ...selectedQuiz, title: e.target.value })} /> <br />
                <div className="mb-3">
                    <textarea id="wd-description" cols={150} rows={3} placeholder="Quiz Description" />
                </div>

                <table id="editor-table">
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Quiz Type</label>
                        </td>
                        <td>
                            <select name="wd-group" className="padding" id="wd-group">
                                <option value="Graded" selected>Graded Quiz</option>
                                <option value="Practice">Practice Quiz</option>
                                <option value="Graded-survey">Graded Survey</option>
                                <option value="Ungraded-survey">Ungraded Survey</option>
                            </select>
                        </td>
                    </tr><br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select name="wd-group" className="padding" id="wd-group">
                                <option value="Graded" selected>Quizzes</option>
                                <option value="Practice">Exams</option>
                                <option value="Graded-survey">Assignments</option>
                                <option value="Ungraded-survey">Project</option>
                            </select>
                        </td>
                    </tr><br />

                    {/* options */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-options-to">Options</label>
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <tr>
                                <td align="right" valign="top">
                                    <label htmlFor="wd-shuffle-group">Shuffle Answers:</label>
                                </td>
                                <td>
                                    <input type="radio" id="yes" name="wd-shuffle-group" value="Yes" checked />
                                    <label htmlFor="yes">Yes</label>

                                    <input type="radio" id="no" name="wd-shuffle-group" value="No" />
                                    <label htmlFor="no">No</label>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td align="right" valign="top">
                                    <label htmlFor="wd-attemptes-group">Multiple Attempts:</label>
                                </td>
                                <td>
                                    <input type="radio" id="yes" name="wd-attemptes-group" value="Yes" />
                                    <label htmlFor="yes">Yes</label>

                                    <input type="radio" id="no" name="wd-attemptes-group" value="No" checked />
                                    <label htmlFor="no">No</label>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td align="right" valign="top">
                                    <label htmlFor="wd-one-group">One Question at a Time:</label>
                                </td>
                                <td>
                                    <input type="radio" id="yes" name="wd-one-group" value="Yes" checked />
                                    <label htmlFor="yes">Yes</label>

                                    <input type="radio" id="no" name="wd-one-group" value="No" />
                                    <label htmlFor="no">No</label>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td align="right" valign="top">
                                    <label htmlFor="wd-web-group">Webcam Required:</label>
                                </td>
                                <td>
                                    <input type="radio" id="yes" name="wd-web-group" value="Yes" />
                                    <label htmlFor="yes">Yes</label>

                                    <input type="radio" id="no" name="wd-web-group" value="No" checked />
                                    <label htmlFor="no">No</label>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td align="right" valign="top">
                                    <label htmlFor="wd-lock-group">Lock Questions After Answering:</label>
                                </td>
                                <td>
                                    <input type="radio" id="yes" name="wd-lock-group" value="Yes" />
                                    <label htmlFor="yes">Yes</label>

                                    <input type="radio" id="no" name="wd-lock-group" value="No" checked />
                                    <label htmlFor="no">No</label>
                                </td>
                            </tr>
                        </td>
                    </tr>
                    <br />

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign</label>
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            Due<br />
                            <div className="input-group">
                                <input type="date" className="padding" />
                                <span className="input-group-text"></span>
                            </div>
                            <br /><br />
                            <table>
                                <tr>
                                    <td align="left">
                                        Available from<br />
                                        <div className="input-group">
                                            <input type="date" className="padding" />
                                            <span className="input-group-text"></span>
                                        </div>
                                    </td>
                                    <td>
                                        Until<br />
                                        <div className="input-group">
                                            <input type="date" className="padding" />
                                            <span className="input-group-text"></span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <hr />
            <button className="bottom-buttons float-end btn btn-danger" id="save-bt" onClick={handleSave}>Save</button>
            <button className="bottom-buttons float-end btn btn-success" id="cancel-bt">Save and Publish</button>
            <Link to={`/Kanbas/Courses/${selectedQuiz.course}/Quizzes`} className={`list-group-item list-group-item-action text-danger border-0'`}>
                <button className="bottom-buttons float-end btn btn-secondary" id="cancel-bt">Cancel</button>
            </Link>
        </div>
    );
}