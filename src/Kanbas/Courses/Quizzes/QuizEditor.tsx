import { useState, useEffect } from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { useLocation, useParams } from "react-router";
import * as client from "./client";
import { Link } from "react-router-dom";

/*
This screen is going to show up for both editing an individual quiz
and for creating a brand new quiz.

TODO: creating a brand new quiz doesn't work
TODO: add question creation / editing flow for this screen.
TODO: formatting
*/

/*
    {
        DONE title: "Default Quiz",
        DONE description: "A Very Default Description Here",
        DONE course: "RS101",
        DONE quizType: quizType.GRADED,
        points: 100,
        DONE assignmentGroup: quizGroup.QUIZZES,
        DONE shuffleAnswers: true,
        timeLimitMin: 20,
        maxAttempts: 1, // no multiple attempts boolean, just set this value
        showCorrectAnswers: true,
        accessCode: "",
        oneQuestionAtATime: true, // one question at a time
        webcamRequired: false,
        lockQuestionAfterAns: false,
        dueDate: "2025-05-15T23:59",
        availableDate: "2024-05-15T00:00",
        closeDate: "2025-05-16T23:59", // until date equivalent
        published: true,
    },

*/

const defaultQuizOptions = {
    shuffleAnswers: true,
    showCorrectAnswers: true,
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionAfterAns: false,
    published: false,
}

export default function QuizEditor() {
    const { cid, qid } = useParams();

    const [currentQuiz, setCurrentQuiz] = useState<any>(defaultQuizOptions);

    const [totalPoints, setTotalPoints] = useState(0);

    const isEdit = qid && true; // isEdit = true if qid is defined, else is false (new quiz)

    const handleSave = async () => {
        if (isEdit) {
            await client.updateQuiz(qid!, currentQuiz);
        } else {
            // ensure the course is set for a new quiz
            setCurrentQuiz({ ...currentQuiz, course: cid })
            await client.createQuiz(currentQuiz);
        }
    }

    // Fetch quiz details if editing
    useEffect(() => {
        if (isEdit) {
            console.log("We are editing a quiz, not creating a new one!")
            try {
                const setQuiz = async () => {
                    const data: any = await client.getQuiz(qid!)
                    setCurrentQuiz(data.data);

                    console.log("Details Fetched!")
                    console.log("data: ", data.data)
                };
                setQuiz();
            } catch (err) {
                console.error(err);
            }
        } else {
            console.log("We are creating a new quiz!")
        }
    }, [qid, isEdit]);

    return (
        <div>
            <div id="wd-quiz-editor">
                <form className="p-4">
                    {/* Quiz name */}
                    <input type="text" className="padding form-control form-control-md"
                        id="wd-quiz-name" placeholder="Quiz Name" value={currentQuiz.title}
                        onChange={(e) => setCurrentQuiz({ ...currentQuiz, title: e.target.value })} />

                    {/* Quiz description */}
                    <textarea id="wd-quiz-description" className="padding form-control form-control-md" cols={150} rows={3} value={currentQuiz.description}
                        placeholder="Quiz Description"
                        onChange={(e) => setCurrentQuiz({ ...currentQuiz, description: e.target.value })} />

                    {/* Form */}
                    <div className="quiz-details-content-cols">
                        <div id="quiz-editor-left">
                            <span className="quiz-detail-category">Quiz Type</span>
                            <span className="quiz-detail-category">Assignment Group</span>
                            <br />
                            <span className="quiz-detail-category" id="shift-assign">Assign</span>
                        </div>

                        <div id="quiz-editor-right">
                            <select name="wd-group" id="wd-group" style={{ width: '200px' }}
                                onChange={(e) => setCurrentQuiz({ ...currentQuiz, quizType: e.target.value })}>
                                <option value="GRADED" selected>Graded Quiz</option>
                                <option value="PRACTICE">Practice Quiz</option>
                                <option value="GRADEDSURVEY">Graded Survey</option>
                                <option value="UNGRADEDSURVEY">Ungraded Survey</option>
                            </select>

                            <select name="wd-group" style={{ width: '200px' }} id="wd-group"
                                onChange={(e) => setCurrentQuiz({ ...currentQuiz, quizGroup: e.target.value })}>
                                <option value="QUIZZES" selected>Quizzes</option>
                                <option value="EXAMS">Exams</option>
                                <option value="ASSIGNMENTS">Assignments</option>
                                <option value="PROJECTS">Projects</option>
                            </select>

                            <div>
                                <span className="quiz-detail-category" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Options</span>
                                <td>
                                    <tr>
                                        <td align="right" valign="top">
                                            <label htmlFor="wd-shuffle-group">Shuffle Answers:</label>
                                        </td>
                                        <td>
                                            <input type="radio" id="yes" name="wd-shuffle-group" checked={currentQuiz.shuffleAnswers}
                                                onChange={(e) => setCurrentQuiz({ ...currentQuiz, shuffleAnswers: true })} />
                                            <label htmlFor="yes">Yes </label>

                                            <input type="radio" id="no" name="wd-shuffle-group" checked={!currentQuiz.shuffleAnswers}
                                                onChange={(e) => setCurrentQuiz({ ...currentQuiz, shuffleAnswers: false })} />
                                            <label htmlFor="no">No</label>
                                        </td>
                                    </tr>
                                    <br />

                                    <tr>
                                        <td align="right" valign="top">
                                            <label htmlFor="wd-one-group">One Question at a Time:</label>
                                        </td>
                                        <td>
                                            <input type="radio" id="yes" name="wd-one-group" checked={currentQuiz.oneQuestionAtATime}
                                                onChange={(e) => setCurrentQuiz({ ...currentQuiz, oneQuestionAtATime: true })} />
                                            <label htmlFor="yes">Yes</label>

                                            <input type="radio" id="no" name="wd-one-group" checked={!currentQuiz.oneQuestionAtATime}
                                                onChange={(e) => setCurrentQuiz({ ...currentQuiz, oneQuestionAtATime: false })} />
                                            <label htmlFor="no">No</label>
                                        </td>
                                    </tr>
                                    <br />

                                    <tr>
                                        <td align="right" valign="top">
                                            <label htmlFor="wd-show-group">Show Solutions Post-Submission:</label>
                                        </td>
                                        <td>
                                            <input type="radio" id="yes" name="wd-show-group" checked={currentQuiz.showCorrectAnswers}
                                                onChange={() => setCurrentQuiz({ ...currentQuiz, showCorrectAnswers: true })} />
                                            <label htmlFor="yes">Yes</label>

                                            <input type="radio" id="no" name="wd-show-group" checked={!currentQuiz.showCorrectAnswers}
                                                onChange={() => setCurrentQuiz({ ...currentQuiz, showCorrectAnswers: false })} />
                                            <label htmlFor="no">No</label>
                                        </td>
                                    </tr>
                                    <br />

                                    <tr>
                                        <td align="right" valign="top">
                                            <label htmlFor="wd-web-group">Webcam Required:</label>
                                        </td>
                                        <td>
                                            <input type="radio" id="yes" name="wd-web-group" checked={currentQuiz.webcamRequired}
                                                onChange={() => setCurrentQuiz({ ...currentQuiz, webcamRequired: true })} />
                                            <label htmlFor="yes">Yes</label>

                                            <input type="radio" id="no" name="wd-web-group" checked={!currentQuiz.webcamRequired}
                                                onChange={() => setCurrentQuiz({ ...currentQuiz, webcamRequired: false })} />
                                            <label htmlFor="no">No</label>
                                        </td>
                                    </tr>
                                    <br />

                                    <tr>
                                        <td align="right" valign="top">
                                            <label htmlFor="wd-web-group">Lock Questions After Answering:</label>
                                        </td>
                                        <td>
                                            <input type="radio" id="yes" name="wd-web-group" checked={currentQuiz.lockQuestionAfterAns}
                                                onChange={() => setCurrentQuiz({ ...currentQuiz, lockQuestionAfterAns: true })} />
                                            <label htmlFor="yes">Yes</label>

                                            <input type="radio" id="no" name="wd-web-group" checked={!currentQuiz.lockQuestionAfterAns}
                                                onChange={() => setCurrentQuiz({ ...currentQuiz, lockQuestionAfterAns: false })} />
                                            <label htmlFor="no">No</label>
                                        </td>
                                    </tr>
                                </td>
                            </div>

                            <td style={{ border: '1px solid gray', padding: '10px', borderRadius: '5px' }}>
                                Due<br />
                                <div className="input-group">
                                    <input type="date" style={{ padding: '5px', borderRadius: '5px' }} />
                                    {/* <span className="input-group-text"></span> */}
                                </div><br />
                                <table>
                                    <tr>
                                        <td align="left" style={{ marginRight: '10px' }}>
                                            Available from<br />
                                            <div className="input-group">
                                                <input type="date" style={{ padding: '5px', borderRadius: '5px' }} />
                                                {/* <span className="input-group-text"></span> */}
                                            </div>
                                        </td>

                                        <td>
                                            Until<br />
                                            <div className="input-group">
                                                <input type="date" style={{ padding: '5px', borderRadius: '5px' }} />
                                                {/* <span className="input-group-text"></span> */}
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </div>
                    </div>
                </form>
            </div>

            <hr />

            <Link to={`/Kanbas/Courses/${cid}/Quizzes`}>
                <button className="bottom-buttons float-end btn btn-danger" id="save-bt" onClick={handleSave}>Save</button>
            </Link>

            <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className={`list-group-item list-group-item-action text-danger border-0'`}>
                <button className="bottom-buttons float-end btn btn-secondary" id="cancel-bt">Cancel</button>
            </Link>
        </div>
    );
}